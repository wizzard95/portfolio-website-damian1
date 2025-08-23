import Cv from '../../pdf/cvdamianAcuñacv.pdf';
import Profile from "../../assets/home2.jpg"; 
import { Link } from "react-router";
import { RiArrowRightLine, RiDownload2Line, RiMailLine, } from "react-icons/ri";
import { FaGithub, FaLinkedin  } from "react-icons/fa";
import './home.css';

const home = () => {
  return (

  <section className="home-container grid">
    
    <img src={Profile} alt="" className="home-img" />
 

    <div className="home-content">
      <h1 className="home-title">
      <span> Damián Acuña</span> <br />Front-End Dev
      </h1>
      <p className="home-description">
       Soy Desarrollador Web Front-End en Chile.
        Me especializo en combinar una estética minimalista
         con un código limpio y escalable, creando experiencias digitales
          que optimizan la productividad y mejoran la satisfacción de 
          los usuarios.

      </p>
  
        <a href={Cv} download='' target='blank_' className="button"><br />
                Descargar Cv
               <span className="button-icon">
                 <RiDownload2Line />
               </span>
        </a>
   {/*    <Link to="/about" className="button"><br />
      Mas acerca de mi
      <span className="button-icon">
        <RiArrowRightLine />
      </span>
      </Link>
        */}

   
       <a href="https://github.com/wizzard95"> <div className="icon-home"><FaGithub /></div></a>
       <a href="https://www.linkedin.com/in/dami%C3%A1n-acu%C3%B1a-646705244/"> <div className="icon-home"><FaLinkedin /></div></a>
        <div className="icon-home"><RiMailLine /></div>


    </div>
   
  

    <div className="color-block"></div>

  </section>



  )

  

}

export default home