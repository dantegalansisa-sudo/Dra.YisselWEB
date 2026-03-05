# 🦷 CONSULTORIO DENTAL DRA. YISSEL DE LA ROSA — CLAUDE.md DEFINITIVO
## Web Premium Clínica #7 — Odontología Digital/Moderna · Referencia UntuCare

---

## ⚠️ INSTRUCCIÓN #1 — LIMPIAR ANTES DE CONSTRUIR

```
ANTES DE ESCRIBIR CUALQUIER CÓDIGO:
1. Elimina todo en /src/components/
2. Elimina todo en /src/sections/
3. Ejecuta: npm install framer-motion
4. Lee este CLAUDE.md completo
5. Construye desde cero limpio
```

---

## 🎯 VISIÓN DE DISEÑO

**Estética:** Digital Modern Dental — azul eléctrico + blanco puro + detalles diamante.
El logo tiene un diente violeta/lila elegante con la firma cursiva de la Dra.
"Odontología Digital/Moderna" es el diferenciador — tecnología de vanguardia.
**Referencia UntuCare:** Hero FULL SCREEN foto dental con overlay azul oscuro,
texto blanco grande en el lado izquierdo, badge "10K+" flotante, botón pill.
About section con texto centrado + 4 fotos flotando inclinadas a los lados
(2 izquierda, 2 derecha), services con numeración 01/02/ estilo editorial.
**Equipo real:** La Dra. tiene UN EQUIPO COMPLETO con roles definidos — esto
se muestra como diferenciador de profesionalismo.
**Sensación:** "Esta es la clínica dental más moderna y tecnológica de mi área.
El equipo completo me inspira confianza total."

---

## 🎨 SISTEMA DE DISEÑO — DIGITAL MODERN DENTAL

### Colores
```css
:root {
  /* Fondos */
  --bg-base:    #F5F7FC;         /* Azul grisáceo muy claro */
  --bg-white:   #FFFFFF;
  --bg-section: #EEF2FB;         /* Azul lavanda suave */
  --bg-dark:    #0B1A3B;         /* Azul marino oscuro — hero y secciones especiales */

  /* Azul digital — color principal */
  --blue:       #1B6EF3;         /* Azul eléctrico UntuCare */
  --blue-mid:   #3B82F6;         /* Azul medio */
  --blue-light: #93C5FD;         /* Azul claro */
  --blue-pale:  #DBEAFE;         /* Azul palidísimo */
  --blue-dark:  #1E3A8A;         /* Azul muy oscuro */

  /* Violeta/Lila — del logo de la Dra. */
  --violet:     #7C3AED;         /* Violeta del logo */
  --violet-mid: #A78BFA;         /* Violeta medio */
  --violet-pale: #EDE9FE;        /* Violeta muy claro */

  /* Diamante — acento premium */
  --diamond:    #BAE6FD;         /* Celeste diamante */

  /* Textos */
  --text-dark:  #0B1A3B;
  --text-body:  #1E3A6E;
  --text-muted: #6B8CC4;

  /* Bordes y sombras */
  --border:     #E0E8F8;
  --shadow-sm:  0 2px 14px rgba(27,110,243,0.08);
  --shadow-md:  0 6px 36px rgba(27,110,243,0.12);
  --shadow-lg:  0 20px 60px rgba(27,110,243,0.16);
  --shadow-blue: 0 8px 28px rgba(59,130,246,0.35);
}
```

### Tipografía
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Fraunces:ital,wght@0,400;0,700;0,900;1,400;1,700&display=swap" rel="stylesheet">
```

```css
/* Títulos: Fraunces — serif con personalidad, elegante y moderno */
--font-display: 'Fraunces', serif;

/* Body/UI: Inter — ultra legible y tecnológico */
--font-body: 'Inter', sans-serif;

