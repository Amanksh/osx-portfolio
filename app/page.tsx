"use client";
import PixelClock from "@/components/ui/Clock";
import { useState, useEffect } from "react";
import Desktop from "@/components/desktop";
import Dock from "@/components/dock";
import Window from "@/components/window";
import HomeWindow from "@/components/windows/home-window";
import SkillsWindow from "@/components/windows/skills-window";
import ProjectsWindow from "@/components/windows/projects-window";
import ContactWindow from "@/components/windows/contact-window";

export default function HomePage() {
  const [openWindows, setOpenWindows] = useState<string[]>([]);
  const [activeWindow, setActiveWindow] = useState<string | null>(null);
  const [windowPositions, setWindowPositions] = useState<
    Record<string, { x: number; y: number }>
  >({
    home: { x: 100, y: 50 },
    skills: { x: 150, y: 100 },
    projects: { x: 200, y: 150 },
    contact: { x: 250, y: 200 },
  });

  // Function to calculate centered positions
  const calculateCenteredPositions = () => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const isSmallScreen = windowWidth < 1024; // lg breakpoint

    let winWidth = 700;
    let winHeight = 450;
    if (isSmallScreen) {
      winWidth = windowWidth * 0.95;
      winHeight = windowHeight * 0.8;
    }
    const centerX = (windowWidth - winWidth) / 2;
    const centerY = (windowHeight - winHeight) / 2;
    if (isSmallScreen) {
      return {
        home: { x: centerX, y: centerY },
        skills: { x: centerX, y: centerY },
        projects: { x: centerX, y: centerY },
        contact: { x: centerX, y: centerY },
      };
    }

    // Default positions for larger screens
    return {
      home: { x: 100, y: 50 },
      skills: { x: 150, y: 100 },
      projects: { x: 200, y: 150 },
      contact: { x: 250, y: 200 },
    };
  };

  // Update positions on mount and window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowPositions(calculateCenteredPositions());
    };

    // Set initial positions
    handleResize();

    // Add resize listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Open all windows on initial load for demonstration
  useEffect(() => {
    setOpenWindows(["home"]);
    setActiveWindow("home");
  }, []);

  const toggleWindow = (id: string) => {
    if (openWindows.includes(id)) {
      // If window is already open, make it active
      setActiveWindow(id);
    } else {
      // Open the window and make it active
      setOpenWindows([...openWindows, id]);
      setActiveWindow(id);
    }
  };

  const closeWindow = (id: string) => {
    setOpenWindows(openWindows.filter((windowId) => windowId !== id));
    if (activeWindow === id) {
      setActiveWindow(openWindows.length > 1 ? openWindows[0] : null);
    }
  };

  const updatePosition = (id: string, x: number, y: number) => {
    setWindowPositions({
      ...windowPositions,
      [id]: { x, y },
    });
  };

  const bringToFront = (id: string) => {
    setActiveWindow(id);
  };

  return (
    <Desktop>
      <PixelClock />
      {openWindows.includes("home") && (
        <Window
          id="home"
          title="Home"
          isActive={activeWindow === "home"}
          position={windowPositions.home}
          onClose={() => closeWindow("home")}
          onFocus={() => bringToFront("home")}
          onDrag={(x, y) => updatePosition("home", x, y)}
        >
          <HomeWindow />
        </Window>
      )}

      {openWindows.includes("skills") && (
        <Window
          id="skills"
          title="Skills"
          isActive={activeWindow === "skills"}
          position={windowPositions.skills}
          onClose={() => closeWindow("skills")}
          onFocus={() => bringToFront("skills")}
          onDrag={(x, y) => updatePosition("skills", x, y)}
        >
          <SkillsWindow />
        </Window>
      )}

      {openWindows.includes("projects") && (
        <Window
          id="projects"
          title="Projects"
          isActive={activeWindow === "projects"}
          position={windowPositions.projects}
          onClose={() => closeWindow("projects")}
          onFocus={() => bringToFront("projects")}
          onDrag={(x, y) => updatePosition("projects", x, y)}
        >
          <ProjectsWindow />
        </Window>
      )}

      {openWindows.includes("contact") && (
        <Window
          id="contact"
          title="Contact"
          isActive={activeWindow === "contact"}
          position={windowPositions.contact}
          onClose={() => closeWindow("contact")}
          onFocus={() => bringToFront("contact")}
          onDrag={(x, y) => updatePosition("contact", x, y)}
        >
          <ContactWindow />
        </Window>
      )}

      <Dock onItemClick={toggleWindow} />
    </Desktop>
  );
}
