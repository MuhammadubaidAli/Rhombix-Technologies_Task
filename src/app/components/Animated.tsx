"use client";

import { useEffect, useState } from "react";

const AnimatedText = () => {
    const phrases = [ "Web Developer", "Frontend Developer"];
    const [displayedText, setDisplayedText] = useState('');
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [wordIndex, setWordIndex] = useState(0);

    useEffect(() => {
        const words = phrases[phraseIndex].split(' ');

        if (wordIndex < words.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + ' ' + words[wordIndex]);
                setWordIndex((prev) => prev + 1);
            }, 400);

            return () => clearTimeout(timeout);
        } else {
            const timeout = setTimeout(() => {
                setWordIndex(0);
                setPhraseIndex((prev) => (prev + 1) % phrases.length);
                setDisplayedText('');
            }, 2000);

            return () => clearTimeout(timeout);
        }
    }, [wordIndex, phraseIndex, phrases]);

    return (
        <h2 >{displayedText.trim()}</h2>
    );
};


// Loader.tsx
import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-red z-50">
      {/* Your custom animation goes here */}
      <div className="w-20 h-20 border-t-4 border-blue-600 border-solid rounded-full animate-spin"></div>
    </div>
  );
};


export default AnimatedText;Loader;


