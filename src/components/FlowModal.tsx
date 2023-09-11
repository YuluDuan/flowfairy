import { FlowFromDB } from "@/types";
import Image from "next/image";
import { X } from "lucide-react";
import { deleteFlowFromDatabase } from "@/lib/api-controllers";
import { useRouter } from "next/navigation";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import useFlowsStore from "@/store/useFlowsStore";
import Link from "next/link";
import useFlowStore from "@/store/useFlowStore";
import toast from "react-hot-toast";

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";

interface Props {
  flow: FlowFromDB;
}

const FlowModal = ({ flow }: Props) => {
  const router = useRouter();
  const getFlows = useFlowsStore((state) => state.getFlows);
  const oldflow = useFlowStore((state) => state.flow);

  const updateFlow = useFlowStore((state) => state.updateFlow);

  const handleDeleteFlow = () => {
    // const hasConfirmed = confirm(
    //   "Are you sure you want to delete this flow chart?"
    // );

    const accept = () => {
      deleteFlowFromDatabase(flow._id);

      // only when the canvas id equals the id of deleted flow, the canva change to placeholder
      // otherwise stay the at the current flow
      if (oldflow?._id === flow._id) updateFlow(null);
      router.push("/main");
      getFlows();
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

    // if (hasConfirmed) {
    //   deleteFlowFromDatabase(flow._id);

    //   // only when the canvas id equals the id of deleted flow, the canva change to placeholder
    //   // otherwise stay the at the current flow
    //   if (oldflow?._id === flow._id) updateFlow(null);
    //   router.push("/main");
    //   getFlows();
    // }
  };
  return (
    <>
      <div className="group flex w-full py-2 px-3 items-center justify-between border rounded-xl border-solid border-accent_tone_16 bg-white shadow-sm hover:border-black">
        <Link
          className="flex gap-3 items-center"
          href={`/main/flow/${flow._id}`}
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
