"use client";

import type React from "react";
import Image from "next/image";

interface DockProps {
  onItemClick: (id: string) => void;
}

export default function Dock({ onItemClick }: DockProps) {
  const dockItems = [
    { id: "home", icon: "/icons/home.svg", label: "Home" },
    { id: "skills", icon: "/icons/skills.svg", label: "Skills" },
    { id: "projects", icon: "/icons/project.svg", label: "Projects" },
    { id: "contact", icon: "/icons/contact.svg", label: "Contact" },
  ];

  return (
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-end gap-2 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
      {dockItems.map((item) => (
        <DockIcon
          key={item.id}
          icon={item.icon}
          label={item.label}
          onClick={() => onItemClick(item.id)}
        />
      ))}
    </div>
  );
}

interface DockIconProps {
  icon: string;
  label: string;
  onClick: () => void;
}

function DockIcon({ icon, label, onClick }: DockIconProps) {
  return (
    <div className="group flex flex-col items-center">
      <button
        onClick={onClick}
        className="w-16 h-16 flex items-center justify-center rounded-xl bg-white/80 border border-white/50 shadow-md hover:scale-110 transition-all duration-200 hover:bg-pink-100 group-hover:translate-y-[-8px]"
      >
        <Image
          src={icon}
          alt={label}
          width={30}
          height={30}
          className="w-10 h-10"
        />
      </button>
      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs font-medium text-white bg-black/50 backdrop-blur-sm px-2 py-1 rounded-md mt-2 absolute bottom-16">
        {label}
      </span>
    </div>
  );
}
