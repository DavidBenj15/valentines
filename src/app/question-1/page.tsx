"use client"

import { ThemeProvider } from "@emotion/react";
import { Button, Typography, Checkbox, FormControlLabel } from "@mui/material";
import { theme } from "../data/themes";
import Link from "next/link";

export default function Question1() {
    return (
        <ThemeProvider theme={theme}>
            <div className="relative flex flex-col min-h-dvh bg-[#F06292] text-white">
                <div className="pt-12 text-center">
                    <Typography className="p-7" variant="h2">
                        Question 1
                    </Typography>
                    <Typography>
                        Will you be my valentine?
                    </Typography>

                    <div className="flex flex-col w-full justify-center items-center">
                        <img src="./pusheen-cats.gif" width="250" className="pb-3"></img>
                        <div className="flex flex-col">
                            <FormControlLabel control={<Checkbox />} label="Yes" />
                            <FormControlLabel control={<Checkbox />} label="Definitely" />
                            <FormControlLabel control={<Checkbox />} label="Absolutely!!!" />
                        </div>

                    </div>
                </div>

                <div className="flex flex-col items-center justify-center flex-grow">


                    <Link href="/question-2">
                        <Button 
                            variant="outlined" 
                            sx={{ 
                                width: '100%',
                                maxWidth: '400px',
                                fontSize: '1.5rem',
                                padding: '1rem',
                                textTransform: 'none'
                            }}
                        >
                            Next question ->
                        </Button>
                    </Link>

                </div>
            </div>
        </ThemeProvider>
    )
}