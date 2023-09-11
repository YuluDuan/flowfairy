"use client";

import Editor from "@/components/Editor";
import LinkHeader from "@/components/LinkHeader";
import UploadPdf from "@/components/UploadPdf";
import { updateFlowInDatabase } from "@/lib/api-controllers";
import useFlowStore from "@/store/useFlowStore";
import { FlowFromDB, NodeDataType } from "@/types";
import { LexicalEditor } from "lexical";
import { useCallback, useRef, useState } from "react";
import { toast } from "react-hot-toast";

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
  }
};

const LinkPage = ({ params }: { params: { nodeId: string } }) => {
  const flow: FlowFromDB | null = useFlowStore((state) => state.flow);
  const editorRef = useRef<LexicalEditor>();
  const [pdfFile, setPdfFile] = useState<any>(
    getTheNodeData(flow, params)?.pdf
  );

  const handleSavePDFandEditor = useCallback(() => {
    const SavePDFandEditor = async () => {
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
          toast.success("Congrats, Note has been Saved!");
        } else {
          console.log("cannot find the node index");
          toast.error("Somthing went wrong");
        }
      }
    };

    SavePDFandEditor();
  }, [flow]);
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
