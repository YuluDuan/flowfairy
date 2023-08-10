import { readFlowsFromDatabase } from "@/lib/api-controllers";
import { FlowFromDB } from "@/types";
import { create } from "zustand";

type ReactFlowState = {
  getFlows: any;
  flow: FlowFromDB[];
};

const useFlowStore = create<ReactFlowState>((set) => ({
  flow: [],
  getFlows: async () => {
    const data = await readFlowsFromDatabase();
    set({ flow: data });
  },
}));

export default useFlowStore;
