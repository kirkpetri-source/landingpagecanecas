/* ============== ARGUMENTOS ============== */
const argsStyles = {};

const argsList = [
  {
    headline: 'Mais que uma caneca',
    lede: 'Um presente personalizado carrega história.',
    body: 'Com foto, nome, frase ou mensagem especial, a caneca se torna uma lembrança que a pessoa usa e guarda com carinho.',
    stat: '100% Personalizada',
  },
  {
    headline: 'Emocione sua mãe',
    lede: 'Um presente simples pode se tornar inesquecível.',
    body: 'Crie uma caneca com uma foto especial, uma frase de amor ou uma mensagem que só vocês entendem.',
    stat: 'Dia das Mães',
  },
  {
    headline: 'Fácil de pedir',
    lede: 'Você envia a ideia e a gente ajuda a montar.',
    body: 'Pelo WhatsApp, o cliente pode enviar foto, nome, frase ou referência. A Lion Tech orienta o processo até a aprovação.',
    stat: 'Atendimento direto',
  },
  {
    headline: 'Brindes em quantidade',
    lede: 'Canecas personalizadas também são ótimas para empresas.',
    body: 'Ideal para equipes, clientes, eventos, campanhas, datas comemorativas e ações promocionais.',
    stat: 'Pedidos sob orçamento',
  },
  {
    headline: 'Usada todos os dias',
    lede: 'Diferente de muitos presentes, a caneca tem uso real.',
    body: 'Ela pode estar no café da manhã, no trabalho, no escritório ou na rotina de quem recebe.',
    stat: 'Uso diário',
  },
  {
    headline: 'Do seu jeito',
    lede: 'Cada arte pode ser pensada para a pessoa presenteada.',
    body: 'Use foto, nome, profissão, frase bíblica, mensagem de amor, tema divertido ou identidade da sua empresa.',
    stat: 'Arte personalizada',
  },
];

function Arguments() {
  return (
    <section className="section" id="argumentos">
      <div className="container">
        <div className="reveal" style={{ maxWidth: 720, marginBottom: 40 }}>
          <span className="eyebrow"><span className="dot" /> Por que personalizar</span>
          <h2 style={{ marginTop: 18 }}>
            Seis motivos para escolher uma <span className="gradient-text">Lion Tech</span> em vez de qualquer caneca.
          </h2>
        </div>

        <div className="args__grid">
          {argsList.map((a, i) => (
            <article key={i} className="card arg-card reveal">
              <div className="top">
                <span className="num">{String(i + 1).padStart(2, '0')} / 06</span>
              </div>
              <h3>{a.headline}</h3>
              <p className="lede">{a.lede}</p>
              <p>{a.body}</p>
              <span className="stat">{a.stat}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Arguments });
