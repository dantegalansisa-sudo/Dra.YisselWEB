import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionLabel from '../components/SectionLabel';

const ease = [0.16, 1, 0.3, 1] as const;

const serviceOptions = [
  'Odontologia Digital',
  'Diseno de Sonrisa',
  'Ortodoncia',
  'Estetica Dental',
  'Cirugia e Implantes (Dr. Sandy)',
  'Odontologia General (Dra. Yarlyn)',
  'Consulta / Evaluacion',
];

const specialistOptions = [
  'Dra. Yissel de la Rosa',
  'Dra. Yarlyn Rojas',
  'Dr. Sandy Diezma',
  'Sin preferencia',
];

const inputStyle: React.CSSProperties = {
  width: '100%',
  height: '50px',
  padding: '0 16px',
  fontFamily: 'var(--font-body)',
  fontSize: '14px',
  color: 'var(--text-dark)',
  background: 'white',
  border: '1.5px solid var(--border)',
  borderRadius: '10px',
  outline: 'none',
  transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
};

export default function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    service: '',
    specialist: '',
    firstVisit: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = 'var(--blue)';
    e.target.style.boxShadow = '0 0 0 3px rgba(27,110,243,0.1)';
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = 'var(--border)';
    e.target.style.boxShadow = 'none';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hola! Soy ${form.name}. Me interesa: ${form.service || 'Consulta'}. Especialista: ${form.specialist || 'Sin preferencia'}. ${form.firstVisit === 'si' ? 'Es mi primera visita.' : ''} ${form.message}`;
    window.open(
      `https://wa.me/8299680892?text=${encodeURIComponent(msg)}`,
      '_blank'
    );
  };

  return (
    <section
      id="contact"
      style={{
        background: 'var(--bg-white)',
        padding: '120px 0',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 56px' }} className="contact-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          style={{ textAlign: 'center', marginBottom: '56px' }}
        >
          <SectionLabel text="📅 Contacto" center />
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'var(--text-h2)',
              lineHeight: 1.1,
              color: 'var(--text-dark)',
              marginBottom: '12px',
            }}
          >
            Lista Para Tu
            <br />
            Nueva{' '}
            <span style={{ fontStyle: 'italic', color: 'var(--blue)' }}>
              Sonrisa?
            </span>
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--text-muted)' }}>
            Agenda tu cita ahora y luce la sonrisa que mereces!
          </p>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '0.4fr 0.6fr',
            gap: '32px',
            alignItems: 'start',
          }}
          className="contact-grid"
        >
          {/* Info card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            style={{
              background: 'var(--bg-dark)',
              borderRadius: '20px',
              padding: '48px 36px',
              color: 'white',
            }}
          >
            {/* Logo */}
            <div style={{ marginBottom: '20px' }}>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontWeight: 700,
                  fontSize: '18px',
                  color: 'white',
                  marginBottom: '4px',
                }}
              >
                Dra. Yissel V. de la Rosa M.
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '12px',
                  color: 'rgba(255,255,255,0.5)',
                }}
              >
                Consultorio Dental · Odontologia Digital/Moderna
              </div>
            </div>

            <div style={{ width: '40px', height: '2px', background: 'var(--blue)', borderRadius: '1px', marginBottom: '24px' }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
              {[
                { icon: '📱', label: 'WhatsApp:', value: '829-968-0892' },
                { icon: '📍', label: '', value: 'Santo Domingo, Republica Dominicana' },
                { icon: '📷', label: '', value: '@odontodelarosa_rd' },
                { icon: '💎', label: '', value: 'Especialistas en Odontologia Digital/Moderna' },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    fontFamily: 'var(--font-body)',
                    fontSize: '14px',
                    color: 'rgba(255,255,255,0.7)',
                  }}
                >
                  <span style={{ fontSize: '16px', flexShrink: 0 }}>{item.icon}</span>
                  <span>
                    {item.label && <strong style={{ color: 'white' }}>{item.label} </strong>}
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/8299680892?text=Hola%20Consultorio%20Dental%20Dra.%20Yissel!%20Me%20interesa%20agendar%20una%20cita."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '13px 24px',
                background: 'var(--blue)',
                color: 'white',
                borderRadius: '8px',
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '14px',
                transition: 'all 0.3s ease',
                width: '100%',
                justifyContent: 'center',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = 'var(--shadow-blue)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              💬 WhatsApp
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>

            {/* Mini team avatars */}
            <div style={{ marginTop: '28px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ display: 'flex' }}>
                {['YR', 'SD', 'YD'].map((initials, i) => (
                  <div
                    key={i}
                    style={{
                      width: '34px',
                      height: '34px',
                      borderRadius: '50%',
                      background: i === 0 ? 'var(--violet-mid)' : 'var(--blue-dark)',
                      border: '2px solid var(--bg-dark)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'var(--font-body)',
                      fontWeight: 700,
                      fontSize: '10px',
                      color: 'white',
                      marginLeft: i > 0 ? '-8px' : '0',
                      zIndex: 3 - i,
                      position: 'relative',
                    }}
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'rgba(255,255,255,0.45)' }}>
                5 profesionales a tu servicio
              </span>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.7, ease }}
            onSubmit={handleSubmit}
            style={{
              background: 'var(--bg-section)',
              borderRadius: '20px',
              padding: '48px 40px',
              boxShadow: 'var(--shadow-sm)',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            <input
              name="name"
              placeholder="Nombre completo *"
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
              style={inputStyle}
            />
            <input
              name="phone"
              placeholder="Telefono / WhatsApp *"
              value={form.phone}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
              style={inputStyle}
            />
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              onFocus={handleFocus as any}
              onBlur={handleBlur as any}
              style={{ ...inputStyle, color: form.service ? 'var(--text-dark)' : 'var(--text-muted)', cursor: 'pointer' }}
            >
              <option value="">Servicio</option>
              {serviceOptions.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            <select
              name="specialist"
              value={form.specialist}
              onChange={handleChange}
              onFocus={handleFocus as any}
              onBlur={handleBlur as any}
              style={{ ...inputStyle, color: form.specialist ? 'var(--text-dark)' : 'var(--text-muted)', cursor: 'pointer' }}
            >
              <option value="">Especialista preferido</option>
              {specialistOptions.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--text-body)', whiteSpace: 'nowrap' }}>
                Primera visita?
              </span>
              {['Si', 'No'].map((opt) => (
                <label
                  key={opt}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontFamily: 'var(--font-body)',
                    fontSize: '14px',
                    color: 'var(--text-body)',
                    cursor: 'pointer',
                  }}
                >
                  <input
                    type="radio"
                    name="firstVisit"
                    value={opt.toLowerCase()}
                    checked={form.firstVisit === opt.toLowerCase()}
                    onChange={handleChange}
                    style={{ accentColor: 'var(--blue)' }}
                  />
                  {opt}
                </label>
              ))}
            </div>
            <textarea
              name="message"
              placeholder="Mensaje"
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus as any}
              onBlur={handleBlur as any}
              rows={4}
              style={{
                ...inputStyle,
                height: 'auto',
                padding: '14px 16px',
                resize: 'vertical' as const,
              }}
            />
            <button
              type="submit"
              style={{
                height: '52px',
                background: 'var(--blue)',
                color: 'white',
                borderRadius: '10px',
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                fontSize: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                transition: 'all 0.3s ease',
                marginTop: '4px',
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
              ENVIAR SOLICITUD
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </motion.form>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-container { padding: 0 20px !important; }
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
