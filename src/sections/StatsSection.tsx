import { motion } from 'framer-motion';
import AnimatedCounter from '../components/AnimatedCounter';

const stats = [
  { value: 5132, suffix: '+', label: 'PACIENTES SATISFECHOS' },
  { value: 5, suffix: '', label: 'ESPECIALISTAS EN EL EQUIPO' },
  { value: 3, suffix: '', label: 'ESPECIALIDADES (DIGITAL, ORTO, ESTETICA)' },
  { value: 100, suffix: '%', label: 'ODONTOLOGIA MODERNA Y DIGITAL' },
];

export default function StatsSection() {
  return (
    <section
      style={{
        background: 'var(--blue)',
        padding: '80px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative blob */}
      <div
        style={{
          position: 'absolute',
          top: '-40%',
          right: '-10%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'var(--blue-dark)',
          opacity: 0.15,
          filter: 'blur(40px)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 56px',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '24px',
          position: 'relative',
          zIndex: 1,
        }}
        className="stats-grid"
      >
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{
              borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.15)' : 'none',
              paddingRight: '24px',
            }}
          >
            <AnimatedCounter value={s.value} suffix={s.suffix} label={s.label} />
          </motion.div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            padding: 0 20px !important;
            gap: 32px !important;
          }
          .stats-grid > div {
            border-right: none !important;
            padding-right: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
