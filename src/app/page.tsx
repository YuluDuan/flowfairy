"use client";

import Canvas from "@/components/Canvas";
import Sidebar from "@/components/Sidebar";
import { ReactFlowProvider } from "reactflow";

export default function Home() {
  return (
    <>
      <main className="flex w-full h-full">
        <ReactFlowProvider>
          <Sidebar />
          <Canvas />
        </ReactFlowProvider>
      </main>
    </>
  );
}
