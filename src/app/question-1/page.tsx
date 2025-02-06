"use client"

import { ThemeProvider } from "@emotion/react";
import { Button, Typography, Checkbox, FormControlLabel } from "@mui/material";
import { theme } from "../data/themes";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Question1() {
    const [checkedCount, setCheckedCount] = useState(0);

    const handleCheckboxChange = (event) => {
        setCheckedCount(prevCount => event.target.checked ? prevCount + 1 : prevCount - 1);
    };

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
                        <Image src="/pusheen-cats.gif" width="250" height="250" alt="pusheen" className="pb-3"></Image>
                        <div className="flex flex-col">
                            <FormControlLabel control={<Checkbox onChange={handleCheckboxChange} />} label="Yes" />
                            <FormControlLabel control={<Checkbox onChange={handleCheckboxChange} />} label="Definitely" />
                            <FormControlLabel control={<Checkbox onChange={handleCheckboxChange} />} label="Absolutely!!!" />
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