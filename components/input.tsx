import React from "react";
import { useState } from "react";

const Input = () => {
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [login, setLogin] = useState<boolean>(true);

  return (
    <div className=" mb-4 w-full flex flex-col gap-2">
      <div className="relative mt-2">
        <input
          type="text"
          className="block rounded-md px-4 pt-3.5 pb-2 w-full text-sm text-white  bg-neutral-700  appearance-none dark:text-white focus:outline-none focus:ring-0  peer"
          placeholder=" "
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label
          className="absolute text-sm text-zinc-400 duration-300 transform -translate-y-3 scale-75 top-2 z-10 origin-[0]
       left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
        >
          Username
        </label>
      </div>
      <div className="relative mt-2">
        <input
          type="text"
          className="block rounded-md px-4 pt-3.5 pb-2 w-full text-sm text-white  bg-neutral-700  appearance-none dark:text-white  focus:outline-none focus:ring-0  peer"
          placeholder=" "
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label
          className="absolute text-sm text-zinc-400 duration-300 transform -translate-y-3 scale-75 top-2 z-10 origin-[0]
       left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
        >
          Email
        </label>
      </div>
      <div className="relative mt-2">
        <input
          type="text"
          className="block rounded-md px-4 pt-3.5 pb-2 w-full text-sm text-white  bg-neutral-700  appearance-none dark:text-white  focus:outline-none focus:ring-0  peer"
          placeholder=" "
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label
          className="absolute text-sm text-zinc-400 duration-300 transform -translate-y-3 scale-75 top-2 z-10 origin-[0]
       left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
        >
          Password
        </label>
      </div>
      <button className="text-white items-center bg-red-600 w-full rounded-md mt-2 mb-2 py-2 mt-6 hover:bg-red-800">
        Login
      </button>
      <span>
        <p className="text-zinc-400 font-semibold inline-block pr-1.5">
          First time user?
        </p>
        <p
          className="text-white font-semibold inline-block hover:cursor-pointer underline"
          onClick={() => setLogin(false)}
        >
          Create an account!
        </p>
      </span>
    </div>
  );
};

export default Input;

// focus:outline-none focus:ring-0 rounded-lg
