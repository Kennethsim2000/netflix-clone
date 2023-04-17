import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BiHomeAlt2 } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className="bg-gray-500">
      <aside className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0">
        <div className="h-full  overflow-y-auto bg-neutral-600 dark:bg-gray-800">
          <a
            href="https://portfolio-kenneth-azure.vercel.app/"
            className="flex items-center pl-2.5 mb-5 bg-neutral-500 py-2"
          >
            <Image
              src="/images/logo.png"
              width={50}
              height={50}
              alt="logo picture"
            />
            <span className="self-center text-4xl font-semibold whitespace-nowrap text-red-600">
              Netflix
            </span>
          </a>
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                href="/"
                className="flex items-center  py-3 px-2  text-white rounded-lg dark:text-white hover:bg-neutral-500 hover:text-black"
              >
                <span className="ml-3 text-xl pl-4 mr-2">Home</span>
                <BiHomeAlt2 size={25} />
              </Link>
              <Link
                href="/"
                className="flex items-center py-3 px-2    text-white rounded-lg  hover:bg-neutral-500 hover:text-black"
              >
                <span className="ml-3 text-xl pl-4 mr-2">Favourites</span>
                <BsBookmark size={20} />
              </Link>
              <Link
                href="/"
                className="flex items-center py-3 px-2   text-white rounded-lg  hover:bg-neutral-500 hover:text-black"
              >
                <span className="ml-3 text-xl pl-4 mr-2">Reviews</span>
                <AiOutlineStar size={25} />
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
