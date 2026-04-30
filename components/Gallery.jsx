/* ============== GALERIA DE PRODUTOS ============== */
const galleryStyles = {};

// SVG ilustrativo da caneca para placeholder das fotos
const MugSvg = ({ variant = 'mae' }) => {
  const palettes = {
    mae:     { bg: '#fde0e9', accent: '#e11d48', label: 'A melhor MÃE sempre', sub: 'flores aquarela' },
    casal:   { bg: '#f0e7ff', accent: '#7c3aed', label: 'Mãe & Filha', sub: 'desenho ilustrado' },
    empresa: { bg: '#fff5d8', accent: '#ca8a04', label: 'BRINDE CORPORATIVO', sub: 'logo personalizado' },
    foto:    { bg: '#fce7f3', accent: '#db2777', label: 'Foto + frase', sub: 'estilo polaroid' },
    frase:   { bg: '#fef3f2', accent: '#b91c1c', label: 'Mãe — título maior que rainha', sub: 'tipografia floral' },
    biblica: { bg: '#ecfeff', accent: '#0891b2', label: '"Tudo posso..."', sub: 'frase bíblica' },
  };
  const p = palettes[variant] || palettes.mae;

  return (
    <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id={`bg-${variant}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={p.bg}/>
          <stop offset="100%" stopColor="#ffffff"/>
        </linearGradient>
        <radialGradient id={`spot-${variant}`} cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity=".95"/>
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0"/>
        </radialGradient>
        <filter id={`shadow-${variant}`} x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="14" stdDeviation="14" floodColor="#1a0d2c" floodOpacity=".18"/>
        </filter>
      </defs>
      <rect width="400" height="500" fill={`url(#bg-${variant})`}/>
      <circle cx="200" cy="200" r="180" fill={`url(#spot-${variant})`}/>
      {/* Pequenas pétalas de fundo */}
      <g opacity=".5">
        <circle cx="60" cy="80" r="6" fill={p.accent}/>
        <circle cx="340" cy="60" r="4" fill={p.accent}/>
        <circle cx="350" cy="380" r="5" fill={p.accent}/>
        <circle cx="50" cy="400" r="4" fill={p.accent}/>
      </g>
      {/* alça */}
      <g filter={`url(#shadow-${variant})`}>
        <path d="M120 230 C70 230 55 270 55 295 C55 325 80 350 120 350" fill="none" stroke="#fff" strokeWidth="28" strokeLinecap="round"/>
      </g>
      {/* corpo */}
      <g filter={`url(#shadow-${variant})`}>
        <rect x="115" y="180" width="220" height="200" rx="14" fill="#ffffff"/>
        <ellipse cx="225" cy="180" rx="110" ry="18" fill="#f3e8f0"/>
        <ellipse cx="225" cy="180" rx="92" ry="10" fill="#ffffff"/>
      </g>
      {/* arte impressa */}
      <g transform="translate(135 200)">
        <rect width="180" height="160" rx="8" fill="#fff" stroke="rgba(0,0,0,.06)"/>
        {/* coração */}
        <g transform="translate(90 60)">
          <path d="M0 14 C-22 -8 -50 10 -20 38 L0 58 L20 38 C50 10 22 -8 0 14 Z" fill={p.accent}/>
        </g>
        <text x="90" y="115" textAnchor="middle" fontFamily="Fraunces, serif" fontStyle="italic" fontWeight="600" fontSize="15" fill="#1f1230">
          {p.label}
        </text>
        <text x="90" y="138" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="2" fill="#7d6a92" style={{ textTransform: 'uppercase' }}>
          {p.sub}
        </text>
      </g>
    </svg>
  );
};

const galleryItems = [
  { kind: 'photo', variant: 'mae',     tag: 'Dia das Mães', title: 'A melhor mãe sempre' },
  { kind: 'video', src: 'assets/video/personalizada1.mp4',  tag: 'Personalizada', title: 'Foto + frase para mãe' },
  { kind: 'photo', variant: 'casal',   tag: 'Mãe & Filha', title: 'Ilustração afetiva' },
  { kind: 'video', src: 'assets/video/generica1.mp4',       tag: 'Genérica',  title: 'Caneca floral elegante' },
  { kind: 'photo', variant: 'empresa', tag: 'Empresas',  title: 'Brinde corporativo' },
  { kind: 'video', src: 'assets/video/personalizada2.mp4',  tag: 'Personalizada', title: 'Polaroid + flores' },
  { kind: 'photo', variant: 'foto',    tag: 'Foto',      title: 'Polaroid clássica' },
  { kind: 'video', src: 'assets/video/generica2.mp4',       tag: 'Genérica',  title: 'Tipografia decorativa' },
  { kind: 'photo', variant: 'frase',   tag: 'Tipografia', title: 'Mãe — título maior que rainha' },
];

const galleryWppMessage = 'https://wa.me/5564999116361?text=' +
  encodeURIComponent('Olá! Vi uma caneca no site e quero fazer uma parecida.');

function Gallery() {
  // tilt 3D nas tiles
  const onMouseMove = (e) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - .5;
    const y = (e.clientY - r.top) / r.height - .5;
    el.style.transform = `perspective(900px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateZ(0)`;
  };
  const onLeave = (e) => {
    e.currentTarget.style.transform = 'perspective(900px) rotateY(0deg) rotateX(0deg)';
  };

  // hover-play em vídeos
  const playOn  = (e) => { const v = e.currentTarget.querySelector('video'); if (v) v.play().catch(()=>{}); };
  const playOff = (e) => { const v = e.currentTarget.querySelector('video'); if (v) { v.pause(); v.currentTime = 0; } };

  return (
    <section className="section" id="galeria">
      <div className="container">
        <div className="gallery__head">
          <div className="reveal">
            <span className="eyebrow"><span className="dot" /> Galeria de produtos</span>
            <h2 style={{ marginTop: 18 }}>
              Algumas das canecas que <span className="gradient-text">já encantaram</span> nossos clientes.
            </h2>
            <p style={{ maxWidth: '60ch', marginTop: 10 }}>
              Passe o mouse para ver os vídeos rodarem e explorar o efeito 3D. Clique em "Quero uma assim" e
              fale direto com a gente no WhatsApp.
            </p>
          </div>
        </div>

        <div className="gallery__grid">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className="tile reveal tilt"
              onMouseMove={onMouseMove}
              onMouseLeave={(e)=>{ onLeave(e); playOff(e); }}
              onMouseEnter={playOn}
            >
              <div className="tile__media">
                {item.kind === 'photo'
                  ? <MugSvg variant={item.variant} />
                  : <video src={item.src} muted loop playsInline preload="metadata" />
                }
              </div>
              <div className="tile__overlay">
                <span className="tag">{item.tag}</span>
                <h4>{item.title}</h4>
                <a
                  href={galleryWppMessage}
                  target="_blank" rel="noopener"
                  className="tile__cta"
                  aria-label={`Pedir uma caneca parecida com: ${item.title}`}
                >
                  <WppIcon size={14} /> Quero uma assim
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Gallery, MugSvg });
