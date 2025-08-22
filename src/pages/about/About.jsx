import Info from "../../components/Info";
/* import Cv from '../../pdf/steve-cv.pdf'; */
import { RiDownload2Line } from "react-icons/ri";
import Stats from "../../components/Stats";
import { skill } from "../../Data";
import SkillsItem from "../../components/SkillsItem";
import { resume } from "../../Data";
import ResumeItem from "../../components/ResumeItem";
import { GiSwordsEmblem } from "react-icons/gi";

import './about.css';

const About = () => {
  return (
    <main className="section container">
      <section className="about">
        <h2 className="section-title">
          Mis <span>Skills</span>
          </h2>

          {/* <div className="about-container grid">
            <div className="about-info">
              <h3 className="section-subtitle">Informacion Personal</h3><br />

              <ul className="info-list grid">
                <Info/>
              </ul>

              <a href={Cv} download='' className="button"><br />
                Descargar Cv
               <span className="button-icon">
                 <RiDownload2Line />
               </span>
              </a>
            </div>
          
          <div className="stats grid">
            <Stats />
          </div>
          </div> */}
      </section>

      <div className="separator"></div>

      <section className="skills">
        <h3 className="section-subtitle subtitle-center">
            <span><GiSwordsEmblem /></span>
        </h3>
        

        <div className="skills-container grid">
          <div className="skills-group">
            <h3 className="skills-title">Frontend Developer</h3>

            <div className="skills-items grid">
              {skill.map((val) => {
                if(val.category === 'developer'){
                  return <SkillsItem key={val.id} {...val} />;
                }
              })}
            </div>
              <div className="separator"></div>  
                  <h3 className="skills-title">Herramientas y Despliegue</h3>
                  <div className="skills-items grid">
             {skill.map((val) => {
                if(val.category === 'FrontTools'){
                  return <SkillsItem key={val.id} {...val} />
                }
              })}
          </div>
          </div>

          <div className="skills-group">
            <h3 className="skills-title">Back-End Developer</h3>

            <div className="skills-items grid">
             {skill.map((val) => {
                if(val.category === 'BackendDev'){
                  return <SkillsItem key={val.id} {...val} />
                }
              })}
          </div>

                <div className="separator"></div>  

          <h3 className="skills-title">Herramientas</h3>

            <div className="skills-items grid">
             {skill.map((val) => {
                if(val.category === 'DevTools'){
                  return <SkillsItem key={val.id} {...val} />
                }
              })}
          </div>
        </div>
        </div>
      </section>
            
       <div className="separator"></div>      

       <section className="resume">
              <h3 className="section-subtitle subtitle-center">
              Experiencia y Educación
              </h3>
              <div className="separator"></div>
              <br /><br />
            
              <div className="resume-container grid">
                <div className="resume-group grid">
                  {resume.map((val) => {
                    if(val.category === 'experience'){
                      return <ResumeItem key={val.id} {...val}/>
                    }
                  })}

                </div>

                 <div className="resume-group grid">
                  {resume.map((val) => {
                    if(val.category === 'education'){
                      return <ResumeItem key={val.id} {...val}/>
                    }
                  })}

                </div>
              </div>
       </section>
    </main>
  )
}

export default About;