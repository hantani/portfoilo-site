import React from "react";
import { Wrapper, Header, LeftSection, NavLinks } from "./styles";
import { NavLink, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Wrapper>
      <Header>
        <LeftSection>
          <Link to="/">
            <img src="imgs/logo.png" alt="로고 이미지" />
          </Link>
          <NavLinks>
            <ul>
              <li>
                <NavLink to="/" activeclassname="active">
                  포트폴리오
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" activeclassname="active">
                  소개
                </NavLink>
              </li>
            </ul>
          </NavLinks>
        </LeftSection>
      </Header>
    </Wrapper>
  );
};

export default Navigation;
