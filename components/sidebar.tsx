import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BiHomeAlt2 } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { HiMenu } from "react-icons/hi";
import { TbLogout } from "react-icons/tb";
import { signOut } from "next-auth/react";

interface SidebarProps {
  partialSideBar: boolean;
  setPartialSideBar: (value: boolean) => void;
}
const Sidebar = ({ partialSideBar, setPartialSideBar }: SidebarProps) => {
  return (
    <div
      className={`bg-gray-500  origin-left duration-300 h-full ${
        partialSideBar ? "md:w-64" : "md:w-16"
      } 
    `}
    >
      <div className=" bg-neutral-600 h-full ">
        <div className="flex flex-row items-center pl-2.5  mb-5 bg-neutral-500 py-3">
          <HiMenu
            className={`ml-3 text-white cursor-pointer `}
            size={20}
            onClick={() => setPartialSideBar(!partialSideBar)}
          />
          <Image
            src="/images/logo.png"
            width={50}
            height={50}
            alt="logo picture"
            className={`${partialSideBar ? "" : "hidden"}`}
          />
          <a href="https://portfolio-kenneth-azure.vercel.app/">
            <span
              className={`self-center text-4xl font-semibold whitespace-nowrap text-red-600 origin-left duration-75 ${
                partialSideBar ? " " : "hidden"
              }`}
            >
              Netflix
            </span>
          </a>
        </div>

        <ul className="space-y-2 font-medium ">
          <li>
            <Link
              href="/movie"
              className="flex items-center  py-3 px-2  text-white rounded-lg dark:text-white hover:bg-neutral-500 hover:text-black"
            >
              <BiHomeAlt2 className="ml-3" size={20} />
              <span
                className={`ml-3 text-xl  mr-2  ${
                  partialSideBar ? "pl-4" : "hidden"
                }`}
              >
                Home
              </span>
            </Link>

            <Link
              href="/favourite"
              className="flex items-center py-3 px-2   text-white rounded-lg  hover:bg-neutral-500 hover:text-black"
            >
              <BsBookmark className="ml-3" size={20} />
              <span
                className={`ml-3 text-xl mr-2  ${
                  partialSideBar ? "pl-4 " : "hidden"
                }`}
              >
                Favourites
              </span>
            </Link>

            <Link
              href="/review"
              className="flex items-center py-3 px-2   text-white rounded-lg  hover:bg-neutral-500 hover:text-black"
            >
              <AiOutlineStar className="ml-3" size={20} />
              <span
                className={`ml-3 text-xl mr-2 ${
                  partialSideBar ? "pl-4 " : "hidden"
                }`}
              >
                Reviews
              </span>
            </Link>
            <div
              className="flex items-center py-3 px-2   text-white rounded-lg  hover:bg-neutral-500 hover:text-black"
              onClick={() =>
                signOut({
                  callbackUrl: "/",
                })
              }
            >
              <TbLogout className="ml-3" size={20} />
              <span
                className={`ml-3 text-xl mr-2 ${
                  partialSideBar ? "pl-4 " : "hidden"
                }`}
              >
                Log Out
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
