import { connectToDB } from "@/lib/db";
import Flow from "@/models/flow";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';
export const GET = async(req: Request) => {
    try{
        await connectToDB();
        const url = new URL(req.url);
        const searchParams = new URLSearchParams(url.search);
        const userId = searchParams.get("userId");
        if (!userId) {
         return  new NextResponse(JSON.stringify('User ID not provided in query'), {status: 400})
        }

        
        const flows = await Flow.find({creator: userId});
        if(!flows) return new NextResponse(JSON.stringify('Not found'), {status: 404})
        return new NextResponse(JSON.stringify(flows), {status: 200})
    }catch(error){
        return new NextResponse(JSON.stringify(`Failed to fetch all flows  ${error}`), {status: 500})
    }
}