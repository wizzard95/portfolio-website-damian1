import { links } from "../../Data";
import { RiCloseLine, RiMenuLine } from "react-icons/ri";
import { useState, useEffect } from "react";
import "./navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-open", showMenu);
    return () => document.body.classList.remove("nav-open");
  }, [showMenu]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setShowMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavigate = (event, path) => {
    event.preventDefault();
    const id = path.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setShowMenu(false);
  };

  return (
    <nav className="nav">
      <div className="nav-logo">
        <span>D</span>A<span>.</span>
      </div>

      <div className={`nav-menu${showMenu ? " show-menu" : ""}`}>
        <button
          type="button"
          className="nav-close"
          onClick={() => setShowMenu(false)}
          aria-label="Cerrar menú"
        >
          <RiCloseLine />
        </button>

        <ul className="nav-list">
          {links.map(({ name, icon, path }, index) => {
            const sectionId = path.replace("#", "");
            return (
              <li className="nav-item" key={index}>
                <a
                  href={path}
                  className={`nav-link ${
                    activeSection === sectionId ? "active-nav" : ""
                  }`}
                  onClick={(event) => handleNavigate(event, path)}
                >
                  {icon}
                  <span className="nav-name">{name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <button
        type="button"
        className="nav-toggle"
        onClick={() => setShowMenu((prev) => !prev)}
        aria-label="Abrir menú"
        aria-expanded={showMenu}
      >
        <RiMenuLine />
      </button>
    </nav>
  );
};

export default Navbar;
