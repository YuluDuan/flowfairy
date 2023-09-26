"use client";

import {
  Controls,
  ControlButton,
  ReactFlowInstance,
  ReactFlowJsonObject,
} from "reactflow";
import { IoIosSave } from "react-icons/io";
import { FlowType } from "@/types";
import { updateFlowInDatabase } from "@/lib/api-controllers";
import { useCallback, useEffect, useState } from "react";
import useFlowStore from "@/store/useFlowStore";
import { toast } from "react-hot-toast";
import useUnsavedChangesWarning from "../hooks/useUnsavedChangesWarning";

interface CustomControlProps {
  reactFlowInstance: ReactFlowInstance | null;
  flow: FlowType | null;
}

const CustomControl = ({ flow, reactFlowInstance }: CustomControlProps) => {
  const updateFlow = useFlowStore((state) => state.updateFlow);
  const [changed, setChanged] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setChanged(true);
  }, [reactFlowInstance]);

  useUnsavedChangesWarning(changed && !saved);

  const handleUpdateSaveOnClick = useCallback(() => {
    const saveFlow = async () => {
      try {
        if (flow && reactFlowInstance) {
          const newFlowData: ReactFlowJsonObject = reactFlowInstance.toObject();
          const newFlow = { ...flow, flowData: newFlowData };
          updateFlow(newFlow);
          toast.promise(updateFlowInDatabase(newFlow), {
            loading: "Trying to Save the New Flow ...",
            success: "Save flow successfully",
            error: "Something went wrong",
          });
          console.log("Save flow successfully", newFlow);
          setSaved(true);
          setChanged(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    saveFlow();
  }, [reactFlowInstance, flow, updateFlow]);

  return (
    <Controls>
      <ControlButton onClick={() => handleUpdateSaveOnClick()} title="save">
        <IoIosSave className="save" />
      </ControlButton>
    </Controls>
  );
};

export default CustomControl;
