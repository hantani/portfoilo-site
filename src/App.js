import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "@pages/Main";
import About from "@pages/About";
import { ThemeProvider } from "styled-components";
import { light, dark } from "./style/theme";
import { GlobalStyle } from "./style/GlobalStyle";
import Navigation from "@components/Navigation";
import ToggleBtn from "@components/ToggleBtn";
import PortfolioSite from "./pages/PortfolioSite";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
