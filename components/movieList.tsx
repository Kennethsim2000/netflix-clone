import React from "react";
import { isEmpty } from "lodash";
import MovieCard from "./MovieCard";

interface MovieListProps {
  data: Record<string, any>[];
  title: string;
}

const movieList: React.FC<MovieListProps> = ({ data, title }) => {
  return (
    <div className=" px-4 md:px-12 mt-4 space-y-8">
      <div>
        <p className="text-white text-md md:text-xl font-semibold">{title}</p>
      </div>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-2 ">
        {data.map((movie) => (
          // <div>hello</div>
          <MovieCard key={movie.id} data={movie} />
        ))}
      </div>
    </div>
  );
};

export default movieList;