/* Escala */
--text-hero:  clamp(40px, 5.5vw, 76px);
--text-h2:    clamp(30px, 3.5vw, 52px);
--text-h3:    clamp(18px, 2vw, 24px);
--text-body:  16px;
```

### Espaciado
```css
section    { padding: 120px 0; }
.container { max-width: 1200px; margin: 0 auto; padding: 0 56px; }
/* Mobile: 80px 0 | container: 0 20px */
```

---

## 🏗️ STACK

```bash
npm install framer-motion
```

---

## 📁 ESTRUCTURA

```
src/
├── components/
│   ├── Navbar.tsx
│   ├── AnimatedCounter.tsx
│   ├── SectionLabel.tsx
│   ├── TeamCard.tsx           ← Card de miembro del equipo
│   └── WhatsAppButton.tsx
├── sections/
│   ├── HeroSection.tsx        ← ⭐ UntuCare — full screen foto + overlay
│   ├── AboutSection.tsx       ← ⭐ Fotos flotantes inclinadas (UntuCare)
│   ├── ServicesSection.tsx    ← Numeración 01/02/ estilo editorial
│   ├── CEOSection.tsx         ← Dra. Yissel — fundadora
│   ├── TeamSection.tsx        ← Equipo completo con roles reales
│   ├── StatsSection.tsx
│   ├── TestimonialsSection.tsx
│   └── ContactSection.tsx
├── App.tsx
└── index.css
```

---

## 📄 SECCIONES — ESPECIFICACIONES EXACTAS

---

### 1. NAVBAR — Clean y tecnológico

```tsx
// sticky, bg blanco blur, altura: 68px
// Muy limpio — solo lo esencial como UntuCare

// Izquierda:
// Logo: diente violeta SVG + firma cursiva "Dra. Yissel V. De la Rosa M."
// Debajo: "Consultorio Dental · Odontología Digital"
// Fraunces 700 text-dark | Inter 400 11px text-muted

// Centro: Inter 500 14px
//   HOME · ABOUT US · SERVICE · TESTIMONIAL · Contact Us
//   (en inglés/español mezclado como UntuCare — moderno)
//   hover: color var(--blue)

// Derecha:
// [Btn azul: Contact Us →] con flechita
// bg: var(--blue-dark), color: white, border-radius: 6px
// hover: bg var(--blue), shadow-blue

background: rgba(255,255,255,0.95);
backdrop-filter: blur(20px);
border-bottom: 1px solid var(--border);
```

---

### 2. HERO SECTION ⭐ — UntuCare Full Screen

**Concepto EXACTO de UntuCare:**
Foto dental FULL SCREEN con overlay azul oscuro semitransparente.
La foto ocupa el 100% del viewport. Texto blanco en la parte inferior izquierda.
Badge "5K+" flotante a la derecha. Botón pill blanco + link de teléfono.

**Imagen de fondo:**
```tsx
// Foto dental close-up — paciente siendo atendida (como UntuCare exacto)
// La más impactante: boca abierta con instrumentos, luz dental, manos con guantes
// Unsplash: https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1920&q=90
// object-fit: cover, object-position: center
// width: 100vw, height: 100vh

// OVERLAY (UntuCare exacto):
// background: linear-gradient(
//   180deg,
//   rgba(11,26,59,0.3) 0%,      // Muy transparente arriba
//   rgba(11,26,59,0.5) 50%,
//   rgba(11,26,59,0.75) 100%    // Más oscuro abajo donde está el texto
// )
// También overlay izquierdo para el texto:
// linear-gradient(90deg, rgba(11,26,59,0.7) 0%, transparent 60%)
```

**Contenido (sobre el overlay, texto blanco):**
```tsx
// Posición: bottom-left, padding: 80px

// Label (UntuCare exacto):
// "BEST DENTAL CARE" — Inter 600 12px, letter-spacing 0.15em
// color: var(--blue-light), uppercase
// Línea pequeña azul a la izquierda (2px × 24px)

// Título (stagger 0.2s, slideUp 30px):
<h1 style={{
  fontFamily: 'Fraunces',
  fontWeight: 900,
  fontSize: 'clamp(40px, 5.5vw, 76px)',
  lineHeight: 1.0,
  color: 'white'
}}>
  Experience Comfortable
  <br/>
  Dental Care For A
  <br/>
  <span style={{ color: 'var(--blue-light)', fontStyle: 'italic' }}>
    Brighter Smile
  </span>
</h1>

