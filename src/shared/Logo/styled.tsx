import styled, { css } from "styled-components";
import {
  moveLogo,
  moveLogoMobile,
  moveLogoTablet,
} from "../../animations";

interface LogoContainerProps {
  fontSize?: string;
  animate?: boolean;
}

export const LinkLogo = styled.div``;

export const LogoContainer = styled.span.withConfig({
  shouldForwardProp: (prop) => prop !== "animate",
})<LogoContainerProps>`
  z-index: 1000;
  background-color: var(--bg-red);
  color: white;
  font-size: ${(props) => props.fontSize || "60px"};
  font-family: "Marvel", sans-serif;
  font-weight: 100;

  padding: 10px 10px;
  line-height: 1;
  letter-spacing: 2px;

  cursor: default;
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
        font-size: 100px;
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
