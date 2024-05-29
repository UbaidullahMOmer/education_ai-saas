import { Button } from "@/components/ui/button";
import React, { useState } from "react";

interface QuestionsProps {
  questions: itemsList[];
}
type itemsList = {
  question: string;
  options: any;
  answer: string;
};

const QuizComponent = ({ questions }: QuestionsProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [quizFinished, setQuizFinished] = useState<boolean>(false);

  const handleAnswer = (option: any) => {
    if (option === questions[currentQuestionIndex].answer) {
        setScore(score + 1)
    }
    if(currentQuestionIndex < questions.length - 1){
        setCurrentQuestionIndex(currentQuestionIndex + 1)
    }else {
        setQuizFinished(true)
    }
  };

  return (
    <div>
      {quizFinished === true ? (
        <div className="flex flex-col mt-4 text-center rounded-lg space-y-4 bg-[#153448] p-6 text-white">
          <p className="text-xl font-bold">Quiz Finished</p>
          <p className="text-lg font-semibold">
            Your score: {score}/{questions.length}
          </p>
          <p className="text-lg font-semibold">
            Correct Answers: {score}
          </p>
          <p className="text-lg font-semibold">
            Wrong Answers: {questions.length - score}
          </p>

        </div>
      ) : (
        <div className="flex flex-col mt-4 text-center p-4 bg-[#153448] rounded-lg text-white">
          <h1 className="text-lg font-bold mb-4">{questions[currentQuestionIndex].question}</h1>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 px-4 md:px-32">
            {questions[currentQuestionIndex].options.map((opt:string, index:number) => (
              <Button className="bg-black text-left h-auto w-auto font-bold text-lg" key={index} onClick={() => {handleAnswer(opt)}}>{opt}</Button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizComponent;
