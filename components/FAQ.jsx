/* ============== FAQ ============== */
const faqStyles = {};

const faqList = [
  { q: 'Posso colocar foto na caneca?',
    a: 'Sim. Você pode enviar foto, nome, frase ou ideia pelo WhatsApp. A gente trata a imagem, monta a arte e envia uma prévia para aprovação antes de imprimir.' },
  { q: 'Posso fazer uma caneca para o Dia das Mães?',
    a: 'Com certeza. A caneca personalizada é uma das opções mais queridas para presentear mães com uma mensagem especial. Quanto antes você fizer o pedido, mais tempo a gente tem para caprichar na arte.' },
  { q: 'Vocês fazem pedidos para empresas?',
    a: 'Sim. Também fazemos canecas personalizadas para empresas, equipes, eventos e brindes corporativos. Tem condições especiais por quantidade — chame no WhatsApp e a gente monta um orçamento.' },
  { q: 'Quanto custa?',
    a: 'O valor depende da personalização e da quantidade. Pedidos individuais e brindes em quantidade têm preços diferentes. Manda mensagem com sua ideia para receber o orçamento exato.' },
  { q: 'Vocês ajudam com a arte?',
    a: 'Sim. Você pode enviar sua ideia (mesmo bagunçada) e a Lion Tech ajuda a transformar em uma arte bonita e bem montada. Sem precisar saber de design.' },
  { q: 'Em quanto tempo fica pronta?',
    a: 'O prazo varia conforme a demanda e a quantidade. Em datas como Dia das Mães, a procura aumenta — o ideal é antecipar e consultar o prazo no WhatsApp.' },
];

function FAQ() {
  const [openIdx, setOpenIdx] = React.useState(0);

  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="faq__head reveal">
          <span className="eyebrow"><span className="dot" /> Perguntas frequentes</span>
          <h2 style={{ marginTop: 18 }}>
            Tirando suas <span className="gradient-text">dúvidas mais comuns</span>.
          </h2>
        </div>

        <div className="faq__list reveal" role="list">
          {faqList.map((item, i) => {
            const isOpen = openIdx === i;
            return (
              <div key={i} className={`faq-item${isOpen ? ' open' : ''}`} role="listitem">
                <button
                  aria-expanded={isOpen}
                  aria-controls={`faq-${i}`}
                  onClick={() => setOpenIdx(isOpen ? -1 : i)}
                >
                  <span>{item.q}</span>
                  <span className="chev" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 9l6 6 6-6"/>
                    </svg>
                  </span>
                </button>
                <div id={`faq-${i}`} className="answer" role="region">
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { FAQ });
