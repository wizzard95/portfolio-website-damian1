import { portfolio } from "../../Data";
import { RiLink } from "react-icons/ri";
import './portfolio.css';

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio section">
      <h2 className="section-title reveal">
          Mis <span>Proyectos</span>
      </h2>
      <div className="portfolio-container container">
          {portfolio.map(({id, img, title, description, skills, link}, index) => {
            return (
              <article className="portfolio-card reveal" key={id} style={{transitionDelay: `${index * 0.1}s`}}>
                  <a href={link} className="portfolio-img-wrapper" target="_blank">
                    <img src={img} alt="" className="portfolio-img" />
                  </a>
                  <div className="portfolio-body">
                    <div className="portfolio-skills">
                      {skills.map((skill, index) => {
                        return (
                          <img src={skill} alt="" className="portfolio-skill" key={index}/>
                        )
                      })}
                    </div>
                    <h3 className="portfolio-title">{title}</h3>
                    <p className="portfolio-description">{description}</p>
                    <a href={link} className="portfolio-link" target="_blank">
                      <RiLink  className="link-icon"/>
                      Visitar Proyecto
                    </a>
                  </div>
              </article>
            )
          })}
      </div>
    </section>
  )
}

export default Portfolio;