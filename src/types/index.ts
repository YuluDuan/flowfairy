import { ReactFlowJsonObject } from "reactflow";

export interface FlowType {
    title: string;
    flowData: ReactFlowJsonObject;
};

export interface FlowFromDB extends FlowType {
    _id: string;
    __v: number;
}
