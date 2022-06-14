import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const Content = styled.div`
  margin-top: 2rem;
  display: grid;
  /* grid-template-columns: 22rem 24rem 16rem; */
  /* grid-template-rows: 360px 360px 240px; */
  grid-template-areas: 
    'quick_quote pending_quote new_leads'
    'popular_destinations popular_destinations team_chat'
    'revenue potential_revenue close_ratios'
  ;
  gap: 1rem;

  @media only screen and (max-width: 1920px) {
    grid-template-areas: 
      'quick_quote pending_quote'
      'new_leads popular_destinations'
      'team_chat revenue'
      'potential_revenue close_ratios'
    ;
  }

  @media only screen and (max-width: 1366px) {
    display: flex;
    flex-direction: column;
  }

  .quick_quote {
    display: grid;
    grid-template-areas: 
      'input button'
    ;
    column-gap: 1rem;

    @media only screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
    }
  }

  .responsive-disable {
    @media only screen and (max-width: 468px) {
      display: none;
    }
  }
`;

export const ChartContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;