import { motion } from 'framer-motion';

interface SectionLabelProps {
  text: string;
  color?: string;
  center?: boolean;
}

export default function SectionLabel({ text, color = 'var(--blue)', center = false }: SectionLabelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '18px',
        justifyContent: center ? 'center' : 'flex-start',
      }}
    >
      <span
        style={{
          width: '2px',
          height: '20px',
          background: color,
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
          color,
          textTransform: 'uppercase',
        }}
      >
        {text}
      </span>
    </motion.div>
  );
}
