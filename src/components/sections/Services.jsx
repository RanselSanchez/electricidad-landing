import services from "../../config/services";

function Services() {
  return (
    <section className="section services" id="servicios">
      <div className="section-heading"><span>Servicios</span><h2>Soporte electrico para cada espacio</h2></div>
      <div className="service-grid">
        {services.map(({ icon: Icon, title, text }) => <article className="service-card" key={title}><div className="service-icon"><Icon size={25} /></div><h3>{title}</h3><p>{text}</p></article>)}
      </div>
    </section>
  );
}

export default Services;
