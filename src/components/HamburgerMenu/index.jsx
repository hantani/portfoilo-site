import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { Wrapper, NavLinks } from "./styles";
import { blog, github } from "@components/Navigation";

const HamburgerMenu = ({ isOpen, theme }) => {
  const hamburgerRef = useRef();
  useEffect(() => {
    if (isOpen) {
      hamburgerRef.current.classList.add("on");
    } else {
      hamburgerRef.current.classList.remove("on");
    }
  }, [isOpen, theme]);

  return (
    <Wrapper ref={hamburgerRef}>
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
          <li>
            <button onClick={() => window.open(blog)}>블로그</button>
          </li>
          <li>
            <button onClick={() => window.open(github)}>깃허브</button>
          </li>
        </ul>
      </NavLinks>
    </Wrapper>
  );
};

export default HamburgerMenu;
