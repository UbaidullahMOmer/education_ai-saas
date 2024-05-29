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
});

export const writingToneOptions = [
  {
    value: "professional",
    label: "Professional",
  },
  {
    value: "formal",
    label: "Formal",
  },
  {
    value: "informal",
    label: "Informal",
  },
  {
    value: "technical",
    label: "Technical",
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
