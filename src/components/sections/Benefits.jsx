import { Clock3, Lightbulb, ShieldCheck, Wrench } from "lucide-react";

function Benefits() {
  return (
    <section className="section feature-strip" aria-label="Beneficios">
      <div><ShieldCheck size={25} /> Trabajo protegido</div>
      <div><Clock3 size={25} /> Horarios flexibles</div>
      <div><Lightbulb size={25} /> Ahorro energetico</div>
      <div><Wrench size={25} /> Mantenimiento completo</div>
    </section>
  );
}

export default Benefits;
