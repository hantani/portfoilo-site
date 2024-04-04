import React, { useContext } from "react";
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
import InfoesContext from "../../stores/InfoesContext";

const Main = () => {
  const cardInfoes = useContext(InfoesContext);

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
