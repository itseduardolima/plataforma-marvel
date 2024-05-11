import styled, { css } from "styled-components";
import {
  moveBackground,
  fadeIn,
  moveGradient,
  fadeIn01,
} from "../../animations";
import bgAvengers from "../../assets/images/poster-avengers.svg";

interface ImageContainerProps {
  animate: boolean;
}

export const ImageContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "animate",
})<ImageContainerProps>`
  width: 50vw;
  background-image: linear-gradient(
      to left,
      black,
      #1e1e1ebc,
      #1e1e1ebc,
      transparent
    ),
    url(${bgAvengers});
  background-size: cover;
  background-position: center;

  ${({ animate }) =>
    animate &&
    css`
      animation: ${moveBackground} 3s forwards;
      animation-delay: 0.8s;
    `}

  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 0;

    ${({ animate }) =>
      animate &&
      css`
        animation: ${moveGradient} 3s forwards;
        animation-delay: 0.8s;
      `}
  }

  ${({ animate }) =>
    animate &&
    css`
      height: 100vh;
      z-index: 1;
      opacity: 0;
      animation: ${fadeIn} 2s forwards;
      animation-delay: 0.8s;
    `}

  @media (max-width: 1025px) {
    width: 100%;
    height: 100%;
    opacity: 0.2;
    position: fixed;
    ${({ animate }) =>
      animate &&
      css`
        animation: ${fadeIn01} 2s forwards;
      `}

    img {
      animation: none;
    }

    &:after {
      background: transparent;
    }
  }
`;
