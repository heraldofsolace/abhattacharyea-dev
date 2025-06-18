"use client"

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function CycleText({words}: { words: { text: string, classes: string}[]}) {
    const [index, setIndex] = useState(0);

    const total = words.length;
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((current) => (current + 1) % total);
        }, 3000);
        return () => clearInterval(interval);
    }, [total]);

    return (
        <div className="block">
          <span>
            <AnimatePresence mode="wait">
              <motion.h2
                  key={`words_${index}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.08 }}
                  className="inline-block"
              >
                <span className={words[index].classes}>{words[index].text}</span>
              </motion.h2>
            </AnimatePresence>
          </span>
        </div>
    );
}
