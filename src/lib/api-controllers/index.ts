import { FlowType, UserType } from "@/types";
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
    id: string;
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
        id: newFlow.id,
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
 * Reads all flows from the database.
 *
 * @returns {Promise<FlowType[]>} The flow data.
 * @throws Will throw an error if fetching fails.
 */
export async function readFlowsFromDatabase(): Promise<FlowType[]> {
  try {
    const response = await fetch("/api/flow", { cache: 'no-store' });
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

/**
 * Deletes a flow from the database.
 *
 * @param {string} flowId - The ID of the flow to delete.
 * @returns {Promise<any>} The deleted flow data.
 * @throws Will throw an error if deletion fails.
 */
export async function deleteFlowFromDatabase(flowId: string) {
  try {
    const response = await fetch(`/api/flow/${flowId}`,{
      method: "DELETE",
    });
    
    if (response.status !== 200) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }


    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

/**
 * Fetches a flow from the database by ID.
 *
 * @param {string} flowId - The ID of the flow to fetch.
 * @returns {Promise<FlowType>} The flow data.
 * @throws Will throw an error if fetching fails.
 */
export async function getFlowFromDatabase(flowId: string): Promise<FlowType>{
  try {
    const response = await fetch(`/api/flow/${flowId}`);
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

/**
 * Updates an existing flow in the database.
 *
 * @param {FlowType} updatedFlow - The updated flow data.
 * @returns {Promise<FlowType>} The updated flow data.
 * @throws Will throw an error if the update fails.
 */
export async function updateFlowInDatabase(
  updatedFlow: FlowType
): Promise<FlowType> {
  try {
    const response = await fetch(`/api/flow/${updatedFlow.id}`, {
      method: "PATCH",
      body: JSON.stringify({
        flowData: updatedFlow.flowData,
      }),
    });

    if (response.status !== 200) {
      throw new Error(`Something went wrong, status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    throw error;
  }
}
