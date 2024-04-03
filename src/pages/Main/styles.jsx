import styled from "styled-components";

export const Wrapper = styled.section`
  min-height: calc(100vh - 109px);
`;

export const CardsContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding-top: 60px;
  display: flex;
  flex-wrap: wrap;
  gap: 50px;

  > a {
    width: calc(50% - 50px);
  }
`;

export const Card = styled.div`
  width: 100%;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.borderColor02};
  transition: all 0.3s;

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
`;
