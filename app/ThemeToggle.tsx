
"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("jimmywayne-theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const useDark = saved ? saved === "dark" : prefersDark;

    document.documentElement.dataset.theme = useDark ? "dark" : "light";
    setDark(useDark);
    setReady(true);
  }, []);

  function toggleTheme() {
    const nextDark = !dark;

    document.documentElement.dataset.theme = nextDark ? "dark" : "light";
    localStorage.setItem("jimmywayne-theme", nextDark ? "dark" : "light");
    setDark(nextDark);
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      title={dark ? "Switch to light mode" : "Switch to dark mode"}
      disabled={!ready}
    >
      <span aria-hidden="true">{dark ? "☀" : "☾"}</span>
    </button>
  );
}
