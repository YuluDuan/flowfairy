"use client";
import { readFlowsFromDatabase } from "@/lib/api-controllers";
import Box from "./Box";
import CreateButton from "./CreateButton";
import Library from "./Library";
import useFlowsStore from "@/store/useFlowsStore";
import { useEffect } from "react";

interface Props {
  userId: string;
}
const SideNav = ({ userId }: Props) => {
  const updateFlows = useFlowsStore((state) => state.updateFlows);
  useEffect(() => {
    const getflows = async () => {
      const data = await readFlowsFromDatabase(userId);
      updateFlows(data);
    };
    getflows().catch(console.error);
  }, [updateFlows]);

  return (
    <div className="flex flex-col shadow-sm gap-y-2 border-r border-slate-200 h-full w-[300px] p-2">
      <Box>
        <CreateButton curr_userId={userId} />
      </Box>
      <Box className="overflow-y-auto h-full">
        <Library />
      </Box>
    </div>
  );
};

export default SideNav;