// Botón + teléfono (delay 0.6s — UntuCare exacto):
// Btn pill blanco: "Book Appointment →"
// bg: white, color: var(--blue-dark), border-radius: 50px
// Inter 600 14px, padding: 14px 28px
// hover: bg var(--blue), color white, shadow-blue

// "Or Call: 829-968-0892"
// Inter 400 14px, color rgba(255,255,255,0.7)
// Inline con el botón, separados por gap: 20px

// BADGE "5K+" (UntuCare exacto):
// Posición: center-right del hero
// bg: rgba(255,255,255,0.1), backdrop-filter: blur(8px)
// border: 1px solid rgba(255,255,255,0.3)
// border-radius: 16px, padding: 20px 28px

// Contenido badge:
// "5K+" Fraunces 900 48px, color white
// "+" pequeño
// Texto debajo: Inter 400 13px, color rgba(255,255,255,0.7)
// "Our clinic ensures a relaxed and efficient dental journey..."
// width: 200px, text izquierdo

// Scroll indicator: flecha hacia abajo, blanco, centered bottom
// animation: bounce suave

// Entrada general: fadeIn del overlay + slideUp del texto
```

---

### 3. ABOUT SECTION ⭐ — UntuCare Fotos Flotantes

**Concepto UntuCare EXACTO:**
Fondo blanco. Texto centrado en el medio. 4 fotos flotando
a los lados (2 izquierda, 2 derecha) con ligera rotación y border-radius diferente.

```tsx
// Fondo: var(--bg-white)
// padding: 120px 0

// Layout: 3 columnas
// Columna izquierda (25%): 2 fotos superpuestas con rotación
// Columna centro (50%): Texto
// Columna derecha (25%): 2 fotos superpuestas con rotación

// FOTOS IZQUIERDA (UntuCare):
// Foto 1 (arriba): rotate(-8deg), border-radius: 16px 4px 16px 4px
// width: 180px, shadow-md
// Foto 2 (abajo): rotate(5deg), border-radius: 4px 16px 4px 16px
// width: 160px, shadow-md
// Las dos superpuestas (overlap vertical ~30%)
// Entrada: slideLeft -40px + rotate, delay 0.3s

// FOTOS DERECHA (UntuCare):
// Foto 3 (arriba): rotate(7deg), border-radius: 16px 4px 16px 4px
// Foto 4 (abajo): rotate(-5deg), border-radius: 4px 16px 4px 16px
// Entrada: slideRight +40px + rotate, delay 0.3s

// Fotos dentales Unsplash (diferentes ángulos):
// https://images.unsplash.com/photo-1588776814546-1ffbb2a8e90a?w=400
// https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400
// https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400
// https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400

// TEXTO CENTRO (UntuCare):
// [SectionLabel: "About Us" — Inter 600 12px, color var(--blue), uppercase]

// <h2 Fraunces 700 text-center>
//   Atención Compasiva,
//   <br/>
//   Expertise de Confianza.
// </h2>

// Párrafo centrado (max-width: 480px, margin: auto):
"En el Consultorio Dental de la Dra. Yissel de la Rosa,
nos dedicamos a transformar las visitas dentales en
experiencias positivas. Con enfoque en tu comodidad,
tecnología de última generación y cuidado individualizado."

// 2 botones centrados:
// Btn 1: bg var(--blue), color white, border-radius: 8px
// "Book Appointment →"
// Btn 2: outline azul, bg transparent
// "About Us"
// gap: 12px entre botones
```

---

### 4. SERVICES SECTION — Estilo Editorial 01/02/

```tsx
// Fondo: var(--bg-base)
// padding: 120px 0

// Header: 2 columnas (como UntuCare exacto)
// Izquierda: <h2>Where Every Treatment<br/>Begins With Trust</h2>
// Derecha: [SectionLabel] + párrafo + [Btn: "View All Service →"]
// "Ofrecemos una gama completa de servicios para cada necesidad —
// desde tratamientos preventivos hasta mejoras estéticas."

// GRID DE SERVICIOS — Estilo 01/02/ UntuCare:
// Columna izquierda: Lista numerada vertical
// Columna derecha: Una foto grande rotativa

