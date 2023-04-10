import React from "react";
import Input from "../components/input";

const Auth = () => {
  return (
    <div className=" relative h-full w-full bg-[url('/images/auth.jpg')] bg-no-repeat bg-cover ">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <nav className="px-12 py-5 absolute left-16 md:left-2">
        <img src="/images/logo.png" alt="logo" className=" h-32 md:h-40 "></img>
      </nav>
      <div className="relative flex justify-center items-center h-full">
        <div className="bg-opacity-70 bg-black flex flex-col justify-center items-center px-8 pb-8 pt-4 w-50 h-50 md:w-96 md:h-88 ">
          <Input />
        </div>
      </div>
    </div>
  );
};

export default Auth;
