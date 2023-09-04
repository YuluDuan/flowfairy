"use client";

import Editor from "@/components/Editor";
import LinkHeader from "@/components/LinkHeader";
import UploadPdf from "@/components/UploadPdf";
import { updateFlowInDatabase } from "@/lib/api-controllers";
import useFlowStore from "@/store/useFlowStore";
import { FlowFromDB, NodeDataType } from "@/types";
import { LexicalEditor } from "lexical";
import { useRef, useState } from "react";

const LinkPage = ({ params }: { params: { nodeId: string } }) => {
  const editorRef = useRef<LexicalEditor>();
  const [pdfFile, setPdfFile] = useState<any>(null);

  const flow: FlowFromDB | null = useFlowStore((state) => state.flow);

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
          const editorState = editorRef.current;
          const editorStateJSON = editorState.toJSON();
          nodeData.editorContent = JSON.stringify(editorStateJSON);
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
        <Editor ref={editorRef} />
      </div>
    </>
  );
};

export default LinkPage;
