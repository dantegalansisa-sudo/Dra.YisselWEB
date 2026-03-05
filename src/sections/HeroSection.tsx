import { motion } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1] as const;

export default function HeroSection() {
  return (
    <section
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        background: '#0B1A3B',
      }}
    >
      {/* ── Background Image + Ken Burns ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          animation: 'ken-burns 10s ease-out forwards',
          willChange: 'transform',
        }}
      >
        <img
          src="/images/dental-xray.jpg"
          alt="Equipo dental analizando radiografia digital - Odontologia moderna"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
      </div>

      {/* ── Overlay gradients ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            linear-gradient(180deg,
              rgba(11,26,59,0.25) 0%,
              rgba(11,26,59,0.45) 45%,
              rgba(11,26,59,0.78) 100%
            )
          `,
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(90deg, rgba(11,26,59,0.65) 0%, transparent 55%)',
          zIndex: 1,
        }}
      />

      {/* ── Content ── */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          height: '100%',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          padding: '0 56px 80px 56px',
          maxWidth: '1440px',
          margin: '0 auto',
        }}
      >
        {/* ── Left: Text block ── */}
        <div style={{ maxWidth: '680px' }}>
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7, ease }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '24px',
            }}
          >
            <span
              style={{
                width: '2px',
                height: '24px',
                background: 'var(--blue-light)',
                display: 'block',
                borderRadius: '1px',
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '12px',
                letterSpacing: '0.15em',
                color: 'var(--blue-light)',
                textTransform: 'uppercase' as const,
              }}
            >
              Cuidado Dental Premium
            </span>
          </motion.div>

          {/* Title lines */}
          <h1 style={{ margin: 0, padding: 0 }}>
            {['Tu Sonrisa Merece', 'Odontologia Digital'].map(
              (line, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 1.0 + i * 0.15,
                    duration: 0.8,
                    ease,
                  }}
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 900,
                    fontSize: 'clamp(38px, 5.5vw, 76px)',
                    lineHeight: 1.02,
                    color: 'white',
                  }}
                >
                  {line}
                </motion.span>
              )
            )}
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.8, ease }}
              style={{
                display: 'block',
                fontFamily: 'var(--font-display)',
                fontWeight: 900,
                fontSize: 'clamp(38px, 5.5vw, 76px)',
                lineHeight: 1.02,
                color: 'var(--blue-light)',
                fontStyle: 'italic',
              }}
            >
              y Moderna.
            </motion.span>
          </h1>

          {/* CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.55, duration: 0.7, ease }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              marginTop: '36px',
              flexWrap: 'wrap' as const,
            }}
          >
            <a
              href="https://wa.me/8299680892?text=Hola%20Consultorio%20Dental%20Dra.%20Yissel!%20Me%20interesa%20agendar%20una%20cita."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '15px 32px',
                background: 'white',
                color: 'var(--blue-dark)',
                borderRadius: '50px',
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '14px',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
              }}
              onMouseEnter={(e) => {
                const t = e.currentTarget;
                t.style.background = 'var(--blue)';
                t.style.color = 'white';
                t.style.boxShadow = 'var(--shadow-blue)';
              }}
              onMouseLeave={(e) => {
                const t = e.currentTarget;
                t.style.background = 'white';
                t.style.color = 'var(--blue-dark)';
                t.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
              }}
            >
              Agendar Cita
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 400,
                fontSize: '14px',
                color: 'rgba(255,255,255,0.6)',
              }}
            >
              O llama:{' '}
              <a
                href="tel:8299680892"
                style={{
                  color: 'rgba(255,255,255,0.85)',
                  fontWeight: 500,
                  borderBottom: '1px solid rgba(255,255,255,0.25)',
                  paddingBottom: '1px',
                }}
              >
                829-968-0892
              </a>
            </span>
          </motion.div>
        </div>

        {/* ── Right: 5K+ Badge (glassmorphism) ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.9, ease }}
          style={{
            alignSelf: 'center',
            background: 'rgba(255,255,255,0.08)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(255,255,255,0.18)',
            borderRadius: '20px',
            padding: '28px 32px',
            width: '220px',
            flexShrink: 0,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: '2px',
              marginBottom: '12px',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 900,
                fontSize: '52px',
                lineHeight: 1,
                color: 'white',
              }}
            >
              5K
            </span>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '28px',
                color: 'var(--blue-light)',
                lineHeight: 1,
              }}
            >
              +
            </span>
          </div>
          <div
            style={{
              width: '32px',
              height: '2px',
              background: 'var(--blue-mid)',
              borderRadius: '1px',
              marginBottom: '12px',
            }}
          />
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 400,
              fontSize: '13px',
              lineHeight: 1.5,
              color: 'rgba(255,255,255,0.6)',
            }}
          >
            Pacientes confian en nuestro equipo de especialistas en
            odontologia digital y moderna.
          </p>
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        style={{
          position: 'absolute',
          bottom: '24px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '10px',
            fontWeight: 500,
            letterSpacing: '0.15em',
            color: 'rgba(255,255,255,0.35)',
            textTransform: 'uppercase' as const,
          }}
        >
          Desliza
        </span>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="rgba(255,255,255,0.35)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ animation: 'bounce-down 2s ease-in-out infinite' }}
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </motion.div>

      {/* ── Mobile responsive overrides ── */}
      <style>{`
        @media (max-width: 768px) {
          section > div:nth-child(4) {
            padding: 0 20px 60px 20px !important;
            flex-direction: column !important;
            align-items: flex-start !important;
            justify-content: flex-end !important;
            gap: 32px;
          }
        }
      `}</style>
    </section>
  );
}
