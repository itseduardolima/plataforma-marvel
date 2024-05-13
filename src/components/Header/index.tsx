import {
  HeaderContainer,
  Nav,
  StyledNavLink,
  ProfileContainer,
  ProfileImage,
  ButtonExit,
  MenuButton,
} from "./styled";
import { Logo } from "../Logo";
import menuHeader from "../../assets/images/menu-header.svg";
import profilePic from "../../assets/images/profile-picture.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");

    navigate("/");
  };

  return (
    <HeaderContainer showMenu={showMenu}>
      <Logo fontSize="60px" />
      <MenuButton onClick={handleShowMenu}>
        <img src={menuHeader} alt="Menu" />
      </MenuButton>

      <Nav showMenu={showMenu}>
        <StyledNavLink
          to="/personagens"
          className={(isActive) => (isActive ? "active" : "")}
        >
          Personagens
        </StyledNavLink>

        <StyledNavLink
          to="/filmes"
          className={(isActive) => (isActive ? "active" : "")}
        >
          Filmes
        </StyledNavLink>

        <StyledNavLink
          to="/hqs"
          className={(isActive) => (isActive ? "active" : "")}
        >
          HQs
        </StyledNavLink>

        <ProfileContainer>
          <ProfileImage src={profilePic} alt="Profile" />
          <ButtonExit onClick={handleLogout}>Sair</ButtonExit>
        </ProfileContainer>
      </Nav>
    </HeaderContainer>
  );
};
