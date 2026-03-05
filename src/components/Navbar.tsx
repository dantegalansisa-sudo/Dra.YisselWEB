import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navLinks = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Nosotros', href: '#about' },
  { label: 'Servicios', href: '#services' },
  { label: 'Testimonios', href: '#testimonials' },
  { label: 'Contacto', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '68px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 56px',
        background: scrolled ? 'rgba(255,255,255,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        zIndex: 100,
        transition: 'background 0.35s ease, border-bottom 0.35s ease, backdrop-filter 0.35s ease',
      }}
    >
      {/* Logo */}
      <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        {/* Tooth SVG */}
        <svg width="28" height="32" viewBox="0 0 28 32" fill="none">
          <path
            d="M14 0C8.5 0 5 2.5 3.5 5C2 7.5 1 10 1.5 14C2 18 3 20 4.5 24C6 28 7 31 9 31C11 31 11.5 27 14 27C16.5 27 17 31 19 31C21 31 22 28 23.5 24C25 20 26 18 26.5 14C27 10 26 7.5 24.5 5C23 2.5 19.5 0 14 0Z"
            fill="var(--violet)"
          />
          <path
            d="M14 4C10 4 7.5 5.8 6.5 7.5C5.5 9.2 5 11 5.3 13.5C5.6 16 6.5 17.5 7.5 20C8.5 22.5 9 24 10 24C11 24 11.5 22 14 22C16.5 22 17 24 18 24C19 24 19.5 22.5 20.5 20C21.5 17.5 22.4 16 22.7 13.5C23 11 22.5 9.2 21.5 7.5C20.5 5.8 18 4 14 4Z"
            fill="var(--violet-mid)"
            opacity="0.5"
          />
        </svg>
        <div>
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '14px',
              color: scrolled ? 'var(--text-dark)' : 'white',
              lineHeight: 1.2,
              transition: 'color 0.35s ease',
            }}
          >
            Dra. Yissel V. De la Rosa M.
          </div>
          <div
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 400,
              fontSize: '10.5px',
              color: scrolled ? 'var(--text-muted)' : 'rgba(255,255,255,0.6)',
              transition: 'color 0.35s ease',
            }}
          >
            Consultorio Dental &middot; Odontologia Digital
          </div>
        </div>
      </a>

      {/* Desktop links */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '32px',
        }}
        className="nav-links-desktop"
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 500,
              fontSize: '13px',
              color: scrolled ? 'var(--text-body)' : 'rgba(255,255,255,0.8)',
              transition: 'color 0.25s ease',
              letterSpacing: '0.01em',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = 'var(--blue)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = scrolled
                ? 'var(--text-body)'
                : 'rgba(255,255,255,0.8)';
            }}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* CTA Button */}
      <a
        href="#contact"
        className="nav-cta-desktop"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          padding: '10px 20px',
          background: 'var(--blue-dark)',
          color: 'white',
          borderRadius: '6px',
          fontFamily: 'var(--font-body)',
          fontWeight: 600,
          fontSize: '13px',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          const t = e.currentTarget;
          t.style.background = 'var(--blue)';
          t.style.boxShadow = 'var(--shadow-blue)';
        }}
        onMouseLeave={(e) => {
          const t = e.currentTarget;
          t.style.background = 'var(--blue-dark)';
          t.style.boxShadow = 'none';
        }}
      >
        Contacto
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </a>

      {/* Mobile hamburger */}
      <button
        className="nav-hamburger"
        onClick={() => setMobileOpen(!mobileOpen)}
        style={{
          display: 'none',
          background: 'none',
          padding: '8px',
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={scrolled ? 'var(--text-dark)' : 'white'} strokeWidth="2" strokeLinecap="round">
          {mobileOpen ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </>
          ) : (
            <>
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </>
          )}
        </svg>
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="nav-mobile-menu"
          style={{
            position: 'absolute',
            top: '68px',
            left: 0,
            right: 0,
            background: 'rgba(255,255,255,0.98)',
            backdropFilter: 'blur(20px)',
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            borderBottom: '1px solid var(--border)',
            boxShadow: 'var(--shadow-md)',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 500,
                fontSize: '15px',
                color: 'var(--text-dark)',
                padding: '4px 0',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              padding: '12px 20px',
              background: 'var(--blue-dark)',
              color: 'white',
              borderRadius: '6px',
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              fontSize: '14px',
              marginTop: '4px',
            }}
          >
            Contacto
          </a>
        </motion.div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
          .nav-cta-desktop { display: none !important; }
          .nav-hamburger { display: block !important; }
          nav { padding: 0 20px !important; }
        }
      `}</style>
    </motion.nav>
  );
}
