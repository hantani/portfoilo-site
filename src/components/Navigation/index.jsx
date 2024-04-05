import React, { useRef, useEffect } from "react";
import { Wrapper, Header, LeftSection, NavLinks, RightSection } from "./styles";
import { NavLink, Link } from "react-router-dom";

const Navigation = ({ theme }) => {
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
                <button>깃허브</button>
              </li>
            </ul>
          </NavLinks>
        </LeftSection>
      </Header>
    </Wrapper>
  );
};

export default Navigation;
