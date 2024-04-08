import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding-top: 60px;
  display: flex;
  justify-content: space-between;
  gap: 50px;

  @media only screen and (max-width: 1360px) {
    padding: 0 20px;
    padding-top: 60px;
    width: 100%;
  }

  @media only screen and (max-width: 767px) {
    flex-direction: column;
    gap: 30px;
    padding-top: 40px;
  }
`;

export const Thumbnail = styled.div`
  width: calc(50% - 25px);
  aspect-ratio: 16 / 9;
  border-radius: 10px;

  > img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }

  @media only screen and (max-width: 767px) {
    width: 100%;
  }
`;

export const TextWrapper = styled.div`
  width: calc(50% - 25px);
  padding-top: 20px;

  @media only screen and (max-width: 1360px) {
    padding-top: 0;
  }

  @media only screen and (max-width: 767px) {
    width: 100%;
  }

  > ul {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    gap: 10px;

    li {
      border-radius: 20px;
      padding: 10px;
      color: ${({ theme }) => theme.pointTextColor};
      font-size: 14px;
      background-color: ${({ theme }) => theme.pointSubColor};
    }
  }
`;

export const Title = styled.p`
  font-size: 28px;
  font-weight: 500;

  @media only screen and (max-width: 767px) {
    font-size: 26px;
  }
`;

export const Text = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.fontSubColor};
  line-height: 1.5;
  margin-top: 30px;

  @media only screen and (max-width: 767px) {
    font-size: 16px;
  }
`;

export const GithubLink = styled.button`
  display: flex;
  align-items: center;
  margin-top: 20px;
  gap: 4px;

  &:hover {
    text-decoration: underline;
  }

  > div {
    width: 24px;
    height: 24px;
    background-image: ${({ theme }) => {
      console.log(theme.name);
      if (theme.name === "light") {
        return 'url("imgs/github.png")';
      } else if (theme.name === "dark") {
        return 'url("imgs/github-dark.png")';
      }
    }};
  }
`;
