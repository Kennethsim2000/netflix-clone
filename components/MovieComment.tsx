/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Comment } from "@prisma/client";
import { RiStarSFill } from "react-icons/ri";

interface MovieCommentProps {
  comment: Comment;
}

const MovieComment: React.FC<MovieCommentProps> = ({ comment }) => {
  return (
    <div className="group bg-zinc-900 col-span relative w-full md:w-160 py-4">
      <div className="flex flex-col md:flex-row gap-3">
        <img
          className="cursor-pointer object-cover transition duration shadow-xl rounded-md w-28 md:w-52 h-40 md:h-56"
          src={comment.thumbnailUrl || ""}
          alt="thumbnail"
        />
        <div className="flex flex-col justify-between flex-grow ">
          <h2 className="text-white text-lg md:text-xl font-bold">
            {comment.title}
          </h2>
          <div className="text-white bg-gray-500 md:h-28 text-sm py-2 overflow-hidden px-3">
            {comment.review}
          </div>
          {/* put the stars here */}
          <div className="flex items-center mt-2">
            {comment.star && comment.star > 0
              ? Array.from({ length: comment.star }).map((_, index) => (
                  <RiStarSFill
                    key={index}
                    className="text-yellow-400 inline-block"
                  />
                ))
              : null}
          </div>
          <p className="text-white mt-2">Rating by</p>
          <p className="text-white ">{comment.username}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieComment;
