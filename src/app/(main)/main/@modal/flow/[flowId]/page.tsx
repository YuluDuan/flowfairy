"use client";

import CanvaPlaceHolder from "../../../../../../components/CanvaPlaceHolder";
import Canvas from "../../../../../../components/Canvas";
import Sidebar from "../../../../../../components/Sidebar";
import { getFlowFromDatabase } from "../../../../../../lib/api-controllers";
import useFlowStore from "../../../../../../store/useFlowStore";
import { useEffect } from "react";
import { ReactFlowProvider } from "reactflow";
import React from "react";

const FlowPage = ({ params }: { params: { flowId: string } }) => {
  const [flow, updateFlow] = useFlowStore((state) => [
    state.flow,
    state.updateFlow,
  ]);

  useEffect(() => {
    const fetchFlowData = async () => {
      try {
        const flow = await getFlowFromDatabase(params.flowId);
        updateFlow(flow);
        // console.log("feched the data");
        // console.log("page", flow);
      } catch (error) {
        console.error("Failed to fetch flow data:", error);
      }
    };
    fetchFlowData();
  }, [params.flowId]);

  if (!flow) return <CanvaPlaceHolder />;

  return (
    <ReactFlowProvider>
      <Sidebar />
      <Canvas flow={flow} />
    </ReactFlowProvider>
  );
};

export default FlowPage;