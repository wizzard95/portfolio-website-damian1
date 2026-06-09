import { links } from "../../Data";
import { RiCloseLine, RiMenuLine } from "react-icons/ri";
import "./navbar.css";
import { useState, useEffect } from "react";

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
    sections.forEach((s) => observer.observe(s));
    return () => sections.forEach((s) => observer.unobserve(s));
  }, []);

  const handleClick = (e, path) => {
    e.preventDefault();
    const id = path.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setShowMenu(false);
  };

  return (
    <nav className="nav">
      <div className="nav-logo">
        <span>D</span>A<span>.</span>
      </div>

      <div className={`${showMenu ? "nav-menu show-menu" : "nav-menu"}`}>
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
                  onClick={(e) => handleClick(e, path)}
                >
                  {icon}
                  <span className="nav-name">{name}</span>
                </a>
              </li>
            );
          })}
        </ul>
        <div className="nav-close" onClick={() => setShowMenu(false)}>
          <RiCloseLine />
        </div>
      </div>

      <div className="nav-toggle" onClick={() => setShowMenu(!showMenu)}>
        <RiMenuLine />
      </div>
    </nav>
  );
};

export default Navbar;
