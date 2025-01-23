import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useContext } from "react";
import { useInView } from "react-intersection-observer";
import { LanguageContext } from "../context/LanguageContext";
import { texts } from "../data/texts";

const HabilidadesContainer = styled.section`
  padding: 4rem 1rem;
  background: ${({ theme }) => (theme.isDarkMode ? "#333" : "#fff")};
  color: ${({ theme }) => (theme.isDarkMode ? "#fff" : "#34495e")};
  width: 100%;
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;
`;

const TituloSeccion = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => (theme.isDarkMode ? "#fff" : "#34495e")};
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 700;
`;

const HabilidadesGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
  box-sizing: border-box;
`;

const HabilidadItem = styled.div`
  margin: 0.5rem 0;
`;

const HabilidadNombre = styled.h3`
  font-size: 1.1rem;
  color: ${({ theme }) => (theme.isDarkMode ? "#fff" : "#2c3e50")};
  margin-bottom: 0.3rem;
  font-weight: 600;
`;

const BarraProgreso = styled.div`
  background: #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  height: 15px;
`;

const Progreso = styled(motion.div)`
  background: #1abc9c;
  height: 100%;
  width: ${({ $porcentaje }) => $porcentaje}%;
  transform-origin: left;
`;

const TiempoExperiencia = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => (theme.isDarkMode ? "#fff" : "#555")};
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
`;

const Habilidades = () => {
    const { language } = useContext(LanguageContext);
    const { habilidades } = texts[language];
  
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true });
  
    useEffect(() => {
      if (inView) {
        controls.start({ scaleX: 1 });
      }
    }, [controls, inView]);
  
    return (
      <div id="habilidades">
        <HabilidadesContainer>
          <TituloSeccion>{habilidades.title}</TituloSeccion>
          <HabilidadesGrid ref={ref}>
            <HabilidadItem>
              <HabilidadNombre>{habilidades.react}</HabilidadNombre>
              <BarraProgreso>
                <Progreso
                  $porcentaje={80}
                  initial={{ scaleX: 0 }}
                  animate={controls}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
                <TiempoExperiencia>{language === "es" ? "1 año" : "1 year"}</TiempoExperiencia>
              </BarraProgreso>
            </HabilidadItem>
            <HabilidadItem>
              <HabilidadNombre>{habilidades.javascript}</HabilidadNombre>
              <BarraProgreso>
                <Progreso
                  $porcentaje={70}
                  initial={{ scaleX: 0 }}
                  animate={controls}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
                <TiempoExperiencia>{language === "es" ? "1 año" : "1 year"}</TiempoExperiencia>
              </BarraProgreso>
            </HabilidadItem>
            <HabilidadItem>
              <HabilidadNombre>{habilidades.htmlCss}</HabilidadNombre>
              <BarraProgreso>
                <Progreso
                  $porcentaje={90}
                  initial={{ scaleX: 0 }}
                  animate={controls}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
                <TiempoExperiencia>{language === "es" ? "1.5 años" : "1.5 years"}</TiempoExperiencia>
              </BarraProgreso>
            </HabilidadItem>
            <HabilidadItem>
              <HabilidadNombre>{habilidades.javaSpringboot}</HabilidadNombre>
              <BarraProgreso>
                <Progreso
                  $porcentaje={60}
                  initial={{ scaleX: 0 }}
                  animate={controls}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
                <TiempoExperiencia>{language === "es" ? "1 año" : "1 year"}</TiempoExperiencia>
              </BarraProgreso>
            </HabilidadItem>
            <HabilidadItem>
              <HabilidadNombre>{habilidades.php}</HabilidadNombre>
              <BarraProgreso>
                <Progreso
                  $porcentaje={50}
                  initial={{ scaleX: 0 }}
                  animate={controls}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
                <TiempoExperiencia>{language === "es" ? "6 meses" : "6 months"}</TiempoExperiencia>
              </BarraProgreso>
            </HabilidadItem>
            <HabilidadItem>
              <HabilidadNombre>{habilidades.mysql}</HabilidadNombre>
              <BarraProgreso>
                <Progreso
                  $porcentaje={65}
                  initial={{ scaleX: 0 }}
                  animate={controls}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
                <TiempoExperiencia>{language === "es" ? "1 año" : "1 year"}</TiempoExperiencia>
              </BarraProgreso>
            </HabilidadItem>
            <HabilidadItem>
              <HabilidadNombre>{habilidades.gitGithub}</HabilidadNombre>
              <BarraProgreso>
                <Progreso
                  $porcentaje={75}
                  initial={{ scaleX: 0 }}
                  animate={controls}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
                <TiempoExperiencia>{language === "es" ? "1.5 años" : "1.5 years"}</TiempoExperiencia>
              </BarraProgreso>
            </HabilidadItem>
          </HabilidadesGrid>
        </HabilidadesContainer>
      </div>
    );
  };
  
  export default Habilidades;