import Flow from "@/models/flow";
import { connectToDB } from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async (
  req: Request,
  { params }: { params: {flowId: string } }
) => {
  try {
    await connectToDB();

    const flow = await Flow.findOne({id: params.flowId});
    console.log(flow);

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
      const existingFlow = await Flow.findOneAndDelete({ id: params.flowId });
      console.log(existingFlow);
      return new  NextResponse("Prompt deleted successfully", { status: 200 });
    } catch (e) {
      return new  NextResponse("Failed to delete prompt", { status: 500 });
    }
  };

  export const PATCH = async (
    req: Request,
    { params }: { params: { flowId: string } }
  ) => {
    const { flowData } = await req.json();
    try {
      await connectToDB();
      const existingFlow = await Flow.findOne({id: params.flowId});
  
      if (!existingFlow)
        return new Response("Flow not found", { status: 404 });
  
      existingFlow.flowData= flowData;
  
      await existingFlow.save();
      return new Response(JSON.stringify(existingFlow), { status: 200 });
    } catch (e) {
      return new Response("Failed to update prompt", { status: 500 });
    }
  };