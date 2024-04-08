import styled from "styled-components";

export const Wrapper = styled.div`
  display: none;
  position: absolute;
  left: 0;
  top: 78px;
  background-color: ${({ theme }) => theme.pointSubColor};
  width: 100%;
  height: calc(100vh - 78px);
  padding: 20px;
  transform: translateX(100%);
  transition: all 0.3s;
  z-index: 50;

  &.on {
    transform: translateX(0);
  }

  @media only screen and (max-width: 767px) {
    display: block;
  }
`;

export const NavLinks = styled.div`
  > ul {
    li {
      text-align: center;
      margin-bottom: 20px;

      > a,
      button {
        color: ${({ theme }) => theme.pointTextColor};
        font-size: 20px;
        font-weight: 500;
        position: relative;
      }

      > a {
        &.active {
          &::after {
            content: "";
            display: inline-block;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            position: absolute;
            top: 0;
            left: 0;
            background-color: ${({ theme }) => theme.pointTextColor};
            top: 11px;
            left: -14px;
          }
        }
      }
    }
  }
`;
