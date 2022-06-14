import styled, { css } from "styled-components";

interface ContentProps {
  percentage: number;
  color: string;
}

export const Container = styled.div`
  display: flex;
  align-items: row;
  align-items: center;
  padding: 15px 0;
  color: #888;
`;

export const Content = styled.div<ContentProps>`
  margin-left: 1rem;
  height: 8px;
  border-radius: 0 2px 2px 0;

  ${props => css`
    background: ${props.color};
    width: ${props.percentage / 4}%;
  `}
`;