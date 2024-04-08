import React from "react";
import CommonTitle from "@components/CommonTitle";
import CommonWrapper from "@components/CommonWrapper";
import CommonSub from "@components/CommonSub";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding-top: 60px;

  @media only screen and (max-width: 1360px) {
    width: 100%;
    padding: 0 20px;
  }

  @media only screen and (max-width: 767px) {
    padding-top: 40px;
  }
`;

const About = () => {
  return (
    <Wrapper>
      <CommonTitle>나는</CommonTitle>
      <CommonSub>자기소개</CommonSub>
    </Wrapper>
  );
};

export default About;
