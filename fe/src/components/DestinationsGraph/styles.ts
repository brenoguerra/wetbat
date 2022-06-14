import styled from "styled-components";

export const Container = styled.div`
  width: auto;
  height: 100vh;

  display: grid;
  grid-template-columns: 30% 60%;
  grid-template-areas: 
    'chart map'
  ;

  @media only screen and (max-width: 1920px) {
    display: flex;
  }

  .chart {
    border-right: 1px solid #E9E9E9;
    @media only screen and (max-width: 1920px) {
      display: none;
    }
  }

  .map {
    width: auto;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;