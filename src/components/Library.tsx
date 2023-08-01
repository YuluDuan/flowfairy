import { FlowType } from "@/types";
import { LuWorkflow } from "react-icons/lu";

interface Props {
  flows: FlowType[];
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
        <div className="flex flex-col gap-y-2 mt-4 px-3">
          {flows.map((item) => (
            //   <MediaItem
            //     onClick={(id: string) => onPlay(id)}
            //     key={item.id}
            //     data={item}
            //   />
            <p key={item.title}>{item.title}</p>
          ))}
        </div>
      </div>
    </>
  );
};

export default Library;
