import React from "react";
import { isEmpty } from "lodash";
import MovieCard from "./MovieCard";

interface Session {
  user: {
    name: string;
    email: string;
  };
  accessToken: string;
  expires: number;
}

interface MovieListProps {
  data: Record<string, any>[];
  title: string;
  session: Session | null;
}

const movieList: React.FC<MovieListProps> = ({ data, title, session }) => {
  return (
    <div className=" px-4 md:px-12 mt-4 space-y-8">
      <div>
        <p className="text-white text-md md:text-xl font-semibold">{title}</p>
      </div>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-2 ">
        {data.map((movie) => (
          <MovieCard
            key={movie.id}
            data={movie}
            id={movie.id}
            session={session}
          />
        ))}
      </div>
    </div>
  );
};

export default movieList;
