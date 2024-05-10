import styled, { css } from "styled-components";
import { moveLogo, moveLogoMobile, moveLogoTablet } from "../../animations";

interface LogoContainerProps {
  fontSize?: string;
  animate?: boolean;
}

export const LogoContainer = styled.span.withConfig({
  shouldForwardProp: (prop) => prop !== "animate",
})<LogoContainerProps>`
  z-index: 1000;
  background-color: var(--bg-red);
  color: white;
  font-family: "Marvel", sans-serif;
  text-align: center;
  padding: 10px;
  cursor: default;
  font-size: 100px;
  width: 240px;
  height: 80px;
  transition: all 0.3s ease;

  &:hover {
    background-color: white;
    color: var(--bg-red);
  }

  ${({ animate }) =>
    animate &&
    css`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 0px 15px;
      animation: ${moveLogo} 3s forwards;
    `}

  @media (max-width: 1025px) {
    ${({ animate }) =>
      animate &&
      css`
        animation: ${moveLogoTablet} 3s forwards;
      `}
  }

  @media (max-width: 600px) {
    font-size: 35px;
    padding: 7px 7px;

    ${({ animate }) =>
      animate &&
      css`
        font-size: 80px;
        animation: ${moveLogoMobile} 3s forwards;
      `}
  }
`;
