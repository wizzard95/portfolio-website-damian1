import { skill } from "../../Data";
import SkillsItem from "../../components/SkillsItem";
/* import { resume } from "../../Data"; */
/* import ResumeItem from "../../components/ResumeItem"; */
import { GiSwordsEmblem } from "react-icons/gi";

import "./about.css";

const About = () => {
  return (
    <section id="about" className="section container">
      <h2 className="section-title reveal">
        Mis <span>Skills</span>
      </h2>

      <div className="separator"></div>

      <section className="skills">
        <h3 className="section-subtitle subtitle-center">
          <span>
            <GiSwordsEmblem />
          </span>
        </h3>

        <div className="skills-container grid reveal">
          <div className="skills-group">
            <h3 className="skills-title">Frontend Developer</h3>

            <div className="skills-items grid">
              {skill.map((val) => {
                if (val.category === "developer") {
                  return <SkillsItem key={val.id} {...val} />;
                }
              })}
            </div>
            <div className="separator"></div>
            <h3 className="skills-title">Herramientas y Despliegue</h3>
            <div className="skills-items grid">
              {skill.map((val) => {
                if (val.category === "FrontTools") {
                  return <SkillsItem key={val.id} {...val} />;
                }
              })}
            </div>
          </div>

          <div className="skills-group">
            <h3 className="skills-title">Back-End Developer</h3>

            <div className="skills-items grid">
              {skill.map((val) => {
                if (val.category === "BackendDev") {
                  return <SkillsItem key={val.id} {...val} />;
                }
              })}
            </div>

            <div className="separator"></div>

            <h3 className="skills-title">Herramientas</h3>

            <div className="skills-items grid">
              {skill.map((val) => {
                if (val.category === "DevTools") {
                  return <SkillsItem key={val.id} {...val} />;
                }
              })}
            </div>
          </div>
        </div>
      </section>

      <div className="separator"></div>

      {/*        <section className="resume">
              <h3 className="section-subtitle subtitle-center">
              Experiencia y Educación
              </h3>
              <div className="separator"></div>
              <br /><br />
            
              <div className="resume-container grid reveal">
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
       </section> */}
    </section>
  );
};

export default About;
