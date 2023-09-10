//GET

import Prompt from "@models/prompt";
import { connectToDatabase } from "@utils/database";

export const GET = async (request, { params }) => {
    try {
        await connectToDatabase()

        const prompt = await Prompt.findById(params.id).populate("creator")
        if (!prompt) return new Response("Prompt Not Found", { status: 404 });

        return new Response(JSON.stringify(prompt), { status: 200 })

    } catch (error) {
        return new Response("Internal Server Error", { status: 500 });
    }
}

//PATCH

export const PATCH = async (request, { params }) => {
    const { prompt, tag } = await request.json();
    try {
        await connectToDatabase()
        const exisingPrompt = await Prompt.findById(params.id)
        if (!exisingPrompt) return new Response("Prompt Not Found", { status: 404 });
        exisingPrompt.prompt = prompt;
        exisingPrompt.tag = tag;

        await exisingPrompt.save();
        return new Response(JSON.stringify(exisingPrompt), { status: 200 })

    } catch (error) {
        return new Response("Failed to update prompt", { status: 500 });
    }

}


//DELETE

export const DELETE = async (request, { params }) => {
    try {
        console.log("Deleting prompt with id: ", params.id);
        await connectToDatabase();

        // Find the prompt by ID and remove it
        await Prompt.findByIdAndRemove(params.id);

        return new Response("Prompt deleted successfully", { status: 200 });
    } catch (error) {
        return new Response("Error deleting prompt", { status: 500 });
    }
}