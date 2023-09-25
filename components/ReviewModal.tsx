import { Movie, User } from "@prisma/client";
import axios from "axios";
import { useState } from "react";

interface ReviewModalProps {
  setReview: (value: boolean) => void;
  currentMovie: Movie;
  currentUser: User;
}

const ReviewModal: React.FC<ReviewModalProps> = ({
  setReview,
  currentMovie,
  currentUser,
}) => {
  const [reviewText, setReviewText] = useState<string>("");

  const handleReviewSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post("/api/createComment", {
        username: currentUser.username,
        review: reviewText,
        title: currentMovie.title,
      });
      setReview(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 w-full">
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-8 rounded w-1/2">
          {/* Modal content */}
          <h2 className="text-lg font-bold mb-4">Add Review</h2>
          <form onSubmit={handleReviewSubmit}>
            <textarea
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              placeholder="Write your review here"
              className="w-full h-24 mb-4 p-2 border border-gray-300 rounded"
            ></textarea>
            <div className="flex justify-end">
              <button
                className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded mr-2"
                onClick={() => setReview(false)}
              >
                Close
              </button>
              {/* Submit button */}
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReviewModal;
