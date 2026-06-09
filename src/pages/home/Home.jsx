import Cv from "../../pdf/cvDamianAcuña--Dev.pdf";
import Profile from "../../assets/yo.jpeg";
import { RiDownload2Line, RiMailLine } from "react-icons/ri";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./home.css";

const home = () => {
  return (
    <section id="home" className="home-container grid">
      <img src={Profile} alt="" className="home-img reveal-left" />

      <div className="home-content reveal-right">
        <h1 className="home-title">
          <span>Damián Acuña</span>
        </h1>
        <p className="home-subtitle">
          <span className="home-subtitle-code">{"</>"}</span>
          FullStack Developer
        </p>
        <p className="home-description">
          Soy desarrollador Full Stack con experiencia en el desarrollo de
          aplicaciones web y APIs REST utilizando tecnologías como Node.js,
          Express, React, Vue.js, TypeScript y Django. He participado en
          proyectos de comercio electrónico, sistemas ERP y aplicaciones
          corporativas, implementando soluciones escalables, seguras y
          orientadas a las necesidades del negocio. <br />
          <br />
          Soy Ingeniero en Informática titulado por INACAP y me mantengo en
          constante aprendizaje a través de proyectos propios y nuevas
          tecnologías. Cuento con experiencia en bases de datos SQL y NoSQL,
          Docker, Git y despliegue de aplicaciones, destacando por mi capacidad
          de adaptación, resolución de problemas y enfoque en la calidad del
          software.
        </p>

        <div className="home-actions">
          <a href={Cv} target="blank_" className="button">
            Descargar CV
            <span className="button-icon">
              <RiDownload2Line />
            </span>
          </a>

          <div className="home-socials">
            <a
              href="https://github.com/wizzard95"
              target="_blank"
              className="social-link"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/dami%C3%A1n-acu%C3%B1a-646705244/"
              target="_blank"
              className="social-link"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a href="#contact" className="social-link" aria-label="Contacto">
              <RiMailLine />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default home;
