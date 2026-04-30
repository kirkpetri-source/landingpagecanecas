/* ============== APP — orquestra tudo ============== */
const appStyles = {};

const WPP_LINK = 'https://wa.me/5564999116361?text=' +
  encodeURIComponent('Olá! Tenho interesse em uma caneca personalizada e gostaria de fazer um orçamento.');

// Fundo de corações animados
function HeartBackground() {
  const hearts = React.useMemo(() => {
    const arr = [];
    for (let i = 0; i < 22; i++) {
      arr.push({
        left: Math.random() * 100,
        size: 14 + Math.random() * 28,
        dur: 14 + Math.random() * 18,
        delay: -Math.random() * 18,
        drift: (Math.random() - .5) * 90,
        op: .35 + Math.random() * .55,
        color: i % 3 === 0 ? '#e11d48' : (i % 3 === 1 ? '#ec4899' : '#a78bfa'),
      });
    }
    return arr;
  }, []);

  return (
    <div className="heart-bg" aria-hidden="true">
      {hearts.map((h, i) => (
        <svg
          key={i}
          className="heart"
          viewBox="0 0 24 24"
          style={{
            left: `${h.left}%`,
            width: h.size,
            height: h.size,
            animationDuration: `${h.dur}s`,
            animationDelay: `${h.delay}s`,
            '--drift': `${h.drift}px`,
            opacity: h.op,
          }}
        >
          <path
            d="M12 21s-7-4.4-7-10.5C5 7 7.5 5 10 5c1.5 0 2.5.8 2 2 1-1.2 2-2 3.5-2 2.5 0 5 2 5 5.5 0 6.1-7 10.5-7 10.5Z"
            fill={h.color}
          />
        </svg>
      ))}
    </div>
  );
}

function App() {
  // IntersectionObserver para os reveals
  React.useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      // Fallback: deixa tudo visível
      els.forEach((el) => el.classList.add('in-view'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in-view');
          io.unobserve(e.target);
        }
      });
    }, { threshold: .12, rootMargin: '0px 0px -40px 0px' });
    els.forEach((el) => io.observe(el));

    // fallback de segurança após 4s, mostra qualquer reveal restante
    const safety = setTimeout(() => {
      document.querySelectorAll('.reveal:not(.in-view)').forEach((el) => el.classList.add('in-view'));
    }, 4000);

    return () => { io.disconnect(); clearTimeout(safety); };
  }, []);

  return (
    <React.Fragment>
      <HeartBackground />
      <Nav wppLink={WPP_LINK} />
      <main>
        <Hero wppLink={WPP_LINK} />
        <Marquee />
        <Thesis />
        <Arguments />
        <PullBand />
        <WhyNow />
        <BeforeAfter />
        <Service wppLink={WPP_LINK} />
        <Gallery />
        <Process />
        <FAQ />
        <FinalCTA wppLink={WPP_LINK} />
      </main>
      <Footer wppLink={WPP_LINK} />
      <Tweaks />
    </React.Fragment>
  );
}

Object.assign(window, { App, HeartBackground });
