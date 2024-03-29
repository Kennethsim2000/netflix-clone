/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { BsHandThumbsUpFill } from "react-icons/bs";
import Popup from "./Popup";
import { Movie } from "@prisma/client";

interface MoviecardProps {
  data: Movie;
  id: string;
  setReview: (value: boolean) => void;
  setCurrentMovie: (movie: Movie) => void;
}

const MovieCard: React.FC<MoviecardProps> = ({
  data,
  id,
  setReview,
  setCurrentMovie,
}) => {
  const { data: session } = useSession();
  const [popup, setPopup] = useState<boolean>(false);
  const [content, setContent] = useState<string>("");

  const addFavourite = async () => {
    const response = await axios.post("/api/updateFavourite", {
      favouriteId: id,
      email: session?.user?.email,
    });
    if (response.status === 200) {
      setPopup(true);
      setContent("Movie successfully added");
      console.log("Added");
    } else if (response.status === 201) {
      setPopup(true);
      setContent("Movie already in favorites");
      console.log("already in favourites");
    }
  };
  return (
    <div className="group bg-zinc-900 col-span relative h-[12vw]">
      {popup ? <Popup content={content} setPopup={setPopup} /> : null}
      <img
        className="cursor-pointer object-cover transition duration shadow-xl rounded-md group-hover: opacity-90 sm: group-hover:opacity-0 delay-300 w-full h-[12vw]"
        src={data.thumbnailUrl}
        alt="thumbnail"
      />
      <div className="opacity-0 absolute top-0 transition duration-600 z-10 invisible sm:visible delay-300 w-full scale-0 group-hover:scale-110 group-hover:-translate-y-[6vw] group-hover:translate-x-[2vw] group-hover:opacity-100 ">
        <img
          className="cursor-pointer object-cover transition duration shadow-xl rounded-t-md w-full h-[12vw]"
          src={data.thumbnailUrl}
          alt="thumbnail"
        />
        <div className="z-10 bg-zinc-800 p-2 lg:p-4 absolute w-full transition shadow-md rounded-b-md">
          <div className="flex flex-row items-center gap-3 ">
            <div className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300">
              <BsFillPlayFill size={30} />
            </div>
            <div
              className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300"
              onClick={() => addFavourite()}
            >
              <BsHandThumbsUpFill size={25} />
            </div>
            <div
              className="cursor-pointer w-6 h-6 lg:w-20 lg:h-10 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300 font-bold"
              onClick={() => {
                setCurrentMovie(data);
                setReview(true);
              }}
            >
              Review
            </div>
          </div>
          <p className="text-green-400 font-semibold mt-4">
            New <span className="text-white">2023</span>
          </p>
          <div className="flex flex-row mt-4 gap-2 items-center">
            <p className="text-white text-[10px] lg:text-sm">{data.duration}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
