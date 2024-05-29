import * as z from "zod";

export const formSchema = z.object({
    prompt: z.string().min(1, {
        message: "Prompt is required"
    }),
    tone: z.string().min(1, {
        message: "Tone is required"
    })
})

export const toneOptions = [
    {
      value: "professional",
      label: "Professional",
    },
    {
      value: "funny",
      label: "Funny",
    },
    {
      value: "casual",
      label: "Casual",
    },
  ];