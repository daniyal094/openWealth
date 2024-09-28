"use client";
import { useTheme } from "@/context/ThemeContext";
import React from "react";

const ThemeToggleButton: React.FC = () => {
  const { toggleTheme, theme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      {theme === "dark" ? "☀️" : "🌑"}
    </button>
  );
};

export default ThemeToggleButton;
