import Sidebar from "@/components/sidebar";
import Billboard from "@/components/Billboard";
import { useState } from "react";

export default function Home() {
  const [partialSideBar, setPartialSideBar] = useState<boolean>(true);

  return (
    <div className="h-screen w-screen md:flex ">
      <div className="flex h-screen">
        <Sidebar
          partialSideBar={partialSideBar}
          setPartialSideBar={setPartialSideBar}
        />

        <Billboard />
      </div>
    </div>
  );
}
