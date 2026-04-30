/* ============== PULL BAND ============== */
const pullStyles = {};

function PullBand() {
  return (
    <section className="pull">
      <div className="container pull__inner">
        <h2>
          Não é só uma caneca. É uma <em style={{ fontStyle:'italic', textDecoration:'underline', textDecorationStyle:'wavy', textUnderlineOffset:'8px' }}>memória</em> que cabe nas mãos.
        </h2>
        <svg viewBox="0 0 100 100" aria-hidden="true">
          <defs>
            <linearGradient id="heartBig" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1"/>
              <stop offset="100%" stopColor="#ffffff" stopOpacity=".4"/>
            </linearGradient>
          </defs>
          <path d="M50 80 C20 55 10 30 30 20 C42 14 50 22 50 30 C50 22 58 14 70 20 C90 30 80 55 50 80 Z" fill="url(#heartBig)"/>
        </svg>
      </div>
    </section>
  );
}

Object.assign(window, { PullBand });
