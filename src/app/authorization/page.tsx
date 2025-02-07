"use client";

import { Button, TextField, ThemeProvider, Typography } from "@mui/material";
import Link from "next/link";
import "@fontsource/jetbrains-mono";
import { theme } from "../data/themes";
import { useState, useEffect } from "react";
const initialQuestions: { [key: string]: string } = {
  "What was my first message to you on Hinge?": "hi",
  "Which movie did we watch on our first date?": "spirited away",
  "What is Yogesh's most common spoken phrase?": "bello",
  "If both of our dogs merged into one, what would its name be?": "lemaxie",
  "Which video game we get married on?": "stardew valley",
  "Who was performing when a random concert-goer recorded us staring at each other lovingly?": "beabadoobee"
};

function getRandomKey(obj: Record<string, string>) {
  const keys = Object.keys(obj);
  if (keys.length > 0) {
    return keys[Math.floor(Math.random() * keys.length)];
  } else {
    return "";
  }
}

export default function AuthPage() {
  const [questions, setQuestions] = useState(initialQuestions);
  const [numCorrect, setNumCorrect] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState<string>(
    getRandomKey(initialQuestions),
  );
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
    } else {
      setCurrentQuestion(getRandomKey(questions));
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <div className="fade-in-quick relative flex flex-col min-h-dvh bg-[#1E1E1E] text-white">
        <div className="flex flex-col pt-16 text-center mx-5">
          <Typography className="p-5" variant="h2">
            Authorization
          </Typography>
          <Typography>
            To make sure only the correct person can enter this website
            please answer 3 questions correctly.
          </Typography>
        </div>

        <div className="flex flex-col items-center justify-center flex-grow mb-16 mx-3 text-center">
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
