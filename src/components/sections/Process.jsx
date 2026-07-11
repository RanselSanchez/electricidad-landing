import { BadgeCheck } from "lucide-react";
import steps from "../../config/process";

function Process() {
  return (
    <section className="section split" id="proceso">
      <div><span className="kicker">Metodo</span><h2>Orden, seguridad y comunicacion desde la primera visita.</h2><p>Revisamos la causa real del problema, explicamos las opciones y ejecutamos con materiales adecuados para reducir riesgos y futuras interrupciones.</p></div>
      <div className="process-list">{steps.map((step, index) => <div className="process-item" key={step}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong><BadgeCheck size={20} /></div>)}</div>
    </section>
  );
}

export default Process;
