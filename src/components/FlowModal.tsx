import Image from "next/image";
import { X } from "lucide-react";
import { deleteFlowFromDatabase } from "@/lib/api-controllers";
import { useRouter } from "next/navigation";
import { confirmDialog } from "primereact/confirmdialog";
import useFlowsStore from "@/store/useFlowsStore";
import Link from "next/link";
import useFlowStore from "@/store/useFlowStore";
import toast from "react-hot-toast";

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { FlowType } from "@/types";

interface Props {
  flow: FlowType;
}

const FlowModal = ({ flow }: Props) => {
  const router = useRouter();
  const updateFlows = useFlowsStore((state) => state.updateFlows);
  const flows = useFlowsStore((state) => state.flows);
  const oldflow = useFlowStore((state) => state.flow);

  const updateFlow = useFlowStore((state) => state.updateFlow);

  const handleDeleteFlow = () => {
    const accept = () => {
      deleteFlowFromDatabase(flow.id);

      // only when the canvas id equals the id of deleted flow, the canva change to placeholder
      // otherwise stay the at the current flow
      if (oldflow?.id === flow.id) updateFlow(null);
      const updatedFlows = flows.filter((item) => item.id !== flow.id);
      updateFlows(updatedFlows);
      router.push("/main");
      toast.success("Deleted!");
    };

    const reject = () => {
      toast.error("Canceled!");
    };

    confirmDialog({
      message: "Do you want to delete this flow?",
      header: "Delete Confirmation",
      icon: "pi pi-info-circle",
      accept,
      reject,
    });
  };
  return (
    <>
      <div
        className={`group flex w-full py-2 px-3 items-center justify-between border rounded-xl border-solid border-accent_tone_16 bg-white shadow-sm hover:border-black ${
          flow.active ? "border-black" : ""
        }`}
      >
        <Link
          className="flex gap-3 items-center"
          href={`/main/flow/${flow.id}`}
        >
          <Image src="/assets/flow.svg" height={18} width={18} alt="flow" />
          <p className="hover:cursor-default">{flow.title}</p>
        </Link>
        <X
          className="hidden group-hover:flex font-light w-4 h-4 text-center cursor-pointer"
          onClick={handleDeleteFlow}
        />
      </div>
    </>
  );
};

export default FlowModal;
