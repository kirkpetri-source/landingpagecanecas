/* ============== O SERVIÇO ============== */
const serviceStyles = {};

// Pequeno set de ícones em SVG para as frentes
const Ico = {
  photo: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2"/>
      <circle cx="9" cy="11" r="2"/>
      <path d="M3 17l5-4 5 4 4-3 4 3"/>
    </svg>
  ),
  name: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 7h16M4 12h16M4 17h10"/>
    </svg>
  ),
  mom: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21s-7-4.4-7-10.5C5 7 7.5 5 10 5c1.5 0 2.5.8 2 2 1-1.2 2-2 3.5-2 2.5 0 5 2 5 5.5 0 6.1-7 10.5-7 10.5Z" fill="rgba(225,29,72,.12)"/>
    </svg>
  ),
  couple: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="9" r="3"/>
      <circle cx="16" cy="9" r="3"/>
      <path d="M3 19c1-3 4-4 5-4s4 1 5 4M13 19c1-3 4-4 5-4s4 1 5 4"/>
    </svg>
  ),
  bible: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 4h12a2 2 0 0 1 2 2v14H7a2 2 0 0 1-2-2V4Z"/>
      <path d="M12 9v6M9 12h6"/>
    </svg>
  ),
  business: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="7" width="18" height="13" rx="2"/>
      <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/>
      <path d="M3 13h18"/>
    </svg>
  ),
  teacher: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-5 9 5-9 5-9-5Z"/>
      <path d="M7 11v4c0 1.7 2.2 3 5 3s5-1.3 5-3v-4"/>
    </svg>
  ),
  gift: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="9" width="18" height="11" rx="2"/>
      <path d="M3 13h18M12 9v11"/>
      <path d="M8 9c-2 0-3-3 0-3s4 3 4 3-2 0-4 0Zm8 0c2 0 3-3 0-3s-4 3-4 3 2 0 4 0Z"/>
    </svg>
  ),
  date: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="3"/>
      <path d="M8 2v4M16 2v4M3 10h18"/>
    </svg>
  ),
  brand: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z"/>
    </svg>
  ),
};

const frentes = [
  { ico: 'photo',    label: 'Caneca com foto' },
  { ico: 'name',     label: 'Caneca com nome' },
  { ico: 'mom',      label: 'Caneca para Dia das Mães' },
  { ico: 'couple',   label: 'Caneca para casal' },
  { ico: 'bible',    label: 'Caneca com frase bíblica' },
  { ico: 'business', label: 'Caneca para empresas' },
  { ico: 'teacher',  label: 'Caneca para professores' },
  { ico: 'gift',     label: 'Caneca para lembrancinhas' },
  { ico: 'date',     label: 'Caneca para datas comemorativas' },
  { ico: 'brand',    label: 'Caneca com identidade visual' },
];

function Service({ wppLink }) {
  return (
    <section className="section" id="servico">
      <div className="container">
        <div className="service__grid">
          <div className="service__copy reveal">
            <span className="eyebrow"><span className="dot" /> O serviço</span>
            <h2>
              Uma fábrica artesanal de <span className="gradient-text">memórias afetivas</span>.
            </h2>
            <p>
              A Lion Tech cria canecas personalizadas para presentes individuais, datas especiais e pedidos
              corporativos. O cliente envia foto, frase, nome, tema ou ideia, e a equipe transforma em uma arte
              personalizada para produção.
            </p>
            <p>
              Tudo conversado por WhatsApp, com prévia visual antes da produção. Sem surpresa, com qualidade
              de impressão e entrega combinada.
            </p>

            {/* Mini dashboard mock */}
            <div className="dash">
              <div className="dash__card">
                <span className="label">Pedidos personalizados</span>
                <span className="num">+1.2k</span>
                <span className="delta">+38% vs ano anterior</span>
              </div>
              <div className="dash__card">
                <span className="label">Presentes criados</span>
                <span className="num">+800</span>
                <span className="delta">📦 entregues</span>
              </div>
              <div className="dash__card">
                <span className="label">Empresas atendidas</span>
                <span className="num">92</span>
                <span className="delta">brindes corporativos</span>
              </div>
              <div className="dash__card">
                <span className="label">Ideias virando arte</span>
                <span className="num">100%</span>
                <span className="delta">com prévia antes</span>
              </div>
            </div>

            <a href={wppLink} target="_blank" rel="noopener" className="btn btn-primary" style={{ marginTop: 8 }}>
              <WppIcon /> Pedir orçamento agora
            </a>
          </div>

          <div className="reveal">
            <h3 style={{ marginBottom: 14 }}>Frentes de personalização</h3>
            <div className="frentes">
              {frentes.map((f, i) => (
                <div key={i} className="frente">
                  <span className="icon-circle">{Ico[f.ico]}</span>
                  <span>{f.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Service });
