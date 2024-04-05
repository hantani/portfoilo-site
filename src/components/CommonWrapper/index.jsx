import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 1280px;
  margin: 70px auto;

  &:first-child {
    margin-top: 50px;
  }
`;

const CommonWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default CommonWrapper;
