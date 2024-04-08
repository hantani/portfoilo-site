import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 1280px;
  margin: 70px auto;

  &:first-child {
    margin-top: 50px;
  }

  @media only screen and (max-width: 1360px) {
    width: 100%;
    padding: 0 20px;
  }

  @media only screen and (max-width: 767px) {
    margin: 60px auto;
    &:first-child {
      margin-top: 40px;
    }
  }
`;

const CommonWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default CommonWrapper;
