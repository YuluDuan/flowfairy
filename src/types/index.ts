import { ReactFlowJsonObject } from "reactflow";

export interface FlowType {
    title: string;
    flowData: ReactFlowJsonObject;
};

export interface FlowFromDB extends FlowType {
    _id: string;
    __v: number;
}

export type NodeDataType = {
    type: string;
    id: string;
    value: any;
};

export type EdgeDataType = {
    label: string;
}
