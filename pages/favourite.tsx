import React, { useEffect } from "react";
import Sidebar from "@/components/sidebar";
import Topbar from "@/components/Topbar";
import { useState } from "react";
import { useRouter } from "next/router";
import { Movie, User } from "@prisma/client";
import MovieDetail from "@/components/MovieDetail";
import Pagination from "@/components/Pagination";
import serverAuth from "@/lib/serverAuth";
import { NextApiRequest, NextPageContext } from "next";
import axios from "axios";

export async function getServerSideProps(context: NextPageContext) {
  try {
    if (!context.req) {
      throw new Error("Request object not available.");
    }
    // Call the serverAuth function to retrieve the currentUser
    const { currentUser } = await serverAuth(context.req as NextApiRequest);
    return {
      props: {
        currentUser,
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination: "/", // Redirect to the login page, for example
        permanent: false,
      },
    };
  }
}

export default function Favourites({ currentUser }: { currentUser: User }) {
  const router = useRouter();
  const [partialSideBar, setPartialSideBar] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const updateMovies = async () => {
      const favouriteIds = currentUser.favouriteIds;
      const response = await axios.post("/api/findFour", {
        movieIds: favouriteIds,
      });
      const movieList: Movie[] = response.data;
      setMovies(movieList);
      console.log(movieList);
    };
    updateMovies();
  }, [currentUser]);

  return (
    <div className="flex flex-col md:flex-row w-screen ">
      <aside className="fixed top-0 h-screen hidden md:block">
        <Sidebar
          partialSideBar={partialSideBar}
          setPartialSideBar={setPartialSideBar}
        />
      </aside>
      <div className="sticky top-0  z-50 md:hidden transition duration-300 ease-in-out">
        <Topbar
          partialSideBar={partialSideBar}
          setPartialSideBar={setPartialSideBar}
        />
      </div>

      <main
        className={`relative h-screen flex-col w-full duration-300 py-4 px-6 ${
          partialSideBar ? "md:ml-64 " : "md:ml-16  "
        }  `}
      >
        <div className=" grid grid-cols-1 md:grid-cols-2 md:gap-3 gap-y-4">
          {movies?.map((movie: Movie) => (
            <MovieDetail key={movie.id} data={movie} />
          ))}
        </div>
      </main>
    </div>
  );
}
