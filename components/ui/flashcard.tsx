'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import React, { useState, useRef } from "react";
import clsx from "clsx";

interface Flashcard {
    front: string;
    back: string;
    isCorrect: boolean;
    isAnswered: boolean;
}



export default function FlashcardComponent({ flashcard }: { flashcard: Flashcard }) {
    const [inputValue, setInputValue] = useState('');
    const [flipped, setFlipped] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    function buttonClick() {

        if(inputValue === flashcard.back) {
            flashcard.isCorrect = true;
        } else {
            flashcard.isCorrect = false;
        }
    }

    function nextCard() {
        console.log("next");
    }
    
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && inputRef.current === e.currentTarget) {
            buttonClick();
        }
    }

    return (
        <div className="card p-4 w-128 h-40 transform perspective origin-center transition-transform">
            <div>
                <Card>
                    <CardHeader>
                        <CardTitle>{flashcard.front}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex w-full max-w-sm items-center space-x-2">
                            <Input
                                type="text"
                                placeholder="type the translation"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={handleKeyDown}
                                ref={inputRef}
                            />
                            <Button type="submit" onClick={buttonClick}>Check</Button>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="hidden">
                <CardHeader>
                    <CardTitle>{flashcard.isCorrect ? "correct": "incorrect"}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>the translation of {flashcard.front} is {flashcard.back}</p>
                    <Button onClick={nextCard}>Next Card</Button>
                </CardContent>
            </div>
        </div>
    )
}