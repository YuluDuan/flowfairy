"use client";

import Canvas from "@/components/Canvas";
import Sidebar from "@/components/Sidebar";
import { ReactFlowProvider } from "reactflow";

export default function Default() {
  return (
    <div>hi default page</div>
    // <>
    //   <ReactFlowProvider>
    //     <Sidebar />
    //     <Canvas />
    //   </ReactFlowProvider>
    // </>
  );
}
