// src/components/Navbar.jsx
import { Link } from "react-scroll";
import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
import { texts } from "../data/texts";

const NavbarContainer = styled.nav`
  background: ${({ theme }) => (theme.isDarkMode ? "#333" : "#444")};
  padding: 1rem;
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 1000;
  flex-wrap: wrap;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const NavLink = styled(Link)`
  color: white;
  margin: 0 1.5rem;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  transition: color 0.3s, transform 0.3s;

  &:hover {
    color: #ffdd57;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    margin: 0.5rem 1rem;
    font-size: 1rem;
  }
`;

const ThemeButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #ffdd57;
  }
`;

const LanguageButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #ffdd57;
  }
`;

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const { language, toggleLanguage } = useContext(LanguageContext);
  const { navbar } = texts[language];

  return (
    <NavbarContainer theme={{ isDarkMode }}>
      <NavLink to="header" smooth={true} duration={500}>
        {navbar.inicio}
      </NavLink>
      <NavLink to="proyectos" smooth={true} duration={500}>
        {navbar.proyectos}
      </NavLink>
      <NavLink to="experiencia" smooth={true} duration={500}>
        {navbar.experiencia}
      </NavLink>
      <NavLink to="habilidades" smooth={true} duration={500}>
        {navbar.habilidades}
      </NavLink>
      <NavLink to="otros-datos" smooth={true} duration={500}>
        {navbar.otrosDatos}
      </NavLink>
      <ThemeButton onClick={toggleTheme}>
        {isDarkMode ? "🌙" : "☀️"}
      </ThemeButton>
      <LanguageButton onClick={toggleLanguage}>
        {language === "es" ? "🇪🇸" : "🇺🇸"}
      </LanguageButton>
    </NavbarContainer>
  );
};

export default Navbar;