import Prompt from "@models/prompt";
import { connectToDatabase } from "@utils/database";

export const GET = async (request) => {
    try {
        await connectToDatabase()
        console.log("Fetching all prompts....")
        const prompts = await Prompt.find({}).populate('creator')
        console.log("All prompts: ", prompts)
        return new Response(JSON.stringify(prompts), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all prompts", { status: 500 })
    }
} 

