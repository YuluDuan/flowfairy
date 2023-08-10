import { getFlowsFromDatabase } from "@/lib/api-controllers";
import { FlowType } from "@/types";
import { create } from "zustand";

type ReactFlowState = {
  getFlows: any;
  flow: FlowType[];
};

const useFlowStore = create<ReactFlowState>((set) => ({
  flow: [],
  getFlows: async () => {
    const data = await getFlowsFromDatabase();
    set({ flow: data });
  },
}));

export default useFlowStore;
