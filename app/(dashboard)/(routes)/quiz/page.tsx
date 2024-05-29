"use client";

import * as z from "zod";
import Heading from "@/components/heading";
import { Sheet } from "lucide-react";
import { useForm } from "react-hook-form";
import { formSchema, noOfQuestionsOptions, quizOptions } from "./constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
// import { ChatCompletionMessageParam } from "openai/resources/index.mjs";
import axios from "axios";
import { Empty } from "@/components/empty";
import { Loader } from "@/components/loader";
// import { cn } from "@/lib/utils";
// import { UserAvatar } from "@/components/user-avatar";
// import { BotAvatar } from "@/components/bot-avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import QuizComponent from "./quiz";

let questionfinal = "" as string;

const QuizPage = () => {
  const router = useRouter();
  const [message, setMessage] = useState([]);
  const [quizStarted, setQuizStarted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setQuizStarted(false)
      const response = await axios.post("/api/quiz", {
        prompt: values.prompt,
        typeOfQuiz: values.typeOfQuiz,
        // noOfQuestions: values.noOfQuestions,
      });
      console.log(response.data);
      setMessage(response.data.questions);
      console.log(message);
      form.reset();
    } catch (error: any) {
      // todo: Open Pro Modal
      // if (error.response.status === 403) proModal.open();
      console.log(error);
    } finally {
      router.refresh();
    }
  };
  return (
    <div>
      <Heading
        title="Quiz Generator"
        description="Generate Quiz in seconds"
        icon={Sheet}
        iconColor="text-red-500"
        bgColor="bg-red-500/10"
      />
      <div className="px-4 lg:px-8">
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="
                rounded-lg 
                border 
                w-full 
                p-4 
                px-3 
                md:px-6 
                focus-within:shadow-sm
                grid
                grid-cols-12
                gap-2
              "
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-12">
                    <FormControl className="m-0 p-0">
                      <Input
                        className="border-2 p-2 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        disabled={isLoading}
                        placeholder="Paste the text here"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <label className="p-2 text-sm col-span-12 lg:col-span-2">
                Type of Quiz:
              </label>
              <FormField
                control={form.control}
                name="typeOfQuiz"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-3">
                    <Select
                      disabled={isLoading}
                      onValueChange={field.onChange}
                      value={field.value}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue defaultValue={field.value} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {quizOptions.map((option, index) => (
                          <SelectItem key={index} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />

              {/* <label className="p-2 text-sm col-span-12 lg:col-span-2">
                No of Questions:
              </label>
              <FormField
                control={form.control}
                name="noOfQuestions"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-3">
                    <Select
                      disabled={isLoading}
                      onValueChange={field.onChange}
                      value={field.value}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue defaultValue={field.value} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {noOfQuestionsOptions.map((option, index) => (
                          <SelectItem key={index} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              /> */}

              <Button
                className="col-span-12 lg:col-span-12 w-full"
                type="submit"
                disabled={isLoading}
                size="icon"
              >
                Generate
              </Button>
            </form>
          </Form>
        </div>
        <div className="space-y-4 mt-4">
          {isLoading && (
            <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
              <Loader />
            </div>
          )}
          {message.length === 0 && !isLoading && (
            <Empty label="No text written." />
          )}
          {/* {message.length > 0 &&
            message.map((mcq, index) => (
              <div className="bg-gray-100 p-2 rounded-lg text-lg" key={index}>
                <h1 className="font-semibold">
                  Question: {String(mcq.question)}
                </h1>
                {mcq.options.map((option, index) => (
                  <div key={index}>{option}</div>
                ))}
                <h1>
                  <span className="text-green-800 font-semibold">
                    Correct Answer:
                  </span>{" "}
                  {String(mcq.answer)}
                </h1>
              </div>
            ))} */}
        </div>
        {message.length !== 0 && quizStarted !== true && (
          <Button onClick={() => setQuizStarted(true)}>Start Quiz</Button>
        )}
        {quizStarted === true && (<QuizComponent questions={message} />)}
      </div>
    </div>
  );
};

export default QuizPage;
