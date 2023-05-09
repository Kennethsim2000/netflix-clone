import React, { useCallback } from "react";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useSession, signIn, signOut } from "next-auth/react";
import axios from "axios";

const Input = () => {
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [login, setLogin] = useState<boolean>(true);

  const register = useCallback(async () => {
    try {
      console.log("username is " + username);
      console.log("email is " + email);
      console.log("password is " + password);
      await axios.post("/api/register", {
        email,
        username,
        password,
      });
    } catch (error) {
      console.log(error);
    }
  }, [email, username, password]);

  const loginFunction = useCallback(async () => {
    try {
      await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "/movies",
      });
    } catch (error) {
      console.log(error);
    }
  }, [email, password]);

  return (
    <div className=" mb-4 w-full flex flex-col gap-2">
      {login ? (
        <h2 className="text-white font-semibold text-3xl mb-4">Sign in</h2>
      ) : (
        <h2 className="text-white font-semibold text-3xl mb-4">
          Create an account
        </h2>
      )}
      {!login ? (
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
      ) : null}
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
      <button
        className="text-white items-center bg-red-600 w-full rounded-md mt-2 mb-2 py-2 mt-6 hover:bg-red-800"
        onClick={login ? loginFunction : register}
      >
        {login ? "Login" : "Signup"}
      </button>
      <div className="flex flex-row items-center gap-4  justify-center">
        <div className="bg-white rounded-full h-10 w-10 flex justify-center items-center cursor-pointer hover:opacity-80">
          <FcGoogle size={30} onClick={() => signIn("google")} />
        </div>
        <div className="bg-white rounded-full h-10 w-10 flex justify-center items-center cursor-pointer hover:opacity-80">
          <FaGithub size={30} />
        </div>
      </div>
      <span>
        <p className="text-zinc-400 font-semibold inline-block pr-1.5">
          {login ? "First time using netflix?" : "Already have an account?"}
        </p>
        <p
          className="text-white font-semibold inline-block hover:cursor-pointer underline"
          onClick={() => setLogin(!login)}
        >
          {login ? "Create an account" : "Login"}
        </p>
      </span>
    </div>
  );
};

export default Input;

// focus:outline-none focus:ring-0 rounded-lg
