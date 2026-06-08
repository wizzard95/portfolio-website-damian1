import { FaHome, FaUser, FaFolderOpen, FaEnvelopeOpen } from "react-icons/fa";

import { RiBriefcase4Fill, RiGraduationCapFill } from "react-icons/ri";

import SkillsImg1 from "./assets/html-logo.svg";
import SkillsImg2 from "./assets/css-logo.svg";
import SkillsImg3 from "./assets/javascript-logo.svg";
import skillsImg4 from "./assets/react-logo.svg";
import skillsImg5 from "./assets/tailwind-css-logo.svg";

import SkillsImg11 from "./assets/nodejs-icon.svg";
import SkillsImg12 from "./assets/socket-io.svg";
import SkillsImg14 from "./assets/python-5.svg";
import SkillsImg15 from "./assets/git-logo.svg";
import SkillsImg16 from "./assets/postman-logo.svg";
import SkillsImg17 from "./assets/mysql-logo.svg";
/* import SkillsImg18 from './assets/express.svg'; */
import SkillsImg19 from "./assets/npm-logo.svg";
import SkillsImg20 from "./assets/bootstrap-logo.svg";
import SkillsImg21 from "./assets/xampp-logo.svg";
import SkillsImg22 from "./assets/expressjs.svg";
import SkillsImg23 from "./assets/vitejs-logo.svg";
import SkillsImg24 from "./assets/vercel-logo.svg";
import SkillsImg25 from "./assets/github-logo.svg";
import SkillsImg26 from "./assets/render-logo1.svg";
import SkillsImg27 from "./assets/flet.jpg";
import SkillsImg28 from "./assets/sqlite-logo.svg";
import SkillsImg29 from "./assets/mongodb-logo.svg";
import SkillsImg30 from "./assets/typescrip-tlogo.svg";
import SkillsImg31 from "./assets/pgsql-logo.svg";
import SkillsImg32 from "./assets/vue-logo.svg";
import SkillsImg33 from "./assets/microsoft-sql-server.svg";
import SkillsImg34 from "./assets/jest-logo.svg";

import projectImg1 from "./assets/meEcommerce.png";
import projectImg2 from "./assets/frontvue.png";
import projectImg3 from "./assets/fullFeo.png";

import Theme1 from "./assets/red.png";
import Theme2 from "./assets/blueviolet.png";
import Theme3 from "./assets/blue.png";
import Theme4 from "./assets/magenta.png";
import Theme5 from "./assets/yellowgreen.png";
import Theme6 from "./assets/orange.png";
import Theme7 from "./assets/yellow.png";

export const links = [
  {
    name: "Home",
    icon: <FaHome className="nav-icon" />,
    path: "/",
  },

  {
    name: "Sobre Mi",
    icon: <FaUser className="nav-icon" />,
    path: "/about",
  },

  {
    name: "Proyectos",
    icon: <FaFolderOpen className="nav-icon" />,
    path: "/portfolio",
  },

  {
    name: "Contacto",
    icon: <FaEnvelopeOpen className="nav-icon" />,
    path: "/contact",
  },
];
export const personalInfo = [
  {
    title: "Nombre : ",
    description: "Damián",
  },

  {
    title: "Apellido : ",
    description: "Acuña",
  },

  {
    title: "Edad : ",
    description: "29 Años",
  },

  {
    title: "Nacionalidad : ",
    description: "Chilena",
  },

  /*   {
    title: 'Freelance : ',
    description: 'Available',
  }, */

  {
    title: "Dirección : ",
    description: "Los Ángeles, Chile.",
  },

  {
    title: "Phone : ",
    description: "+569 98760317",
  },

  {
    title: "Email : ",
    description: "pcdamian1@outlokk.com",
  },

  /*  {
    title: 'Skype : ',
    description: 'steve.milner',
  }, */

  {
    title: "Idiomas : ",
    description: "Español, Ingles, Ingles Tecnico",
  },
];

export const stats = [
  {
    no: "2",
    title: "Años de <br /> Experiencia",
  },

  {
    no: "6",
    title: "Proyectos<br /> Completados",
  },

  {
    no: "81+",
    title: "Happy <br /> Customers",
  },

  {
    no: "53+",
    title: " Awards <br /> Won",
  },
];

