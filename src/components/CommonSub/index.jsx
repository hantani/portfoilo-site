import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 1280px;
  margin: 25px auto;

  > p {
    font-size: 18px;
    color: ${({ theme }) => theme.fontSubColor};
    line-height: 1.5;
  }

  @media only screen and (max-width: 767px) {
    margin: 20px auto;

    > p {
      font-size: 16px;
    }
  }
`;

const CommonSub = ({ children }) => {
  return (
    <Wrapper>
      <p>{children}</p>
    </Wrapper>
  );
};

export default CommonSub;
