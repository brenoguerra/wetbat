import styled, { css } from "styled-components";
import { darken } from 'polished'

interface SidebarItemProps {
  isSelected?: boolean;
  endSection?: boolean;
}

export const Container = styled.section<SidebarItemProps>`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: start;
  font-weight: 600;
  padding-left: 2rem;
  color: #5F6CB0;
  
  ${({ isSelected }) => isSelected && css`
    background-color: #CCD0DC;
  `}
  
  ${({ endSection }) => endSection && css`
    border-bottom: 2px solid #D4D4D4;
  `}

  svg {
    font-size: 18px;
    margin-right: 8px;
  }

  :hover {
    display: flex;
    align-items: center;
    width: 100%;
    background-color: ${darken(0.02, '#CCD0DC')};
    cursor: pointer;
  }
`;