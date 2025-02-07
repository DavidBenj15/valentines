"use client";

import { ThemeProvider } from "@emotion/react";
import { Button, Typography, Link } from "@mui/material";
import { theme } from "../data/themes";
import { useRef, useEffect } from "react";
import Image from "next/image";
import NextLink from "next/link";

export default function End() {
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
        <div className="pt-12 text-center">
          <Typography className="p-7" variant="h2">
            {"Thank you bae <3"}
          </Typography>
          <Typography>
            I hope you enjoyed this little valentine&apos;s day questionnaire I made
          </Typography>
          <Typography>
            and I hope you answered yes (+definitely +absolutely?) to being my
            valentine🤞
          </Typography>
          <Typography>
            You can check out the code{" "}
            <Link href="https://github.com/DavidBenj15/valentines" color="info">
              here
            </Link>{" "}
            if you&apos;re interested!
          </Typography>
        </div>
        <div className="w-full flex flex-col items-center pt-10">
          <Image
            src="/spinning.gif"
            alt="spinning"
            width="250"
            height="250"
            className="rounded-lg"
          />
          <NextLink href="/">
            <Button
              variant="outlined"
              sx={{
                width: "100%",
                maxWidth: "400px",
                fontSize: "1.5rem",
                padding: "1rem",
                textTransform: "none",
                marginTop: "30px",
              }}
            >
              {"<< Restart"}
            </Button>
          </NextLink>
        </div>
      </div>
    </ThemeProvider>
  );
}
