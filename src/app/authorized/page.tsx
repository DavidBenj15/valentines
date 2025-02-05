"use client";

import { ThemeProvider } from "@emotion/react";
import { Button, Typography } from "@mui/material";
import { theme } from "../data/themes";
import { useEffect, useRef } from "react";
import Link from "next/link";

export default function AuthorizedPage() {
    const lastSpawnTime = useRef(0);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const now = Date.now();
            if (now - lastSpawnTime.current < 100) return;
            lastSpawnTime.current = now;

            const heart = document.createElement("img");
            heart.src = "./heart.png";
            heart.classList.add("heart");
            document.body.appendChild(heart);

            heart.style.left = `${e.clientX}px`;
            heart.style.top = `${e.clientY}px`;

            setTimeout(() => {
                heart.style.transform = `translateY(100px) scale(0)`;
                heart.style.opacity = "0";
            }, 10);

            setTimeout(() => {
                heart.remove();
            }, 5000);
        };

        document.addEventListener("mousemove", handleMouseMove);
        return () => document.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <div className="relative flex flex-col min-h-dvh bg-[#F06292] text-white">
                <div className="pt-16 text-center">
                    <Typography className="p-5" variant="h2">
                        Hi!
                    </Typography>
                    <Typography>
                        Hi bae! Welcome to this super secret website that I made only for you.
                    </Typography>
                    <Typography>
                        Click on the button below to answer a couple of questions...
                    </Typography>
                </div>

                <div className="flex flex-col items-center justify-center flex-grow">
                    <Link href="/question-1">
                        <Button 
                            variant="contained" 
                            sx={{ 
                                width: '100%',
                                maxWidth: '400px',
                                fontSize: '1.5rem',
                                padding: '1rem',
                                textTransform: 'none'
                            }}
                        >
                            Click me👅
                        </Button>
                    </Link>

                </div>
            </div>
        </ThemeProvider>
    );
}
