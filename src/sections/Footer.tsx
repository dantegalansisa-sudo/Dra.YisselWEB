import { motion } from 'framer-motion';

const services = [
  'Odontologia Digital',
  'Diseno de Sonrisa',
  'Ortodoncia Moderna',
  'Estetica Dental',
  'Cirugia e Implantes',
  'Odontologia General',
];

const team = [
  { name: 'Dra. Yissel de la Rosa', role: 'Directora' },
  { name: 'Dra. Yarlyn Rojas', role: 'Odontologa General' },
  { name: 'Dr. Sandy Diezma', role: 'Cirujano/Implantologo' },
  { name: 'Soribel Mora', role: 'Asistente Dental' },
  { name: 'Manuela De Oleo', role: 'Secretaria' },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--bg-dark)',
        borderTop: '2px solid var(--blue)',
        padding: '64px 0 32px',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 56px',
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
          gap: '40px',
        }}
        className="footer-grid"
      >
        {/* Logo + bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <svg width="22" height="26" viewBox="0 0 28 32" fill="none">
              <path
                d="M14 0C8.5 0 5 2.5 3.5 5C2 7.5 1 10 1.5 14C2 18 3 20 4.5 24C6 28 7 31 9 31C11 31 11.5 27 14 27C16.5 27 17 31 19 31C21 31 22 28 23.5 24C25 20 26 18 26.5 14C27 10 26 7.5 24.5 5C23 2.5 19.5 0 14 0Z"
                fill="var(--violet)"
              />
            </svg>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontWeight: 700,
                fontSize: '15px',
                color: 'white',
              }}
            >
              Dra. Yissel V. De la Rosa M.
            </span>
          </div>
          <div
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '12px',
              color: 'rgba(255,255,255,0.45)',
              marginBottom: '14px',
            }}
          >
            Consultorio Dental · Odontologia Digital/Moderna
          </div>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '13px',
              lineHeight: 1.6,
              color: 'rgba(255,255,255,0.4)',
              maxWidth: '280px',
            }}
          >
            Agenda tu cita y luce la sonrisa que mereces!
          </p>
        </motion.div>

        {/* Servicios */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h4
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              fontSize: '13px',
              color: 'white',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '16px',
            }}
          >
            Servicios
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {services.map((s) => (
              <li key={s}>
                <a
                  href="#services"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '13px',
                    color: 'rgba(255,255,255,0.4)',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--blue-light)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.4)'; }}
                >
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Equipo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h4
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              fontSize: '13px',
              color: 'white',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '16px',
            }}
          >
            Equipo
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {team.map((t) => (
              <li key={t.name}>
                <a
                  href="#team"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '13px',
                    color: 'rgba(255,255,255,0.4)',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--blue-light)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.4)'; }}
                >
                  {t.name}
                  <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '11px', marginLeft: '4px' }}>
                    ({t.role})
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contacto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h4
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              fontSize: '13px',
              color: 'white',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '16px',
            }}
          >
            Contacto
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <a
              href="tel:8299680892"
              style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}
            >
              📱 829-968-0892
            </a>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>
              📍 Santo Domingo, RD
            </span>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>
              📷 @odontodelarosa_rd
            </span>
          </div>
        </motion.div>
      </div>

      {/* Copyright */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '48px auto 0',
          padding: '20px 56px 0',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '12px',
            color: 'rgba(255,255,255,0.25)',
          }}
        >
          &copy; 2025 Consultorio Dental Dra. Yissel de la Rosa · @odontodelarosa_rd
        </p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            padding: 0 20px !important;
            gap: 32px !important;
          }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
