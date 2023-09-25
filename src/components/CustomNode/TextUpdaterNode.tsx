"use client";
import { useCallback, memo, useState } from "react";
import { Handle, Position, NodeProps } from "reactflow";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { NodeDataType } from "@/types";

function TextUpdaterNode({ data, selected }: NodeProps<NodeDataType>) {
  const [label, setLabel] = useState(data.value);

  const onChange = useCallback(
    (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
      setLabel(evt.target.value);
      data.value = evt.target.value;
    },
    [data]
  );

  return (
    <div
      className={` ${
        selected ? "border-1.5" : "border"
      } border-black rounded border-solid bg-white p-2 box-border`}
    >
      <Handle type="target" id="h1" position={Position.Top} />
      <TextareaAutosize
        id="text"
        name="text"
        onChange={onChange}
        value={label}
        placeholder="Write here"
        className="text-center focus:outline-none leading-none text-xs resize-none"
      />
      <Handle type="source" id="h2" position={Position.Bottom} />
      <Handle type="source" id="h3" position={Position.Left} />
      <Handle type="target" id="h4" position={Position.Right} />
    </div>
  );
}

TextUpdaterNode.displayName = "TextUpdaterNode";
export default memo(TextUpdaterNode);
