import styled from "styled-components";

export const Wrapper = styled.div`
  display: none;
  position: absolute;
  left: 0;
  top: 78px;
  background-color: ${({ theme }) => theme.pointSubColor};
  width: 100%;
  padding: 20px;
  transition: all 0.3s;
  z-index: 50;

  &.on {
    display: block;
  }

  @media only screen and (max-width: 767px) {
  }
`;

export const NavLinks = styled.div`
  > ul {
    li {
      text-align: center;
      margin-bottom: 20px;

      &:last-child {
        margin-bottom: 0;
      }

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
