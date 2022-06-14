import styled, { css } from "styled-components";

interface ContainerProps {
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  height: 3.5rem;
  margin-bottom: 1rem;

  border-radius: 4px;
  border: 2px solid transparent;
  background: #EFEFF7;

  ${props => props.isErrored && css`
  border-color: #F17676;
    margin-bottom: 4px;
  `}
`;

export const Label = styled.label`
  z-index: 999;
  font-size: 13px;
  font-weight: 500;
  color: #C1C1C1;
  padding: 8px;
`;

export const Content = styled.input`
  flex: 1;
  width: 90%;
  border: none;
  background: #EFEFF7;
  padding: 4px 8px;
  margin-top: -16px;
  color: #333;
`;

export const ErrorMessage = styled.p`
  color: #F17676;
  margin: 0 0 12px 4px;
`;