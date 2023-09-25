import { FlowType } from "@/types";
import { create } from "zustand";

type ReactFlowState = {
  flow: FlowType | null;
  updateFlow: (updatedFlow: FlowType | null) => void;
};

const useFlowStore = create<ReactFlowState>((set) => ({
  flow: null,
  updateFlow: (updatedFlow) => set(() => ({ flow: updatedFlow })),
}));

export default useFlowStore;
