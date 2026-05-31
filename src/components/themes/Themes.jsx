import { themes } from "../../Data";
import ThemeItem from "./ThemeItem";
import './themes.css';

import { FaCog } from "react-icons/fa";
import { BsMoon, BsSun } from "react-icons/bs";
import { useEffect, useState, useRef } from "react";

const getStorageColor = () => {
  let color = '4';
  if(localStorage.getItem('color')){
    color = localStorage.getItem('color')
  }
  return color;
}

const getStorageTheme = () => {
  let theme = 'light-theme';
  if(localStorage.getItem('theme')){
    theme = localStorage.getItem('theme')
  }
  return theme;
}

const Themes = () => {

  const [showSwitcher, setShowSwitcher] = useState(false);
  const [color, setColor] = useState(getStorageColor());
  const [theme, setTheme] = useState(getStorageTheme());
  const switcherRef = useRef(null);

  const changeColor = (color) => {
    setColor(color);
    setShowSwitcher(false);
  }

  const toggleTheme = () => {
    if(theme === 'light-theme'){
      setTheme('dark-theme')
    }else{
      setTheme('light-theme')
    }
  }

  useEffect(() => {
    document.documentElement.style.setProperty('--hue', color);
    localStorage.setItem('color', color);
  }, [color]);

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (switcherRef.current && !switcherRef.current.contains(e.target)) {
        setShowSwitcher(false);
      }
    };
    if (showSwitcher) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showSwitcher]);

  return (
    <>
      <div
        ref={switcherRef}
        className={`${showSwitcher ? 'show-switcher' : ''} style-switcher`}
      >
        <h3 className="switcher-title">Style Switcher</h3>
        <div className="switcher-items grid">
          {themes.map((theme, index) => {
          return  <ThemeItem key={index} {...theme} changeColor={changeColor}/>;
        })}
        </div>
      </div>

      {!showSwitcher && (
        <div className="switcher-toggler" onClick={() => setShowSwitcher(true)}>
          <FaCog />
        </div>
      )}

      <div className="theme-toggler" onClick={toggleTheme}>
        {theme === 'light-theme' ? <BsMoon /> : <BsSun />}
      </div>
    </>
  );
};

export default Themes