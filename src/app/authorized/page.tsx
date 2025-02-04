"use client"

import { ThemeProvider } from "@emotion/react";
import { Button, Typography } from "@mui/material";
import { theme } from "../data/themes";

export default function AuthorizedPage() {
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
                </div>

                <div className="flex flex-col items-center justify-center flex-grow">
                    <Button 
                        variant="contained" 
                        sx={{ 
                            width: '80%',
                            maxWidth: '400px',
                            fontSize: '1.5rem',
                            padding: '1rem',
                            textTransform: 'none'
                        }}
                    >
                        Click me👅
                    </Button>
                </div>
            </div>
        </ThemeProvider>
    );
}