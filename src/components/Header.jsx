// src/components/Header.jsx
import { useContext } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload } from "react-icons/fa";
import styled from "styled-components";
import { motion } from "framer-motion";
import Foto from "../assets/foto-ale.jpeg";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
import { texts } from "../data/texts";
import cvPDF from "../assets/cv-prog2025.pdf"; // Importa el archivo PDF

const HeaderContainer = styled(motion.header)`
  text-align: center;
  padding: 4rem 1rem;
  background: ${({ theme }) => (theme.isDarkMode ? "#333" : "linear-gradient(to bottom, #f5f7fa, #c3cfe2)")};
  color: ${({ theme }) => (theme.isDarkMode ? "#fff" : "#2c3e50")};
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    text-align: left;
    gap: 3rem;
    padding: 4rem 2rem;
  }
`;

const FotoEstilizada = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 4px solid white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

const Contenido = styled.div`
  max-width: 600px;

  @media (min-width: 768px) {
    max-width: 800px;
  }
`;

const Titulo = styled.h1`
  font-size: 2.5rem;
  margin: 1rem 0 0.5rem;
  color: ${({ theme }) => (theme.isDarkMode ? "#fff" : "#34495e")};
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
`;

const Subtitulo = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => (theme.isDarkMode ? "#ccc" : "#7f8c8d")};
  margin-bottom: 1.5rem;
  font-weight: 400;
  font-family: 'Poppins', sans-serif;
`;

const Descripcion = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => (theme.isDarkMode ? "#ddd" : "#555")};
  line-height: 1.6;
  margin: 1rem 0;
  font-family: 'Open Sans', sans-serif;
`;

const BotonCV = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 1rem;
  padding: 0.8rem 1.5rem;
  background-color: ${({ theme }) => (theme.isDarkMode ? "#444" : "#34495e")};
  color: white;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-family: 'Poppins', sans-serif;

  &:hover {
    background-color: ${({ theme }) => (theme.isDarkMode ? "#555" : "#2c3e50")};
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }
`;

const RedesSociales = styled.div`
  margin-top: 1.5rem;
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;

  a {
    color: ${({ theme }) => (theme.isDarkMode ? "#fff" : "#34495e")};
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    transition: color 0.3s;
    text-decoration: none;
    font-family: 'Poppins', sans-serif;

    &:hover {
      color: #1abc9c;
      transform: translateY(-2px);
    }

    span {
      margin-left: 0.5rem;
      font-size: 1rem;
      font-weight: 500;
    }
  }
`;

const Header = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const { header } = texts[language];

  const descripcion =
    language === "es"
      ? "Actualmente desarrollo aplicaciones con React y cuento con experiencia previa en gestión logística. Busco seguir creciendo profesional y académicamente, aportando mis conocimientos y habilidades en equipos innovadores y desafiantes."
      : "Currently developing applications with React and with previous experience in logistics management. I seek to continue growing professionally and academically, contributing my knowledge and skills in innovative and challenging teams.";

  return (
    <div id="header">
      <HeaderContainer
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        theme={{ isDarkMode }}
      >
        <FotoEstilizada src={Foto} alt="Tu Foto" />
        <Contenido>
          <Titulo theme={{ isDarkMode }}>{header.title}</Titulo>
          <Subtitulo theme={{ isDarkMode }}>{header.subtitle}</Subtitulo>
          <Descripcion theme={{ isDarkMode }}>{descripcion}</Descripcion>
          <BotonCV
            href={cvPDF} // Usa el archivo PDF importado
            download="AlejandroMorillo-CV.pdf" // Nombre del archivo descargado
            theme={{ isDarkMode }}
          >
            <FaDownload /> {header.downloadCV}
          </BotonCV>
          <RedesSociales theme={{ isDarkMode }}>
            <a
              href="https://linkedin.com/alemorillo7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/alemorillo7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>
            <a href="mailto:alemorillo7@gmail.com">
              <FaEnvelope />
              <span>Email</span>
            </a>
          </RedesSociales>
        </Contenido>
      </HeaderContainer>
    </div>
  );
};

export default Header;