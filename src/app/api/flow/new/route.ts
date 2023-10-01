import Flow from "../../../../models/flow";
import { connectToDB } from "../../../../lib/db";
import { NextResponse} from 'next/server'

export const POST = async (req : Request) => {
    const {title, id, flowData, userId} = await req.json();
    try {
        await connectToDB();
        const newFlow = new Flow({title, id, flowData, creator: userId});

        console.log(newFlow);
        await newFlow.save();
        return new NextResponse(JSON.stringify(newFlow), { status: 201 })
    } catch (error) {
        console.log(error);
        return new NextResponse("Failed to create a new prompt", { status: 500 });
    }
}