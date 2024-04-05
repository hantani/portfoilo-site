import React from "react";
import CommonTitle from "@components/CommonTitle";
import CommonWrapper from "@components/CommonWrapper";
import CommonSub from "@components/CommonSub";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const About = () => {
  return (
    <Wrapper>
      <CommonWrapper></CommonWrapper>
      <CommonTitle>나는</CommonTitle>
      <CommonSub>자기소개</CommonSub>
    </Wrapper>
  );
};

export default About;
