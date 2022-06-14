import styled from "styled-components";

export const Container = styled.div`
  height: auto;
  width: 160px;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  background-color: #E6E6E6;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const HamburguerMenu = styled.div`
  height: 100%;
  width: 160%;
  position: fixed;
  z-index: 1;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  background-color: #E6E6E6;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;