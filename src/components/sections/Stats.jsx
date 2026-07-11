import stats from "../../config/stats";

function Stats() {
  return <section className="stats-band" aria-label="Indicadores de servicio">{stats.map(([value, label]) => <div className="stat" key={label}><strong>{value}</strong><span>{label}</span></div>)}</section>;
}

export default Stats;
