import Sidebar from "@/components/sidebar";
import Topbar from "@/components/Topbar";
import Billboard from "@/components/Billboard";
import { useEffect, useState } from "react";
import MovieList from "@/components/movieList";
import ReviewModal from "@/components/ReviewModal";
import useMovieList from "@/hooks/useMovieList";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import { Movie, User } from "@prisma/client";
import { NextApiRequest, NextPageContext } from "next";
import axios from "axios";
import serverAuth from "@/lib/serverAuth";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  const { currentUser } = await serverAuth(context.req as NextApiRequest);
  return {
    props: {
      currentUser,
    },
  };
}

export default function Home({ currentUser }: { currentUser: User }) {
  const [partialSideBar, setPartialSideBar] = useState<boolean>(true);
  const [review, setReview] = useState<boolean>(false);
  const { data: movies = [] }: { data: Movie[] | undefined } = useMovieList();
  const { data: session } = useSession();
  const [currentMovie, setCurrentMovie] = useState<Movie>();

  useEffect(() => {
    const updateUser = async () => {
      try {
        if (session?.user) {
          // Check if session.user is available
          const { email, name } = session.user;
          await axios.post("/api/findExist", {
            email: email,
            username: name,
          });
        }
      } catch (error) {
        console.log(error);
      }
    };
    updateUser();
  }, []);
  return (
    <div className="flex flex-col md:flex-row w-screen ">
      <aside className="fixed top-0 h-screen hidden md:block">
        <Sidebar
          partialSideBar={partialSideBar}
          setPartialSideBar={setPartialSideBar}
        />
      </aside>
      <div className="sticky top-0  md:hidden transition duration-300 ease-in-out">
        <Topbar
          partialSideBar={partialSideBar}
          setPartialSideBar={setPartialSideBar}
        />
      </div>

      <main
        className={`relative h-screen flex-col w-full duration-300 ${
          partialSideBar ? "md:ml-64 " : "md:ml-16  "
        }  `}
      >
        <Billboard />
        <div className="pb-40">
          <MovieList
            title="Trending now"
            data={movies}
            setReview={setReview}
            setCurrentMovie={setCurrentMovie}
          />
        </div>
        {review && currentMovie && (
          <ReviewModal
            setReview={setReview}
            currentMovie={currentMovie}
            currentUser={currentUser}
          />
        )}
      </main>
    </div>
  );
}
