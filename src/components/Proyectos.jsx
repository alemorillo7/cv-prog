import styled from "styled-components";
import fotoBarber from "../assets/foto-barber.jpeg";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { texts } from "../data/texts";
import fotoAlmacen from "../assets/ada.jpeg";
import fotoRastMovil from "../assets/rast-movil.jpeg";


const ProyectosContainer = styled.section`
  padding: 4rem 1rem;
  background: #ffffff;
  width: 100%;
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;
  overflow: hidden;
`;

const TituloSeccion = styled.h2`
  font-size: 2.5rem;
  color: #34495e;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 700;
`;

const ProyectosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  box-sizing: border-box;
`;

const Proyecto = styled.div`
  padding: 1.5rem;
  background: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s, box-shadow 0.3s;
  box-sizing: border-box;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.1);
  }
`;

const ProyectoImagen = styled.img`
  width: 100%;
height: 300px; // Altura fija para todas las imágenes
  border-radius: 8px;
  margin: 0 0 1.5rem 0; // Margen uniforme
  object-fit: cover; // Mantiene la proporción y cubre el espacio
`;

const ProyectoTitulo = styled.h3`
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
  text-align: center;
  font-weight: 600;
`;

const ProyectoDescripcion = styled.p`
  font-size: 1rem;
  color: #555;
  text-align: center;
  line-height: 1.6;
`;

const ProyectoLink = styled.a`
  display: inline-block;
  margin-top: 1rem;
  padding: 0.8rem 1.5rem;
  background-color: #1abc9c;
  color: white;
  text-decoration: none;
  border-radius: 25px;
  font-weight: 600;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #16a085;
    transform: translateY(-2px);
  }
`;

const Proyectos = () => {
    const { language } = useContext(LanguageContext);
    const { proyectos } = texts[language];

    return (
        <div id="proyectos">
            <ProyectosContainer>
                <TituloSeccion>{proyectos.title}</TituloSeccion>
                <ProyectosGrid>
                    <Proyecto>
                        <ProyectoImagen src={fotoBarber} alt="App Barbería" />
                        <ProyectoTitulo>{proyectos.proyecto1}</ProyectoTitulo>
                        <ProyectoDescripcion>{proyectos.descripcion1}</ProyectoDescripcion>
                        <ProyectoLink
                            href="https://alemorillo7.github.io/App_barberia/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {language === "es" ? "Ver Proyecto" : "View Project"}
                        </ProyectoLink>
                    </Proyecto>
                    <Proyecto>
                        <ProyectoImagen src={fotoAlmacen} alt="App Almacén de Productos" />
                        <ProyectoTitulo>{proyectos.proyecto2}</ProyectoTitulo>
                        <ProyectoDescripcion>{proyectos.descripcion2}</ProyectoDescripcion>
                        <ProyectoLink
                            href="https://alemorillo7.github.io/app-control-usuario/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {language === "es" ? "Ver Proyecto" : "View Project"}
                        </ProyectoLink>
                    </Proyecto>
                    <Proyecto>
                        <ProyectoImagen src={fotoRastMovil} alt="web rastreo movil" />
                        <ProyectoTitulo>{proyectos.proyecto3}</ProyectoTitulo>
                        <ProyectoDescripcion>{proyectos.descripcion3}</ProyectoDescripcion>
                        <ProyectoLink href="https://alemorillo7.github.io/pagina-web-rastMovil/" target="_blank" rel="noopener noreferrer">
                            {language === "es" ? "Ver Proyecto" : "View Project"}
                        </ProyectoLink>
                    </Proyecto>
                </ProyectosGrid>
            </ProyectosContainer>
        </div>
    );
};

export default Proyectos;