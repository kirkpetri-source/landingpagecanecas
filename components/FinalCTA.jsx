/* ============== FINAL CTA ============== */
const finalCtaStyles = {};

function FinalCTA({ wppLink }) {
  return (
    <section className="finalcta">
      <div className="container">
        <div className="finalcta__box reveal">
          <span className="eyebrow" style={{
            background:'rgba(255,255,255,.18)',
            border:'1px solid rgba(255,255,255,.3)',
            color:'#fff'
          }}>
            <span className="dot" style={{ background:'#fff' }} />
            Última chamada para o Dia das Mães
          </span>
          <h2 style={{ marginTop: 22 }}>
            Pronto para emocionar quem você ama com uma <em style={{ fontStyle:'italic' }}>caneca feita só pra ela</em>?
          </h2>
          <p>
            Manda sua ideia agora pelo WhatsApp. A Lion Tech monta a arte, envia uma prévia e produz com carinho.
            Atendimento rápido, direto com quem cria.
          </p>
          <div className="row">
            <a href={wppLink} target="_blank" rel="noopener" className="btn btn-primary">
              <WppIcon /> Personalizar meu presente
            </a>
            <a href={wppLink} target="_blank" rel="noopener" className="btn btn-ghost">
              Pedir orçamento em quantidade
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { FinalCTA });
