import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  max-height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    .clickableText {
      padding: 16px 0 0;
  
      a {
        color: #32AFA9;
        font-weight: 500;
        cursor: pointer;
        text-decoration: none;
      }
    }
  }
`;