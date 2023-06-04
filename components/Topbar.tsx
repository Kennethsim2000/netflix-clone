import React from "react";
import { BiHomeAlt2 } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { HiMenu } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";
import { TbLogout } from "react-icons/tb";
import { signOut } from "next-auth/react";

interface SidebarProps {
  partialSideBar: boolean;
  setPartialSideBar: (value: boolean) => void;
}

const Topbar = ({ partialSideBar, setPartialSideBar }: SidebarProps) => {
  return (
    <div
      className={`bg-gray-500  duration-300 w-screen sticky top-0
    `}
    >
      <div className=" bg-neutral-600  w-full transition duration-500 ease-in ">
        <div className="flex flex-row justify-between items-center pl-2.5  bg-neutral-500 py-3">
          <HiMenu
            className={`ml-3 text-white cursor-pointer `}
            size={20}
            onClick={() => setPartialSideBar(!partialSideBar)}
          />

          <a href="https://portfolio-kenneth-azure.vercel.app/">
            <span
              className={`self-center text-2xl font-semibold whitespace-nowrap text-red-600 origin-left duration-75 mr-4`}
            >
              Netflix
            </span>
          </a>
        </div>

        <ul
          className={`space-y-2 font-medium transition ease-in duration-300 origin-bottom  ${
            partialSideBar ? "hidden " : ""
          }  `}
        >
          <li>
            <Link
              href="/"
              className="flex items-center  py-3 px-2  text-white rounded-lg dark:text-white hover:bg-neutral-500 hover:text-black"
            >
              <BiHomeAlt2 className="ml-3" size={20} />
              <span className={`ml-3 text-xl  mr-2 `}>Home</span>
            </Link>

            <Link
              href="/favourite"
              className="flex items-center py-3 px-2   text-white rounded-lg  hover:bg-neutral-500 hover:text-black"
            >
              <BsBookmark className="ml-3" size={20} />
              <span className={`ml-3 text-xl mr-2 `}>Favourites</span>
            </Link>

            <Link
              href="/review"
              className="flex items-center  py-3 px-2   text-white rounded-lg  hover:bg-neutral-500 hover:text-black"
            >
              <AiOutlineStar className="ml-3" size={20} />
              <span className={`ml-3 text-xl mr-2  origin-left duration-300`}>
                Reviews
              </span>
            </Link>
            <Link
              href="/"
              className="flex items-center  py-3 px-2   text-white rounded-lg  hover:bg-neutral-500 hover:text-black"
              onClick={() =>
                signOut({
                  callbackUrl: "/",
                })
              }
            >
              <TbLogout className="ml-3" size={20} />
              <span className={`ml-3 text-xl mr-2  origin-left duration-300`}>
                Log Out
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Topbar;
