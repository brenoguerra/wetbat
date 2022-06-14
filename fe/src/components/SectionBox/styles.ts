import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BoxTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  height: 8px;
  padding: 24px 32px;
  
  color: #6671AD;
  font-weight: 500;
  background-color: #FFFFFF;
  border-top: 1px solid #E9E9E9;
  border-radius: 8px 8px 0 0;

  svg {
    margin-right: 12px;
    color: #32AFA9;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
  overflow: auto;

  /* width: auto; */
  /* min-width: 280px; */
  height: auto;
  max-height: 304px;
  padding: 24px 32px;
  
  background-color: #FFFFFF;
  border: 1px solid #E9E9E9;
  border-radius: 0 0 8px 8px;
`;

export const ErrorLabel = styled.label`
  display: flex;
  align-items: center;
  color: #F17676;
  margin-top: 8px;

  svg {
    margin-right: 8px;
  }
`;