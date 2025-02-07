"use client";

import { Button, ThemeProvider, Typography } from "@mui/material";
import Link from "next/link";
import "@fontsource/jetbrains-mono";
import { theme } from "./data/themes";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <div className="fade-in-slow flex flex-col items-center justify-center bg-[#1E1E1E] min-h-dvh text-white">
        <div className="p-10">
          <Typography variant="h1">Welcome</Typography>
        </div>
        <Link href="/authorization">
          <Button variant="outlined">Start</Button>
        </Link>
      </div>
    </ThemeProvider>
  );
}
