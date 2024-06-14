import React, { useEffect, useState } from "react";

function ThemeBtn() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const theme = localStorage.theme;
    if (theme == "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      setDark(true);
    } else if (theme == "light") {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []);

  const changeTheme = () => {
    const theme = localStorage.getItem("theme");
    let newTheme;
    setDark((prev) => !prev);
    if (theme == null) {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      newTheme = prefersDark ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", newTheme);
      return;
    }

    newTheme = theme == "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.theme = newTheme;
  };

  return (
    <>
      <input
        type="checkbox"
        className="toggle theme-controller"
        onChange={changeTheme}
        checked={dark ? "checked" : ""}
      />
    </>
  );
}

export default ThemeBtn;
