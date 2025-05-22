import type { ReactNode } from "react";

interface DesktopProps {
  children: ReactNode;
}

export default function Desktop({ children }: DesktopProps) {
  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      style={{
        background: "url('/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      {/* Add a subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'url(\'data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fillOpacity="0.4" fillRule="evenodd"%3E%3Ccircle cx="3" cy="3" r="1"%2F%3E%3Ccircle cx="13" cy="13" r="1"%2F%3E%3C%2Fg%3E%3C/svg%3E\')',
          backgroundSize: "20px 20px",
        }}
      />

      {/* Add a subtle glow effect */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-pink-500/20 blur-[100px] -z-10" />
      <div className="absolute bottom-1/3 left-1/3 w-80 h-80 rounded-full bg-indigo-600/20 blur-[100px] -z-10" />

      {children}
    </div>
  );
}
