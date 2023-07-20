import React from "react";
import { Panel } from "reactflow";

const Sidebar = () => {
  const onDragStart = (
    event: React.DragEvent<HTMLDivElement>,
    nodeType: string
  ) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };
  return (
    <Panel
      position="top-left"
      className="flex flex-col gap-y-4 rounded-md shadow-sm bg-white w-1/8 px-4 py-2"
    >
      <div
        className="px-4 py-2 text-sm text-center font-medium text-gray-900 bg-transparent border border-gray-900 rounded-md hover:cursor-move hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white"
        onDragStart={(event) => onDragStart(event, "textUpdater")}
        draggable
      >
        Input Node
      </div>
    </Panel>
  );
};

export default Sidebar;
