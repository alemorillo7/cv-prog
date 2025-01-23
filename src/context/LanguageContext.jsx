import { createContext } from "react";
import PropTypes from "prop-types";
import { useState } from "react";

// Crear el contexto
export const LanguageContext = createContext();

// Proveedor del contexto
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("es"); // "es" para español, "en" para inglés

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es");
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Validación de props
LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};