// Lista izquierda (como UntuCare):
const services = [
  {
    num: "01/",
    name: "Odontología Digital",
    desc: "Diagnóstico digital avanzado, radiografías y planificación computarizada de tratamientos.",
    highlight: true
  },
  {
    num: "02/",
    name: "Diseño de Sonrisa",
    desc: "Transformación completa de tu sonrisa con planificación digital personalizada.",
    highlight: false
  },
  {
    num: "03/",
    name: "Ortodoncia Moderna",
    desc: "Brackets metálicos, cerámicos y alineadores invisibles con tecnología actual.",
    highlight: false
  },
  {
    num: "04/",
    name: "Estética Dental",
    desc: "Carillas, blanqueamiento y restauraciones estéticas de alta precisión.",
    highlight: false
  },
  {
    num: "05/",
    name: "Cirugía e Implantes",
    desc: "Dr. Sandy Diezma realiza cirugías orales e implantología de vanguardia.",
    highlight: false
  },
  {
    num: "06/",
    name: "Odontología General",
    desc: "Dra. Yarlyn Rojas — evaluaciones, profilaxis, restauraciones y tratamientos generales.",
    highlight: false
  }
];

// Estilo fila servicio (UntuCare):
// Inter 600 12px "01/" — color var(--blue), letter-spacing 0.1em
// Fraunces 700 20px nombre — text-dark
// Inter 400 14px descripción — text-muted
// border-bottom: 1px solid var(--border)
// padding: 24px 0
// hover: bg var(--blue-pale), padding-left: 8px (slide suave)
// Primera fila active: bg var(--blue-pale), padding-left: 8px

// FOTO DERECHA (cambia según servicio activo):
// Foto grande: aspect-ratio 3/4, border-radius: 20px, shadow-lg
// AnimatePresence para cambio suave entre fotos
// Al hover de cada servicio → cambia la foto con fade
```

---

### 5. CEO SECTION — Dra. Yissel de la Rosa

```tsx
// Fondo: var(--bg-dark) — azul marino oscuro
// padding: 120px 0
// Color scheme invertido — texto blanco/claro sobre azul oscuro

// Layout: Foto izquierda (45%) + Contenido derecha (55%)

// FOTO IZQUIERDA:
// /public/images/dra-yissel.jpg
// Si no existe: placeholder de dentista femenina
// border-radius: 20px, aspect-ratio: 4/5
// object-fit: cover, object-position: top
// shadow: 0 30px 80px rgba(0,0,0,0.4)

// Elemento decorativo: blob azul 300px, opacity 0.15, detrás de la foto
// border-radius orgánico animado

// Badge flotante (sobre la foto):
// bg: rgba(255,255,255,0.1), backdrop-filter blur(10px)
// border: 1px solid rgba(255,255,255,0.2)
// border-radius: 14px, padding: 16px 20px
// "💎 Dra. Yissel V. de la Rosa M."
// "Directora · Odontología Digital/Moderna"
// "5,132 pacientes confían en nosotros"

// CONTENIDO DERECHA:
// [SectionLabel: "👩‍⚕️ DIRECTORA & FUNDADORA" — azul claro]

// <h2 Fraunces 700 Italic color:white>
//   Dra. Yissel
//   <br/>
//   de la Rosa,
//   <br/>
//   <em style={{color:'var(--blue-light)'}}>Pionera</em> de la
//   <br/>
//   Odontología Digital.
// </h2>

// [Línea azul 60px]

// Párrafo blanco:
"La Dra. Yissel V. de la Rosa M. fundó este consultorio con
una visión clara: llevar la Odontología Digital y Moderna
a sus pacientes. Especialista en Diseño de Sonrisa,
Ortodoncia y Estética Dental, combina tecnología de
vanguardia con un trato humano y cercano."

// Párrafo 2:
"Al frente de un equipo de 5 profesionales especializados,
la Dra. de la Rosa ha transformado miles de sonrisas en
Santo Domingo con los más altos estándares de calidad."

// 3 checkmarks azul:
// ✓ Especialista en Odontología Digital/Moderna
// ✓ Diseño de Sonrisa · Ortodoncia · Estética
// ✓ Directora de equipo de 5 especialistas

