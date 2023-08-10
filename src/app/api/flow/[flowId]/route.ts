import Flow from "@/models/flow";
import { connectToDB } from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async (
  req: Request,
  { params }: { params: {flowId: string } }
) => {
  try {
    await connectToDB();

    const flow = await Flow.findById(params.flowId);

    if (!flow) return new NextResponse("Flow not found", { status: 404 });

    return new NextResponse(JSON.stringify(flow), { status: 200 });
  } catch (e) {
    return new NextResponse("Failed to the flow", { status: 500 });
  }
};

export const DELETE = async (
    req: Request,
    { params }: { params: { flowId: string } }
  ) => {
    try {
      await connectToDB();
      const existingFlow = await Flow.findByIdAndRemove(params.flowId);
      console.log(existingFlow);
      return new  NextResponse("Prompt deleted successfully", { status: 200 });
    } catch (e) {
      return new  NextResponse("Failed to delete prompt", { status: 500 });
    }
  };