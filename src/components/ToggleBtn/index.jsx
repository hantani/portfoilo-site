import React, { useCallback } from "react";
import { Btn } from "./styles";

const ToggleBtn = ({ theme, setTheme }) => {
  const onClick = useCallback(() => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else if (theme === "dark") {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  }, [theme, setTheme]);

  return <Btn onClick={onClick}></Btn>;
};

export default ToggleBtn;
