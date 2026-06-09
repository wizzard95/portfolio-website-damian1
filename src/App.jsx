import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Portfolio from "./pages/portfolio/Portfolio";
import Contact from "./pages/contact/Contact";
import Navbar from "./components/navbar/Navbar";
import Themes from "./components/themes/Themes";
import Particles from "./components/Particles";
import useScrollReveal from "./hooks/useScrollReveal";

const App = () => {
  useScrollReveal();

  return (
    <>
      <Particles />
      <Navbar />
      <main>
        <Home />
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Themes />
    </>
  );
};

export default App;