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
          {portfolio.map(({id, img, title, description, skills, link, date}, index) => {
            const isOdd = index % 2 === 0;
            return (
              <div className="portfolio-timeline-item reveal" key={id} style={{transitionDelay: `${index * 0.1}s`}}>
                {isOdd ? (
                  <>
                    <article className="portfolio-card">
                      <a href={link} className="portfolio-img-wrapper" target="_blank">
                        <img src={img} alt="" className="portfolio-img" />
                      </a>
                      <div className="portfolio-body">
                        <div className="portfolio-skills">
                          {skills.map((skill, i) => (
                            <img src={skill} alt="" className="portfolio-skill" key={i}/>
                          ))}
                        </div>
                        <h3 className="portfolio-title">{title}</h3>
                        <p className="portfolio-description">{description}</p>
                        <a href={link} className="portfolio-link" target="_blank">
                          <RiLink className="link-icon"/>
                          Visitar Proyecto
                        </a>
                      </div>
                    </article>
                    <div className="portfolio-date">{date}</div>
                  </>
                ) : (
                  <>
                    <div className="portfolio-date">{date}</div>
                    <article className="portfolio-card">
                      <a href={link} className="portfolio-img-wrapper" target="_blank">
                        <img src={img} alt="" className="portfolio-img" />
                      </a>
                      <div className="portfolio-body">
                        <div className="portfolio-skills">
                          {skills.map((skill, i) => (
                            <img src={skill} alt="" className="portfolio-skill" key={i}/>
                          ))}
                        </div>
                        <h3 className="portfolio-title">{title}</h3>
                        <p className="portfolio-description">{description}</p>
                        <a href={link} className="portfolio-link" target="_blank">
                          <RiLink className="link-icon"/>
                          Visitar Proyecto
                        </a>
                      </div>
                    </article>
                  </>
                )}
              </div>
            )
          })}
      </div>
    </section>
  )
}

export default Portfolio;
