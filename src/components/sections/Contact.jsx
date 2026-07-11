import { ArrowRight } from "lucide-react";

function Contact() {
  return (
    <section className="contact" id="contacto">
      <div><span className="kicker">Contacto</span><h2>Agenda una revision electrica hoy.</h2><p>Cuéntanos que necesitas y coordinamos una visita tecnica con respuesta clara.</p></div>
      <form className="contact-form">
        <label>Nombre<input type="text" placeholder="Tu nombre" /></label>
        <label>Telefono<input type="tel" placeholder="(000) 000-0000" /></label>
        <label>Servicio<select defaultValue=""><option value="" disabled>Selecciona una opcion</option><option>Instalacion</option><option>Reparacion</option><option>Emergencia</option><option>Mantenimiento</option></select></label>
        <button className="primary-button form-button" type="button">Enviar solicitud <ArrowRight size={18} /></button>
      </form>
    </section>
  );
}

export default Contact;
