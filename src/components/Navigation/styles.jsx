import styled from "styled-components";

export const Wrapper = styled.section`
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};

  &.fixed {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: ${({ theme }) => theme.bg};
    box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.3);

    Header {
      padding: 10px 0;
    }

    .topLogo {
      width: 60px;
      height: 57px;
    }

    .topLink {
      font-size: 16px;

      &::after {
        bottom: -25px;
      }
    }
  }
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

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const RightSection = styled.div``;

export const NavLinks = styled.div`
  > ul {
    display: flex;
    gap: 30px;
  }

  a,
  button {
    color: ${({ theme }) => theme.fontColor};
    font-size: 20px;
    font-weight: 500;
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;

    &::after {
      content: "";
      display: none;
      width: 100%;
      height: 4px;
      background-color: ${({ theme }) => theme.pointColor};
      position: absolute;
      bottom: -40px;
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
