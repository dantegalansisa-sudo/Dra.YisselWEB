import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionLabel from '../components/SectionLabel';

const services = [
  {
    num: '01/',
    name: 'Odontologia Digital',
    desc: 'Diagnostico digital avanzado, radiografias y planificacion computarizada de tratamientos.',
    image: '/images/dental-xray.jpg',
  },
  {
    num: '02/',
    name: 'Diseno de Sonrisa',
    desc: 'Transformacion completa de tu sonrisa con planificacion digital personalizada.',
    image: '/images/dental-patient.jpg',
  },
  {
    num: '03/',
    name: 'Ortodoncia Moderna',
    desc: 'Brackets metalicos, ceramicos y alineadores invisibles con tecnologia actual.',
    image: '/images/ceo-clinic.jpeg',
  },
  {
    num: '04/',
    name: 'Estetica Dental',
    desc: 'Carillas, blanqueamiento y restauraciones esteticas de alta precision.',
    image: '/images/dental-treatment.jpg',
  },
  {
    num: '05/',
    name: 'Cirugia e Implantes',
    desc: 'Dr. Sandy Diezma realiza cirugias orales e implantologia de vanguardia.',
    image: '/images/dental-treatment.jpg',
  },
  {
    num: '06/',
    name: 'Odontologia General',
    desc: 'Dra. Yarlyn Rojas — evaluaciones, profilaxis, restauraciones y tratamientos generales.',
    image: '/images/dental-patient.jpg',
  },
];

export default function ServicesSection() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="services"
      style={{
        background: 'var(--bg-base)',
        padding: '120px 0',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 56px' }} className="services-container">
        {/* Header — 2 columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '40px',
            alignItems: 'end',
            marginBottom: '60px',
          }}
          className="services-header"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'var(--text-h2)',
              lineHeight: 1.1,
              color: 'var(--text-dark)',
            }}
          >
            Cada Tratamiento
            <br />
            Comienza Con{' '}
            <span style={{ fontStyle: 'italic', color: 'var(--blue)' }}>
              Confianza
            </span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionLabel text="Nuestros Servicios" />
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '15px',
                lineHeight: 1.7,
                color: 'var(--text-muted)',
                marginBottom: '20px',
                maxWidth: '420px',
              }}
            >
              Ofrecemos una gama completa de servicios para cada necesidad —
              desde tratamientos preventivos hasta mejoras esteticas.
            </p>
            <a
              href="#services"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '14px',
                color: 'var(--blue)',
                transition: 'gap 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.gap = '10px';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.gap = '6px';
              }}
            >
              Ver Todos los Servicios
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Body — list + photo */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '48px',
            alignItems: 'start',
          }}
          className="services-body"
        >
          {/* Service list */}
          <div>
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setActive(i)}
                style={{
                  padding: '22px 16px',
                  borderBottom: '1px solid var(--border)',
                  cursor: 'pointer',
                  background: active === i ? 'var(--blue-pale)' : 'transparent',
                  paddingLeft: active === i ? '24px' : '16px',
                  transition: 'all 0.3s ease',
                  borderRadius: active === i ? '8px 8px 0 0' : '0',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 600,
                    fontSize: '12px',
                    color: 'var(--blue)',
                    letterSpacing: '0.1em',
                    display: 'block',
                    marginBottom: '4px',
                  }}
                >
                  {s.num}
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '19px',
                    color: 'var(--text-dark)',
                    marginBottom: '4px',
                  }}
                >
                  {s.name}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '13.5px',
                    color: 'var(--text-muted)',
                    lineHeight: 1.5,
                  }}
                >
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Active photo */}
          <div
            style={{
              position: 'sticky',
              top: '100px',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)',
              aspectRatio: '3/4',
            }}
            className="services-photo"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={active}
                src={services[active].image}
                alt={services[active].name}
                initial={{ opacity: 0, x: 20, scale: 0.97 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -20, scale: 0.97 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </AnimatePresence>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .services-container { padding: 0 20px !important; }
          .services-header { grid-template-columns: 1fr !important; gap: 20px !important; }
          .services-body { grid-template-columns: 1fr !important; }
          .services-photo { display: none !important; }
        }
      `}</style>
    </section>
  );
}
