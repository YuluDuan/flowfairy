"use client";
import { useCallback, memo, useState } from "react";
import { Handle, Position, Node, NodeProps } from "reactflow";
import TextareaAutosize from "@mui/base/TextareaAutosize";

type NodeData = {
  value: string;
};

type CustomNode = Node<NodeData>;

function TextUpdaterNode({ data, selected }: NodeProps<NodeData>) {
  const [label, setLabel] = useState("");
  const onChange = useCallback(
    (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
      setLabel(evt.target.value);
    },
    []
  );

  return (
    <div className="border border-black rounded border-solid bg-white p-4">
      <Handle type="target" id="h1" position={Position.Top} />
      <TextareaAutosize
        id="text"
        name="text"
        onChange={onChange}
        value={label}
        placeholder="Write here"
        className="text-center focus:outline-none leading-none text-xs resize-none font-normal"
      />
      <Handle type="source" id="h2" position={Position.Bottom} />
      <Handle type="source" id="h3" position={Position.Left} />
      <Handle type="target" id="h4" position={Position.Right} />
    </div>
  );
}

TextUpdaterNode.displayName = "TextUpdaterNode";
export default memo(TextUpdaterNode);