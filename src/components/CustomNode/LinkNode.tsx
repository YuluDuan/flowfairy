"use client";
import { useCallback, memo, useState } from "react";
import { Handle, Position, Node, NodeProps } from "reactflow";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { NodeDataType } from "@/types";
import { GoProjectSymlink } from "react-icons/go";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useRouter } from "next/navigation";

function LinkNode({ id, data, selected }: NodeProps<NodeDataType>) {
  const [label, setLabel] = useState(data.value);
  const router = useRouter();
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

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <button onClick={() => console.log(id)}>
            <GoProjectSymlink className=" hover:text-cyan-500 cursor-pointer transition duration-500 ease-in-out hover:scale-110" />
          </button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you sure to go to the Details Page?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. You may lose your unsaved changes,
              Please make sure to save your flow first.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction>Cancel</AlertDialogAction>
            <AlertDialogCancel onClick={() => router.push(`/node/${id}`)}>
              Continue
            </AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Handle type="source" id="h2" position={Position.Bottom} />
      <Handle type="source" id="h3" position={Position.Left} />
      <Handle type="target" id="h4" position={Position.Right} />
    </div>
  );
}

LinkNode.displayName = "LinkNode";
export default memo(LinkNode);
