import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding-top: 100px;

  > p {
    text-align: center;
    font-size: 32px;
    font-weight: 700;
  }

  @media only screen and (max-width: 767px) {
    padding-top: 65px;
    > p {
      font-size: 30px;
    }
  }
`;

const Learn = () => {
  return (
    <Wrapper>
      <p>What I learned</p>
    </Wrapper>
  );
};

export default Learn;
