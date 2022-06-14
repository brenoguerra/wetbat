import styled from "styled-components";

export const Container = styled.div`
  width: auto;
  max-width: 100vw;
  height: 3rem;
  padding: 0.5rem 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: #5F6CB0;

  svg {
    color: white;
  }
`;

export const LeftSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    color: white;
    font-size: 18px;
    font-weight: bold;
    margin-left: 1rem;

    @media only screen and (max-width: 768px) {
      display: none;
    }
  }

  :hover {
    cursor: pointer;
  }
`;

export const RightSection = styled.section`
  width: 50%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  p {
    color: white;
    font-size: 18px;
    font-weight: bold;
    margin-left: 1rem;
  }

  svg {
    font-size: 18px;
  }
`;

export const SearchableBar = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  height: 1.9rem;
  background-color: #E6E6E6;
  border-radius: 6px;
  padding: 0 8px;

  svg {
    color: #737373;
  }

  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 0 8px;
  border: none;
  border: none;
  background-color: #E6E6E6;
  border-radius: 6px;
  color: #333;
  font-size: 14px;
`;


export const Image = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50px;
  border: none;
  border: none;
  background-color: #E6E6E6;
  color: #333;
  font-size: 14px;
`;
