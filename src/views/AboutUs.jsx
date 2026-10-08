
import React from 'react';
import { useBooks } from '../hooks/useBooks';

const AboutUs = () => {
  const { darkMode } = useBooks();

  return (
      <div className={`page-container ${darkMode ? 'dark' : ''}`}>
        <div className="about-content">
          <h2>Sobre Nexus</h2>

          <div className="about-section">
            <h3>¿Quiénes somos?</h3>
            <p>
              Nexus es una librería universitaria y espacio multifuncional que combina
              venta y alquiler de libros, una zona de co-working y una cafetería,
              pensado para estudiantes y profesionales.
            </p>
          </div>

          <div className="about-section">
            <h3>Nuestros espacios</h3>
            <div className="cities-grid">
              <div className="city-card">
                <h4>📚 Librería</h4>
                <p>Catálogo de libros técnicos y universitarios disponibles para compra o alquiler.</p>
              </div>
              <div className="city-card">
                <h4>💻 Co-working</h4>
                <p>Zona de trabajo con wifi, enchufes y salas para estudiar o trabajar en grupo.</p>
              </div>
              <div className="city-card">
                <h4>☕ Cafetería</h4>
                <p>Café, bebidas y comida ligera para recargar energías entre lecturas.</p>
              </div>
            </div>
          </div>

          <div className="about-section">
            <h3>Nuestra misión</h3>
            <p>
              Facilitar el acceso al conocimiento y crear un lugar donde estudiar,
              trabajar y conectar con otras personas de la comunidad universitaria.
            </p>
          </div>

          <div className="contact-info">
            <h3>Contacto</h3>
            <p>📧 Email: info@nexus.es</p>
            <p>📞 Teléfono: +34 900 000 000</p>
          </div>
        </div>
      </div>
  );
};

export default AboutUs;