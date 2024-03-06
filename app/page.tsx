'use client'

import React, { useState } from 'react';
import FlashcardComponent from '@/components/ui/FlashcardComponent';

const flashcards = [
  { front: 'Question 1', back: 'Answer 1' },
  { front: 'Question 2', back: 'Answer 2' },
  { front: 'Question 3', back: 'Answer 3' },
  // Add more flashcards here
];

export default function FlashcardDeck() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div>
      <FlashcardComponent
        flashcard={flashcards[currentIndex]}
        flashcards={flashcards}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </div>
  );
}