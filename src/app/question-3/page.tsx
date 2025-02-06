"use client"

import { ThemeProvider } from "@emotion/react";
import { Button, Modal, Typography, Box } from "@mui/material";
import { theme } from "../data/themes";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart } from 'lucide-react';

const messages = [
    'I fw you heavy',
    'U r my wife!',
    'Hi bae',
    'Ima touch you',
    'I meow you',
    'Hi fine shyt',
    'Only us forever <3',
    'Hi!',
    'I gleep you',
]

export default function Question3() {
    const [openModal, setOpenModal] = useState(false);
    const [message, setMessage] = useState("");

    const handleOpenModal = () => {
        setMessage(messages[Math.floor(Math.random() * messages.length)]); // select random
        setOpenModal(true);
    }

    return (
        <ThemeProvider theme={theme}>
            <div className="relative flex flex-col min-h-dvh bg-[#F06292] text-white">
                <div className="pt-12 text-center">
                    <Typography className="p-7" variant="h2">
                        Question (?) 3
                    </Typography>
                    <Typography>
                        Click on the candy to view a valentines message.
                    </Typography>
                    <Typography>
                        Take as many as you want!
                    </Typography>
                </div>
                <div className="w-full flex justify-center py-7">
                    <Button onClick={handleOpenModal}>
                        <Image src="/sweethearts.png" alt="sweethearts" width="250" height="250"/>
                    </Button>
                    <Modal
                        open={openModal}
                        onClose={() => setOpenModal(false)}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box
                         sx={{
                              position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: 500,
                                bgcolor: "#1E1E1E",
                                border: 'rounded 10px solid',
                                borderRadius: 25,
                                boxShadow: 24,
                                p: 4,
                         }}
                         className="relative flex justify-center items-center"
                        >
                            <Typography
                                sx={{
                                    position: 'absolute',
                                    color: 'white',
                                    zIndex: 1,
                                }}
                            >
                                {message}
                            </Typography>
                            <Heart size={300} color="#ec407a"/>
                        </Box>
                    </Modal>
                </div>
                <div className="w-full flex justify-center">
                    <Link href="/end">
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
                            I'm full
                        </Button>
                    </Link>
                </div>
            </div>
        </ThemeProvider>
    )
}