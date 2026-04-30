/* ============== POR QUE AGORA ============== */
const whyNowStyles = {};

function WhyNow() {
  const cards = [
    {
      badge: 'Calendário',
      title: 'Dia das Mães chegando',
      body: 'Comprar antes evita correria e garante tempo para personalizar com carinho. Quanto antes, mais opções de arte.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="3"/>
          <path d="M16 2v4M8 2v4M3 10h18"/>
          <circle cx="12" cy="15" r="2.4" fill="currentColor"/>
        </svg>
      ),
    },
    {
      badge: 'Tendência',
      title: 'Presente afetivo vende mais',
      body: 'As pessoas estão buscando presentes com significado, não apenas produtos comuns. A caneca personalizada virou o queridinho.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 12c5-7 13-7 18 0"/>
          <path d="M3 12c5 7 13 7 18 0"/>
          <circle cx="12" cy="12" r="3" fill="currentColor"/>
        </svg>
      ),
    },
    {
      badge: 'Capacidade',
      title: 'Personalização limitada por demanda',
      body: 'Pedidos personalizados precisam de tempo para criação, aprovação e produção. A agenda enche conforme a data se aproxima.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9"/>
          <path d="M12 7v5l3 2"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="reveal" style={{ maxWidth: 720, marginBottom: 40 }}>
          <span className="eyebrow"><span className="dot" /> Por que presentear agora</span>
          <h2 style={{ marginTop: 18 }}>
            Tem hora certa para encomendar uma <span className="gradient-text">lembrança feita à mão</span>.
          </h2>
        </div>
        <div className="whynow__grid">
          {cards.map((c, i) => (
            <article key={i} className="card why-card reveal">
              <span className="icon-circle" style={{ marginBottom: 14 }}>{c.icon}</span>
              <span className="badge">{c.badge}</span>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { WhyNow });
