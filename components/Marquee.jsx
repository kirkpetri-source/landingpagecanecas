/* ============== MARQUEE ============== */
const marqueeStyles = {};

function Marquee() {
  const items = [
    'Dia das Mães',
    'Canecas com foto',
    'Canecas com nome',
    'Presente personalizado',
    'Brindes para empresas',
    'Lembrança afetiva',
    'Caneca para casal',
    'Caneca para mãe',
    'Caneca para professora',
    'Caneca para clientes',
    'Presente criativo',
    'Feito com carinho',
  ];
  const all = [...items, ...items];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {all.map((label, i) => (
          <div key={i} className="marquee__item">
            <span className="dot" />
            <span className="label">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { Marquee });
