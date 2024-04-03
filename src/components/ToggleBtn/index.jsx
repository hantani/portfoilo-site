import React, { useCallback } from "react";
import { Btn } from "./styles";

const ToggleBtn = ({ theme, setTheme }) => {
  const onClick = useCallback(() => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("light");
    }
  }, [theme, setTheme]);

  return (
    <Btn onClick={onClick}>
      {/* {theme === "light" ? <LightMode /> : <DarkMode />} */}
    </Btn>
  );
};

export default ToggleBtn;