export const skill = [
  {
    id: 1,
    img: SkillsImg1,
    title: "HTML",
    level: "",
    category: "developer",
  },

  {
    id: 2,
    img: SkillsImg2,
    title: "CSS",
    level: "",
    category: "developer",
  },
  {
    id: 20,
    img: SkillsImg20,
    title: "Bootstrap",
    level: "",
    category: "developer",
  },
  {
    id: 5,
    img: skillsImg5,
    title: "Tailwind",
    level: "",
    category: "developer",
  },

  {
    id: 3,
    img: SkillsImg3,
    title: "JavaScript",
    level: ``,
    category: "developer",
  },
  {
    id: 6,
    img: SkillsImg30,
    title: "TypeScript",
    category: "developer",
  },
  {
    id: 4,
    img: skillsImg4,
    title: "React",
    level: "",
    category: "developer",
  },
  {
    id: 8,
    img: SkillsImg32,
    title: "Vue",
    level: "",
    category: "developer",
  },

  {
    id: 14,
    img: SkillsImg14,
    title: "Python",
    level: "",
    category: "BackendDev",
  },
  {
    id: 11,
    img: SkillsImg11,
    title: "NodeJS",
    level: "",
    category: "BackendDev",
  },
  {
    id: 18,
    img: SkillsImg22,
    title: "Express",
    level: "",
    category: "BackendDev",
  },
  {
    id: 19,
    img: SkillsImg33,
    title: "SQL Server",
    level: "",
    category: "BackendDev",
  },

  {
    id: 15,
    img: SkillsImg15,
    title: "Git",
    level: "",
    category: "DevTools",
  },

  {
    id: 16,
    img: SkillsImg16,
    title: "Postman",
    level: "",
    category: "DevTools",
  },

  {
    id: 17,
    img: SkillsImg17,
    title: "MySQL",
    level: "",
    category: "BackendDev",
  },

  {
    id: 21,
    img: SkillsImg21,
    title: "Xampp",
    level: "",
    category: "DevTools",
  },

  {
    id: 23,
    img: SkillsImg23,
    title: "ViteJS",
    level: "",
    category: "FrontTools",
  },
  {
    id: 24,
    img: SkillsImg24,
    title: "Vercel",
    level: "",
    category: "FrontTools",
  },
  {
    id: 25,
    img: SkillsImg25,
    title: "GitHub",
    level: "",
    category: "FrontTools",
  },
  {
    id: 26,
    img: SkillsImg26,
    title: "Render",
    level: "",
    category: "FrontTools",
  },
  {
    id: 27,
    img: SkillsImg29,
    title: "MongoDB",
    level: "",
    category: "BackendDev",
  },
  {
    id: 28,
    img: SkillsImg31,
    title: "PostgreSQL",
    level: "",
    category: "BackendDev",
  },
  {
    id: 29,
    img: SkillsImg34,
    title: "Jest",
    level: "",
    category: "BackendDev",
  },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <RiBriefcase4Fill />,
    year: "Agosto 2024 - Noviembre 2025",
    title: "Desarrollador FullStack<span> Atlas Gestion SA. </span>",
    desc: `
    <ul>
  <li> ●- Desarrollé módulos de ventas, inventario y facturación con React y Django para centralizar 
procesos operativos. Implementé interfaces dinámicas y APIs REST, mejorando la gestión de datos y reduciendo tiempos en tareas
administrativas.<li/>
<li> ●-Optimicé el rendimiento del frontend y backend porque existían tiempos de carga elevados. Reduje consultas
innecesarias y mejoré la comunicación servidor-cliente, logrando mayor estabilidad y velocidad en la aplicación.<li/>
<li> ●- Implementé una arquitectura modular en Django para facilitar el mantenimiento y escalabilidad del sistema. Separé
lógica, rutas y modelos, permitiendo desarrollar nuevas funcionalidades de forma más rápida y ordenada.<li/>
<li> ●- Gestioné flujos colaborativos con Git para mantener control y trazabilidad del código entre múltiples desarrolladores.
Organicé ramas y resolví conflictos, asegurando integraciones estables y despliegues más seguros..<li/>
<li> ●- Realicé pruebas funcionales e integración para validar la consistencia de datos entre frontend, backend y base de
datos. Esto permitió detectar errores tempranamente y mejorar la confiabilidad del ERP.<li/>
<li> ●-Coordiné el desarrollo de módulos críticos como usuarios, inventario y facturación para asegurar coherencia entre las
capas del sistema. Mi aporte ayudó a reducir errores operativos y mejorar la estabilidad del producto.
 <li/>
<ul>
`,
  },

  {
    id: 2,
    category: "experience",
    icon: <RiBriefcase4Fill />,
    year: "Mayo 2024 - Agosto 2024",
    title:
      "Desarrollador FullStack(Practica Profesional)<span>Atlas Gestion SA. </span>",

    desc: "",
  },
  /*
  {
    id: 3,
    category: 'experience',
    icon: <RiBriefcase4Fill />,
    year: '2005 - 2013',
    title: 'Consultant <span> Videohive </span>',
    desc: 'Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur elit, sed do eiusmod tempor duntt.',
  }, */

  {
    id: 4,
    category: "education",
    icon: <RiGraduationCapFill />,
    year: "2024",
    title: "Ingeniero en Informática<span> INACAP </span>",
    desc: `<ul>
    <li> ●- Abstraer, modelar y formalizar matemáticamente problemas susceptibles de ser resueltos computacionalmente con el fin de dar soporte al diseño de soluciones utilizando herramientas teóricas, lenguajes y representaciones formales.<li/><br/>
    <li> ●- Concebir, desarrollar y mantener soluciones de software que den solución a problemas prácticos de forma sistemática y cuantificable, preocupándose por la calidad y la efectividad de las soluciones, siendo al mismo tiempo capaces de gestionar estos proyectos.<li/><br/>
    <li> ●- Trabajo Colaborativo y Comunicación, enfocada en la colaboración y comunicación efectiva con el equipo interno y los clientes, en diferentes contextos para la gestión de soluciones tecnológicas pertinentes.<li/>
<ul/>
`,
  },

  /*   {
    id: 5,
    category: 'education',
    icon: <RiGraduationCapFill />,
    year: '2012',
    title: 'Master Degree <span> KIEV University </span>',
    desc: 'Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt.',
  },

  {
    id: 6,
    category: 'education',
    icon: <RiGraduationCapFill />,
    year: '2009',
    title: 'Bachelor Degree <span> Tunis High School </span>',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ut labore.',
  }, */
];

