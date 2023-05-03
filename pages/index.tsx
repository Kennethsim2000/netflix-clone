import Sidebar from "@/components/sidebar";
import Topbar from "@/components/Topbar";
import Billboard from "@/components/Billboard";
import { useState } from "react";
import MovieList from "@/components/movieList";
import useMovieList from "@/hooks/useMovieList";

export default function Home() {
  const [partialSideBar, setPartialSideBar] = useState<boolean>(true);
  const { data: movies = [] } = useMovieList();
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
          <MovieList title="Trending now" data={movies} />
        </div>
      </main>
    </div>
  );
}
