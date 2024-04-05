import React, { useState, useRef, useEffect } from "react";
import { Wrapper, Header, LeftSection, NavLinks, RightSection } from "./styles";
import { NavLink, Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import HamburgerMenu from "@components/HamburgerMenu";

export const github = "https://github.com/hantani";
export const blog = "https://velog.io/@hantani17/posts";

const Navigation = ({ theme }) => {
  const [isOpen, setOpen] = useState(false);
  const navRef = useRef();
  useEffect(() => {
    const $wrapper = navRef.current;
    if (window.scrollY > 109) {
      $wrapper.classList.add("fixed");
    }
    window.addEventListener("scroll", () => {
      if (window.scrollY > 109) {
        $wrapper.classList.add("fixed");
      } else {
        $wrapper.classList.remove("fixed");
      }
    });
  }, [theme]);

  return (
    <Wrapper ref={navRef}>
      <Header>
        <LeftSection>
          <Link to="/" className="topLogo">
            <img src="imgs/logo.png" alt="로고 이미지" />
          </Link>
          <NavLinks>
            <ul>
              <li>
                <NavLink to="/" activeclassname="active" className="topLink">
                  포트폴리오
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  activeclassname="active"
                  className="topLink"
                >
                  소개
                </NavLink>
              </li>
              <li>
                <button className="topLink" onClick={() => window.open(blog)}>
                  블로그
                </button>
              </li>
              <li>
                <button className="topLink" onClick={() => window.open(github)}>
                  깃허브
                </button>
              </li>
            </ul>
          </NavLinks>
        </LeftSection>
        <RightSection>
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </RightSection>
      </Header>
      <HamburgerMenu isOpen={isOpen} theme={theme}></HamburgerMenu>
    </Wrapper>
  );
};

export default Navigation;
