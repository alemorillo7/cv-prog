
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Proyectos from "./components/Proyectos";
import Experiencia from "./components/Experiencia";
import Habilidades from "./components/Habilidades";
import OtrosDatos from "./components/OtrosDatos";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Experiencia />
      <Proyectos />
      <Habilidades />
      <OtrosDatos />
      <Footer />
    </div>
  );
};

export default App;