import {
  RiMap2Line,
  RiMailLine,
  RiUser3Line,
  RiBook2Line,
  RiSendPlaneLine,
} from "react-icons/ri";
import './contact.css';
import { useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
const [feedBackMessage, setfeedBackMessage] = useState('');
const [messageColor, setMessageColor] = useState('');

const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
}

const sendEmail = (e) => {
    e.preventDefault();

    if(!formData.name || !formData.email || !formData.subject || !formData.message ){
        setMessageColor('color-red');
        setfeedBackMessage('los campos de texto no pueden quedar vacios!!!!');

        setTimeout(() => {
            setfeedBackMessage('');
        }, 3000);

        return;
    }
    emailjs
      .send(
        'service_bu3wuqf',
        'template_gqbygli',
        formData, 
        'Z1fv3rRMifysEn2wh',
      )
      .then(
        () => {
          setMessageColor('colo-first');
        setfeedBackMessage('Mensaje Enviado  ✅📤');

         setTimeout(() => {
            setfeedBackMessage('');
        }, 5000);

        setFormData({name: '', email: '', subject: '', message: ''})

        },
        (error) => {
            alert('DIABLOS!!!, AL PARECER ALGO SALIO MAL..', error);
        },
      );
}

  return (
    <section className="contact section">
      <h2 className="section-title">
          Contactame <span>Aqui</span>
      </h2>

      <div className="contact-container container grid">
        {/* IZQUIERDA: Tarjetas de contacto */}
        <div className="contact-content">
          <div className="contact-card">
            <span className="contact-icon">
              <RiMap2Line />
            </span>
            <div>
              <h3 className="contact-title">Ubicación</h3>
              <p className="contact-data">Los Ángeles, Chile</p>
            </div>
          </div><br />

          <div className="contact-card">
            <span className="contact-icon">
              <RiUser3Line />
            </span>
            <div>
              <h3 className="contact-title">Modalidad Laboral</h3>
              <p className="contact-data">
                Cualquier modalidad(Presencial, Hibrido, Remoto)</p>
            </div>
          </div><br />

          <div className="contact-card">
            <span className="contact-icon">
              <RiMailLine />
            </span>
            <div>
              <h3 className="contact-title">Email</h3>
              <p className="contact-data">pcdamian1@outlook.com</p>
            </div>
          </div><br />

          <div className="contact-card">
            <span className="contact-icon">
              <RiBook2Line />
            </span>
            <div>
              <h3 className="contact-title">Telefono</h3>
              <p className="contact-data">+569 8888888</p>
            </div>
          </div>
        </div>

        {/* DERECHA: Formulario */}
        <form action='' className="contact-form grid" onSubmit={sendEmail}>
          <div className="contact-form-group grid">
            <div className="contact-form-div">
              <label htmlFor="" className="contact-form-label">
                Nombre completo <b>*</b>
              </label>
              <input 
                type="text"
                name="name"
                onChange={handleChange}
                value={formData.name}
                className="contact-form-input" />
            </div>

            <div className="contact-form-div">
              <label htmlFor="" className="contact-form-label">
                Direccion Email <b>*</b>
              </label>
              <input 
                type="email"
                name="email"
                onChange={handleChange}
                value={formData.email}
                className="contact-form-input" />
            </div>
          </div>

          <div className="contact-form-div">
            <label htmlFor="" className="contact-form-label">
              Asunto <b>*</b>
            </label>
            <input 
                type="text"
                name="subject"
                onChange={handleChange}
                value={formData.subject}
                className="contact-form-input" />
          </div>

          <div className="contact-form-div">
            <label htmlFor="" className="contact-form-label">
              Tu mensaje <b>*</b>
            </label>
            <textarea 
                name="message"
                onChange={handleChange}
                value={formData.message}
                className="contact-form-input contact-form-area" />
          </div>

          <div className="contact-button">
            <button className="button" type="submit">
              Enviar Mensaje
              <span className="button-icon">
                <RiSendPlaneLine />
              </span>
            </button>
          </div>

          {feedBackMessage && (
            <p className={`contact-message ${messageColor}`}>
                {feedBackMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;


