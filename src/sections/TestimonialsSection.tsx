import { motion } from 'framer-motion';
import SectionLabel from '../components/SectionLabel';

const testimonials = [
  {
    initials: 'MP',
    name: 'Maria P.',
    treatment: 'Diseno de Sonrisa',
    stars: 5,
    text: 'La Dra. Yissel transformo completamente mi sonrisa. El proceso digital fue increible — vi el resultado antes de comenzar el tratamiento. Quede absolutamente feliz.',
  },
  {
    initials: 'JR',
    name: 'Jose R.',
    treatment: 'Implantes — Dr. Sandy',
    stars: 5,
    text: 'El Dr. Sandy Diezma es un implantologo extraordinario. El procedimiento fue sin dolor y el implante quedo perfecto. Todo el equipo de la Dra. de la Rosa es excelente.',
  },
  {
    initials: 'AL',
    name: 'Ana L.',
    treatment: 'Ortodoncia',
    stars: 5,
    text: 'Elegi este consultorio por la Odontologia Digital y fue la mejor decision. La tecnologia que tienen es increible y el trato de la Dra. Yarlyn Rojas fue muy profesional.',
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      style={{
        background: 'var(--bg-base)',
        padding: '120px 0',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 56px' }} className="testimonials-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', marginBottom: '56px' }}
        >
          <SectionLabel text="⭐ Testimonios" center />
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'var(--text-h2)',
              lineHeight: 1.1,
              color: 'var(--text-dark)',
            }}
          >
            Lo Que Dicen
            <br />
            Nuestros{' '}
            <span style={{ fontStyle: 'italic', color: 'var(--blue)' }}>
              Pacientes
            </span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
          }}
          className="testimonials-grid"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5 }}
              style={{
                background: 'white',
                borderRadius: '16px',
                padding: '32px',
                border: '1px solid var(--border)',
                borderTop: '3px solid var(--blue)',
                boxShadow: 'var(--shadow-sm)',
                transition: 'box-shadow 0.3s ease',
                position: 'relative',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-md)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-sm)';
              }}
            >
              {/* Quote mark */}
              <span
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '24px',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: '60px',
                  lineHeight: 1,
                  color: 'var(--blue-pale)',
                  userSelect: 'none',
                }}
              >
                &ldquo;
              </span>

              {/* Avatar + info */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: 'var(--blue-dark)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-body)',
                    fontWeight: 700,
                    fontSize: '14px',
                    color: 'white',
                    flexShrink: 0,
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontWeight: 600,
                      fontSize: '14px',
                      color: 'var(--text-dark)',
                    }}
                  >
                    {t.name}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '12px',
                      color: 'var(--text-muted)',
                    }}
                  >
                    {t.treatment}
                  </div>
                </div>
              </div>

              {/* Stars */}
              <div style={{ marginBottom: '14px', display: 'flex', gap: '2px' }}>
                {Array.from({ length: t.stars }).map((_, si) => (
                  <span key={si} style={{ color: 'var(--blue-mid)', fontSize: '15px' }}>
                    ★
                  </span>
                ))}
              </div>

              {/* Text */}
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  lineHeight: 1.7,
                  color: 'var(--text-body)',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                {t.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .testimonials-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 768px) {
          .testimonials-container { padding: 0 20px !important; }
          .testimonials-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
