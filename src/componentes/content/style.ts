import styled from "styled-components";
const media = {
  desktop: "@media(min-width:1024px)",
};

export const ContentWrap = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  ${media.desktop} {
    width: 1024px;
  }

  h3 {
    font-size: 20px;
    font-weight: bold;
    color: gray;
    margin-left: 50px;
    align-self: flex-start;
    margin-top: 1rem;
  }

  .boxWrap {
    width: 90%;

    ${media.desktop} {
      display: flex;
      margin-top: 1rem;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: space-between;
    }

    .img {
      width: 100%;
      height: 150px;
      background-color: gray;

      ${media.desktop} {
        width: 48%;
      }
    }
    .cont {
      margin-top: 10px;
      width: 100%;
      height: 150px;
      background-color: gray;
      ${media.desktop} {
        margin-top: 0;
        width: 48%;
      }
    }
  }
`;
