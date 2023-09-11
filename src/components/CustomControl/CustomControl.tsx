"use client";

import { Controls, ControlButton, ReactFlowInstance } from "reactflow";
import { IoIosSave } from "react-icons/io";
import { FlowFromDB } from "@/types";
import { updateFlowInDatabase } from "@/lib/api-controllers";
import { useCallback } from "react";
import useFlowStore from "@/store/useFlowStore";

interface CustomControlProps {
  reactFlowInstance: ReactFlowInstance | null;
  flow: FlowFromDB | null;
}

const CustomControl = ({ flow, reactFlowInstance }: CustomControlProps) => {
  const updateFlow = useFlowStore((state) => state.updateFlow);

  const handleUpdateSaveOnClick = useCallback(() => {
    const saveFlow = async () => {
      try {
        if (flow && reactFlowInstance) {
          const newFlowData = reactFlowInstance.toObject();
          const newFlow = { ...flow, flowData: newFlowData };
          const updatedFlow = await updateFlowInDatabase(newFlow);
          updateFlow(updatedFlow);
          console.log("save flow successfully", updatedFlow);
        }
      } catch (error) {
        console.log(error);
      }
    };
    saveFlow();
  }, [reactFlowInstance]);

  return (
    <Controls>
      <ControlButton onClick={() => handleUpdateSaveOnClick()} title="save">
        <IoIosSave className="save" />
      </ControlButton>
    </Controls>
  );
};

export default CustomControl;
