/* ============== BEFORE / AFTER ============== */
const beforeAfterStyles = {};

const metrics = [
  { name: 'Emoção',          before: 28, after: 96 },
  { name: 'Personalização',  before: 8,  after: 100 },
  { name: 'Utilidade',       before: 55, after: 92 },
  { name: 'Memória afetiva', before: 22, after: 95 },
];

const Cross = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#9c8db0" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9"/>
    <path d="M8 12h8"/>
  </svg>
);
const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#e11d48" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" fill="rgba(225,29,72,.08)"/>
    <path d="M8 12.5l3 3 5-6"/>
  </svg>
);

function BeforeAfter() {
  const ref = React.useRef(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((ents) => {
      ents.forEach((e) => {
        if (e.isIntersecting) {
          el.querySelectorAll('.fill').forEach((b) => {
            const w = b.getAttribute('data-w');
            requestAnimationFrame(() => { b.style.width = w; });
          });
          io.disconnect();
        }
      });
    }, { threshold: .25 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="section" ref={ref}>
      <div className="container">
        <div className="reveal" style={{ maxWidth: 720, marginBottom: 36 }}>
          <span className="eyebrow"><span className="dot" /> Diferencial operacional</span>
          <h2 style={{ marginTop: 18 }}>
            A diferença entre um <span className="struck">presente comum</span> e uma{' '}
            <span className="gradient-text">caneca personalizada</span>.
          </h2>
        </div>

        <div className="ba__panels">
          <div className="ba__panel is-before reveal">
            <h3>Antes</h3>
            <p className="muted" style={{ fontSize: 14, marginTop: 4 }}>Presente genérico de prateleira</p>
            <ul>
              <li><Cross /> Sem personalização</li>
              <li><Cross /> Pouca emoção no momento do presente</li>
              <li><Cross /> Fácil de esquecer em poucas semanas</li>
              <li><Cross /> Não conta uma história</li>
            </ul>
            <div className="ba__bars">
              {metrics.map((m, i) => (
                <div key={i} className="ba__bar">
                  <div className="row"><span className="name">{m.name}</span><span>{m.before}%</span></div>
                  <div className="track"><i className="fill" data-w={`${m.before}%`} style={{ display:'block', height:'100%' }} /></div>
                </div>
              ))}
            </div>
          </div>

          <div className="ba__panel is-after reveal">
            <h3>
              Depois
              <span style={{
                fontSize:11, fontWeight:700, letterSpacing:'.14em', textTransform:'uppercase',
                background:'var(--grad-hot)', color:'#fff',
                padding:'5px 10px', borderRadius:'999px'
              }}>Lion Tech</span>
            </h3>
            <p className="muted" style={{ fontSize: 14, marginTop: 4 }}>Caneca personalizada feita pra ela</p>
            <ul>
              <li><Check /> Foto, nome e frase escolhidas a dedo</li>
              <li><Check /> Emoção real no momento de abrir</li>
              <li><Check /> Lembrança usada todos os dias</li>
              <li><Check /> Conta uma história única</li>
            </ul>
            <div className="ba__bars">
              {metrics.map((m, i) => (
                <div key={i} className="ba__bar">
                  <div className="row"><span className="name">{m.name}</span><span>{m.after}%</span></div>
                  <div className="track"><i className="fill" data-w={`${m.after}%`} style={{ display:'block', height:'100%' }} /></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { BeforeAfter });
