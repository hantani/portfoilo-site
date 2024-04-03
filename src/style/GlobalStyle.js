import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.bg};
  }
  body * {
    color: ${({ theme }) => {
      if (theme.name === "light") {
        return "#222222";
      } else if (theme.name === "dark") {
        return "#ffffff";
      }
    }};
  }
`;
