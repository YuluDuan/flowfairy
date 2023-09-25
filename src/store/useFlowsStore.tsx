import { FlowType } from "@/types";
import { create } from "zustand";

type ReactFlowState = {
  updateFlows: any;
  flows: FlowType[];
};

const useFlowsStore = create<ReactFlowState>((set) => ({
  flows: [],
  updateFlows: (data: FlowType[]) => {
    set({ flows: data });
  },
}));

export default useFlowsStore;
