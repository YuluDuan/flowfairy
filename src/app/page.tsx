"use client";

import Canvas from "@/components/Canvas";
import { ReactFlowProvider } from "reactflow";

export default function Home() {
  return (
    <>
      <main>Hello From Lucy</main>
      <ReactFlowProvider>
        <Canvas />
      </ReactFlowProvider>
    </>
  );
}
