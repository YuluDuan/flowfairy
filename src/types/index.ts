import { ReactFlowJsonObject } from "reactflow";

export interface UserType {
    _id: string,
    id: string,
}

export interface FlowType {
    id: string;
    title: string;
    flowData: ReactFlowJsonObject;
    userId : string;
    active? : boolean;
};

export type NodeDataType = {
    type: string;
    id: string;
    value: any;
    pdf: any;
    editorContent: string;
};

export type EdgeDataType = {
    label: string;
}
