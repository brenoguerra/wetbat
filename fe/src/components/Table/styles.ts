import styled from "styled-components";

export const Container = styled.table`
  border-spacing: 0;
`;

export const Title = styled.th`
  margin: 0;
  padding: 0.2rem;
  text-align: left;
  color: gray;
  font-size: 15px;

  :last-child {
    border-right: 0;
  }
`;

export const Data = styled.td`
  color: gray;
  padding: 0.2rem;
  font-size: 14px;
`;