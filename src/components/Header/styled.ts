import styled from "styled-components";
import { NavLink } from "react-router-dom";

interface HeaderContainerProps {
  showMenu: boolean;
}

export const HeaderContainer = styled.header.withConfig({
  shouldForwardProp: (prop) => prop !== "showMenu",
})<HeaderContainerProps>`
  padding: 20px 20px;
  box-shadow: red 0px 1px 10px 0px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;

  @media (min-width: 768px) {
    &::before {
      content: "";
      position: fixed;
      width: 100%;
      height: 100%;
      background-color: #000;
      bottom: 0;
      left: 0;
      z-index: 1;
      transition: all 0.4s ease-in-out;
      opacity: 0;
      visibility: hidden;
      pointer-events: none;

      ${({ showMenu }) =>
        showMenu &&
        `
        opacity: 0.7;
        visibility: visible;
        pointer-events: all;

      `}
    }
  }

  @media (min-width: 998px) {
    padding: 10px 50px;
  }
`;

export const Nav = styled.nav.withConfig({
  shouldForwardProp: (prop) => prop !== "showMenu",
})<HeaderContainerProps>`
  display: flex;
  justify-content: center;
  background-color: black;
  align-items: center;
  gap: 70px;
  overflow: hidden;
  padding: 10px;

  @media (max-width: 1025px) {
    max-width: ${({ showMenu }) => (showMenu ? "40vw" : "0")};
    width: ${({ showMenu }) => (showMenu ? "100%" : "0")};

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    transition: all 0.4s ease-in-out;
    right: 0;
    padding: ${({ showMenu }) => (showMenu ? "0px 40px" : "0")};
    position: absolute;
    top: 120px;
    height: calc(100vh - 120px);

    z-index: 10;
    gap: 25px;
  }

  @media (max-width: 600px) {
    max-width: ${({ showMenu }) => (showMenu ? "60vw" : "0")};
    width: ${({ showMenu }) => (showMenu ? "100%" : "0")};
    padding: ${({ showMenu }) => (showMenu ? "20px" : "0")};
    gap: 10px;
    top: 80px;
    height: 30vh;
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: #fff;
  opacity: 0.5;
  text-decoration: none;
  font-size: 20px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #fff;
    opacity: 1;
  }

  &.active {
    opacity: 1;
  }

  @media (min-width: 768px) {
    font-size: 24px;
  }

  @media (min-width: 998px) {
    font-size: 30px;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  @media (max-width: 1025px) {
    position: absolute;
    bottom: 60px;
    padding-right: 0px;
  }
  @media (max-width: 600px) {
    bottom: 40px;
  }
`;

export const ProfileImage = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  box-shadow: rgba(255, 0, 0, 0.6) 2px 1px 10px 0px;

  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
  @media (min-width: 998px) {
    width: 55px;
    height: 55px;
  }
`;

export const ButtonExit = styled.span`
  opacity: 0.5;
  color: #fff;
  font-size: 20px;
  font-weight: 100;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #fff;
    opacity: 1;
  }

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export const MenuButton = styled.button`
  display: none;
  width: 40px;
  height: 40px;
  cursor: pointer;
  z-index: 2;
  background-color: transparent;
  border: none;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1025px) {
    display: block;
  }
`;
