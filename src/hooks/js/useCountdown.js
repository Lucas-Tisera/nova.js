import { useState, useEffect } from 'react';

export const useCountdown = (min, max) => {
  const [count, setCount] = useState(max);
  const [paused, setPaused] = useState(false);
  const [isOver, setIsOver] = useState(false);

  useEffect(() => {
    if (paused) {
      return;
    }

    const interval = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    if (count <= min) {
      setIsOver(true);
      clearInterval(interval);
      return;
    }

    return () => clearInterval(interval);
  }, [count, min, max, paused]);

  return {
    current: count.toString(),
    isPaused: paused,
    isOver,
    pause: () => setPaused(true),
    play: () => setPaused(false),
    reset: () => {
      setIsOver(false);
      setCount(max);
    },
    togglePause: () => {
      setPaused(!paused);
    }
  };
};
