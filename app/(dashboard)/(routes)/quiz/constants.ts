import * as z from "zod";

export const formSchema = z.object({
  prompt: z.string().min(1, {
    message: "Prompt is required",
  }),
  typeOfQuiz: z.string().min(0, {
    message: "type is required",
  }),
  // noOfQuestions: z.string().min(0, {
  //   message: "type is required",
  // }),
});

export const quizOptions = [
  {
    value: "5",
    label: "5 MCQ's",
  },
  {
    value: "10",
    label: "10 MCQ's",
  },
  {
    value: "15",
    label: "15 MCQ's",
  },
  {
    value: "fill in the blanks",
    label: "Fill in the blanks",
  },
];

export const noOfQuestionsOptions = [
  {
    value: "5",
    label: "5",
  },
  {
    value: "10",
    label: "10",
  },
  {
    value: "15",
    label: "15",
  },
  {
    value: "20",
    label: "20",
  },
];
