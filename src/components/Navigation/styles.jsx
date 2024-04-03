import styled from "styled-components";

export const Wrapper = styled.section`
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
`;

export const Header = styled.header`
  max-width: 1280px;
  margin: 0 auto;
  padding: 15px 0;
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 100px;

  > a {
    display: inline-block;
    width: 80px;
    height: 78px;
  }
`;

export const NavLinks = styled.div`
  > ul {
    display: flex;
    gap: 30px;
  }

  a {
    color: ${({ theme }) => theme.fontColor};
    font-size: 20px;
    font-weight: 500;
    position: relative;

    &::after {
      content: "";
      display: none;
      width: 100%;
      height: 4px;
      background-color: ${({ theme }) => theme.pointColor};
      position: absolute;
      bottom: -41px;
      left: 0;
    }

    &:hover {
      color: ${({ theme }) => {
        if (theme.name === "light") {
          return theme.pointColor;
        }
      }};
      font-weight: 700;

      &::after {
        display: inline-block;
      }
    }
  }

  .active {
    color: ${({ theme }) => theme.pointColor};
    font-weight: 700;

    &::after {
      display: inline-block;
    }
  }
`;

export const RightSection = styled.div``;
