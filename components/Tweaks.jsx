/* ============== TWEAKS PANEL ============== */
const tweaksStyles = {};

const accents = [
  { id: 'vermelho', name: 'Vermelho', primary: '#e11d48', secondary: '#7c3aed', tert: '#ec4899' },
  { id: 'roxo',     name: 'Roxo',     primary: '#7c3aed', secondary: '#e11d48', tert: '#a78bfa' },
  { id: 'rosa',     name: 'Rosa',     primary: '#ec4899', secondary: '#7c3aed', tert: '#f472b6' },
  { id: 'vinho',    name: 'Vinho',    primary: '#881337', secondary: '#7c3aed', tert: '#be123c' },
  { id: 'dourado',  name: 'Dourado',  primary: '#c9a44a', secondary: '#7c3aed', tert: '#eab308' },
];

function Tweaks() {
  const [open, setOpen] = React.useState(false);
  const [accent, setAccent] = React.useState('vermelho');
  const [hearts, setHearts] = React.useState(true);
  const [glow, setGlow] = React.useState(true);
  const [anim, setAnim] = React.useState(true);
  const [density, setDensity] = React.useState('normal');

  // aplica em variáveis CSS
  React.useEffect(() => {
    const a = accents.find((x) => x.id === accent) || accents[0];
    const root = document.documentElement;
    root.style.setProperty('--accent', a.primary);
    root.style.setProperty('--accent-2', a.secondary);
    root.style.setProperty('--accent-3', a.tert);
    root.style.setProperty('--grad-hot',
      `linear-gradient(135deg, ${a.primary} 0%, ${a.tert} 50%, ${a.secondary} 100%)`);
    root.style.setProperty('--grad-text',
      `linear-gradient(120deg, ${a.primary}, ${a.secondary})`);
  }, [accent]);

  React.useEffect(() => {
    document.documentElement.dataset.hearts = hearts ? 'on' : 'off';
  }, [hearts]);
  React.useEffect(() => {
    document.documentElement.dataset.glow = glow ? 'on' : 'off';
  }, [glow]);
  React.useEffect(() => {
    document.documentElement.dataset.anim = anim ? 'on' : 'off';
  }, [anim]);
  React.useEffect(() => {
    document.documentElement.dataset.density = density;
  }, [density]);

  return (
    <div className={`tweaks${open ? ' open' : ''}`}>
      <button
        className="tweaks__btn"
        aria-label={open ? 'Fechar painel de ajustes' : 'Abrir painel de ajustes'}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" fill="currentColor" stroke="none"/>
          <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/>
        </svg>
      </button>

      <div className="tweaks__panel" role="dialog" aria-label="Ajustes visuais">
        <h6>Cor de acento</h6>
        <div className="tweaks__colors">
          {accents.map((a) => (
            <button
              key={a.id}
              title={a.name}
              aria-label={`Cor ${a.name}`}
              className={accent === a.id ? 'is-active' : ''}
              onClick={() => setAccent(a.id)}
              style={{ background: `linear-gradient(135deg, ${a.primary}, ${a.tert})` }}
            />
          ))}
        </div>

        <h6>Efeitos</h6>
        <div className="tweaks__toggle">
          <span>Corações animados</span>
          <button
            className={`tweaks__sw${hearts ? ' is-on' : ''}`}
            aria-label="Alternar corações animados"
            onClick={() => setHearts(!hearts)}
          />
        </div>
        <div className="tweaks__toggle">
          <span>Glow nos botões</span>
          <button
            className={`tweaks__sw${glow ? ' is-on' : ''}`}
            aria-label="Alternar glow nos botões"
            onClick={() => setGlow(!glow)}
          />
        </div>
        <div className="tweaks__toggle">
          <span>Animações de entrada</span>
          <button
            className={`tweaks__sw${anim ? ' is-on' : ''}`}
            aria-label="Alternar animações de entrada"
            onClick={() => setAnim(!anim)}
          />
        </div>

        <h6>Densidade</h6>
        <div className="tweaks__density">
          {['suave','normal','intensa'].map((d) => (
            <button
              key={d}
              className={density === d ? 'is-active' : ''}
              onClick={() => setDensity(d)}
            >{d.charAt(0).toUpperCase() + d.slice(1)}</button>
          ))}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Tweaks });
