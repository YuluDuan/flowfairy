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
  }): Promise<any> {
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

      if (response.ok){
        console.log("response ok", newFlow);
      }

    } catch (error) {
      console.log("Oh No error!", error);
    }
  };

  /**
 * Fetches all flows from the database.
 *
 * @returns {Promise<any>} The flow data.
 * @throws Will throw an error if fetching fails.
 */
export async function getFlowsFromDatabase(): Promise<any> {
  try {
    const response = await fetch(process.env.URL+ "/api/flow");
    const data = await response.json();

    if (response.status !== 200) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

