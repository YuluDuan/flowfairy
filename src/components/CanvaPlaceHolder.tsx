"use client";
import { days_one } from "@/app/font";
import Image from "next/image";
import ReactFlow, { Background } from "reactflow";
import "reactflow/dist/style.css";
const CanvaPlaceHolder = () => {
  const proOptions = { hideAttribution: true };
  return (
    <div className="bg_blue h-full flex flex-col items-center justify-center">
      <div style={{ height: "100%" }}>
        <ReactFlow proOptions={proOptions}>
          <div className="flex flex-col">
            <p className={` ${days_one.className} text-2xl pt-12 px-12`}>
              Quick Tips
            </p>
            <div className="flex flex-col py-12 px-12 gap-8 lg:flex-row">
              {/* First Tip */}
              <div className="flex gap-5 toolbar-card bg-white items-center relative">
                <div className="fix_width3">
                  <p className="text-2xl font-semibold pb-6">ToolBar</p>
                  <p>
                    It&apos;s at the bottom-left of your screen, with viewports,
                    save, and anything you need.
                  </p>
                </div>

                <Image
                  src={"/assets/toolbar.png"}
                  height={10}
                  width={30}
                  alt="toolbar"
                  className="ml-8"
                />

                <Image
                  src={"/assets/1.svg"}
                  height={20}
                  width={20}
                  alt="flower"
                  className="absolute bottom-10 right-10 overflow-hidden"
                />

                <Image
                  src={"/assets/4.svg"}
                  height={18}
                  width={18}
                  alt="flower"
                  className="absolute top-5 left-60 overflow-hidden"
                />
              </div>

              {/* Second Tip */}
              <div className="flex gap-5 toolbar-card bg-white items-center justify-center relative">
                <div className="fix_width3">
                  <p className="text-2xl font-semibold pb-6">Rectangles</p>
                  <p>
                    The link rectangle and the text rectangle can be dragged
                    from the top-left menu.
                  </p>
                </div>

                <Image
                  src={"/assets/sideMenu.png"}
                  height={50}
                  width={220}
                  alt="toolbar"
                  className="pt-4"
                />

                <Image
                  src={"/assets/2.svg"}
                  height={18}
                  width={18}
                  alt="flower"
                  className="absolute bottom-5 left-60 overflow-hidden"
                />

                <Image
                  src={"/assets/3.svg"}
                  height={20}
                  width={20}
                  alt="flower"
                  className="absolute top-5 right-20 overflow-hidden "
                />
              </div>
            </div>

            {/* Second Part */}
            <p className={` ${days_one.className} text-2xl pt-5 px-12 pb-12`}>
              Let&apos;s Create a New Flow Chart <br /> with
              <span className="purple_text_gradient"> FlowFairy</span>
            </p>
            <div className="flex flex-col items-center px-12 gap-10 relative lg:flex-row">
              <Image
                src={"/assets/GetStart.svg"}
                height={60}
                width={300}
                alt="Get Start"
              />

              <Image
                src={"/assets/people.svg"}
                height={60}
                width={300}
                alt="people"
                className="lg:absolute -top-28 right-20 overflow-hidden"
              />
            </div>
          </div>
          <Background />
        </ReactFlow>
      </div>
    </div>
  );
};

export default CanvaPlaceHolder;
