"use client";

import Editor from "@/components/Editor";
import LinkHeader from "@/components/LinkHeader";
import UploadPdf from "@/components/UploadPdf";
import { LexicalEditor } from "lexical";
import { useRef } from "react";

const LinkPage = () => {
  const editorRef = useRef<LexicalEditor>();

  const handleSavePDFandEditor = () => {};
  return (
    <>
      <LinkHeader handleSavePDFandEditor={handleSavePDFandEditor} />
      <div className="flex w-full h-full">
        <UploadPdf />
        <Editor ref={editorRef} />
      </div>
    </>
  );
};

export default LinkPage;
