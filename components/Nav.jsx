/* ============== NAV ============== */
const NavLionLogo = () => (
  <svg viewBox="0 0 200 200" aria-hidden="true">
    <defs>
      <linearGradient id="navLionG" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#7c3aed" />
        <stop offset="100%" stopColor="#4c1d95" />
      </linearGradient>
    </defs>
    <g transform="translate(15 30)" fill="url(#navLionG)">
      <path d="M30 95 C30 70 50 60 78 60 L120 60 C148 60 165 76 165 105 L165 130 C165 138 158 145 150 145 L145 145 L145 155 C145 160 141 163 137 163 L132 163 C128 163 125 160 125 155 L125 145 L70 145 L70 155 C70 160 66 163 62 163 L57 163 C53 163 50 160 50 155 L50 145 L40 145 C34 145 30 141 30 135 Z" />
      <path d="M115 30 C100 30 90 40 88 55 C82 50 75 50 70 55 C65 47 56 45 50 52 C52 45 50 38 45 35 C55 22 75 18 90 25 C95 18 108 14 120 18 C135 8 155 12 165 25 C170 22 178 26 178 35 C182 38 184 48 178 55 C182 60 180 70 172 72 C176 80 170 90 162 88 C160 100 150 105 142 100 C140 90 138 80 135 72 C130 60 125 45 115 30 Z" />
      <path d="M138 48 C150 48 158 56 158 68 L158 78 C158 86 153 92 145 92 L138 92 L138 80 C138 75 134 72 130 73 L128 73 C129 65 132 56 138 48 Z" />
      <path d="M30 95 C20 95 10 100 8 110 C6 122 14 130 22 128 C18 124 18 118 24 116 C30 114 36 118 36 122 L36 102 Z" />
    </g>
  </svg>
);

const WppIcon = ({ size = 18 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
    <path d="M20.5 3.5A11 11 0 0 0 3.4 17.7L2 22l4.4-1.3A11 11 0 1 0 20.5 3.5Zm-8.5 18a9 9 0 0 1-4.6-1.3l-.3-.2-2.7.8.8-2.6-.2-.3A9 9 0 1 1 12 21.5Zm5-6.7c-.3-.1-1.6-.8-1.9-.9-.3-.1-.4-.1-.6.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.8-.7-1.4-1.6-1.5-1.9-.2-.3 0-.4.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.3 0-.5-.1-.1-.6-1.5-.8-2-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.7.4-.2.3-.9.9-.9 2.2 0 1.3.9 2.6 1 2.8.1.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.6-.6 1.8-1.3.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3Z" />
  </svg>
);

function Nav({ wppLink }) {
  return (
    <header className="lt-nav" id="top">
      <div className="container lt-nav__inner">
        <a href="#top" className="lt-nav__brand" aria-label="Lion Tech — início">
          <span className="logo-mark"><NavLionLogo /></span>
          <span>
            Lion Tech
            <small>Canecas Personalizadas</small>
          </span>
        </a>
        <nav className="lt-nav__links" aria-label="Navegação principal">
          <a href="#argumentos">Por que personalizar</a>
          <a href="#galeria">Galeria</a>
          <a href="#processo">Como funciona</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a
          href={wppLink}
          target="_blank"
          rel="noopener"
          className="btn btn-primary"
          aria-label="Abrir WhatsApp para fazer um orçamento"
        >
          <WppIcon />
          Falar no WhatsApp
        </a>
      </div>
    </header>
  );
}

Object.assign(window, { Nav, NavLionLogo, WppIcon });
