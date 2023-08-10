import Flow from "../../../../models/flow";
import { connectToDB } from "../../../../lib/db";
import { NextResponse} from 'next/server'

export const POST = async (req : Request) => {
    const {title, flowData} = await req.json();
    try {
        await connectToDB();
        const newFlow = new Flow({title, flowData});

        await newFlow.save();
        return new NextResponse(JSON.stringify(newFlow), { status: 201 })
    } catch (error) {
        console.log(error);
        return new NextResponse("Failed to create a new prompt", { status: 500 });
    }
}