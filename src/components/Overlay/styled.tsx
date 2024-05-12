import styled from "styled-components";
import { fadeIn, fadeOut } from "../../animations";

interface OverlayContainerProps {
  detailsOpen: boolean;
}

export const OverlayContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "detailsOpen",
})<OverlayContainerProps>`
  display: ${({ detailsOpen }) => (detailsOpen ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(0, 0, 0, 1) 50%, transparent);
  justify-content: center;
  align-items: center;

  animation: ${({ detailsOpen }) => (detailsOpen ? fadeIn : fadeOut)} 0.3s
    ease-in-out both;
`;
