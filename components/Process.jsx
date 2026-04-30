/* ============== PROCESSO ============== */
const processStyles = {};

const steps = [
  { title: 'Cliente chama no WhatsApp',         deliverable: 'Atendimento inicial',    body: 'Você manda uma mensagem com a ideia, a ocasião e a quantidade. A gente responde rápido e já entende o que dá pra fazer.' },
  { title: 'Cliente envia ideia, foto ou frase', deliverable: 'Briefing da caneca',     body: 'Pode ser uma foto, um nome, uma data, uma frase, uma referência que viu na internet ou no Pinterest.' },
  { title: 'Lion Tech orienta a personalização',deliverable: 'Sugestão de composição', body: 'A gente ajuda a escolher o melhor layout, fonte, cor e estilo para a sua arte ficar bonita e com cara de presente.' },
  { title: 'Arte é montada para aprovação',     deliverable: 'Prévia visual',          body: 'Antes de imprimir, você recebe a prévia da caneca para aprovar ou ajustar. Sem surpresas.' },
  { title: 'Produção da caneca personalizada',  deliverable: 'Caneca pronta',          body: 'Impressão de qualidade, com cor viva e durável. A peça é cuidadosamente embalada.' },
  { title: 'Retirada ou combinação de entrega', deliverable: 'Presente finalizado',    body: 'Você combina a retirada ou a entrega. O presente sai pronto para emocionar quem você ama.' },
];

function Process() {
  return (
    <section className="section" id="processo">
      <div className="container">
        <div className="reveal" style={{ maxWidth: 720, marginBottom: 40 }}>
          <span className="eyebrow"><span className="dot" /> Como funciona</span>
          <h2 style={{ marginTop: 18 }}>
            Da sua ideia até o presente nas mãos: <span className="gradient-text">6 passos simples</span>.
          </h2>
        </div>

        <div className="timeline">
          {steps.map((s, i) => (
            <div key={i} className="step reveal">
              <span className="step__bullet">{String(i + 1).padStart(2, '0')}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <span className="deliverable">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12.5l4 4 10-11"/>
                </svg>
                Entregável: {s.deliverable}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Process });
