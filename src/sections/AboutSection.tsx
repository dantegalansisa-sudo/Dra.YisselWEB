import { motion } from 'framer-motion';
import SectionLabel from '../components/SectionLabel';

const photos = [
  {
    src: '/images/ceo-clinic.jpeg',
    alt: 'Dra. Yissel en el consultorio dental',
  },
  {
    src: '/images/dental-treatment.jpg',
    alt: 'Tratamiento dental profesional',
  },
  {
    src: '/images/dental-patient.jpg',
    alt: 'Paciente sonriendo en consulta dental',
  },
  {
    src: '/images/dental-xray.jpg',
    alt: 'Radiografia digital - Odontologia moderna',
  },
];

const floatingPhotos = [
  // Left column
  { index: 0, x: -80, rotate: -12, finalRotate: -8, delay: 0.4, width: 180, radius: '16px 4px 16px 4px', top: '10%' },
  { index: 1, x: -60, rotate: 8, finalRotate: 5, delay: 0.6, width: 160, radius: '4px 16px 4px 16px', top: '45%' },
  // Right column
  { index: 2, x: 80, rotate: 10, finalRotate: 7, delay: 0.4, width: 180, radius: '16px 4px 16px 4px', top: '8%' },
  { index: 3, x: 60, rotate: -7, finalRotate: -5, delay: 0.6, width: 160, radius: '4px 16px 4px 16px', top: '42%' },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      style={{
        background: 'var(--bg-white)',
        padding: '120px 0',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 56px',
          display: 'grid',
          gridTemplateColumns: '1fr 1.2fr 1fr',
          alignItems: 'center',
          gap: '20px',
          minHeight: '520px',
          position: 'relative',
        }}
        className="about-grid"
      >
        {/* Left photos */}
        <div style={{ position: 'relative', height: '100%', minHeight: '450px' }}>
          {floatingPhotos.slice(0, 2).map((p) => (
            <motion.div
              key={p.index}
              initial={{ x: p.x, rotate: p.rotate, opacity: 0 }}
              whileInView={{ x: 0, rotate: p.finalRotate, opacity: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: p.delay, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.04, rotate: p.finalRotate + 2 }}
              style={{
                position: 'absolute',
                top: p.top,
                right: '0',
                width: `${p.width}px`,
                borderRadius: p.radius,
                overflow: 'hidden',
                boxShadow: 'var(--shadow-md)',
                cursor: 'default',
              }}
            >
              <img
                src={photos[p.index].src}
                alt={photos[p.index].alt}
                style={{
                  width: '100%',
                  aspectRatio: '3/4',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Center text */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', padding: '0 8px' }}
        >
          <SectionLabel text="Nosotros" center />
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'var(--text-h2)',
              lineHeight: 1.1,
              color: 'var(--text-dark)',
              marginBottom: '20px',
            }}
          >
            Atencion Compasiva,
            <br />
            <span style={{ fontStyle: 'italic', color: 'var(--blue)' }}>
              Experiencia
            </span>{' '}
            de Confianza.
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '15px',
              lineHeight: 1.7,
              color: 'var(--text-muted)',
              maxWidth: '420px',
              margin: '0 auto 32px',
            }}
          >
            En el Consultorio Dental de la Dra. Yissel de la Rosa, nos dedicamos
            a transformar las visitas dentales en experiencias positivas. Con
            enfoque en tu comodidad, tecnologia de ultima generacion y cuidado
            individualizado.
          </p>
          <div
            style={{
              display: 'flex',
              gap: '12px',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <a
              href="#contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '13px 26px',
                background: 'var(--blue)',
                color: 'white',
                borderRadius: '8px',
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '14px',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = 'var(--shadow-blue)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Agendar Cita
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#about"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '13px 26px',
                background: 'transparent',
                color: 'var(--blue)',
                border: '1.5px solid var(--blue)',
                borderRadius: '8px',
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '14px',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--blue-pale)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
              }}
            >
              Nosotros
            </a>
          </div>
        </motion.div>

        {/* Right photos */}
        <div style={{ position: 'relative', height: '100%', minHeight: '450px' }}>
          {floatingPhotos.slice(2, 4).map((p) => (
            <motion.div
              key={p.index}
              initial={{ x: p.x, rotate: p.rotate, opacity: 0 }}
              whileInView={{ x: 0, rotate: p.finalRotate, opacity: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: p.delay, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.04, rotate: p.finalRotate - 2 }}
              style={{
                position: 'absolute',
                top: p.top,
                left: '0',
                width: `${p.width}px`,
                borderRadius: p.radius,
                overflow: 'hidden',
                boxShadow: 'var(--shadow-md)',
                cursor: 'default',
              }}
            >
              <img
                src={photos[p.index].src}
                alt={photos[p.index].alt}
                style={{
                  width: '100%',
                  aspectRatio: '3/4',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            padding: 0 20px !important;
            gap: 40px !important;
            min-height: auto !important;
          }
          .about-grid > div:first-child,
          .about-grid > div:last-child {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            position: static !important;
            min-height: auto !important;
            gap: 12px;
            height: auto !important;
          }
          .about-grid > div:first-child > div,
          .about-grid > div:last-child > div {
            position: static !important;
            width: 100% !important;
            transform: none !important;
          }
          .about-grid > div:first-child { order: 2; }
          .about-grid > div:nth-child(2) { order: 1; }
          .about-grid > div:last-child { order: 3; }
        }
      `}</style>
    </section>
  );
}
