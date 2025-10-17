"use client";
import * as React from "react";
import { createPortal } from "react-dom";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function FixedModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(false);

  // Prevent hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Show/hide based on scroll position
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial position

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const buttonElement = (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 99999,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: "all 0.3s ease-in-out",
        pointerEvents: isVisible ? "auto" : "none",
      }}
    >
      <button
        onClick={toggleTheme}
        style={{
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          border: "2px solid",
          borderColor: theme === "dark" ? "#374151" : "#dbeafe",
          backgroundColor:
            theme === "dark"
              ? "rgba(17, 24, 39, 0.9)"
              : "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(12px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
          transition: "all 0.3s ease",
          color: theme === "dark" ? "#ffff" : "#2563eb",
        }}
        onMouseEnter={(e) => {
          const target = e.target as HTMLButtonElement;
          target.style.transform = "scale(1.1)";
          target.style.boxShadow =
            theme === "dark"
              ? "0 15px 35px rgba(251, 191, 36, 0.3)"
              : "0 15px 35px rgba(37, 99, 235, 0.3)";
        }}
        onMouseLeave={(e) => {
          const target = e.target as HTMLButtonElement;
          target.style.transform = "scale(1)";
          target.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.3)";
        }}
        aria-label="Toggle theme"
      >
        {theme === "dark" ? (
          <Moon style={{ width: "24px", height: "24px" }} />
        ) : (
          <Sun style={{ width: "24px", height: "24px" }} />
        )}
      </button>
    </div>
  );

  // Use portal to render directly to body
  return typeof window !== "undefined"
    ? createPortal(buttonElement, document.body)
    : null;
}
