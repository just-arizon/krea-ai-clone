// app/components/ProgressBar.tsx
"use client";

import React, { useEffect, useState } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval); // Stop the progress once it reaches 100%
          setIsAnimating(false);
          return 100;
        }
        return prevProgress + 10; // Increase progress by 10%
      });
    }, 600);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {isAnimating && (
        <div
          className="fixed top-0 left-0 w-full h-[3px] bg-[#262626] dark:bg-[#f1f1f1] transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      )}
    </>
  );
};

export default ProgressBar;
