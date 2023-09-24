"use client";

import React from "react";
import { useState, Suspense } from "react";
import { Input } from "./ui/input";
import { IoCloudUpload } from "react-icons/io5";

const ViewerWithWorker = React.lazy(() => import("./ViewerWithWorker"));

interface UploadPdfProps {
  pdfFile: any;
  setPdfFile: (value: any) => void;
}

const UploadPdf = ({ pdfFile, setPdfFile }: UploadPdfProps) => {
  const [pdfError, setPdfError] = useState("");

  const allowedFileTypes = ["application/pdf"];
  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    if (target.files && target.files.length) {
      const selectedFile = target.files[0];
      if (selectedFile) {
        if (selectedFile && allowedFileTypes.includes(selectedFile.type)) {
          let reader = new FileReader();
          reader.readAsDataURL(selectedFile);
          reader.onloadend = (e) => {
            setPdfError("");
            setPdfFile(e.target?.result);
          };
        } else {
          setPdfError("Not a valid PDF: Please select only PDF");
        }
      } else {
        console.log("please select a pdf");
      }
    }
  };

  return (
    <div className="flex-col w-1/2 h-full p-3 border-r border-slate-200">
      <form className="flex-col gap-1 mb-3">
        <div className="flex gap-3 items-center">
          <label htmlFor="upload" className="text-base">
            <IoCloudUpload className="w-8 h-8" />
          </label>
          <Input id="upload" type="file" onChange={handleFile} />
        </div>
        {pdfError && <small className="text-red-500 pl-11">{pdfError}</small>}
      </form>

      <div>
        {pdfFile && (
          <Suspense fallback={<div>Loading Viewer...</div>}>
            <ViewerWithWorker pdfFile={pdfFile} />
          </Suspense>
        )}
      </div>
    </div>
  );
};

export default UploadPdf;
