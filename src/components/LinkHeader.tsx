"use client";

import { GiFairyWand } from "react-icons/gi";
import { IoSave } from "react-icons/io5";
import { HiBackspace } from "react-icons/hi";

const LinkHeader = () => {
  const handleBackToPrePage = () => {};
  const handleSavePDFandEditor = () => {};
  return (
    <>
      <nav className="flex justify-between items-center width-full h-14 px-6 py-3 border-b border-solid border-inherit">
        <div className="flex justify-center items-center gap-2">
          <GiFairyWand className="w-7 h-7 text-[#FFC000]" />
          <p className="font-semibold text-xl orange_gradient">FLOWFAIRY</p>
        </div>
        <div className="flex gap-3 items-center">
          <button onClick={handleBackToPrePage}>
            <HiBackspace className="w-8 h-8 cursor-pointer" />
          </button>

          <button onClick={handleSavePDFandEditor}>
            <IoSave className="w-6 h-6 cursor-pointer" />
          </button>
        </div>
      </nav>
    </>
  );
};

export default LinkHeader;
