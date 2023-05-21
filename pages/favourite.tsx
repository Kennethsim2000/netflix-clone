import React from "react";
import Sidebar from "@/components/sidebar";
import Topbar from "@/components/Topbar";
import { useState } from "react";
import { useRouter } from "next/router";
import { Movie } from "@prisma/client";
import MovieDetail from "@/components/MovieDetail";
import useFindFourList from "@/hooks/useFindFourList";
import Pagination from "@/components/Pagination";

export default function Favourites() {
  const router = useRouter();
  const [partialSideBar, setPartialSideBar] = useState<boolean>(true);
  const { data: movies = [] }: { data: Movie[] | undefined } =
    useFindFourList();

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
        className={`relative h-screen flex-col w-full duration-300 py-4 px-6 ${
          partialSideBar ? "md:ml-64 " : "md:ml-16  "
        }  `}
      >
        <div className=" grid md:grid-cols-2 md:gap-3 gap-y-4">
          {movies.map((movie: Movie) => (
            // <div>hello</div>
            <MovieDetail key={movie.id} data={movie} />
          ))}
        </div>
        <Pagination />
      </main>
    </div>
  );
}
