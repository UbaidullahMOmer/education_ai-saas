import * as z from "zod";

export const formSchema = z.object({
  prompt: z.string().min(1, {
    message: "Prompt is required",
  }),
  wordCount: z.string().min(1, {
    message: "Word count is required",
  }),
  tone: z.string().min(1, {
    message: "Tone is required",
  }),
});
