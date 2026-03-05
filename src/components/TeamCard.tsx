import { motion } from 'framer-motion';

interface TeamCardProps {
  name: string;
  role: string;
  specialty: string;
  image: string;
  placeholder: string;
  badge?: string;
  featured?: boolean;
}

export default function TeamCard({
  name,
  role,
  specialty,
  image,
  placeholder,
  badge,
  featured = false,
}: TeamCardProps) {
  const imgSrc = image || placeholder;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      style={{
        background: featured ? 'var(--blue-dark)' : 'var(--bg-section)',
        borderRadius: '20px',
        overflow: 'hidden',
        border: featured ? '1px solid rgba(147,197,253,0.25)' : '1px solid var(--border)',
        boxShadow: 'var(--shadow-sm)',
        transition: 'box-shadow 0.3s ease',
        cursor: 'default',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-md)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-sm)';
      }}
    >
      {/* Photo */}
      <div
        style={{
          position: 'relative',
          aspectRatio: '3/4',
          overflow: 'hidden',
        }}
      >
        <img
          src={imgSrc}
          alt={name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'top',
            transition: 'transform 0.5s ease',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.transform = 'scale(1.04)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
          }}
        />
        {/* Overlay on hover */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: featured
              ? 'rgba(27,110,243,0.1)'
              : 'rgba(27,110,243,0.04)',
            transition: 'background 0.3s ease',
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* Info */}
      <div style={{ padding: '20px 22px 24px' }}>
        {badge && (
          <span
            style={{
              display: 'inline-block',
              fontFamily: 'var(--font-body)',
              fontWeight: 700,
              fontSize: '10px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              background: featured ? 'var(--violet-mid)' : 'var(--blue-pale)',
              color: featured ? 'white' : 'var(--blue)',
              borderRadius: '50px',
              padding: '4px 14px',
              marginBottom: '10px',
            }}
          >
            {badge}
          </span>
        )}
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: '17px',
            color: featured ? 'white' : 'var(--text-dark)',
            marginBottom: '4px',
            lineHeight: 1.3,
          }}
        >
          {name}
        </h3>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 600,
            fontSize: '11px',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: featured ? 'var(--blue-light)' : 'var(--blue)',
            marginBottom: '6px',
          }}
        >
          {role}
        </p>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 400,
            fontSize: '13px',
            color: featured ? 'rgba(255,255,255,0.55)' : 'var(--text-muted)',
            lineHeight: 1.4,
          }}
        >
          {specialty}
        </p>
      </div>
    </motion.div>
  );
}
