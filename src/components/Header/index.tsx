import { HeaderContainer, Nav, StyledNavLink, ProfileContainer, ProfileImage, ButtonExit, MenuButton } from "./styled";
import { useState } from "react";
import { Logo } from "../Logo";

import menuHeader from "../../assets/images/menu-header.svg";
import profilePic from "../../assets/images/profile-picture.png";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <HeaderContainer showMenu={showMenu}>
      
      <Logo fontSize="60px" />
      <MenuButton onClick={handleShowMenu}>
        <img src={menuHeader} alt="Menu" />
      </MenuButton>

      <Nav showMenu={showMenu}>
        <StyledNavLink to="/personagens" className={(isActive) => (isActive ? "active" : "")}>
          Personagens
        </StyledNavLink>

        <StyledNavLink to="/filmes" className={(isActive) => (isActive ? "active" : "")}>
          Filmes
        </StyledNavLink>

        <StyledNavLink to="/hqs" className={(isActive) => (isActive ? "active" : "")}>
          HQs
        </StyledNavLink>

        <ProfileContainer>
          <ProfileImage src={profilePic} alt="Profile" />
          <ButtonExit>Sair</ButtonExit>
        </ProfileContainer>
      </Nav>

    </HeaderContainer>
  );
};

export default Header;