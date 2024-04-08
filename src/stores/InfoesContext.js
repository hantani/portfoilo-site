import { createContext } from "react";

const InfoesContext = createContext([
  {
    url: "/portfolio-site",
    siteUrl: "",
    github: "https://github.com/hantani/portfoilo-site",
    thumbnail: "imgs/thumb-01.png",
    title: "포트폴리오 사이트",
    text: "리액트 컴포넌트 개발 경험을 쌓기 위해 제작하였습니다. styled-component의 ThemeProvider를 활용하여 다크모드 기능을 추가하였습니다.",
    tags: ["#React", "#styled-component", "#storage", "#반응형"],
  },
]);

export default InfoesContext;
