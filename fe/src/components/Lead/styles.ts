import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  & + div {
    margin-top: 1.6rem;
  }
`;

export const ImageContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }
`;

export const TextContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: grey;
  padding: 0 8px;
`;

export const TopTextContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  p {
    font-weight: 500;
  }

  label {
    font-size: 12px;
  }
`;

export const MessageContent = styled.div`
  label {
    font-size: 12px;
  }
`;