// src/components/Footer.jsx
import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
import { texts } from "../data/texts";

const FooterContainer = styled.footer`
  text-align: center;
  padding: 1.5rem;
  background: ${({ theme }) => (theme.isDarkMode ? "#333" : "#444")};
  color: white;
  border-top: 2px solid #ffdd57;
  font-family: 'Roboto', sans-serif;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 1rem;
  font-weight: 400;
`;

const Footer = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const { footer } = texts[language];

  return (
    <div id="footer">
      <FooterContainer theme={{ isDarkMode }}>
        <FooterText>{footer.copyright}</FooterText>
      </FooterContainer>
    </div>
  );
};

export default Footer;