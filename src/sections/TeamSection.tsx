import { motion } from 'framer-motion';
import SectionLabel from '../components/SectionLabel';
import TeamCard from '../components/TeamCard';

const team = [
  {
    name: 'Dra. Yissel V. de la Rosa M.',
    role: 'DIRECTORA & FUNDADORA',
    specialty: 'Diseno de Sonrisa · Ortodoncia · Estetica',
    image: '/images/team-full.jpeg',
    placeholder: '/images/team-full.jpeg',
    badge: 'DIRECTORA',
    featured: true,
  },
  {
    name: 'Dra. Yarlyn Rojas',
    role: 'ODONTOLOGA GENERAL',
    specialty: 'Odontologia General · Diagnostico · Tratamiento',
    image: '',
    placeholder: '/images/team-full.jpeg',
  },
  {
    name: 'Dr. Sandy Diezma',
    role: 'CIRUJANO/IMPLANTOLOGO',
    specialty: 'Cirugia Oral · Implantologia Dental',
    image: '',
    placeholder: '/images/team-full.jpeg',
  },
  {
    name: 'Soribel Mora',
    role: 'ASISTENTE DENTAL',
    specialty: 'Asistencia · Esterilizacion · Atencion al paciente',
    image: '',
    placeholder: '/images/team-full.jpeg',
  },
  {
    name: 'Manuela De Oleo',
    role: 'SECRETARIA',
    specialty: 'Atencion al cliente · Agendamiento · Administracion',
    image: '',
    placeholder: '/images/team-full.jpeg',
  },
];

export default function TeamSection() {
  return (
    <section
      id="team"
      style={{
        background: 'var(--bg-white)',
        padding: '120px 0',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 56px' }} className="team-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', marginBottom: '56px' }}
        >
          <SectionLabel text="👥 Nuestro Equipo" center />
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'var(--text-h2)',
              lineHeight: 1.1,
              color: 'var(--text-dark)',
              marginBottom: '14px',
            }}
          >
            El Equipo Que
            <br />
            Cuida Tu{' '}
            <span style={{ fontStyle: 'italic', color: 'var(--blue)' }}>
              Sonrisa
            </span>
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '15px',
              color: 'var(--text-muted)',
            }}
          >
            Un equipo de 5 profesionales comprometidos con tu salud bucal
          </p>
        </motion.div>

        {/* CEO Card — full width */}
        <div style={{ marginBottom: '24px' }} className="team-ceo">
          <TeamCard
            name={team[0].name}
            role={team[0].role}
            specialty={team[0].specialty}
            image={team[0].image}
            placeholder={team[0].placeholder}
            badge={team[0].badge}
            featured={team[0].featured}
          />
        </div>

        {/* Team grid 2x2 */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px',
          }}
          className="team-grid"
        >
          {team.slice(1).map((m, i) => (
            <TeamCard
              key={i}
              name={m.name}
              role={m.role}
              specialty={m.specialty}
              image={m.image}
              placeholder={m.placeholder}
            />
          ))}
        </div>
      </div>

      <style>{`
        .team-ceo {
          max-width: 320px;
          margin-left: auto;
          margin-right: auto;
        }
        @media (max-width: 1024px) {
          .team-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .team-container { padding: 0 20px !important; }
          .team-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 14px !important; }
          .team-ceo { max-width: 280px; }
        }
      `}</style>
    </section>
  );
}
