import { motion } from 'framer-motion';

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/8299680892?text=Hola%20Consultorio%20Dental%20Dra.%20Yissel!%20Me%20interesa%20agendar%20una%20cita.%20%C2%BFMe%20pueden%20ayudar?"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2.5, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{
        position: 'fixed',
        bottom: '28px',
        right: '28px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '14px 22px',
        background: 'var(--blue)',
        color: 'white',
        borderRadius: '50px',
        fontFamily: 'var(--font-body)',
        fontWeight: 600,
        fontSize: '14px',
        boxShadow: 'var(--shadow-blue)',
        zIndex: 90,
        textDecoration: 'none',
      }}
    >
      {/* Ping animation */}
      <span
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50px',
          border: '2px solid var(--blue)',
          animation: 'wa-ping 2s ease-out infinite',
          pointerEvents: 'none',
        }}
      />
      💬 Agendar Cita

      <style>{`
        @keyframes wa-ping {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.25); opacity: 0; }
        }
        @media (max-width: 768px) {
          a[href*="wa.me"] {
            padding: 12px 18px !important;
            font-size: 13px !important;
            bottom: 20px !important;
            right: 20px !important;
          }
        }
      `}</style>
    </motion.a>
  );
}
