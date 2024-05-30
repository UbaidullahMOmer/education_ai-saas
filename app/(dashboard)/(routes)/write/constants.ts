import * as z from "zod";

export const formSchema = z.object({
  prompt: z.string().min(1, {
    message: "Prompt is required",
  }),
  tone: z.string().min(0, {
    message: "tone is required",
  }),
  type: z.string().min(0, {
    message: "type is required",
  }),
  citation: z.string().min(0, {
    message: "type is required",
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

export const writingToneOptions = [
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



export const writingTypeOptions = [
  {
    value: "article",
    label: "Article",
  },
  {
    value: "projects",
    label: "Projects",
  },
  {
    value: "interveiws",
    label: "Interveiws",
  },
  {
    value: "email",
    label: "Email",
  },
  {
    value: "research article",
    label: "Research Article",
  },
];
