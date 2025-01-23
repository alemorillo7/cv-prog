// src/context/ThemeContext.jsx
import { createContext, useState } from "react";
import PropTypes from "prop-types";

// Crear el contexto
const ThemeContext = createContext();

// Proveedor del contexto
const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Validación de props
ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Exportar el contexto y el proveedor
export { ThemeContext, ThemeProvider };