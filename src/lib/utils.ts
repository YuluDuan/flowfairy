import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import defaultFlow from "../constant/defaultFlow.json";

// tailwind merge
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



export async function loadDefultFlow(setNodes : any, setEdges : any, setViewport : any) {
  const flow = JSON.parse(JSON.stringify(defaultFlow));

  if (flow) {
    const { x = 0, y = 0, zoom = 1 } = flow.viewport;
    setNodes(flow.nodes || []);
    setEdges(flow.edges || []);
    setViewport({ x, y, zoom });
  }

}
