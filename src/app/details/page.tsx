import { connectToDB } from "@/lib/db";
import Flow from "@/models/flow";

async function getFlows() {
  try {
    await connectToDB();
    const flow = await Flow.find({});
    return flow;
  } catch (error) {
    throw new Error("failed to fetch flow");
  }
}

export default async function Details() {
  const flows = await getFlows();
  return (
    <>
      <p>{JSON.stringify(flows)}</p>
    </>
  );
}
