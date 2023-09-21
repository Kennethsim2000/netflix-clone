import Sidebar from "@/components/sidebar";
import Topbar from "@/components/Topbar";
import Billboard from "@/components/Billboard";
import { useEffect, useState } from "react";
import MovieList from "@/components/movieList";
import ReviewModal from "@/components/ReviewModal";
import useMovieList from "@/hooks/useMovieList";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import { Movie } from "@prisma/client";
import { NextPageContext } from "next";
import axios from "axios";

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
  return {
    props: {},
  };
}

export default function Home() {
  const [partialSideBar, setPartialSideBar] = useState<boolean>(true);
  const [review, setReview] = useState<boolean>(false);
  const { data: movies = [] }: { data: Movie[] | undefined } = useMovieList();
  const { data: session } = useSession();

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
          <MovieList title="Trending now" data={movies} setReview={setReview} />
        </div>
        {review && <ReviewModal setReview={setReview} />}
      </main>
    </div>
  );
}
