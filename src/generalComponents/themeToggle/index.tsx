import React, { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "../../assets/svgAssets";

export const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">(
    localStorage.getItem("theme") === "dark" ? "dark" : "light"
  );

  useEffect(() => {
    // Apply the theme to the body class
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    // Save the theme in localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <button onClick={toggleTheme} className="" aria-label="Toggle Theme">
      {theme === "light" ? (
        <div className="text-primary-text size-10 flex items-center justify-center rounded-lg border border-neutral-200 bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800">
          <MoonIcon />
        </div>
      ) : (
        <div className="text-primary-text size-10 flex items-center justify-center rounded-lg border border-neutral-200 bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800">
          <SunIcon />
        </div>
      )}
    </button>
  );
};
