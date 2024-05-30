import { checkApiLimit, checkProApiLimit, increaseAPiLimit } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import OpenAI from "openai/index.mjs";


const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
    try {
        // const { userId } = auth();
        const body = await req.json();
        const { messages, tone } = body;
        
        console.log(messages[0].content)

        // if (!userId) {
        //     return new NextResponse("Unauthorized User", { status: 401 })
        // }
        if (!openai.apiKey) {
            return new NextResponse("OpenAI API key is Invalid", { status: 500 })
        }
        if (!messages) {
            return new NextResponse("Messages are required", { status: 400 })
        }
        if (!tone) {
            return new NextResponse("Tone is required", { status: 400 })
        }

        const freeTrail = await checkApiLimit()
        const isPro = await checkSubscription();

        if(!freeTrail && !isPro){
            console.log("Free Expired")
            return new NextResponse("Free Trail has expired", {status: 403})
        }

        const proMode = await checkProApiLimit();
        if(!proMode){
            console.log("Pro Expired")
            return new NextResponse("Pro mode has expired", {status: 403})
        }

        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                { "role": "system", "content": `
                You are powerful AI assistant and you are a explaination professional
                Explain the text given below in a ${tone} tone
                ` },
                { "role": "user", "content": messages[0].content }
            ]
        });

        await increaseAPiLimit()
        
        console.log(response)
        return NextResponse.json(response.choices[0].message, {status: 200})

    } catch (error) {
        console.log("[SUMMARIZATION_ERROR]", error)
        return new NextResponse("Internal Error", { status: 500 })
    }
}