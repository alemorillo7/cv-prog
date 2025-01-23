import styled from "styled-components";
import { useState } from "react";
import CertificacionImg from "../assets/CertificadoFull-Stack.jpg";
import CertificacionFrontEnd from "../assets/CertificadoFront-End.jpg";
import CertificacionIngles from "../assets/CertificadoIngles-basico.jpg";
import { FaWhatsapp } from 'react-icons/fa'; // Importamos el icono de WhatsApp

const OtrosDatosContainer = styled.section`
  padding: 4rem 1rem;
  background: #ffffff;
  width: 100%;
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;
`;

const TituloSeccion = styled.h2`
  font-size: 2.5rem;
  color: #34495e;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 700;
`;

const Lista = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const Item = styled.li`
  margin: 1rem 0;
  font-size: 1rem;
  color: #555;
  display: flex;
  align-items: center;
  transition: transform 0.3s;

  &:hover {
    transform: translateX(10px);
  }
`;

const Certificacion = styled.div`
  margin: 1.5rem 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CertificacionImagen = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CertificacionModal = styled.div`
  display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const CertificacionImagenGrande = styled.img`
  max-width: 90%;
  max-height: 90%;
  border-radius: 12px;
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const Tab = styled.button`
  flex: 1;
  padding: 1rem;
  background: ${({ $isActive }) => ($isActive ? '#1abc9c' : '#f9f9f9')};
  color: ${({ $isActive }) => ($isActive ? 'white' : '#333')};
  border: none;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #1abc9c;
    color: white;
    transform: translateY(-2px);
  }
`;

const ContactButton = styled.button`
  margin: 2rem auto;
  display: block;
  padding: 1rem 2rem;
  background: #1abc9c;
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
  transition: background-color 0.3s, transform 0.3s;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 10px;

  &:hover {
    background-color: #16a085;
    transform: translateY(-2px);
  }

  svg {
    font-size: 1.4rem;
  }
`;

import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { texts } from "../data/texts";

const OtrosDatos = () => {
  const { language } = useContext(LanguageContext);
  const { otrosDatos } = texts[language];
  const [activeTab, setActiveTab] = useState("otrosDatos");
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const handleContactClick = () => {
window.location.href = "https://wa.me/+543512510118";
  };

  return (
    <div id="otros-datos">
      <OtrosDatosContainer>
        <TituloSeccion>{otrosDatos.title}</TituloSeccion>
        <TabContainer>
          <Tab $isActive={activeTab === "otrosDatos"} onClick={() => setActiveTab("otrosDatos")}>
            {otrosDatos.otrosDatos}
          </Tab>
          <Tab $isActive={activeTab === "idiomas"} onClick={() => setActiveTab("idiomas")}>
            {otrosDatos.idiomas}
          </Tab>
          <Tab $isActive={activeTab === "certificacion"} onClick={() => setActiveTab("certificacion")}>
            {otrosDatos.certificacion}
          </Tab>
        </TabContainer>
        {activeTab === "otrosDatos" && (
          <Lista>
            <Item>{otrosDatos.desarrolloWeb}</Item>
            <Item>{otrosDatos.frontEnd}</Item>
            <Item>{otrosDatos.backEnd}</Item>
          </Lista>
        )}
        {activeTab === "idiomas" && (
          <Lista>
            <Item>{otrosDatos.español}</Item>
            <Item>{otrosDatos.ingles}</Item>
          </Lista>
        )}
        {activeTab === "certificacion" && (
          <>
            <Certificacion onClick={() => handleImageClick(CertificacionImg)}>
              <CertificacionImagen src={CertificacionImg} alt="Certificación" />
              <span>{otrosDatos.certificacionFullStack}</span>
            </Certificacion>
            <Certificacion onClick={() => handleImageClick(CertificacionFrontEnd)}>
              <CertificacionImagen src={CertificacionFrontEnd} alt="Certificación Frontend" />
              <span>{otrosDatos.certificacionFrontEnd}</span>
            </Certificacion>
            <Certificacion onClick={() => handleImageClick(CertificacionIngles)}>
              <CertificacionImagen src={CertificacionIngles} alt="Certificación Inglés" />
              <span>{otrosDatos.certificacionIngles}</span>
            </Certificacion>
          </>
        )}
        {modalOpen && (
          <CertificacionModal $isOpen={modalOpen} onClick={() => setModalOpen(false)}>
            <CertificacionImagenGrande src={selectedImage} alt="Certificación" />
          </CertificacionModal>
        )}
      </OtrosDatosContainer>
      <ContactButton onClick={handleContactClick}>
        {otrosDatos.contactame}
        <FaWhatsapp />
      </ContactButton>
    </div>
  );
};

export default OtrosDatos;