// [Btn azul: AGENDAR CON LA DRA. →]
// bg: var(--blue), color: white, hover: shadow-blue
```

---

### 6. TEAM SECTION ⭐ — El Equipo Completo Real

```tsx
// Fondo: var(--bg-white)
// padding: 120px 0

// Header centrado:
// [SectionLabel: "👥 NUESTRO EQUIPO"]
// <h2 Fraunces>El Equipo Que<br/>Cuida Tu Sonrisa</h2>
// "Un equipo de 5 profesionales comprometidos con tu salud bucal"

// CEO CARD GRANDE (primera, full-width o 2-col):
// Dra. Yissel — más grande, badge "DIRECTORA"
// bg: var(--blue-dark), color: white (invertida)

// Grid 2x2 para el resto del equipo:

const team = [
  {
    name: "Dra. Yissel V. de la Rosa M.",
    role: "DIRECTORA & FUNDADORA",
    specialty: "Diseño de Sonrisa · Ortodoncia · Estética",
    image: "/public/images/dra-yissel.jpg",
    badge: "DIRECTORA",
    featured: true
  },
  {
    name: "Dra. Yarlyn Rojas",
    role: "ODONTÓLOGA GENERAL",
    specialty: "Odontología General · Diagnóstico · Tratamiento",
    image: "/public/images/dra-yarlyn.jpg",
    // placeholder: mujer bata azul (como en el video de instagram)
    placeholder: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=500"
  },
  {
    name: "Dr. Sandy Diezma",
    role: "CIRUJANO/IMPLANTÓLOGO",
    specialty: "Cirugía Oral · Implantología Dental",
    image: "/public/images/dr-sandy.jpg",
    // placeholder: médico con bata morada (como en el video)
    placeholder: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500"
  },
  {
    name: "Soribel Mora",
    role: "ASISTENTE DENTAL",
    specialty: "Asistencia · Esterilización · Atención al paciente",
    image: "/public/images/soribel.jpg",
    // placeholder: mujer bata verde (como en el video)
    placeholder: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500"
  },
  {
    name: "Manuela De Óleo",
    role: "SECRETARIA",
    specialty: "Atención al cliente · Agendamiento · Administración",
    image: "/public/images/manuela.jpg",
    placeholder: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?w=500"
  }
];

// Estilo card equipo:
// bg: var(--bg-section), border-radius: 20px, overflow: hidden
// border: 1px solid var(--border)
// shadow-sm → shadow-md hover, translateY(-6px) hover

// Foto: aspect-ratio: 3/4, object-fit: cover, object-position: top
// Overlay azul suave en hover (bg: rgba(27,110,243,0.08))

// Badge ROL: Inter 700 11px uppercase, bg var(--blue-pale), color var(--blue)
// border-radius: 50px, padding: 4px 14px

// Card DIRECTORA (Dra. Yissel):
// bg: var(--blue-dark), color white — invertida
// Badge "DIRECTORA" en var(--violet-mid) (lila del logo)
// Foto con borde sutil var(--blue-light)

// ⚠️ NOTA PARA CLAUDE CODE:
// Cada miembro del equipo tendrá su foto real nombrada
// Usar placeholders hasta que el cliente las provea
// Los videos de Instagram muestran a cada uno con su rol
```

---

### 7. STATS SECTION

```tsx
// Fondo: var(--blue) — azul eléctrico
// padding: 80px 0

const stats = [
  { value: 5132, suffix: "+", label: "PACIENTES SATISFECHOS" },
  { value: 5,    suffix: "",  label: "ESPECIALISTAS EN EL EQUIPO" },
  { value: 3,    suffix: "",  label: "ESPECIALIDADES (DIGITAL, ORTO, ESTÉTICA)" },
  { value: 100,  suffix: "%", label: "ODONTOLOGÍA MODERNA Y DIGITAL" }
];

// Número: Fraunces 900 Italic 72px, color white
// Label: Inter 600 11px uppercase, rgba(255,255,255,0.6)
// Separadores: 1px solid rgba(255,255,255,0.15)
// AnimatedCounter IntersectionObserver
// Blob azul oscuro opacity:0.15 detrás como decoración
```

---

### 8. TESTIMONIALS

```tsx
// Fondo: var(--bg-base)
// padding: 120px 0

