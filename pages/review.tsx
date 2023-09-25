import MovieComment from "@/components/MovieComment";
import Sidebar from "@/components/sidebar";
import Topbar from "@/components/Topbar";
import { Comment } from "@prisma/client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Review() {
  const [partialSideBar, setPartialSideBar] = useState<boolean>(true);
  const [comments, setComments] = useState<Comment[]>();

  useEffect(() => {
    const updateComments = async () => {
      try {
        const response = await axios.get("/api/fetchComment");
        console.log(response.data);
        setComments(response.data);
        console.log(comments);
      } catch (error) {
        console.error(error);
      }
    };
    updateComments();
  }, []);

  return (
    <div className="flex flex-col md:flex-row w-screen ">
      <aside className="fixed top-0 h-screen hidden md:block">
        <Sidebar
          partialSideBar={partialSideBar}
          setPartialSideBar={setPartialSideBar}
        />
      </aside>
      <div className="sticky top-0  md:hidden transition duration-300 ease-in-out">
        <Topbar
          partialSideBar={partialSideBar}
          setPartialSideBar={setPartialSideBar}
        />
      </div>
      <main
        className={`relative h-screen flex-col w-full duration-300 py-4 px-6 ${
          partialSideBar ? "md:ml-64 " : "md:ml-16  "
        }  `}
      >
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-2 ">
          {comments?.map((comment) => (
            <MovieComment key={comment.id} comment={comment} />
          ))}
        </div>
      </main>
    </div>
  );
}
