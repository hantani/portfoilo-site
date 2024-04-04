import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding-top: 60px;
  display: flex;
  justify-content: space-between;
  gap: 50px;
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
`;

export const TextWrapper = styled.div`
  width: calc(50% - 25px);
  padding-top: 20px;

  > ul {
    display: flex;
    margin-top: 12px;
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
  font-size: 22px;
  font-weight: 500;
`;

export const Text = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.fontSubColor};
  line-height: 1.5;
  margin-top: 20px;
`;
