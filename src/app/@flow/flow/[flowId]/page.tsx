"use client";

import Canvas from "@/components/Canvas";
import Sidebar from "@/components/Sidebar";
import { getFlowFromDatabase } from "@/lib/api-controllers";
import { FlowFromDB } from "@/types";
import { useEffect, useState } from "react";
import { ReactFlowProvider } from "reactflow";

const FlowPage = ({ params }: { params: { flowId: string } }) => {
  const [flow, setFlow] = useState<FlowFromDB | null>(null);

  useEffect(() => {
    const fetchFlowData = async () => {
      try {
        const flow = await getFlowFromDatabase(params.flowId);
        setFlow(flow);
      } catch (error) {
        console.error("Failed to fetch flow data:", error);
      }
    };
    fetchFlowData();
  }, [params.flowId]);

  return (
    <>
      <ReactFlowProvider>
        <Sidebar />
        <Canvas flow={flow} />
      </ReactFlowProvider>
    </>
  );
};

export default FlowPage;