// Header centrado:
// [SectionLabel: "⭐ TESTIMONIALS"]
// <h2 Fraunces>Lo Que Dicen<br/>Nuestros Pacientes</h2>

// Layout: Grid 3 cards (como UntuCare)
const testimonials = [
  {
    initials: "MP",
    name: "María P.",
    treatment: "Diseño de Sonrisa",
    stars: 5,
    text: "La Dra. Yissel transformó completamente mi sonrisa. El proceso digital fue increíble — vi el resultado antes de comenzar el tratamiento. Quedé absolutamente feliz."
  },
  {
    initials: "JR",
    name: "José R.",
    treatment: "Implantes — Dr. Sandy",
    stars: 5,
    text: "El Dr. Sandy Diezma es un implantólogo extraordinario. El procedimiento fue sin dolor y el implante quedó perfecto. Todo el equipo de la Dra. de la Rosa es excelente."
  },
  {
    initials: "AL",
    name: "Ana L.",
    treatment: "Ortodoncia",
    stars: 5,
    text: "Elegí este consultorio por la Odontología Digital y fue la mejor decisión. La tecnología que tienen es increíble y el trato de la Dra. Yarlyn Rojas fue muy profesional."
  }
];

// Card estilo (UntuCare):
// bg: white, border-radius: 16px, padding: 32px
// border: 1px solid var(--border), shadow-sm
// border-top: 3px solid var(--blue)
// Avatar: círculo bg var(--blue-dark), iniciales blancas Inter 700
// Estrellas: ★ var(--blue-mid)
// Comilla: Fraunces 800 60px, color var(--blue-pale)
// hover: translateY(-5px), shadow-md
```

---

### 9. CONTACT SECTION

```tsx
// Fondo: var(--bg-white)
// padding: 120px 0

// Header centrado:
// [SectionLabel: "📅 CONTACT US"]
// <h2 Fraunces>¿Lista Para Tu<br/>Nueva Sonrisa?</h2>
// "¡Agenda tu cita ahora y luce la sonrisa que mereces!"

// Layout: Info (40%) + Formulario (60%)

// CARD IZQUIERDA — Info:
// bg: var(--bg-dark), color: white, border-radius: 20px, padding: 48px

// Logo + nombre cursiva Fraunces white
// "Dra. Yissel V. de la Rosa M." en tipografía cursiva Fraunces Italic

// [Línea azul]
// 📱 WhatsApp: 829-968-0892
// 📍 Santo Domingo, República Dominicana
// 📷 @odontodelarosa_rd
// 💎 "Especialistas en Odontología Digital/Moderna"

// [Btn azul: 💬 WhatsApp →]
// href: https://wa.me/8299680892

// Mini grid del equipo (3 fotos circulares solapadas):
// Dra. Yissel · Dra. Yarlyn · Dr. Sandy
// "5 profesionales a tu servicio"

// FORMULARIO DERECHA:
// bg: var(--bg-section), border-radius: 20px, padding: 48px, shadow-sm

// [Nombre completo]*
// [Teléfono / WhatsApp]*
// [Servicio: Select]
//   → Odontología Digital
//   → Diseño de Sonrisa
//   → Ortodoncia
//   → Estética Dental
//   → Cirugía e Implantes (Dr. Sandy)
//   → Odontología General (Dra. Yarlyn)
//   → Consulta / Evaluación
// [Especialista preferido: Select]
//   → Dra. Yissel de la Rosa
//   → Dra. Yarlyn Rojas
//   → Dr. Sandy Diezma
//   → Sin preferencia
// [Primera visita? Sí/No]
// [Mensaje]
// [Btn: ENVIAR SOLICITUD →]
// bg: var(--blue), color: white, Fraunces 600 16px

// Inputs: Inter 400, bg white, border: 1.5px solid var(--border)
// border-radius: 10px, height: 50px
// focus: border-color var(--blue), shadow blue suave
```

---

### 10. FOOTER

```tsx
// Fondo: var(--bg-dark) — azul marino
// Línea azul eléctrico 2px superior
// padding: 64px 0 32px

// 4 columnas:
// Logo + bio | Servicios | Equipo | Contacto

