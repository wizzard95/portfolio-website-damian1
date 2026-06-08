import Cv from "../../pdf/cvDamianAcuña--Dev.pdf";
import Profile from "../../assets/yo.jpeg";
import { RiDownload2Line, RiMailLine } from "react-icons/ri";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./home.css";

const home = () => {
  return (
    <section className="home-container grid">
      <img src={Profile} alt="" className="home-img" />

      <div className="home-content">
        <h1 className="home-title">
          <span>Damián Acuña</span>
        </h1>
        <p className="home-subtitle">
          <span className="home-subtitle-code">{"</>"}</span>
          FullStack Developer
        </p>
        <p className="home-description">
          Me especializo en desarrollar aplicaciones web escalables y
          eficientes, combinando interfaces modernas, backends robustos y buenas
          prácticas para optimizar procesos y mejorar la experiencia del
          usuario.
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
            <a href="/contact" className="social-link" aria-label="Contacto">
              <RiMailLine />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default home;
