import Sidebar from "@/components/sidebar";
import Topbar from "@/components/Topbar";
import { useState } from "react";

export default function Review() {
  const [partialSideBar, setPartialSideBar] = useState<boolean>(true);

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
      ></main>
    </div>
  );
}
