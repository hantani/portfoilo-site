import React from "react";
import {
  CardsContainer,
  Wrapper,
  Card,
  Thumbnail,
  TextWrapper,
  Title,
  Text,
} from "./styles";
import { Link } from "react-router-dom";

const Main = () => {
  const cardInfoes = [
    {
      url: "/portfolio-site",
      thumbnail: "imgs/thumb-01.png",
      title: "포트폴리오 사이트",
      text: "리액트 컴포넌트 개발 경험을 쌓기 위해 제작하였습니다",
      tags: ["#React", "#styled-component", "#반응형"],
    },
  ];

  return (
    <Wrapper>
      <CardsContainer>
        {cardInfoes.map((cardInfo, key) => {
          return (
            <Link to={cardInfo.url} key={key}>
              <Card>
                <Thumbnail>
                  <img src={cardInfo.thumbnail} alt={cardInfo.title}></img>
                </Thumbnail>
                <TextWrapper>
                  <Title>{cardInfo.title}</Title>
                  <Text>{cardInfo.text}</Text>
                  <ul>
                    {cardInfo.tags.map((tag, key) => {
                      return <li key={key}>{tag}</li>;
                    })}
                  </ul>
                </TextWrapper>
              </Card>
            </Link>
          );
        })}
      </CardsContainer>
    </Wrapper>
  );
};

export default Main;
