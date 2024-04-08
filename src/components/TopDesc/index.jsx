import React from "react";
import {
  Wrapper,
  Thumbnail,
  TextWrapper,
  Title,
  Text,
  GithubLink,
} from "./styles";

const TopDesc = ({ cardInfo }) => {
  return (
    <Wrapper>
      <Thumbnail>
        <img src="imgs/thumb-01.png" alt="썸네일 이미지" />
      </Thumbnail>
      <TextWrapper>
        <Title>{cardInfo.title}</Title>
        <Text>{cardInfo.text}</Text>
        <ul>
          {cardInfo.tags.map((tag, key) => {
            return <li key={key}>{tag}</li>;
          })}
        </ul>
        <GithubLink type="button" onClick={() => window.open(cardInfo.github)}>
          <div></div>
          <span>깃헙 바로가기</span>
        </GithubLink>
      </TextWrapper>
    </Wrapper>
  );
};

export default TopDesc;
