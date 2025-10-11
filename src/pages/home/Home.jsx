import Cv from '../../pdf/cvdefdamian.pdf';
import Profile from "../../assets/yo.jpeg"; 
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
      <span> Damián Acuña</span> <br />Full-Stack Dev
      </h1>
      <p className="home-description">
 Me especializo en desarrollar aplicaciones web escalables y 
 eficientes, combinando interfaces modernas, backends robustos y
  buenas prácticas para optimizar procesos y mejorar la experiencia 
  del usuario.

      </p>
  
        <a href={Cv}/*  download=''  */target='blank_' className="button"><br />
                Descargar Cv
               <span className="button-icon">
                 <RiDownload2Line />
               </span>
        </a>
  

   
       <a href="https://github.com/wizzard95"> <div className="icon-home"><FaGithub /></div></a>
       <a href="https://www.linkedin.com/in/dami%C3%A1n-acu%C3%B1a-646705244/"> <div className="icon-home"><FaLinkedin /></div></a>
        <div className="icon-home"><RiMailLine /></div>


    </div>
   
  

    <div className="color-block"></div>

  </section>



  )

  

}

export default home