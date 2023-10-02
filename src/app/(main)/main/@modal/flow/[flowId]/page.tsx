"use client";

import CanvaPlaceHolder from "../../../../../../components/CanvaPlaceHolder";
import Canvas from "../../../../../../components/Canvas";
import Sidebar from "../../../../../../components/Sidebar";
import { getFlowFromDatabase } from "../../../../../../lib/api-controllers";
import useFlowStore from "../../../../../../store/useFlowStore";
import { useEffect } from "react";
import { ReactFlowProvider } from "reactflow";

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
      } catch (error) {
        console.error("Failed to fetch flow data:", error);
      }
    };
    fetchFlowData();
  }, [params.flowId, updateFlow]);

  if (!flow) return <CanvaPlaceHolder />;

  return (
    <ReactFlowProvider>
      <Sidebar />
      <Canvas flow={flow} />
    </ReactFlowProvider>
  );
};

export default FlowPage;
