import React, { useEffect, useRef, useCallback } from "react";
import { NavLink } from "react-router-dom";
import { Wrapper, NavLinks } from "./styles";
import { blog, github } from "@components/Navigation";

const HamburgerMenu = ({ isOpen, setOpen, theme }) => {
  const hamburgerRef = useRef();
  const onClick = useCallback(() => {
    const $html = document.querySelector("html");
    hamburgerRef.current.classList.remove("on");
    $html.classList.remove("overflow");
    setOpen(false);
  }, [setOpen]);
  useEffect(() => {
    const $html = document.querySelector("html");
    if (isOpen) {
      hamburgerRef.current.classList.add("on");
      $html.classList.add("overflow");
    } else {
      hamburgerRef.current.classList.remove("on");
      $html.classList.remove("overflow");
    }
  }, [isOpen, theme]);

  return (
    <Wrapper ref={hamburgerRef}>
      <NavLinks>
        <ul>
          <li>
            <NavLink to="/" activeclassname="active" onClick={onClick}>
              포트폴리오
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeclassname="active" onClick={onClick}>
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
