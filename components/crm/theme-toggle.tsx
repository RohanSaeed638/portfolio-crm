"use client";

import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const {
    theme,
    setTheme,
  } = useTheme();

  return (
    <button
      onClick={() =>{
        setTheme(
          theme === "dark"
            ? "light"
            : "dark"
        );
        console.log(theme);
      }
      }
      className="rounded-xl border px-4 py-2 pointer-events-auto text-sm hover:bg-slate-100 dark:hover:bg-zinc-800 cursor-pointer"
    >
      Toggle Theme
    </button>
  );
}