import { Bolt, Menu, Phone } from "lucide-react";

function Navbar() {
  return (
    <header className="site-header" aria-label="Navegacion principal">
      <a className="brand" href="#inicio" aria-label="Voltix Electricidad">
        <span className="brand-mark"><Bolt size={20} /></span><span>Voltix</span>
      </a>
      <nav className="desktop-nav"><a href="#servicios">Servicios</a><a href="#proceso">Proceso</a><a href="#contacto">Contacto</a></nav>
      <a className="header-call" href="tel:+10000000000"><Phone size={17} /> Llamar</a>
      <button className="icon-button" aria-label="Abrir menu"><Menu size={22} /></button>
    </header>
  );
}

export default Navbar;
