import React, { useState, useEffect } from "react";
import useBillboard from "@/hooks/useBillboard";
import useMovieList from "@/hooks/useMovieList";

import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const Billboard = () => {
  const { data, error, isLoading } = useBillboard();
  const { data: movies = [] } = useMovieList();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showContent, setShowContent] = useState(true);
  useEffect(() => {
    setShowContent(true);
    const timer = setTimeout(() => {
      setShowContent(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const prevMovie = () => {
    const isFirstMovie = currentIndex === 0;
    const newIndex = isFirstMovie ? movies.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextMovie = () => {
    const isLastMovie = currentIndex === movies.length - 1;
    const newIndex = isLastMovie ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <div className="relative w-full h-1/2 md:h-5/6 flex-grow duration-500">
      <div className="w-full h-full transition duration-500 ease-in">
        <video
          className="object-cover h-full w-full brightness-[60%] "
          muted
          loop
          autoPlay
          poster={movies[currentIndex]?.thumbnailUrl}
          src={movies[currentIndex]?.videoUrl}
        ></video>
      </div>

      <div className=" z-30 absolute top-[40%] cursor-pointer left-5 text-2xl text-white -translate-x-0 translate-y-[50%] rounded-full p-2 bg-black/20 ">
        <BsChevronCompactLeft size={40} onClick={prevMovie} />
      </div>
      <div className="text-white absolute top-[40%] cursor-pointer -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20">
        <BsChevronCompactRight size={40} onClick={nextMovie} />
      </div>
      {showContent && (
        <div className="absolute top-[40%] md:top-[40%] ml-20 md:ml-20 ">
          <p className="text-white text-1xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl">
            {movies[currentIndex]?.title}
          </p>
          <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[80%] md:w[80%]">
            {movies[currentIndex]?.description}
          </p>
        </div>
      )}
    </div>
  );
};

export default Billboard;
// showinfo=0&autoplay=1&&mute=1&enablejsapi=1&controls=0&loop=1
