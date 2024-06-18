import { Button } from "@/components/ui/button";

import { useEffect, useState } from "react";
import { TvMinimal, Sun, Moon } from "lucide-react";

function ThemeToggle() {
  const [theme, setTheme] = useState();
  const [Icon, setIcon] = useState(TvMinimal);

  useEffect(() => {
    if (!localStorage.theme) {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      if (prefersDark) {
        localStorage.theme = "dark";
        setTheme("dark");
        document.documentElement.classList.add("dark");
      } else {
        localStorage.theme = "light";
        setTheme("light");
        document.documentElement.classList.remove("dark");
      }
    } else {
      setTheme(localStorage.theme == "dark" ? "dark" : "light");
    }
  }, []);

  useEffect(() => {
    if (theme == "light") {
      setIcon(Sun);
    } else if (theme == "dark") {
      setIcon(Moon);
    } else {
      setIcon(TvMinimal);
    }
  }, [theme]);

  const handleThemeChange = () => {
    if (theme === "light") {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else if (theme === "dark") {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  };

  return (
    <>
      {theme !== undefined && (
        <Button size={"icon"} onClick={handleThemeChange}>
          <Icon size={18} />
        </Button>
      )}
    </>
  );
}

export default ThemeToggle;
