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
  citation: z.string().min(1, {
    message: "Tone is required",
  }),
});

export const citationStyles = [
  {
    value: "APA",
    label: "APA",
  },
  {
    value: "MLA",
    label: "MLA",
  },
  {
    value: "Chicago",
    label: "Chicago",
  },
  {
    value: "Harvard",
    label: "Harvard",
  },
  {
    value: "IEEE",
    label: "IEEE",
  },
  {
    value: "funny",
    label: "Funny",
  },
  {
    value: "Vancouver",
    label: "Vancouver",
  },
  {
    value: "None",
    label: "None",
  },
];

export const summaryTones = [
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
