import { FlowFromDB } from "@/types";
import Image from "next/image";
import { X } from "lucide-react";
import { deleteFlowFromDatabase } from "@/lib/api-controllers";
import { useRouter } from "next/navigation";
import useFlowStore from "@/store/useFlowStore";
import Link from "next/link";

interface Props {
  flow: FlowFromDB;
}

const FlowModal = ({ flow }: Props) => {
  const router = useRouter();
  const getFlows = useFlowStore((state) => state.getFlows);

  const handleDeleteFlow = () => {
    const hasConfirmed = confirm(
      "Are you sure you want to delete this flow chart?"
    );

    if (hasConfirmed) {
      deleteFlowFromDatabase(flow._id);
      router.push("/");
      getFlows();
    }
  };
  return (
    <div className="group flex w-full py-2 px-3 items-center justify-between border rounded-xl border-solid border-accent_tone_16 bg-white shadow-sm hover:border-black">
      <Link className="flex gap-3 items-center" href={`/flow/${flow._id}`}>
        <Image src="/assets/flow.svg" height={18} width={18} alt="flow" />
        <p className="hover:cursor-default">{flow.title}</p>
      </Link>

      <X
        className="hidden group-hover:flex font-light w-4 h-4 text-center cursor-pointer"
        onClick={handleDeleteFlow}
      />
    </div>
  );
};

export default FlowModal;
