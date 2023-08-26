"use client";
import { useCallback, memo, useState } from "react";
import { Handle, Position, Node, NodeProps } from "reactflow";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import LinkButton from "../LinkButton";
import { NodeDataType } from "@/types";

function LinkNode({ data, selected }: NodeProps<NodeDataType>) {
  const [label, setLabel] = useState(data.value);
  const onChange = useCallback(
    (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
      setLabel(evt.target.value);
      data.value = evt.target.value;
    },
    []
  );

  return (
    <div
      className={` ${
        selected ? "border-1.5" : "border"
      } border-black rounded border-solid bg-white p-3`}
    >
      <Handle type="target" id="h1" position={Position.Top} />
      <TextareaAutosize
        id="text"
        name="text"
        onChange={onChange}
        value={label}
        placeholder="Write here"
        className="text-xs placeholder:italic placeholder:text-slate-400 text-center focus:outline-none leading-none resize-none font-normal"
      />
      <button onClick={() => console.log(data.id)}>
        <LinkButton />
      </button>
      <Handle type="source" id="h2" position={Position.Bottom} />
      <Handle type="source" id="h3" position={Position.Left} />
      <Handle type="target" id="h4" position={Position.Right} />
    </div>
  );
}

LinkNode.displayName = "LinkNode";
export default memo(LinkNode);
