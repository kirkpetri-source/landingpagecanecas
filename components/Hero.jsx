/* ============== HERO ============== */
const HeroMugIllustration = () => (
  <svg viewBox="0 0 520 420" aria-hidden="true" style={{ width:'100%', height:'auto' }}>
    <defs>
      <linearGradient id="mugBody" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#ffffff"/>
        <stop offset="100%" stopColor="#f4eaff"/>
      </linearGradient>
      <linearGradient id="mugRim" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#fff"/>
        <stop offset="100%" stopColor="#f1ddee"/>
      </linearGradient>
      <linearGradient id="heartFill" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#ec4899"/>
        <stop offset="100%" stopColor="#e11d48"/>
      </linearGradient>
      <radialGradient id="bgSoft" cx="50%" cy="40%" r="60%">
        <stop offset="0%" stopColor="#fff" stopOpacity="1"/>
        <stop offset="100%" stopColor="#fff" stopOpacity="0"/>
      </radialGradient>
      <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="14" stdDeviation="14" floodColor="#7c3aed" floodOpacity=".18"/>
      </filter>
    </defs>
    {/* fundo de pétalas */}
    <g opacity=".55">
      <circle cx="80" cy="80" r="6" fill="#f9a8d4"/>
      <circle cx="430" cy="60" r="4" fill="#e879f9"/>
      <circle cx="470" cy="180" r="6" fill="#fb7185"/>
      <circle cx="60" cy="240" r="5" fill="#c084fc"/>
      <circle cx="100" cy="350" r="4" fill="#f472b6"/>
      <circle cx="450" cy="330" r="5" fill="#a78bfa"/>
    </g>
    {/* alça */}
    <g filter="url(#softShadow)">
      <path d="M150 200 C90 200 70 240 70 270 C70 305 100 335 150 335" fill="none" stroke="url(#mugRim)" strokeWidth="34" strokeLinecap="round"/>
    </g>
    {/* corpo */}
    <g filter="url(#softShadow)">
      <rect x="150" y="140" width="280" height="240" rx="18" fill="url(#mugBody)"/>
      {/* topo da caneca */}
      <ellipse cx="290" cy="140" rx="140" ry="22" fill="url(#mugRim)"/>
      <ellipse cx="290" cy="140" rx="120" ry="14" fill="#f7e7f4"/>
      <ellipse cx="290" cy="140" rx="106" ry="8" fill="#fff"/>
    </g>
    {/* arte impressa: coração + frase */}
    <g transform="translate(170 175)">
      <rect x="0" y="0" width="240" height="180" rx="12" fill="#fff" stroke="#f5d6e2" strokeWidth="1.5"/>
      <g transform="translate(120 70)">
        <path d="M0 18 C-30 -10 -65 14 -25 50 L0 76 L25 50 C65 14 30 -10 0 18 Z" fill="url(#heartFill)"/>
      </g>
      {/* texto handwritten */}
      <text x="120" y="135" textAnchor="middle" fontFamily="Fraunces, serif" fontStyle="italic" fontWeight="600" fontSize="20" fill="#1f1230">para minha mãe</text>
      <text x="120" y="160" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" letterSpacing="3" fill="#7d6a92">FELIZ DIA DAS MÃES</text>
      {/* florzinhas decorativas */}
      <g opacity=".75">
        <circle cx="22" cy="22" r="4" fill="#f9a8d4"/>
        <circle cx="36" cy="14" r="3" fill="#fbcfe8"/>
        <circle cx="218" cy="20" r="3" fill="#c4b5fd"/>
        <circle cx="206" cy="32" r="4" fill="#e0a8f0"/>
      </g>
    </g>
    {/* vapor */}
    <g opacity=".4">
      <path d="M240 100 C235 80 250 70 245 50" stroke="#7c3aed" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <path d="M290 95 C283 75 300 65 290 40" stroke="#ec4899" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <path d="M340 100 C335 80 350 70 345 50" stroke="#7c3aed" strokeWidth="3" fill="none" strokeLinecap="round"/>
    </g>
  </svg>
);

const heroStyles = {};

function Hero({ wppLink }) {
  const cardRef = React.useRef(null);

  // efeito 3D no mouse
  React.useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const handle = (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - .5;
      const y = (e.clientY - r.top) / r.height - .5;
      el.style.transform = `rotateY(${x * 9}deg) rotateX(${-y * 9}deg) translateZ(0)`;
    };
    const reset = () => { el.style.transform = 'rotateY(0deg) rotateX(0deg)'; };
    el.addEventListener('mousemove', handle);
    el.addEventListener('mouseleave', reset);
    return () => {
      el.removeEventListener('mousemove', handle);
      el.removeEventListener('mouseleave', reset);
    };
  }, []);

  return (
    <section className="hero">
      <div className="container">
        <div className="hero__grid">
          <div className="reveal">
            <span className="eyebrow">
              <span className="dot" />
              Canecas personalizadas para presentes inesquecíveis
            </span>
            <h1 className="hero__title" style={{ marginTop: 22 }}>
              Sua mãe não precisa de mais um <span className="struck">presente comum</span>. Ela merece uma{' '}
              <span className="gradient-text">lembrança única</span> feita especialmente para ela.
            </h1>
            <p className="hero__lede">
              Transforme fotos, nomes, frases e momentos especiais em uma caneca personalizada cheia de significado.
              Um presente simples, útil e emocionante para quem você ama.
            </p>
            <div className="hero__ctas">
              <a href={wppLink} target="_blank" rel="noopener" className="btn btn-primary">
                <WppIcon />
                Personalize seu presente
              </a>
              <a href="#galeria" className="btn btn-ghost">
                Ver galeria
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M13 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
            <div className="hero__kpis">
              <div className="kpi">
                <span className="kpi__num">100%</span>
                <span className="kpi__label">Personalizada</span>
              </div>
              <div className="kpi">
                <span className="kpi__num">365 dias</span>
                <span className="kpi__label">Presente útil todos os dias</span>
              </div>
              <div className="kpi">
                <span className="kpi__num">Mãe</span>
                <span className="kpi__label">Ideal para o Dia das Mães</span>
              </div>
            </div>
          </div>

          <div className="hero__visual reveal">
            <div className="hero__sparkles" aria-hidden="true">
              <span style={{ top:'12%', left:'10%', animationDelay:'0s' }} />
              <span style={{ top:'30%', right:'12%', animationDelay:'.6s' }} />
              <span style={{ bottom:'18%', left:'18%', animationDelay:'1.2s' }} />
              <span style={{ bottom:'28%', right:'14%', animationDelay:'1.8s' }} />
              <span style={{ top:'58%', left:'48%', animationDelay:'2.4s' }} />
            </div>
            <div ref={cardRef} className="hero__card">
              <span className="ribbon">Edição Mãe 2026</span>
              <span className="badge pulse">★ 4.9 amada</span>
              <HeroMugIllustration />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Hero, HeroMugIllustration });
