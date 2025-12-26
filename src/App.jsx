import { useEffect, useState } from 'react';
import './App.css';
import fotoPerfil from './perfil.jpg'; 

function App() {

  const [showButton, setShowButton] = useState(false);

  // Lógica para mostrar/ocultar el botón según el scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };



  return (
    <div className="container">
      {/* Botón Volver Arriba */}
      {showButton && (
          <button className="back-to-top" onClick={scrollToTop}>
            ↑
          </button>
        )}
      <nav>
      {/* <div className="logo">DRA. [NOMBRE]</div>*/}
      <div className="logo"></div>
      <div className="links">
          <a href="#servicios">Servicios</a>
          <a href="#formacion">Formación</a> 
          <a href="#contacto">Contacto</a>
        {/*   <a href="mailto:tu-email@ejemplo.com">Contacto</a>*/}
        </div>
      </nav>

      <header className="hero">
        <div className="hero-text">
          <h1>DRA. MÓNICA ANTÓN RAMOS</h1>
          <p> Residente de Medicina Familiar y Comunitaria en Madrid. </p>
        </div>
        <div className="hero-image-container">
          <img src={fotoPerfil} alt="Dra. [Nombre]" className="profile-pic" />
        </div>
      </header>

      {/* Sección de Servicios */}
      <section id="servicios">
        <h2 style={{ fontSize: '0.8rem', letterSpacing: '0.2em', color: '#aaa', textTransform: 'uppercase' }}>
          Lo que ofrezco
        </h2>
        <div className="services-grid">
          <div className="card">
            <h3>Consultas Online</h3>
            <p>Atención directa en LSE. Un espacio seguro y profesional para tu salud.</p>
            <a href="mailto:monianton@hotmail.com" className="btn-link">Agendar cita →</a>
          </div>
          <div className="card">
            <h3>Ponencias</h3>
            <p>Divulgación científica y formación en accesibilidad sanitaria para congresos, universidades y entidades públicas.</p>
            <a href="mailto:monianton@hotmail.com" className="btn-link">Solicitar información →</a>
          </div>
        </div>
      </section>

      {/* Sección de Formación */}
      <section id="formacion" style={{ marginBottom: '100px' }}>
        <h2 className="section-label">Formación Académica</h2>
        <div className="education-item">
          <div className="education-year">2015 — 2023</div>
          <div className="education-details">
            <h3>Grado en Medicina / Especialización</h3>
            <p>USAL - Universidad de Salamanca</p>
            <span className="education-tag">Salamanca</span>
          </div>
        </div>

        <div className="education-item">
          <div className="education-year">2013 — 2015</div>
          <div className="education-details">
            <h3>Bachillerato</h3>
            <p>IES Martínez Uribarri</p>
            <span className="education-tag">Salamanca</span>
          </div>
        </div>
      </section>
      
      {/* Sección de Contacto Actualizada */}
      <section id="contacto" style={{ marginBottom: '100px' }}>
        <h2 className="section-label">Contacto</h2>
        <div className="contact-info">
          <p className="contact-lead">
            Si estás interesado en una consulta privada en LSE o quieres contar conmigo para una ponencia, no dudes en contactarme.
          </p>
          
          <div className="contact-methods">
            <div className="contact-item">
              <span>Email</span>
              <a href="mailto:monianton@hotmail.com">monianton@hotmail.com</a>
            </div>
            
            <div className="contact-item">
              <span>WhatsApp</span>
              <a href="https://wa.me/34600000000?text=Hola,%20estoy%20interesado/a%20en%20una%20consulta" target="_blank" rel="noopener noreferrer">
                +34 647 87 54 53
              </a>
            </div>

            <div className="contact-item">
              <span>LinkedIn</span>
              <a href="https://www.linkedin.com/in/m%C3%B3nica-ant%C3%B3n-ramos-b2369925b/" target="_blank" rel="noopener noreferrer">
                Perfil LinkedIn →
              </a>
            </div>
          </div>
        </div>
      </section>


      <footer style={{ marginTop: '100px', padding: '40px 0', borderTop: '1px solid #f0f0f0', color: '#999', fontSize: '0.8rem' }}>
        <p>© {new Date().getFullYear()} Dra. Mónica Antón Ramos — Colegiada Nº [282891139]</p>
      </footer>
  
    </div>
  );
}

export default App;