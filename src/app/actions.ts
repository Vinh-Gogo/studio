"use server"

import { smartSearch, type SmartSearchInput, type SmartSearchOutput } from "@/ai/flows/smart-search"

export async function smartSearchAction(input: SmartSearchInput): Promise<SmartSearchOutput> {
  // Here you could add authentication, logging, or other server-side logic
  console.log("Executing smart search for query:", input.query)
  try {
    const output = await smartSearch(input)
    return output
  } catch (error) {
    console.error("Error in smartSearchAction:", error)
    // Return a structured error response
    return {
        results: ["An error occurred while searching. Please try again later."]
    }
  }
}
