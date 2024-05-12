import styled from "styled-components";

interface ButtonNextProps {
  position: string;
}

export const ButtonsContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 0;

  @media (max-width: 1025px) {
    bottom: 0px;
    background-color: #000;
    width: 100%;
    height: 75px;
    z-index: 0;
  }

  @media (max-width: 600px) {
    height: 55px;
  }
`;

export const ButtonCard = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== "position",
})<ButtonNextProps>`
  position: absolute;
  cursor: pointer;
  z-index: 1;
  background-color: transparent;
  border: none;
  transition: transform 0.2s;
  width: 50px;

  ${({ position }) =>
    position === "right" &&
    `
    right: 0;
    margin-right: 100px;
    
    img {
      transform: rotate(180deg);
    }

    &:hover img{
      transform: rotate(180deg);
    }
  `}

  ${({ position }) =>
    position === "left" &&
    `
      left: 0;
      margin-left: 100px;
  `}

  img {
    width: 50px;
    height: 50px;
  }

  &:hover {
    transform: scale(1.2);
  }

  @media (max-width: 1025px) {
    z-index: 1;

    img {
      width: 40px;
      height: 40px;
    }

    ${({ position }) =>
      position === "right" &&
      `
      margin-right: 30px;
    `}

    ${({ position }) =>
      position === "left" &&
      `
      margin-left: 30px;
    `}
  }

  @media (max-width: 600px) {
    img {
      width: 30px;
      height: 30px;
    }
  }
`;
