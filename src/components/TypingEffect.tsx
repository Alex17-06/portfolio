"use client";

import { useState, useEffect, useRef, useCallback } from "react";

interface TypingEffectProps {
  texts: string[];
  speed?: number;
  deleteSpeed?: number;
  pauseTime?: number;
  className?: string;
}

export default function TypingEffect({
  texts,
  speed = 80,
  deleteSpeed = 40,
  pauseTime = 2000,
  className = "",
}: TypingEffectProps) {
  const [displayText, setDisplayText] = useState("");
  const textIndexRef = useRef(0);
  const charIndexRef = useRef(0);
  const isDeletingRef = useRef(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimer = useCallback(() => {
    if (timerRef.current !== null) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => {
    function tick() {
      const currentText = texts[textIndexRef.current];
      const isDeleting = isDeletingRef.current;
      const charIndex = charIndexRef.current;

      if (!isDeleting) {
        if (charIndex < currentText.length) {
          charIndexRef.current++;
          setDisplayText(currentText.slice(0, charIndexRef.current));
          timerRef.current = setTimeout(tick, speed);
        } else {
          // Pause at full text, then start deleting
          timerRef.current = setTimeout(() => {
            isDeletingRef.current = true;
            tick();
          }, pauseTime);
        }
      } else {
        if (charIndex > 0) {
          charIndexRef.current--;
          setDisplayText(currentText.slice(0, charIndexRef.current));
          timerRef.current = setTimeout(tick, deleteSpeed);
        } else {
          isDeletingRef.current = false;
          textIndexRef.current = (textIndexRef.current + 1) % texts.length;
          timerRef.current = setTimeout(tick, speed);
        }
      }
    }

    tick();

    // Clean up ALL timers on unmount — prevents memory leak
    return clearTimer;
  }, [texts, speed, deleteSpeed, pauseTime, clearTimer]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-cursor-blink text-terminal-green">█</span>
    </span>
  );
}
