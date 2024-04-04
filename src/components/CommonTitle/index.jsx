import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 1280px;

  > p {
    font-size: 28px;
    font-weight: 500;
  }
`;

const CommonTitle = ({ children }) => {
  return (
    <Wrapper>
      <p>{children}</p>
    </Wrapper>
  );
};

export default CommonTitle;
