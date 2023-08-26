"use client";

import { useState } from "react";
import { Input } from "./ui/input";
import { IoCloudUpload } from "react-icons/io5";

import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const UploadPdf = () => {
  const [pdfFile, setPdfFile] = useState<any>(null);
  const [pdfError, setPdfError] = useState("");
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

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
      <form className="flex-col gap-1 mb-4">
        <div className="flex gap-3 items-center">
          <label htmlFor="upload" className="text-base">
            <IoCloudUpload className="w-8 h-8" />
          </label>
          <Input id="upload" type="file" onChange={handleFile} />
        </div>
        {pdfError && <small className="text-red-500 pl-11">{pdfError}</small>}
      </form>

      <h5>View PDF</h5>
      <div>
        {pdfFile && (
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            <div
              className="w-full"
              style={{
                height: "750px",
              }}
            >
              <Viewer
                fileUrl={pdfFile}
                plugins={[defaultLayoutPluginInstance]}
              ></Viewer>
            </div>
          </Worker>
        )}
        {!pdfFile && <>No file has been selected yet</>}
      </div>
    </div>
  );
};

export default UploadPdf;
