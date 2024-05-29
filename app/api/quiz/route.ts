// import { checkApiLimit, increaseAPiLimit } from "@/lib/api-limit";
// import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import OpenAI from "openai/index.mjs";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    // const { userId } = auth();
    const body = await req.json();
    const { prompt, typeOfQuiz } = body;

    // console.log(prompt);

    // if (!userId) {
    //     return new NextResponse("Unauthorized User", { status: 401 })
    // }
    if (!openai.apiKey) {
      return new NextResponse("OpenAI API key is Invalid", { status: 500 });
    }
    if (!prompt) {
      return new NextResponse("Prompt is required", { status: 400 });
    }
    if (!typeOfQuiz) {
      return new NextResponse("Type of quiz is required", { status: 400 });
    }
    // if (!noOfQuestions) {
    //   return new NextResponse("No of questions are required", { status: 400 });
    // }
    // const freeTrail = await checkApiLimit()

    // if(!freeTrail){
    //     return new NextResponse("Free Trail has expired", {status: 403})
    // }

    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: `
          Task: You are a quiz master. Generate ${typeOfQuiz} random questions with 4 multiple choice answers from the text given below. Also provide the correct answer separately.
          The response should be in following format: {"questions" : [{"id": 0, "question": "", "options": [], "answer": ""}, ...]}
          Style: Academic
          Format: JSON          
                `,
        },
        { role: "user", content: prompt },
      ],
      response_format: { type: "json_object" },
    });

    // await increaseAPiLimit()

    console.log(response.choices[0].message);
    return NextResponse.json(
      JSON.parse(response.choices[0].message.content || ""),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log("[QUIZ_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
