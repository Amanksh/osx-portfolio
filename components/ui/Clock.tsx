"use client";
import React, { useState, useEffect, useMemo } from "react";
import { format } from "date-fns";

type Digit =
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | ":"
  | " "
  | "A"
  | "P"
  | "M";
type ColorScheme = "retro-green" | "classic-amber" | "monochrome" | "neon-blue";
type Size = "small" | "medium" | "large";

interface PixelDigitProps {
  digit: Digit;
  color: string;
}

const PixelDigit: React.FC<PixelDigitProps> = ({ digit, color }) => {
  const pixelMatrices: Record<Digit, number[][]> = {
    "0": [
      [1, 1, 1],
      [1, 0, 1],
      [1, 0, 1],
      [1, 0, 1],
      [1, 1, 1],
    ],
    "1": [
      [0, 1, 0],
      [1, 1, 0],
      [0, 1, 0],
      [0, 1, 0],
      [1, 1, 1],
    ],
    "2": [
      [1, 1, 1],
      [0, 0, 1],
      [1, 1, 1],
      [1, 0, 0],
      [1, 1, 1],
    ],
    "3": [
      [1, 1, 1],
      [0, 0, 1],
      [1, 1, 1],
      [0, 0, 1],
      [1, 1, 1],
    ],
    "4": [
      [1, 0, 1],
      [1, 0, 1],
      [1, 1, 1],
      [0, 0, 1],
      [0, 0, 1],
    ],
    "5": [
      [1, 1, 1],
      [1, 0, 0],
      [1, 1, 1],
      [0, 0, 1],
      [1, 1, 1],
    ],
    "6": [
      [1, 1, 1],
      [1, 0, 0],
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
    ],
    "7": [
      [1, 1, 1],
      [0, 0, 1],
      [0, 1, 0],
      [1, 0, 0],
      [1, 0, 0],
    ],
    "8": [
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
    ],
    "9": [
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
      [0, 0, 1],
      [1, 1, 1],
    ],
    ":": [[0], [1], [0], [1], [0]],
    " ": [[0], [0], [0], [0], [0]],
    A: [[0], [0], [0], [0], [0]],
    P: [[0], [0], [0], [0], [0]],
    M: [[0], [0], [0], [0], [0]],
  };

  const matrix = pixelMatrices[digit] || pixelMatrices["0"];

  return (
    <div className="grid gap-0.5">
      {matrix.map((row, i) => (
        <div key={i} className="flex gap-0.5">
          {row.map((cell, j) => (
            <div
              key={j}
              className={`w-2 h-2 rounded-sm transition-colors duration-200 ${
                cell ? color : "bg-gray-800"
              }`}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

interface PixelClockProps {
  format24?: boolean;
  colorScheme?: ColorScheme;
  showDate?: boolean;
  size?: Size;
}

const PixelClock: React.FC<PixelClockProps> = ({
  format24 = false,
  colorScheme = "retro-green",
  showDate = false,
  size = "small",
}) => {
  const [time, setTime] = useState<Date>(new Date());
  const [currentSize, setCurrentSize] = useState<Size>(size);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setCurrentSize("small");
      } else {
        setCurrentSize(size);
      }
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, [size]);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const colorClasses: Record<ColorScheme, string> = {
    "retro-green": "bg-green-500",
    "classic-amber": "bg-yellow-600",
    monochrome: "bg-white",
    "neon-blue": "bg-blue-400",
  };

  const sizeClasses: Record<Size, string> = {
    small: "scale-50",
    medium: "scale-100",
    large: "scale-125",
  };

  const timeString = useMemo(() => {
    return format(time, format24 ? "HH:mm:ss" : "hh:mm:ss aa");
  }, [time, format24]);

  const dateString = useMemo(() => {
    return format(time, "MMM dd, yyyy");
  }, [time]);

  return (
    <div className="absolute top-0 right-0 min-h-screen     p-8">
      <div
        className={`flex gap-4 p-8 bg-gray-800 rounded-xl shadow-2xl ${sizeClasses[currentSize]}`}
        role="timer"
        aria-label={`Current time: ${timeString}`}
      >
        {timeString.split("").map((char, index) => (
          <PixelDigit
            key={index}
            digit={char as Digit}
            color={colorClasses[colorScheme]}
          />
        ))}
      </div>

      {showDate && (
        <div className="mt-8 text-gray-400 font-mono text-xl">{dateString}</div>
      )}
    </div>
  );
};

export default PixelClock;
