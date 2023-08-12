"use client";
import Box from "./Box";
import CreateButton from "./CreateButton";
import Library from "./Library";
import useFlowsStore from "@/store/useFlowsStore";
import { useEffect } from "react";

const SideNav = () => {
  const getFlows = useFlowsStore((state) => state.getFlows);
  const flows = useFlowsStore((state) => state.flows);

  useEffect(() => {
    getFlows();
  }, []);

  return (
    <div className="flex flex-col shadow-sm gap-y-2 border-r border-slate-200 h-full w-[300px] p-2">
      <Box>
        <CreateButton />
      </Box>
      <Box className="overflow-y-auto h-full">
        <Library flows={flows} />
      </Box>
    </div>
  );
};

export default SideNav;
