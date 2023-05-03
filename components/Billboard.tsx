import React from "react";
import useBillboard from "@/hooks/useBillboard";
import ghost from "/public/videos/ghost.mp4";

const Billboard = () => {
  const { data, error, isLoading } = useBillboard();

  return (
    <div className="w-full h-5/6 flex-grow">
      <video
        className="object-cover h-full w-full brightness-[60%]"
        muted
        loop
        autoPlay
        poster={data?.thumbnailUrl}
        src={data?.videoUrl}
      ></video>

      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16 ">
        <p className="text-white text-1xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl">
          {data?.title}
        </p>
        <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w[80%]">
          {data?.description}
        </p>
      </div>
    </div>
  );
};

export default Billboard;
// showinfo=0&autoplay=1&&mute=1&enablejsapi=1&controls=0&loop=1
