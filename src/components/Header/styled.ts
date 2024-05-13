import styled from "styled-components";
import { NavLink } from "react-router-dom";

interface HeaderContainerProps {
  showMenu: boolean;
}

export const HeaderContainer = styled.header<HeaderContainerProps>`
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

  @media (min-width: 1025px) {
    padding: 10px 50px;
  }
`;

export const Nav = styled.nav<HeaderContainerProps>`
  display: ${({ showMenu }) => (showMenu ? "flex" : "none")};
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 25px;
  overflow: hidden;
  padding: 0 20px;
  background-color: black;
  position: absolute;
  top: 80px;
  left: 0;
  width: 100%;
  height: 25vh;
  transition: all 0.4s ease-in-out;

  @media (min-width: 768px) {
    padding: 20px;
    gap: 30px;
    top: 80px;
    height: 32vh;
  }

  @media (min-width: 1025px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 70px;
    background-color: transparent;
    padding: 10px;
    position: static;
    height: auto;
    width: auto;
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
    font-size: 2rem;
  }

  @media (min-width: 1025px) {
    font-size: 24px;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const ProfileImage = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  box-shadow: rgba(255, 0, 0, 0.6) 2px 1px 10px 0px;

  @media (min-width: 768px) {
    width: 50px;
    height: 50px;
  }

  @media (min-width: 1025px) {
    width: 40px;
    height: 40px;
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

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const MenuButton = styled.button`
  display: block;
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

  @media (min-width: 1025px) {
    display: none;
  }
`;
