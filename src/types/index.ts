import { ReactFlowJsonObject } from "reactflow";

export interface FlowType {
    id: string;
    title: string;
    flowData: ReactFlowJsonObject;
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