export const portfolio = [
  {
    id: 1,
    img: projectImg1,
    title: "meEcommerce",
    description: `Este proyecto es un backend de tipo API REST desarrollado con Node.js y Express,
     diseñado para soportar una tienda en línea básica con funcionalidades de autenticación de usuarios,
      catálogo de productos, carrito de compras, creación de órdenes y pagos con Mercado Pago.
       Su propósito principal es actuar como el motor central de lógica de negocio y persistencia
        de datos entre el frontend y la base de datos MongoDB.`,
    skills: [
      SkillsImg11,
      SkillsImg22,
      skillsImg4,
      skillsImg5,
      SkillsImg29,
      SkillsImg16,
    ],
    link: "https://frontend-ecomerce-ckdf.vercel.app/",
  },
  {
    id: 1,
    img: projectImg2,
    title: "Tienda Online VueJs",
    description: `SPA desarrollado con Vue 3, TypeScript y Tailwind CSS.
     Permite a los usuarios navegar productos, gestionar un carrito de
      compras, realizar pagos a través de Mercado Pago y consultar 
      su historial de órdenes. Incluye un panel de administración 
      para gestionar el catálogo (CRUD) y un sistema de autenticación
       por cookies con sesiones persistentes.`,
    skills: [
      SkillsImg11,
      SkillsImg22,
      SkillsImg30,
      SkillsImg32,
      skillsImg5,
      SkillsImg29,
      SkillsImg16,
    ],
    link: "https://front-vue-orcin.vercel.app/",
  },
  {
    id: 1,
    img: projectImg3,
    title: "FullGeo Topografía",
    description: `Landing page corporativa para FullGeo Topografía,
     empresa chilena de topografía con cobertura en Ñuble, Biobío y 
     La Araucanía. Desarrollada con React 19 + TypeScript + TanStack Start (SSR/SSG) y
      desplegada en Vercel, es una single-page marketing site con modo oscuro/claro,
       animaciones scroll-driven, 6 secciones (Hero, Servicios
       , Proceso, Cobertura, Contacto)y un stack preparado para escalar a suite de gestión:
        Radix UI, Tailwind CSS v4, TanStack Router, React Query, Zustand.`,
    skills: [SkillsImg30, skillsImg4, skillsImg5],
    link: "https://geo-control-suite.vercel.app/",
  },
];

export const themes = [
  {
    img: Theme1,
    hue: "4",
  },

  {
    img: Theme2,
    hue: "271",
  },

  {
    img: Theme3,
    hue: "225",
  },

  {
    img: Theme4,
    hue: "339",
  },

  {
    img: Theme5,
    hue: "80",
  },

  {
    img: Theme6,
    hue: "19",
  },

  {
    img: Theme7,
    hue: "42",
  },
];
