"use client";

import Canvas from "@/components/Canvas";
import Sidebar from "@/components/Sidebar";
import { ReactFlowProvider } from "reactflow";

export default function Home() {
  return (
    <>
      <ReactFlowProvider>
        <Sidebar />
        <Canvas />
      </ReactFlowProvider>
    </>
  );
}
