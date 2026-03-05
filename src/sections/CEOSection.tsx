import { motion } from 'framer-motion';
import SectionLabel from '../components/SectionLabel';

const ease = [0.16, 1, 0.3, 1];
const placeholder = '/images/ceo-reception.jpeg';

const checks = [
  'Especialista en Odontologia Digital/Moderna',
  'Diseno de Sonrisa · Ortodoncia · Estetica',
  'Directora de equipo de 5 especialistas',
];

export default function CEOSection() {
  return (
    <section
      id="ceo"
      style={{
        background: 'var(--bg-dark)',
        padding: '120px 0',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Decorative blob */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          left: '15%',
          width: '320px',
          height: '320px',
          borderRadius: '40% 60% 55% 45% / 55% 40% 60% 45%',
          background: 'var(--blue)',
          opacity: 0.08,
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 56px',
          display: 'grid',
          gridTemplateColumns: '0.45fr 0.55fr',
          gap: '64px',
          alignItems: 'center',
        }}
        className="ceo-grid"
      >
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, ease }}
          style={{ position: 'relative' }}
        >
          <img
            src={placeholder}
            alt="Dra. Yissel V. de la Rosa M."
            style={{
              width: '100%',
              aspectRatio: '4/5',
              objectFit: 'cover',
              objectPosition: 'top',
              borderRadius: '20px',
              boxShadow: '0 30px 80px rgba(0,0,0,0.4)',
              position: 'relative',
              zIndex: 1,
            }}
          />
          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.7, ease }}
            style={{
              position: 'absolute',
              bottom: '24px',
              left: '-16px',
              background: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '14px',
              padding: '16px 20px',
              zIndex: 2,
              maxWidth: '260px',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '13px',
                color: 'white',
                marginBottom: '2px',
              }}
            >
              💎 Dra. Yissel V. de la Rosa M.
            </div>
            <div
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '11px',
                color: 'var(--blue-light)',
                marginBottom: '4px',
              }}
            >
              Directora · Odontologia Digital/Moderna
            </div>
            <div
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '11px',
                color: 'rgba(255,255,255,0.5)',
              }}
            >
              5,132 pacientes confian en nosotros
            </div>
          </motion.div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ delay: 0.2, duration: 0.8, ease }}
        >
          <SectionLabel text="👩‍⚕️ Directora & Fundadora" color="var(--blue-light)" />
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontStyle: 'italic',
              fontSize: 'var(--text-h2)',
              lineHeight: 1.1,
              color: 'white',
              marginBottom: '24px',
            }}
          >
            Dra. Yissel
            <br />
            de la Rosa,
            <br />
            <span style={{ color: 'var(--blue-light)' }}>Pionera</span> de la
            <br />
            Odontologia Digital.
          </h2>

          {/* Blue line */}
          <div
            style={{
              width: '60px',
              height: '3px',
              background: 'var(--blue)',
              borderRadius: '2px',
              marginBottom: '24px',
            }}
          />

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '15px',
              lineHeight: 1.75,
              color: 'rgba(255,255,255,0.7)',
              marginBottom: '16px',
            }}
          >
            La Dra. Yissel V. de la Rosa M. fundo este consultorio con una vision
            clara: llevar la Odontologia Digital y Moderna a sus pacientes.
            Especialista en Diseno de Sonrisa, Ortodoncia y Estetica Dental,
            combina tecnologia de vanguardia con un trato humano y cercano.
          </p>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '15px',
              lineHeight: 1.75,
              color: 'rgba(255,255,255,0.7)',
              marginBottom: '28px',
            }}
          >
            Al frente de un equipo de 5 profesionales especializados, la Dra. de
            la Rosa ha transformado miles de sonrisas en Santo Domingo con los mas
            altos estandares de calidad.
          </p>

          {/* Checkmarks */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '32px' }}>
            {checks.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.5, ease }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  color: 'rgba(255,255,255,0.8)',
                }}
              >
                <span style={{ color: 'var(--blue-mid)', fontWeight: 700, fontSize: '16px' }}>✓</span>
                {c}
              </motion.div>
            ))}
          </div>

          <a
            href="#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 28px',
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
            AGENDAR CON LA DRA.
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .ceo-grid {
            grid-template-columns: 1fr !important;
            padding: 0 20px !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
