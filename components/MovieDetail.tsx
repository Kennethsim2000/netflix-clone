/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Movie } from "@prisma/client";

interface MoviecardProps {
  data: Movie;
}

const MovieDetail: React.FC<MoviecardProps> = ({ data }) => {
  return (
    <div className="group bg-zinc-900 col-span relative w-full md:w-160 py-4">
      <div className="flex flex-col md:flex-row gap-3">
        <img
          className="cursor-pointer object-cover transition duration shadow-xl rounded-md w-28 md:w-52 h-40 md:h-56"
          src={data.thumbnailUrl}
          alt="thumbnail"
        />
        <div className="flex flex-col justify-between flex-grow ">
          <h2 className="text-white text-lg md:text-xl font-bold">
            {data.title}
          </h2>
          <div className="text-white bg-red-700 md:h-28 text-sm py-2 overflow-hidden ">
            {data.description}
          </div>
          <p className="text-white mt-2">{data.duration}</p>
          <p className="text-white mt-2">{data.genre}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
