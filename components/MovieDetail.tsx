/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Movie } from "@prisma/client";

interface MoviecardProps {
  data: Movie;
}

const MovieDetail: React.FC<MoviecardProps> = ({ data }) => {
  return (
    <div className="group bg-zinc-900 col-span relative w-full h-[20vw] py-4">
      <div className=" flex flex-row gap-3">
        <img
          className="cursor-pointer object-cover transition duration shadow-xl rounded-md  delay-300 w-56 h-[18vw]"
          src={data.thumbnailUrl}
          alt="thumbnail"
        />
        <div className="flex flex-col justify-between">
          <h2 className="text-white text-2xl font-bold">{data.title}</h2>
          <div className="text-white bg-red-700 h-[9vw] text-sm">
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
