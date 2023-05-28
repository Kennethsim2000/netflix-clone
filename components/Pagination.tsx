import React, { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
interface PaginationProps {
  page: number;
  setPage: (page: number) => void;
}
const Pagination: React.FC<PaginationProps> = ({ page, setPage }) => {
  const handlePrevious = () => {
    if (page - 1 < 1) {
      return;
    }
    setPage(page - 1);
  };

  const handleNext = () => {
    if (page + 1 > 5) {
      return;
    }
    setPage(page + 1);
  };

  return (
    <div className="flex items-center justify-between mt-4">
      <button className="flex items-center bg-white rounded-md px-2 py-2 hover:bg-neutral-300">
        <AiOutlineArrowLeft size={20} />
        <span onClick={() => handlePrevious()}>Previous</span>
      </button>
      <ul className="inline-flex -space-x-px">
        <li>
          <a
            className={`px-3 py-2 leading-tight border border-gray-300 font-semibold ${
              page == 1
                ? "text-blue-600   bg-blue-200 hover:bg-blue-100 hover:text-blue-700"
                : "text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700"
            }`}
            onClick={() => setPage(1)}
          >
            1
          </a>
        </li>
        <li>
          <a
            className={`px-3 py-2 leading-tight border border-gray-300 font-semibold ${
              page == 2
                ? "text-blue-600   bg-blue-200 hover:bg-blue-100 hover:text-blue-700"
                : "text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700"
            }`}
            onClick={() => setPage(2)}
          >
            2
          </a>
        </li>
        <li>
          <a
            className={`px-3 py-2 leading-tight border border-gray-300 font-semibold ${
              page == 3
                ? "text-blue-600   bg-blue-200 hover:bg-blue-100 hover:text-blue-700"
                : "text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700"
            }`}
            onClick={() => setPage(3)}
          >
            {/* className="px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700  */}
            3
          </a>
        </li>
        <li>
          <a
            className={`px-3 py-2 leading-tight border border-gray-300 font-semibold ${
              page == 4
                ? "text-blue-600   bg-blue-200 hover:bg-blue-100 hover:text-blue-700"
                : "text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700"
            }`}
            onClick={() => setPage(4)}
          >
            4
          </a>
        </li>
        <li>
          <a
            className={`px-3 py-2 leading-tight border border-gray-300 font-semibold ${
              page == 5
                ? "text-blue-600   bg-blue-200 hover:bg-blue-100 hover:text-blue-700"
                : "text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700"
            }`}
            onClick={() => setPage(5)}
          >
            5
          </a>
        </li>
      </ul>
      <button className="flex items-center bg-white rounded-md px-2 py-2 hover:bg-neutral-300">
        <span onClick={() => handleNext()}>Next</span>
        <AiOutlineArrowRight size={20} />
      </button>
    </div>
  );
};

export default Pagination;
