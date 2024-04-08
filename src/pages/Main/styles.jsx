import styled from "styled-components";

export const Wrapper = styled.section``;

export const CardsContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding-top: 60px;
  display: flex;
  flex-wrap: wrap;
  gap: 50px;

  @media only screen and (max-width: 1360px) {
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    gap: 20px;
  }

  @media only screen and (max-width: 767px) {
    padding-top: 40px;
    gap: 0;
  }

  > a {
    width: calc(50% - 25px);

    @media only screen and (max-width: 1360px) {
      width: calc(50% - 10px);
    }

    @media only screen and (max-width: 767px) {
      width: 100%;
      margin-bottom: 40px;
    }
  }
`;

export const Card = styled.div`
  width: 100%;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.borderColor02};
  transition: all 0.3s;
  will-change: transform;

  &:hover {
    box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.3);
  }
`;

export const Thumbnail = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 10px 10px 0 0;

  > img {
    width: 100%;
    height: 100%;
    border-radius: 10px 10px 0 0;
  }
`;

export const TextWrapper = styled.div`
  padding: 25px 20px 25px 20px;

  > ul {
    display: flex;
    margin-top: 10px;
    gap: 10px;
    flex-wrap: wrap;

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
  font-size: 20px;
  font-weight: 500;
`;

export const Text = styled.p`
  line-height: 1.5;
  color: ${({ theme }) => theme.fontSubColor};
  margin-top: 18px;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
