import styled from "styled-components";

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(1, 60vh);
  padding: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(1, 40vh);
  }

  @media (min-width: 1025px) {
    padding-top: 7%;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(1, 60vh);
  }
`;

export const CardContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  @media (max-width: 600px) {
    display: none;
    &:nth-child(1) {
      display: flex;
      justify-content: center;
    }
  }
`;
