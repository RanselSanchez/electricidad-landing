import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "../../assets/electrician-hero.png";

function Hero() {
  return (
    <section className="hero" id="inicio">
      <img className="hero-image" src={heroImage} alt="Electricista profesional trabajando en un panel electrico" />
      <div className="hero-overlay" />
      <div className="hero-content">
        <div className="eyebrow"><Sparkles size={16} /> Servicio electrico profesional</div>
        <h1>Electricidad segura, rapida y bien hecha.</h1>
        <p>Instalaciones, reparaciones y mantenimiento electrico para hogares y negocios, con atencion puntual y acabados limpios.</p>
        <div className="hero-actions">
          <a className="primary-button" href="#contacto">Solicitar visita <ArrowRight size={18} /></a>
          <a className="secondary-button" href="#servicios">Ver servicios</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
