"use client"

import { useState, useEffect } from "react";
import { ThemeProvider } from "@emotion/react";
import { Button, Typography, Checkbox, FormControlLabel, TextField } from "@mui/material";
import { theme } from "../data/themes";
import Link from "next/link";
import Image from "next/image";

export default function Question2() {
    const [inputValue, setInputValue] = useState("");
    const [timeLeft, setTimeLeft] = useState(9);

    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [timeLeft]);

    return (
        <ThemeProvider theme={theme}>
            <div className="relative flex flex-col min-h-dvh bg-[#F06292] text-white">
                <div className="pt-12 text-center">
                    <Typography className="p-7" variant="h2">
                        Question 2
                    </Typography>
                    <Typography>
                        {"Where should we eat for Valentine's Day?"}
                    </Typography>

                    <div className="flex flex-col w-full justify-center items-center mt-6">
                        {/* Text Field for user input */}
                        <TextField
                            variant="outlined"
                            placeholder="Type your answer..."
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            sx={{ 
                                backgroundColor: "white", 
                                borderRadius: "5px", 
                                width: "80%", 
                                maxWidth: "400px" 
                                
                            }}
                        />

                        {/* Timer Countdown */}
                        <div className={`flex flex-col pb-4 items-center mt-5 ${timeLeft <= 5 && "bg-red-500 rounded-lg opacity-50"}`}>
                            <Typography variant="h6" sx={{ marginTop: 2 }}>
                                {timeLeft > 0 ? `00:0${timeLeft}` : "00:00"}
                            </Typography>
                        </div>


                        {/* Checkbox appears after timer ends */}
                        {timeLeft === 0 && (
                            <FormControlLabel
                                control={<Checkbox sx={{ color: "white" }} />}
                                label="Let bf choose!"
                                onClick={() => setInputValue("Let bf choose!")}
                            />
                        )}
                        {inputValue === "Let bf choose!" &&
                            <div>
                                <Image src="/bread-pusheen.gif" alt="bread" width="250" height="250" className="rounded-xl"/>
                            </div>
                        }
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center pb-7">
                    {timeLeft === 0 && inputValue && <Link href="/question-3">
                        <Button 
                            variant="outlined" 
                            sx={{ 
                                width: '100%',
                                maxWidth: '400px',
                                fontSize: '1.5rem',
                                padding: '1rem',
                                textTransform: 'none',
                                marginTop: '30px'
                            }}
                        >
                            {"Last question ->"}
                        </Button>
                    </Link>}
                </div>
            </div>
        </ThemeProvider>
    );
}
