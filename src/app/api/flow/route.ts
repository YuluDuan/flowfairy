import { connectToDB } from "@/lib/db";
import Flow from "@/models/flow";
import { NextResponse } from "next/server";

export const GET = async(req: Request) => {
    try{
        await connectToDB();
        const flows = await Flow.find({});
        return new NextResponse(JSON.stringify(flows), {status: 200})
    }catch(error){
        return new NextResponse('Failed to fetch all prompts', {status: 500})
    }
}