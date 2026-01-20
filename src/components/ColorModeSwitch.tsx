import { useEffect, useState } from "react";

const ColorModeSwitch = () => {
  const [isDark, setIsDark] = useState(false);

  // Run once on mount → read saved preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const toggleColorMode = () => {
    const html = document.documentElement;

    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <div className="flex items-center gap-2">
      {/* Toggle */}
      <button
        onClick={toggleColorMode}
        className={`
          relative inline-flex h-6 w-11 items-center rounded-full
          transition-colors duration-300
          ${isDark ? "bg-green-400" : "bg-gray-300 dark:bg-gray-600"}
        `}
      >
        <span
          className={`
            inline-block h-4 w-4 transform rounded-full bg-white
            transition-transform duration-300
            ${isDark ? "translate-x-6" : "translate-x-1"}
          `}
        />
      </button>

      {/* Label */}
      <span className="text-sm font-medium text-black dark:text-white">
        Dark Mode
      </span>
    </div>
  );
};

export default ColorModeSwitch;
