import React from "react";
import useBillboard from "@/hooks/useBillboard";
import ghost from "/public/videos/ghost.mp4";

const Billboard = () => {
  const { data, error, isLoading } = useBillboard();

  return (
    <div className="w-screen h-full">
      <div className="w-screen h-screen">
        <video
          className="object-cover h-full w-full brightness-[60%]"
          muted
          loop
          autoPlay
          poster={data?.thumbnailUrl}
          src="/videos/ghost.mp4"
        ></video>
      </div>

      <div className="absolute top-1/2 left-1/2">
        <button className="z-40 bg-white rounded px-3 py-3 ">Watch now</button>
      </div>
    </div>
  );
};

export default Billboard;
// showinfo=0&autoplay=1&&mute=1&enablejsapi=1&controls=0&loop=1