// Logo: diente SVG violeta + nombre cursiva Fraunces Italic white
// "Consultorio Dental · Odontología Digital/Moderna"
// "¡Agenda tu cita y luce la sonrisa que mereces!"

// Columna Equipo (única en el portafolio — diferenciador):
// Dra. Yissel de la Rosa (Directora)
// Dra. Yarlyn Rojas (Odontóloga General)
// Dr. Sandy Diezma (Cirujano/Implantólogo)
// Soribel Mora (Asistente Dental)
// Manuela De Óleo (Secretaria)

// Copyright:
// "© 2025 Consultorio Dental Dra. Yissel de la Rosa · @odontodelarosa_rd"
// Inter 400 12px rgba(255,255,255,0.3), centrado
```

---

## 🎭 ANIMACIONES — Framer Motion

### 1. Hero — Entrada sobre overlay oscuro
```tsx
// La foto aparece con: scale(1.05)→scale(1), duration 2s — Ken Burns efecto
// Overlay fadeIn desde opacity:0, delay 0.3s, duration 1s
// Label: delay 0.8s, fadeIn + letterSpacing 0.3em→0.15em
// H1 L1-3: delay 1.0s/1.15s/1.3s, slideUp 30px
// Botón: delay 1.5s, slideUp + fadeIn
// Badge "5K+": delay 1.2s, scale 0.8→1 + fadeIn
```

### 2. About — Fotos flotantes inclinadas (UntuCare)
```tsx
// Foto 1 (izq arriba): initial: {x: -80, rotate: -12, opacity: 0}
//   animate: {x: 0, rotate: -8, opacity: 1}, delay 0.4s
// Foto 2 (izq abajo): initial: {x: -60, rotate: 8, opacity: 0}
//   animate: {x: 0, rotate: 5, opacity: 1}, delay 0.6s
// Foto 3 (der arriba): initial: {x: 80, rotate: 10, opacity: 0}
//   animate: {x: 0, rotate: 7, opacity: 1}, delay 0.4s
// Foto 4 (der abajo): initial: {x: 60, rotate: -7, opacity: 0}
//   animate: {x: 0, rotate: -5, opacity: 1}, delay 0.6s
// Texto centro: initial: {y: 30, opacity: 0}, delay 0.2s

// Hover en cada foto: scale(1.04), rotate ligeramente
```

### 3. Services — Foto reactiva
```tsx
// AnimatePresence para el cambio de foto lateral
// initial: {opacity:0, x: 20, scale: 0.97}
// animate: {opacity:1, x: 0, scale: 1}
// exit: {opacity:0, x: -20, scale: 0.97}
// transition: duration 0.4s, ease "easeInOut"
```

### 4. Hero Ken Burns
```css
@keyframes ken-burns {
  0% { transform: scale(1.05); }
  100% { transform: scale(1); }
}
/* duration: 8s ease-out forwards */
```

### 5. Secciones generales
```tsx
// useInView → opacity:0,y:40 → opacity:1,y:0
// duration: 0.8s, ease [0.16,1,0.3,1]
// staggerChildren: 0.08s
```

---

## 🔘 WHATSAPP FLOTANTE

```tsx
// bg: var(--blue), color: white, border-radius: 50px
// "💬 Agendar Cita"
// shadow-blue, ping azul detrás

const msg = "Hola Consultorio Dental Dra. Yissel! Me interesa agendar una cita. ¿Me pueden ayudar?";
const wa = "https://wa.me/8299680892";
```

---

## 📱 RESPONSIVE

```
Mobile (375px):
- Hero: foto full screen, overlay más oscuro, badge "5K+" visible
- About: 1 columna, fotos en grid 2x2 sin rotación (simplificado)
- Services: lista completa, foto oculta
- Team: 2 columnas (CEO first, full width)
- Contact: apiladas

Tablet (768px):
- About: foto izquierda 1 foto, texto, foto derecha 1 foto
- Team: 3 columnas
- Services: lista + foto (col 50/50)

