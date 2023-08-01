"use client";

import Canvas from "@/components/Canvas";
import Sidebar from "@/components/Sidebar";
import { ReactFlowProvider } from "reactflow";

export default function Home() {
  return (
    <>
      <ReactFlowProvider>
        <main className="flex w-full h-full">
          <Sidebar />
          <Canvas />
        </main>
      </ReactFlowProvider>
    </>
  );
}
