import styled from 'styled-components'
import { darken } from 'polished'

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 32px;

  width: 100%;
  max-height: 3.5rem;
  height: 100%;
  font-weight: 600;

  border-style: none;
  border-radius: 40px;

  background-color: #32AFA9;
  color: #eee;

  cursor: pointer;
  transition: .2s;

  :hover {
    background-color: ${darken(0.05, '#32AFA9')};
  }
`;