Desktop: layout completo | max-width: 1200px
```

---

## 🎯 REGLAS ABSOLUTAS

```
1. HERO: Foto dental FULL SCREEN + overlay oscuro — UntuCare exacto, sin compromisos
2. KEN BURNS: La foto del hero hace scale 1.05→1 al cargar — efecto cinematográfico
3. ABOUT FOTOS: Las 4 fotos inclinadas/rotadas son la firma visual de esta web
4. SERVICES 01/: Numeración editorial — foto cambia al hover de cada servicio
5. EQUIPO COMPLETO: Los 5 miembros con sus roles REALES — diferenciador único
6. VIOLETA: Solo para badge de la Dra. Yissel y detalles del logo
7. FUENTES: Fraunces (elegancia digital) + Inter (tecnología)
8. CEO SECTION: Sobre fondo oscuro — máximo impacto
9. FOOTER: La lista del equipo aparece en el footer — demuestra tamaño y profesionalismo
10. ESPACIADO: 120px entre secciones SIN EXCEPCIÓN
11. SKILLS: frontend-design + taste-skill + webapp-testing — TODAS
```

---

## ⚠️ NOTA SOBRE IMÁGENES DEL EQUIPO

```
EL CLIENTE PROVEERÁ FOTOS NOMBRADAS ASÍ:
- /public/images/dra-yissel.jpg     ← CEO (foto de perfil Instagram)
- /public/images/dra-yarlyn.jpg     ← Odontóloga General (bata azul)
- /public/images/dr-sandy.jpg       ← Cirujano/Implantólogo (bata morada)
- /public/images/soribel.jpg        ← Asistente Dental (bata verde)
- /public/images/manuela.jpg        ← Secretaria

PLACEHOLDERS (mientras no lleguen):
https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=500 (dra)
https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500 (dr)
https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500 (asistente)
https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?w=500 (secretaria)

FOTOS ABOUT (flotantes inclinadas):
https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400
https://images.unsplash.com/photo-1588776814546-1ffbb2a8e90a?w=400
https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400
https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400
```

---

## 📌 SEO

```tsx
title: "Consultorio Dental Dra. Yissel de la Rosa | Odontología Digital/Moderna — Santo Domingo"
description: "Consultorio Dental Dra. Yissel V. de la Rosa M. Especialistas en Odontología Digital, Diseño de Sonrisa, Ortodoncia y Estética Dental. Equipo de 5 profesionales. WhatsApp: 829-968-0892"
```

---

## 💬 INSTRUCCIÓN EXACTA PARA CLAUDE CODE

```
Lee el CLAUDE.md completo antes de empezar.

PASO 1: Limpia /src/components/ y /src/sections/
PASO 2: npm install framer-motion
PASO 3: Construye en este orden EXACTO:

1. index.css — variables CSS + fuentes Fraunces + Inter
2. TeamCard.tsx + AnimatedCounter.tsx + SectionLabel.tsx
3. HeroSection.tsx ← PRIORIDAD MÁXIMA
   - Foto dental FULL SCREEN (100vw × 100vh)
   - Overlay azul oscuro degradado
   - Ken Burns effect: scale 1.05→1 en la foto (8s)
   - Texto blanco bottom-left con stagger
   - Badge "5K+" flotante con glassmorphism
   - Botón pill blanco + "Or Call:" inline
4. Navbar.tsx — logo cursiva + btn azul oscuro
5. AboutSection.tsx — 4 fotos inclinadas + texto centro
6. ServicesSection.tsx — lista 01/02/ + foto reactiva
7. CEOSection.tsx — fondo oscuro, Dra. Yissel
8. TeamSection.tsx — 5 miembros REALES del equipo
9. StatsSection.tsx — fondo azul eléctrico
10. TestimonialsSection.tsx
11. ContactSection.tsx — formulario con selector de especialista
12. Footer + WhatsAppButton

DETENTE después del Hero y muéstramelo.
Espera aprobación antes de continuar.

CRÍTICO: El efecto Ken Burns en la foto del hero y las
4 fotos inclinadas/rotadas en el About son las
firmas visuales más importantes de esta web.
Las fotos del equipo llegarán nombradas según la guía.

Usa las skills frontend-design, taste-skill y webapp-testing.
El resultado debe transmitir modernidad tecnológica dental.
```

---

*Proyecto #7 de 15 clínicas dentales — NEXIX Tech Studio | nexixstudio.com*