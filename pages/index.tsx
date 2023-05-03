import Sidebar from "@/components/sidebar";
import Billboard from "@/components/Billboard";
import { useState } from "react";
import MovieList from "@/components/movieList";
import useMovieList from "@/hooks/useMovieList";

export default function Home() {
  const [partialSideBar, setPartialSideBar] = useState<boolean>(true);
  const { data: movies = [] } = useMovieList();
  return (
    <div className="flex w-screen ">
      <aside className="fixed top-0 h-screen">
        <Sidebar
          partialSideBar={partialSideBar}
          setPartialSideBar={setPartialSideBar}
        />
      </aside>

      <main
        className={`h-screen flex-col w-full duration-300 ${
          partialSideBar ? "md:ml-64" : "md:ml-16"
        }  `}
      >
        <Billboard />
        <div className="pb-40">
          <MovieList title="Trending now" data={movies} />
        </div>
      </main>
    </div>
  );
}
