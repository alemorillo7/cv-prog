import styled from "styled-components";

import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { texts } from "../data/texts";

const ExperienciaContainer = styled.section`
  padding: 4rem 1rem; // Reducir el padding lateral en pantallas pequeñas
  background: #ffffff;
  width: 100%;
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box; // Asegura que el padding no exceda el ancho
`;

const TituloSeccion = styled.h2`
  font-size: 2.5rem;
  color: #34495e;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 700;
`;

const ExperienciaGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem; // Margen lateral para pantallas pequeñas
  box-sizing: border-box; // Asegura que el padding no exceda el ancho
`;

const ExperienciaItem = styled.div`
  padding: 1.5rem;
  background: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.1);
  }
`;

const Empresa = styled.h3`
  font-size: 1.4rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const Periodo = styled.p`
  font-size: 0.9rem;
  color: #7f8c8d;
  margin-bottom: 0.5rem;
`;

const Descripcion = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
`;


const Experiencia = () => {
  const { language } = useContext(LanguageContext);
  const { experiencia } = texts[language];

  return (
    <div id="experiencia">
      <ExperienciaContainer>
        <TituloSeccion>{experiencia.title}</TituloSeccion>
        <ExperienciaGrid>
          <ExperienciaItem>
            <Empresa>{experiencia.empresa1}</Empresa>
            <Periodo>{experiencia.periodo1}</Periodo>
            <Descripcion>{experiencia.descripcion1}</Descripcion>
          </ExperienciaItem>
          <ExperienciaItem>
            <Empresa>{experiencia.empresa2}</Empresa>
            <Periodo>{experiencia.periodo2}</Periodo>
            <Descripcion>{experiencia.descripcion2}</Descripcion>
          </ExperienciaItem>
          <ExperienciaItem>
            <Empresa>{experiencia.empresa3}</Empresa>
            <Periodo>{experiencia.periodo3}</Periodo>
            <Descripcion>{experiencia.descripcion3}</Descripcion>
          </ExperienciaItem>
        </ExperienciaGrid>
      </ExperienciaContainer>
    </div>
  );
};

export default Experiencia;