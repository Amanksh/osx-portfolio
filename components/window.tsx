"use client";

import type React from "react";

import { useState, useRef, useEffect, type ReactNode } from "react";
import { X, Minus, Square } from "lucide-react";

interface WindowProps {
  id: string;
  title: string;
  children: ReactNode;
  isActive: boolean;
  position: { x: number; y: number };
  onClose: () => void;
  onFocus: () => void;
  onDrag: (x: number, y: number) => void;
}

export default function Window({
  id,
  title,
  children,
  isActive,
  position,
  onClose,
  onFocus,
  onDrag,
}: WindowProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const windowRef = useRef<HTMLDivElement>(null);
  const titleBarRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    // Prevent dragging when clicking on buttons
    if (e.target instanceof HTMLElement && e.target.closest("button")) {
      return;
    }

    setIsDragging(true);
    const rect = windowRef.current?.getBoundingClientRect();
    if (rect) {
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
    onFocus();
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        e.preventDefault(); // Prevent text selection while dragging
        const newX = e.clientX - dragOffset.x;
        const newY = e.clientY - dragOffset.y;
        onDrag(newX, newY);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, dragOffset, onDrag]);

  return (
    <div
      ref={windowRef}
      className={`absolute rounded-lg overflow-hidden shadow-2xl border border-white/20 bg-white/90 backdrop-blur-sm transition-shadow duration-200 ${
        isActive ? "shadow-2xl z-50" : "shadow-md z-40"
      }`}
      style={{
        width: "700px",
        height: "450px",
        left: `${position.x}px`,
        top: `${position.y}px`,
        cursor: isDragging ? "grabbing" : "default",
      }}
      onClick={onFocus}
    >
      {/* Window title bar */}
      <div
        ref={titleBarRef}
        className="h-7 bg-gradient-to-r from-purple-600 to-pink-600 border-b border-navy-700 flex items-center px-3 select-none"
        onMouseDown={handleMouseDown}
        style={{ cursor: isDragging ? "grabbing" : "grab" }}
      >
        <div className="flex items-center gap-1.5 mr-4">
          <button
            onClick={onClose}
            className="w-4 h-4 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center"
          >
            <X className="w-2 h-2 text-white opacity-0 hover:opacity-100" />
          </button>
          <button className="w-4 h-4 rounded-full flex items-center justify-center bg-yellow-500 hover:bg-yellow-600">
            <Minus className="w-2 h-2 text-white opacity-0 hover:opacity-100" />
          </button>
          <button className="w-4 h-4 rounded-full flex items-center justify-center bg-green-500 hover:bg-green-600">
            <Square className="w-2 h-2 text-white opacity-0 hover:opacity-100" />
          </button>
        </div>
        <div className="text-sm font-bold text-center flex-1 text-white">
          {title}
        </div>
      </div>

      {/* Window content */}
      <div className="p-4 h-[calc(100%-32px)] overflow-auto">{children}</div>
    </div>
  );
}
