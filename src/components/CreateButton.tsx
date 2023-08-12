"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useState } from "react";
import { saveFlowToDatabase } from "@/lib/api-controllers";
import defaultFlow from "@/constant/defaultFlow.json";
import { FlowType } from "@/types";
import useFlowsStore from "@/store/useFlowsStore";
import { useRouter } from "next/navigation";

const CreateButton = () => {
  const [title, setTitle] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const getFlows = useFlowsStore((state) => state.getFlows);

  const router = useRouter();

  const createNewFlow = (): FlowType => ({
    title: title,
    flowData: JSON.parse(JSON.stringify(defaultFlow)),
  });

  async function createAndSaveNewFlow(): Promise<void> {
    const newFlow = createNewFlow();

    try {
      await saveFlowToDatabase(newFlow);
      setIsOpen(false);
      router.push("/");
      getFlows(); // update the flows
    } catch (error) {
      console.error("Error while creating flow:", error);
    }
  }

  return (
    <Dialog
      open={isOpen}
      onOpenChange={() => {
        setIsOpen((pre) => !pre);
      }}
    >
      <DialogTrigger asChild>
        <Button className="w-full text-lg">Create New</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Flow Chart</DialogTitle>
          <DialogDescription>
            Add title to your flow chart here. Click to create when you&apos;re
            done.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-between gap-4">
          <Label htmlFor="title" className="text-right">
            Title
          </Label>
          <Input
            id="title"
            value={title}
            onChange={(evt) => {
              setTitle(evt.target.value);
            }}
            placeholder="Enter your title here"
            required
          />
        </div>

        <DialogFooter>
          <Button type="submit" onClick={createAndSaveNewFlow}>
            Create
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateButton;
