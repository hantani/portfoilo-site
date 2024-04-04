import React, { useState, createContext, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "@pages/Main";
import About from "@pages/About";
import { ThemeProvider } from "styled-components";
import { light, dark } from "./style/theme";
import { GlobalStyle } from "./style/GlobalStyle";
import Navigation from "@components/Navigation";
import ToggleBtn from "@components/ToggleBtn";
import PortfolioSite from "./pages/PortfolioSite";

export const ThemeContext = createContext();
let tempTheme;

function App() {
  if (localStorage.getItem("theme")) {
    tempTheme = localStorage.getItem("theme");
  }
  const [theme, setTheme] = useState(tempTheme);
  useEffect(() => {
    if (!localStorage.getItem("theme")) {
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={theme}>
        <ThemeProvider theme={theme === "light" ? light : dark}>
          <GlobalStyle />
          <Navigation></Navigation>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio-site" element={<PortfolioSite />} />
          </Routes>
          <ToggleBtn theme={theme} setTheme={setTheme} />
        </ThemeProvider>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
