import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  & + div {
    margin-top: 1.6rem;
  }

  svg:hover {
    cursor: pointer;
  }
`;

export const ImageContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 48px;
    height: 48px;
    border-radius: 8px;
    
  }
  position: relative;
  :after {
    content: '●';
    font-size: 24px;
    position: absolute;
    top: -14px;
    color: #00E31F;
    right: -6px;

    @media only screen and (max-width: 1366px) {
      right: -6px;
      top: -4px;
    }

    @media only screen and (max-width: 768px) {
      right: -6px;
      top: -14px;
    }
  }

`;

export const TextContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: grey;
  padding: 0 8px;

  p {
    font-weight: 500;
  }

  label {
    font-size: 12px;
  }
`;