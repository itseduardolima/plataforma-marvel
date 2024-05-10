import { keyframes } from "styled-components";

export const moveBackground = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(20px); 
  }
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const moveGradient = keyframes`
  0%, 30% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const moveLogo = keyframes`
  0%, 15% {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  25% {
    top: 50%;
    left: 53%;
    transform: translate(-54%, -50%);
  }
  70%, 73% {
    top: 50%;
    left: 14%;
    transform: translate(0, -50%);
  }
  100% {
    top: 12%;
    left: 15%;
    transform: translate(0, -50%);
  }
`;

export const moveLogoMobile = keyframes`
  0%, 25% {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  100% {
    top: 17%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const moveLogoTablet = keyframes`
  0%, 25% {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  100% {
    top: 25%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const fadeIn01 = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 0.1;
  }
`;

export const formIn = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const formOut = keyframes`
  from {
    transform: translateY(0);
    opacity: 0;
  }
  to {
    transform: translateY(-100%);
    opacity: 1;
  }
`;
