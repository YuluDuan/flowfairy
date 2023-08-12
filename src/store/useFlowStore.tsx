import { FlowFromDB } from "@/types";
import { create } from "zustand";

type ReactFlowState = {
  flow: FlowFromDB | null;
  updateFlow: (updatedFlow: FlowFromDB | null) => void;
};

const useFlowStore = create<ReactFlowState>((set) => ({
  flow: null,
  updateFlow: (updatedFlow) => set(() => ({ flow: updatedFlow })),
}));

export default useFlowStore;
