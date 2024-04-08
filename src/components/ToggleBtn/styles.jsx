import styled from "styled-components";

export const Btn = styled.button`
  width: 60px;
  height: 60px;
  background-color: ${({ theme }) => {
    if (theme.name === "light") {
      return theme.bg;
    } else if (theme.name === "dark") {
      return theme.toggleBtnColor;
    }
  }};
  background-image: ${({ theme }) => {
    if (theme.name === "light") {
      return "url(imgs/light-mode.png)";
    } else if (theme.name === "dark") {
      return "url(imgs/dark-mode.png)";
    }
  }};
  background-size: 35px 35px;
  background-repeat: no-repeat;
  background-position: center center;
  position: fixed;
  bottom: 60px;
  right: 60px;
  border-radius: 50%;
  box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.3);

  @media only screen and (max-width: 1360px) {
    bottom: 20px;
    right: 20px;
  }

  @media only screen and (max-width: 767px) {
    width: 50px;
    height: 50px;
    background-size: 28px 28px;
  }
`;
