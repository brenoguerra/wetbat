import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 90vw;
  height: 18rem;
  border-radius: 8px;
  background-image: linear-gradient(to right, #3FC5C5 , #426BC7);

  @media only screen and (max-width: 1919px) {
    width: 82vw;
  }

  @media only screen and (max-width: 1023px) {
    width: 72vw;
  }

  @media only screen and (max-width: 767px) {
    width: 89vw;
  }

  @media only screen and (max-width: 479px) {
    display: none;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 2rem;

  @media only screen and (max-width: 1366px) {
    justify-content: flex-start;
  }

  .text {
    display: flex;
    flex-direction: column;
    color: #fff;

    h1 {
      font-size: 28px;

      @media only screen and (max-width: 1366px) {
        display: none;
      }
    }

    p {
      font-size: 16px;
      margin-top: 16px;

      @media only screen and (max-width: 1366px) {
        display: none;
      }
    }
  }
  
  .data {
    display: flex;
    padding: 3rem;
    flex-direction: column;
    justify-content: center;

    p {
      color: white;
      font-weight: 400;
      font-size: 20px;

      strong {
        font-size: 2rem;
        font-weight: bold;
        color: #F0CE83;
      }
    }
  }
`;
