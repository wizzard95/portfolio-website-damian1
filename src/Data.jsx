import { FaHome, FaUser, FaFolderOpen, FaEnvelopeOpen } from 'react-icons/fa';

import { RiBriefcase4Fill, RiGraduationCapFill } from 'react-icons/ri';

import SkillsImg1 from './assets/html-logo.svg';
import SkillsImg2 from './assets/css-logo.svg';
import SkillsImg3 from './assets/javascript-logo.svg';
import skillsImg4 from './assets/react-logo.svg';
import skillsImg5 from './assets/tailwind-css-logo.svg';
 

import SkillsImg11  from './assets/nodejs-icon.svg';
import SkillsImg12 from './assets/socket-io.svg';
import SkillsImg14 from './assets/python-5.svg';
import SkillsImg15 from './assets/git-logo.svg';
import SkillsImg16 from './assets/postman-logo.svg';
import SkillsImg17 from './assets/mysql-logo.svg';
/* import SkillsImg18 from './assets/express.svg'; */
import SkillsImg19 from './assets/npm-logo.svg';
import SkillsImg20 from './assets/bootstrap-logo.svg';
import SkillsImg21 from './assets/xampp-logo.svg';
import SkillsImg22 from './assets/expressjs.svg';
import SkillsImg23 from './assets/vitejs-logo.svg';
import SkillsImg24 from './assets/vercel-logo.svg';
import SkillsImg25 from './assets/github-logo.svg';
import SkillsImg26 from './assets/render-logo1.svg';
import SkillsImg27 from './assets/flet.jpg';
import SkillsImg28 from './assets/sqlite-logo.svg';
import SkillsImg29 from './assets/mongodb-logo.svg';


import projectImg1 from './assets/clima1.png';
import projectImg2 from './assets/chat2.jpg';
import projectImg3 from './assets/agenda.svg';
import projectImg4 from './assets/hospital.png';
/* import projectImg5 from './assets/project-5.jpg'; */
import projectImg6 from './assets/notes.svg';



import Theme1 from './assets/red.png';
import Theme2 from './assets/blueviolet.png';
import Theme3 from './assets/blue.png';
import Theme4 from './assets/magenta.png';
import Theme5 from './assets/yellowgreen.png';
import Theme6 from './assets/orange.png';
import Theme7 from './assets/yellow.png';




export const links = [
  {
    name: 'Home',
    icon: <FaHome className='nav-icon' />,
    path: '/',
  },

  {
    name: 'Sobre Mi',
    icon: <FaUser className='nav-icon' />,
    path: '/about',
  },

  {
    name: 'Proyectos',
    icon: <FaFolderOpen className='nav-icon' />,
    path: '/portfolio',
  },

  {
    name: 'Contacto',
    icon: <FaEnvelopeOpen className='nav-icon' />,
    path: '/contact',
  },
];
export const personalInfo = [
  {
    title: 'Nombre : ',
    description: 'Damián',
  },

  {
    title: 'Apellido : ',
    description: 'Acuña',
  },

  {
    title: 'Edad : ',
    description: '29 Años',
  },

  {
    title: 'Nacionalidad : ',
    description: 'Chilena',
  },

/*   {
    title: 'Freelance : ',
    description: 'Available',
  }, */

  {
    title: 'Dirección : ',
    description: 'Los Ángeles, Chile.',
  },

  {
    title: 'Phone : ',
    description: '+569 98760317',
  },

  {
    title: 'Email : ',
    description: 'pcdamian1@outlokk.com',
  },

 /*  {
    title: 'Skype : ',
    description: 'steve.milner',
  }, */

  {
    title: 'Idiomas : ',
    description: 'Español, Ingles, Ingles Tecnico',
  },
];

export const stats = [
  {
    no: '2',
    title: 'Años de <br /> Experiencia',
  },

  {
    no: '6',
    title: 'Proyectos<br /> Completados',
  },

  {
    no: '81+',
    title: 'Happy <br /> Customers',
  },

  {
    no: '53+',
    title: ' Awards <br /> Won',
  },
];

