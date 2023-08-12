import { readFlowsFromDatabase } from "@/lib/api-controllers";
import { FlowFromDB } from "@/types";
import { create } from "zustand";

type ReactFlowState = {
  getFlows: any;
  flows: FlowFromDB[];
};

const useFlowsStore = create<ReactFlowState>((set) => ({
  flows: [],
  getFlows: async () => {
    const data = await readFlowsFromDatabase();
    set({ flows: data });
  },
}));

export default useFlowsStore;
