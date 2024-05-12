import styled, { css } from 'styled-components';
import { moveBackground, fadeIn, moveGradient, fadeIn01 } from '../../animations';

interface ImageContainerProps {
  animate: boolean;
}

export const ImageContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'animate',
})<ImageContainerProps>`
  opacity: 0.5;
  height: 100%;
  position: absolute;
  right: 0px;
  overflow: hidden;
  z-index: -1;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${({animate}) => animate && css`
      animation: ${moveBackground} 3s forwards;
      animation-delay: 0.8s;
    `}
  }

  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      to right,
      black,
      #1e1e1ebc,
      #1e1e1ebc,
      transparent
    );
    z-index: 0;

    ${({animate}) => animate && css`
      animation: ${moveGradient} 3s forwards;
      animation-delay: 0.8s;
    `}
  }

  ${({animate}) => animate && css`
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
    ${({animate}) => animate && css`
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
