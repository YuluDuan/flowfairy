import { FlowFromDB } from "@/types";
import { LuWorkflow } from "react-icons/lu";
import FlowModal from "./FlowModal";
import { ConfirmDialog } from "primereact/confirmdialog";

interface Props {
  flows: FlowFromDB[];
}
const Library = ({ flows }: Props) => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex items-center justify-between px-1 pt-1">
          <div className="inline-flex items-center gap-x-2">
            <LuWorkflow size={24} />
            <p className="font-medium text-md">Library</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-2 mt-4">
          <ConfirmDialog />
          {flows.map((item) => (
            <FlowModal key={`${item._id}flowModal`} flow={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Library;
