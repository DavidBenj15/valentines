"use client";

import { Button, TextField, ThemeProvider, Typography } from "@mui/material";
import Link from "next/link";
import "@fontsource/jetbrains-mono";
import { theme } from "../data/themes";
import { useState, useEffect } from "react";

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
}

export default function AuthPage() {
  const [questions, setQuestions] = useState(initialQuestions);
  const [numCorrect, setNumCorrect] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(getRandomKey(initialQuestions));
  const [answer, setAnswer] = useState("");
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    if (numCorrect > 0) {
      setFlash(true);
      const timer = setTimeout(() => setFlash(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [numCorrect]);

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
      setFlash(true);
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <div className="fade-in-quick relative flex flex-col min-h-dvh bg-[#1E1E1E] text-white">
        <div className="flex flex-col pt-16 text-center">
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
              <Typography className="pb-7 text-[#fdd835]" variant="h5">
                {currentQuestion}
              </Typography>

              <div className="flex items-center space-x-4">
                <TextField
                  className="bg-white text-black"
                  variant="outlined"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  placeholder="Your answer"
                />
                <Button variant="outlined" onClick={handleSubmit}>
                  Submit
                </Button>
              </div>

              <Typography 
                className={`absolute bottom-8 right-8 ${flash ? "flash" : ""}`}
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
      <style jsx global>{`
        .flash {
          animation: flash 1s forwards;
        }

        @keyframes flash {
          0% {
            color: green;
          }
          100% {
            color: white;
          }
        }
      `}</style>
    </ThemeProvider>
  );
}
