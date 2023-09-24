import { readFlowsFromDatabase } from "@/lib/api-controllers";
import { FlowFromDB } from "@/types";
import { create } from "zustand";

type ReactFlowState = {
  updateFlows: any;
  flows: FlowFromDB[];
};

const useFlowsStore = create<ReactFlowState>((set) => ({
  flows: [],
  updateFlows: (data: FlowFromDB[]) => {
    set({ flows: data });
  },
}));

export default useFlowsStore;
