import { Controls, ControlButton, ReactFlowJsonObject } from "reactflow";
import { IoIosSave } from "react-icons/io";
import { FlowFromDB } from "@/types";
import { updateFlowInDatabase } from "@/lib/api-controllers";

interface CustomControlProps {
  newFlowData: ReactFlowJsonObject | undefined;
  flow: FlowFromDB | null;
}

const CustomControl = ({ flow, newFlowData }: CustomControlProps) => {
  const handleUpdateSaveOnClick = async () => {
    try {
      if (flow && newFlowData) {
        const newFlow = { ...flow, flowData: newFlowData };
        const updatedFlow = await updateFlowInDatabase(newFlow);
        console.log("save flow successfully", updatedFlow);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Controls>
      <ControlButton onClick={() => handleUpdateSaveOnClick()} title="save">
        <IoIosSave className="save" />
      </ControlButton>
    </Controls>
  );
};

export default CustomControl;
