"use client";

import { Button, TextField, ThemeProvider, Typography } from "@mui/material";
import Link from "next/link";
import "@fontsource/jetbrains-mono";
import { theme } from "../data/themes";
import { useState } from "react";

const initialQuestions = {
  "What was my first message to you on Hinge?": "hi",
  "Which movie did we watch on our first date?": "spirited away",
  "What is Yogesh's most common phrase?": "bello",
};

function getRandomKey(obj: Record<string, string>) {
  const keys = Object.keys(obj);
  if (keys.length > 0) {
    return keys[Math.floor(Math.random() * keys.length)];
  } else {
    console.log("yep heres the issue");
    return null;
  }
  // return keys.length > 0 ? keys[Math.floor(Math.random() * keys.length)] : null;
}

export default function AuthPage() {
  const [questions, setQuestions] = useState(initialQuestions);
  const [numCorrect, setNumCorrect] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(getRandomKey(initialQuestions));
  const [answer, setAnswer] = useState("");

  const handleSubmit = () => {
    if (!currentQuestion) return;
    // console.log("Current questions:", questions)
    // console.log("Current question:", currentQuestion)
    // console.log("Current answer:", questions[currentQuestion])
    const correctAnswer = questions[currentQuestion].toLowerCase();
    if (answer.trim().toLowerCase() === correctAnswer) {
      setQuestions((prevQuestions) => {
        const updatedQuestions = { ...prevQuestions };
        delete updatedQuestions[currentQuestion];

        const nextQuestion = getRandomKey(updatedQuestions);
        setCurrentQuestion(nextQuestion);

        return updatedQuestions;
      });
      
      setNumCorrect((prev) => prev + 1);
      setAnswer("");
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <div className="fade-in-quick relative flex flex-col min-h-dvh bg-[#1E1E1E] text-white">
        <div className="pt-16 text-center">
          <Typography className="p-5" variant="h2">
            Authorization
          </Typography>
          <Typography>
            To make sure it's really you, please answer 3 questions correctly.
          </Typography>
        </div>

        <div className="flex flex-col items-center justify-center flex-grow mb-16">
          {numCorrect < 3 && currentQuestion ? (
            <>
              <Typography className="pb-7 text-[#fdd835]" variant="h5">{currentQuestion}</Typography>
              <TextField
                className="bg-white text-black"
                variant="outlined"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                sx={{ mb: 2}}
                placeholder="Your answer"
              />
              <Button variant="outlined" onClick={handleSubmit}>
                Submit
              </Button>
              <Typography 
                className="absolute bottom-8 right-8" 
                variant="body2"
              >
                Correct answers: {numCorrect}/3
              </Typography>
            </>
          ) : (
            <Link href="/authorized">
              <Button variant="outlined">Click to enter...</Button>
            </Link>
          )}
        </div>
      </div>
    </ThemeProvider>
  );
}
