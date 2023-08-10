import Flow from "@/models/flow";
import { connectToDB } from "@/lib/db";
import { NextResponse } from "next/server";

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