/* ============== FOOTER ============== */
const footerStyles = {};

function Footer({ wppLink }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand reveal">
            <div style={{ display:'flex', alignItems:'center', gap: 12, marginBottom: 8 }}>
              <span className="logo-mark" style={{
                width: 40, height: 40, borderRadius: 12,
                background:'linear-gradient(135deg,#fff 0%,#f3e8ff 100%)',
                border:'1px solid var(--line)',
                display:'grid', placeItems:'center'
              }}>
                <NavLionLogo />
              </span>
              <span>Lion Tech</span>
            </div>
            <p>
              A Lion Tech cria presentes personalizados, criativos e memoráveis para transformar
              momentos especiais em lembranças únicas.
            </p>
          </div>

          <div className="footer__col reveal">
            <h5>Navegação</h5>
            <a href="#argumentos">Por que personalizar</a>
            <a href="#galeria">Galeria</a>
            <a href="#processo">Como funciona</a>
            <a href="#faq">FAQ</a>
          </div>

          <div className="footer__col reveal">
            <h5>Personalize</h5>
            <a href={wppLink} target="_blank" rel="noopener">Para Dia das Mães</a>
            <a href={wppLink} target="_blank" rel="noopener">Para casal</a>
            <a href={wppLink} target="_blank" rel="noopener">Para empresas</a>
            <a href={wppLink} target="_blank" rel="noopener">Lembrancinhas</a>
          </div>

          <div className="footer__col reveal">
            <h5>Contato</h5>
            <a href={wppLink} target="_blank" rel="noopener">WhatsApp +55 64 9 9911-6361</a>
            <a href="mailto:contato@liontech.com">contato@liontech.com</a>
            <a href="#top">Voltar ao topo ↑</a>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© 2026 Lion Tech — Canecas Personalizadas. Feito com ♥ no Brasil.</span>
          <span>Eternize momentos. Presenteie histórias.</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Footer });
