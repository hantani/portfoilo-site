import React, { useContext } from "react";
import TopDesc from "@components/TopDesc";
import InfoesContext from "../../stores/InfoesContext";
import Learn from "@components/Learn";
import CommonWrapper from "@components/CommonWrapper";
import CommonTitle from "@components/CommonTitle";
import CommonSub from "@components/CommonSub";
import CommonCodeBlock from "@components/CommonCodeBlock";

const PortfolioSite = () => {
  const cardInfoes = useContext(InfoesContext);
  const codes = [
    `export const light = {
    name: "light",
    bg: "#fff",
    ...
  };
  export const dark = {
    name: "dark",
    bg: "#1a0f24",
    ...
  };`,
  ];

  return (
    <>
      <TopDesc cardInfo={cardInfoes[0]}></TopDesc>
      <Learn></Learn>
      <CommonWrapper>
        <CommonTitle>Styled-component를 활용한 다크모드 기능</CommonTitle>
        <CommonSub>
          다크모드 기능을 넣기 위해 styled-component, storage를 활용했습니다.
          <br />
          우선 칼라를 맞춰놓았습니다.
        </CommonSub>
        <CommonCodeBlock text={codes[0]} />
      </CommonWrapper>
    </>
  );
};

export default PortfolioSite;
