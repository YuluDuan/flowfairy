"use client";

import Editor from "@/components/Editor";
import LinkHeader from "@/components/LinkHeader";
import UploadPdf from "@/components/UploadPdf";
import { updateFlowInDatabase } from "@/lib/api-controllers";
import useFlowStore from "@/store/useFlowStore";
import { FlowFromDB, NodeDataType } from "@/types";
import { LexicalEditor } from "lexical";
import { useRef, useState } from "react";

const getTheNodeData = (
  flow: FlowFromDB | null,
  params: { nodeId: string }
) => {
  let nodeData: NodeDataType | null = null;
  if (flow) {
    const nodes = flow!.flowData.nodes;
    const nodeIndex = nodes.findIndex((node) => node.id === params.nodeId);
    if (nodeIndex !== -1) {
      const modifiedFlow: FlowFromDB = { ...flow };
      const modifiedNodes = [...modifiedFlow.flowData!.nodes];
      nodeData = modifiedNodes[nodeIndex].data;
      return nodeData;
    }
  }

  return nodeData;
};

const getinitalEditorContent = (
  flow: FlowFromDB | null,
  params: { nodeId: string }
) => {
  const nodeData = getTheNodeData(flow, params);
  if (nodeData) {
    return nodeData.editorContent;
  } else {
    return '{"root":{"children":[{"children":[],"direction":null,"format":"","indent":0,"type":"paragraph","version":1}],"direction":null,"format":"","indent":0,"type":"root","version":1}}';
  }
};

const LinkPage = ({ params }: { params: { nodeId: string } }) => {
  const flow: FlowFromDB | null = useFlowStore((state) => state.flow);
  const editorRef = useRef<LexicalEditor>();
  const [pdfFile, setPdfFile] = useState<any>(
    getTheNodeData(flow, params)?.pdf
  );

  const handleSavePDFandEditor = async () => {
    //find the specific node data
    if (flow) {
      const nodes = flow!.flowData.nodes;
      const nodeIndex = nodes.findIndex((node) => node.id === params.nodeId);
      if (nodeIndex !== -1) {
        const modifiedFlow: FlowFromDB = { ...flow };
        const modifiedNodes = [...modifiedFlow.flowData!.nodes];
        const nodeData: NodeDataType = modifiedNodes[nodeIndex].data;
        nodeData.pdf = pdfFile;

        if (editorRef.current) {
          nodeData.editorContent = JSON.stringify(
            editorRef.current.toJSON().editorState
          );
        }
        // Update the modified nodes back into the modified flow
        modifiedFlow.flowData!.nodes = modifiedNodes;
        const updatedFlow = await updateFlowInDatabase(modifiedFlow);
        console.log("save flow successfully", updatedFlow);
      }
    }
  };
  return (
    <>
      <LinkHeader handleSavePDFandEditor={handleSavePDFandEditor} />
      <div className="flex w-full h-full">
        <UploadPdf pdfFile={pdfFile} setPdfFile={setPdfFile} />
        <Editor
          ref={editorRef}
          initailEditorState={getinitalEditorContent(flow, params)}
        />
      </div>
    </>
  );
};

export default LinkPage;
