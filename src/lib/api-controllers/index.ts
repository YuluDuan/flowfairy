import { ReactFlowJsonObject } from "reactflow";

  
  /**
   * Save a new flow to the database.
   *
   * @param {FlowType} newFlow - The flow data to save.
   * @returns {Promise<any>} The saved flow data.
   * @throws Will throw an error if saving fails.
   */
  export async function saveFlowToDatabase (newFlow: {
    title: string;
    flowData: ReactFlowJsonObject;
  }) {
    try {
      const response = await fetch("/api/flow/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: newFlow.title,
          flowData: newFlow.flowData,
        }),
      });

      console.log(newFlow.flowData);
      console.log(newFlow.title);
    } catch (error) {
      console.log("error!!!!!", error);
    }
  };