export const skill = [
  {
    id: 1,
    img: SkillsImg1,
    title: 'HTML',
    level: '',
    category: 'developer',
  },

  {
    id: 2,
    img: SkillsImg2,
    title: 'CSS',
    level: '',
    category: 'developer',
  },

  {
    id: 3,
    img: SkillsImg3,
    title: 'JavaScript',
    level: ``,
    category: 'developer',
  },

  {
    id: 4,
    img: skillsImg4,
    title: 'React',
    level: '',
    category: 'developer',
  },

  {
    id: 5,
    img: skillsImg5,
    title: 'Tailwind',
    level: '',
    category: 'developer',
  },

  {
    id: 11,
    img: SkillsImg11,
    title: 'NodeJS',
    level: '',
    category: 'BackendDev',
  },

   {
    id: 12,
    img: SkillsImg12,
    title: 'Socket.io',
    level: '',
    category: 'BackendDev',
  },


    {
    id: 14,
    img: SkillsImg14,
    title: 'Python',
    level: '',
    category: 'BackendDev',
  },

  {
    id: 15,
    img: SkillsImg15,
    title: 'Git',
    level: '',
    category: 'DevTools',
  },

  {
    id: 16,
    img: SkillsImg16,
    title: 'Postman',
    level: '',
    category: 'DevTools',
  },

  {
    id: 17,
    img: SkillsImg17,
    title: 'MySQL',
    level: '',
    category: 'BackendDev',
  },

  {
    id: 18,
    img: SkillsImg22,
    title: 'Express',
    level: '',
    category: 'BackendDev',
  },

   {
    id: 19,
    img: SkillsImg19,
    title: 'NPM',
    level: '',
    category: 'BackendDev',
  },

  {
      id: 20,
    img: SkillsImg20,
    title: 'Bootstrap',
    level: '',
    category: 'developer',
  },

  {
      id: 21,
    img: SkillsImg21,
    title: 'Xampp',
    level: '',
    category: 'DevTools',
  },

    {
      id: 23,
    img: SkillsImg23,
    title: 'ViteJS',
    level: '',
    category: 'FrontTools',
  },
  {
    id: 24,
    img: SkillsImg24,
    title: 'Vercel',
    level: '',
    category: 'FrontTools',
  },
   {
    id: 25,
    img: SkillsImg25,
    title: 'GitHub',
    level: '',
    category: 'FrontTools',
  },
     {
    id: 26,
    img: SkillsImg26,
    title: 'Render',
    level: '',
    category: 'FrontTools',
  },
  {
    id: 27,
    img: SkillsImg29,
    title: 'MongoDB',
    level: '',
    category: 'BackendDev',
  }
  
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <RiBriefcase4Fill />,
    year: 'Julio 2024 - Presente',
    title: 'Desarrollador Front-End<span> Atlas Gestion SA. </span>',
    desc: `
    <ul>
  <li> ●- Desarrollo de componentes web reutilizables utilizando HTML5,  CSS3, JavaScript , React
Js y bootstrap 5 en un software ERP.<li/>
<li> ●- Implementación de diseño responsivo y adaptación a distintos dispositivos y
navegadores.<li/>
<li> ●- Optimización de rendimiento del front-end y mejora de la accesibilidad.<li/>
<li> ●- Uso de herramientas de control de versiones (Git) .<li/>
<li> ●- Participación en pruebas de interfaz, corrección de errores y mejora continua del código.<li/>
<ul>
`
,
  },

   {
    id: 2,
    category: 'experience',
    icon: <RiBriefcase4Fill />,
    year: 'Marzo 2024 - Junio 2024',
    title: 'Desarrollador Front-End(Practica Profesional)<span>Atlas Gestion SA. </span>',

    desc: '',
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
    category: 'education',
    icon: <RiGraduationCapFill />,
    year: '2024',
    title: 'Tecnico Analista Programdor<span> INACAP </span>',
    desc: `<ul>
    <li> ●- Resolución de Problemas, innovación y emprendimiento, enfocada en identificar y abordar problemas, oportunidades, para desarrollar soluciones tecnológicas innovadoras y emprendedoras.<li/><br/>
    <li> ●- Aprendizaje Continuo, enfocado en la actualización continua de los profesionales para responder a la evolución constante de la Industria y de las tecnologías.<li/><br/>
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
/*    {
    id: 5,
    img: projectImg4,
    title: 'Sistema de Gestión Hospitalario',
   
    description:
      'En desarrollo................',
    skills: [SkillsImg11, SkillsImg22, skillsImg4, SkillsImg17, SkillsImg21 ],
    link: '',
  }, */{
  id: 1,
    img: projectImg6,
    title: 'NOTAS',
    description:
      `Aplicación MERN para gestionar tareas con autenticación de usuarios.
Permite listar, crear, editar y eliminar tareas personales.
Tras iniciar sesión, carga tus tareas y las muestra en una cuadrícula.
Maneja estados de carga y errores al comunicarse con el servidor.`,
    skills: [SkillsImg11, SkillsImg22, skillsImg4, SkillsImg29 ],
    link: 'https://mern-auth-crud-pi.vercel.app/',
  },
    {
    id: 3,
    img: projectImg2,
    title: 'Chat en tiempo real',
    /* title: 'Food Product Design', */
    description:
      `Proyecto realizado con Nodejs, socket.io, express, React y MongoDB.
       Puedes crear o entrar a salas de chat, enviar y recibir mensajes,
       además puedes mover los componentes de lugar a traves de Drag and Drop.
       Backend-End desplegado con Render y Front-End con Vercel. `,
    skills: [SkillsImg11, SkillsImg12, SkillsImg22, skillsImg4, SkillsImg29 ],
    link: 'https://realtime-chat-app-omega-tan.vercel.app/',
  },

    
  {
    id: 2,
    img: projectImg1,
    title: 'ClimApp',
    /* title: 'Coffee Website', */
    description:
      `Se muestran el estado del clima en alguna ciudad del mundo
       a traves del consumo de la API de OpenWeatherMap.`,
    skills: [SkillsImg1, SkillsImg2, SkillsImg3],
    link: 'https://wizzard95.github.io/app-clima/',
  },




  {
    id: 4,
    img: projectImg3,
    title: 'Agenda de contactos',
    /* title: 'Restaurant Landing Page', */
    description:
      `Aplicación de escritorio para registro y gestión de contactos
      hecha con Python junto al Framework Flet y SQLite. Despliegue a traves de Render`,
    skills: [ SkillsImg14, SkillsImg27, SkillsImg28 ],
    link: 'https://crudpythonflet-1.onrender.com/',
  },

 

/*   {
    id: 5,
    img: projectImg5,
    title: 'Proyecto 5', */
    /* title: 'Construction Landing Page', */
  /*   description:
      'Short description of the project that was carried out in this portfolio.',
    skills: [SkillsImg1, SkillsImg2, SkillsImg3],
    link: '',
  }, */
];

export const themes = [
  {
    img: Theme1,
    hue: '4',
  },

  {
    img: Theme2,
    hue: '271',
  },

  {
    img: Theme3,
    hue: '225',
  },

  {
    img: Theme4,
    hue: '339',
  },

  {
    img: Theme5,
    hue: '80',
  },

  {
    img: Theme6,
    hue: '19',
  },

  {
    img: Theme7,
    hue: '42',
  },
];
