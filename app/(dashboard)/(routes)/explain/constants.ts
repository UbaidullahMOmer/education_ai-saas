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
    value: "formal",
    label: "Formal",
  },
  {
    value: "casual",
    label: "Casual",
  },
  {
    value: "academic",
    label: "Academic",
  },
  {
    value: "persuasive",
    label: "Persuasive",
  },
  {
    value: "detailed",
    label: "Detailed",
  },
  {
    value: "funny",
    label: "Funny",
  },
  {
    value: "descriptive",
    label: "Descriptive",
  },
  {
    value: "analytical",
    label: "Analytical",
  },
  {
    value: "innovative",
    label: "Innovative",
  },
  {
    value: "motivational",
    label: "Motivational",
  },
];
