/* ============== TESE ============== */
const thesisStyles = {};

function Thesis() {
  const wrap = React.useRef(null);

  // anima as barras quando a seção entra na tela
  React.useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const io = new IntersectionObserver((ents) => {
      ents.forEach((e) => {
        if (e.isIntersecting) {
          el.querySelectorAll('.bar i').forEach((bar) => {
            const target = bar.getAttribute('data-w');
            requestAnimationFrame(() => { bar.style.width = target; });
          });
          io.disconnect();
        }
      });
    }, { threshold: .25 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="section" id="tese" ref={wrap}>
      <div className="container">
        <div className="thesis__head reveal">
          <span className="eyebrow"><span className="dot" /> A tese da Lion Tech</span>
          <h2 style={{ marginTop: 18 }}>
            Presentes comuns são esquecidos. <span className="gradient-text">Presentes personalizados carregam história.</span>
          </h2>
          <p style={{ marginTop: 14, fontSize: 16 }}>
            A diferença não está no preço, está no significado. Uma caneca com a foto, o nome ou a frase certa
            transforma um objeto comum em uma lembrança que dura anos.
          </p>
        </div>

        <div className="thesis__chart reveal">
          <div className="bar-block is-low">
            <h4>Presente comum</h4>
            <span className="value">Impacto baixo</span>
            <div className="bar"><i data-w="32%" /></div>
            <p className="muted" style={{ fontSize: 13.5, marginTop: 10 }}>Bonito, mas substituível. Sem conexão.</p>
          </div>
          <div className="bar-block">
            <h4>Caneca personalizada</h4>
            <span className="value gradient-text">Impacto alto</span>
            <div className="bar"><i data-w="92%" /></div>
            <p style={{ fontSize: 13.5, marginTop: 10, color:'var(--text-soft)' }}>Lembrança feita pra ela. Usada todo dia.</p>
          </div>
        </div>

        <div className="thesis__points reveal">
          <div className="thesis__point">
            <span className="num">1</span>
            <div>
              <strong>Personalização cria conexão emocional.</strong>
              <p>O cérebro guarda o que é único. Uma foto certa vale mais que cem presentes genéricos.</p>
            </div>
          </div>
          <div className="thesis__point">
            <span className="num">2</span>
            <div>
              <strong>A caneca é útil no dia a dia.</strong>
              <p>Diferente de muitos presentes, ela aparece no café da manhã, no trabalho e na rotina.</p>
            </div>
          </div>
          <div className="thesis__point">
            <span className="num">3</span>
            <div>
              <strong>Cada detalhe carrega uma lembrança.</strong>
              <p>Foto, frase, nome, data. Pequenos elementos que reativam memórias toda vez.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Thesis });
