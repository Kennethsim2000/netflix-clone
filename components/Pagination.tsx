import React, { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
const Pagination = () => {
  return (
    <div className="flex items-center justify-between">
      <button className="flex items-center bg-white rounded-md px-2 py-2 hover:bg-white-600">
        <AiOutlineArrowLeft size={20} />
        <span>Previous</span>
      </button>
      <ul className="inline-flex -space-x-px">
        <li>
          <a className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">
            1
          </a>
        </li>
        <li>
          <a className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">
            2
          </a>
        </li>
        <li>
          <a className="px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 ">
            3
          </a>
        </li>
        <li>
          <a className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">
            4
          </a>
        </li>
        <li>
          <a className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">
            5
          </a>
        </li>
      </ul>
      <button className="flex items-center bg-white rounded-md px-2 py-2 hover:bg-white-600">
        <span>Next</span>
        <AiOutlineArrowRight size={20} />
      </button>
    </div>
  );
};

export default Pagination;
