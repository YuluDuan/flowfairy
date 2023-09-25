"use client";

import SideNav from "@/components/SideNav";
import { readFlowsFromDatabase } from "@/lib/api-controllers";
import useFlowsStore from "@/store/useFlowsStore";
import { useEffect } from "react";

export default function Home() {
  const updateFlows = useFlowsStore((state) => state.updateFlows);
  const flows = useFlowsStore((state) => state.flows);
  useEffect(() => {
    const getflows = async () => {
      const data = await readFlowsFromDatabase();
      updateFlows(data);
    };

    getflows().catch(console.error);
  }, [updateFlows]);
  return <SideNav flows={flows} />;
}

// import SideNav from "@/components/SideNav";
// import { readFlowsFromDatabase } from "@/lib/api-controllers";
// import useFlowsStore from "@/store/useFlowsStore";
// import { useEffect } from "react";

// export default function Home() {
//   return <SideNav />;
// }
