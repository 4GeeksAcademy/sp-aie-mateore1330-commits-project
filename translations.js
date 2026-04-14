/**
 * ============================================================
 * SISTEMA DE TRADUCCIONES — HealthCore (EN / ES)
 * ============================================================
 *
 * Diccionario completo de cadenas de texto para la página.
 * Cada clave corresponde al valor del atributo data-lang en el HTML.
 *
 * Uso en HTML:
 *   <span data-lang="key">Default English text</span>
 *   <input data-lang-placeholder="key" placeholder="Default">
 *
 * ============================================================
 */

const translations = {

  // ──────────────────────────────────────────────
  // NAVEGACIÓN
  // ──────────────────────────────────────────────
  nav_services:       { en: "Services",         es: "Servicios" },
  nav_about:          { en: "About Us",         es: "Sobre Nosotros" },
  nav_locations:      { en: "Locations",        es: "Ubicaciones" },
  nav_contact:        { en: "Contact",          es: "Contacto" },
  nav_book:           { en: "Book Appointment", es: "Reservar Cita" },

  // ──────────────────────────────────────────────
  // HERO
  // ──────────────────────────────────────────────
  hero_badge:         { en: "12 Clinics Across the US & UK",
                        es: "12 Clínicas en EE.UU. y Reino Unido" },
  hero_title_1:       { en: "Quality Primary Care ",
                        es: "Atención Primaria de Calidad " },
  hero_title_2:       { en: "Without the Wait",
                        es: "Sin Esperas" },
  hero_desc:          { en: "Same-day appointments, extended hours, and bilingual staff — because your health can't wait until tomorrow. Accessible, patient-centred care across Texas, Florida, Georgia, London, and Manchester.",
                        es: "Citas el mismo día, horarios extendidos y personal bilingüe — porque tu salud no puede esperar hasta mañana. Atención accesible y centrada en el paciente en Texas, Florida, Georgia, Londres y Mánchester." },
  hero_cta_book:      { en: "Book Your Appointment",
                        es: "Reserva Tu Cita" },
  hero_cta_services:  { en: "Explore Our Services",
                        es: "Explora Nuestros Servicios" },

  // ──────────────────────────────────────────────
  // ESTADÍSTICAS DEL HERO
  // ──────────────────────────────────────────────
  stat_1_label:       { en: "Clinics Across 2 Countries",
                        es: "Clínicas en 2 Países" },
  stat_2_label:       { en: "Dedicated Healthcare Staff",
                        es: "Personal Sanitario Dedicado" },
  stat_3_label:       { en: "Years of Trusted Care",
                        es: "Años de Atención Confiable" },
  stat_4_value:       { en: "Same Day",
                        es: "Mismo Día" },
  stat_4_label:       { en: "Appointments Available",
                        es: "Citas Disponibles" },

  // ──────────────────────────────────────────────
  // SECCIÓN DE SERVICIOS
  // ──────────────────────────────────────────────
  services_badge:     { en: "Our Services",     es: "Nuestros Servicios" },
  services_title:     { en: "Comprehensive Care, Centered Around You",
                        es: "Atención Integral, Centrada en Ti" },
  services_desc:      { en: "From routine check-ups to chronic disease management, we provide the full spectrum of ambulatory care across all our locations.",
                        es: "Desde chequeos de rutina hasta el manejo de enfermedades crónicas, ofrecemos el espectro completo de atención ambulatoria en todas nuestras sedes." },
  svc_1_title:        { en: "Primary Care",
                        es: "Atención Primaria" },
  svc_1_desc:         { en: "Comprehensive general health services with same-day appointments and extended hours, so you never have to wait weeks for care.",
                        es: "Servicios de salud general completos con citas el mismo día y horarios extendidos, para que nunca tengas que esperar semanas." },
  svc_2_title:        { en: "Specialist Consultations",
                        es: "Consultas Especializadas" },
  svc_2_desc:         { en: "Access expert medical advice across specialties without the referral complexity. We connect you with the right specialist quickly.",
                        es: "Accede a asesoría médica experta en diversas especialidades sin la complejidad de las derivaciones. Te conectamos rápidamente con el especialista adecuado." },
  svc_3_title:        { en: "Chronic Disease Management",
                        es: "Manejo de Enfermedades Crónicas" },
  svc_3_desc:         { en: "Ongoing support and structured care plans for diabetes, hypertension, and other chronic conditions — with regular follow-ups at your convenience.",
                        es: "Apoyo continuo y planes de atención estructurados para diabetes, hipertensión y otras condiciones crónicas — con seguimientos regulares a tu conveniencia." },
  svc_4_title:        { en: "Preventive Health Programs",
                        es: "Programas de Salud Preventiva" },
  svc_4_desc:         { en: "Stay ahead of health issues with personalised screenings, wellness check-ups, and preventive care plans designed to keep you healthy.",
                        es: "Adelántate a los problemas de salud con exámenes personalizados, chequeos de bienestar y planes de atención preventiva diseñados para mantenerte saludable." },

  // ──────────────────────────────────────────────
  // POR QUÉ HEALTHCORE
  // ──────────────────────────────────────────────
  why_badge:          { en: "Why HealthCore",
                        es: "¿Por Qué HealthCore?" },
  why_title:          { en: "Built on a Simple Idea: Care That Doesn't Make You Wait",
                        es: "Construido Sobre una Idea Simple: Atención Sin Hacerte Esperar" },
  why_desc:           { en: "HealthCore was founded by Dr. Sandra Okonkwo — a physician frustrated by the time clinicians spent on admin instead of patients. We built a healthcare network where access is immediate, processes are simple, and the patient always comes first.",
                        es: "HealthCore fue fundada por la Dra. Sandra Okonkwo — una médica frustrada por el tiempo que los profesionales dedicaban a la burocracia en lugar de a los pacientes. Creamos una red de salud donde el acceso es inmediato, los procesos son simples y el paciente siempre es lo primero." },
  why_1_title:        { en: "Same-Day Appointments",
                        es: "Citas el Mismo Día" },
  why_1_desc:         { en: "No more waiting weeks to see a doctor. Walk in or book today and get seen today — across all 12 clinics.",
                        es: "No más esperas de semanas para ver al médico. Ven sin cita o reserva hoy y te atendemos hoy — en las 12 clínicas." },
  why_2_title:        { en: "Extended Hours",
                        es: "Horarios Extendidos" },
  why_2_desc:         { en: "Our clinics operate beyond standard business hours, making it easier for working families to get the care they need.",
                        es: "Nuestras clínicas operan más allá del horario comercial estándar, facilitando a las familias trabajadoras el acceso a la atención que necesitan." },
  why_3_title:        { en: "Bilingual Staff",
                        es: "Personal Bilingüe" },
  why_3_desc:         { en: "Our US clinics have bilingual professionals to serve diverse communities — because language should never be a barrier to healthcare.",
                        es: "Nuestras clínicas en EE.UU. cuentan con profesionales bilingües para servir a comunidades diversas — porque el idioma nunca debería ser una barrera para la atención médica." },
  why_4_title:        { en: "HIPAA & UK GDPR Compliant",
                        es: "Cumplimiento HIPAA y UK GDPR" },
  why_4_desc:         { en: "Your data is protected under the strictest healthcare privacy regulations in both the US and UK.",
                        es: "Tus datos están protegidos bajo las regulaciones de privacidad sanitaria más estrictas de EE.UU. y el Reino Unido." },

  // ──────────────────────────────────────────────
  // CITA / TARJETA VISUAL
  // ──────────────────────────────────────────────
  quote_text:         { en: "\u201CWe built HealthCore so clinicians could focus on patients, not paperwork. Quality healthcare should be accessible and immediate.\u201D",
                        es: "\u201CCreamos HealthCore para que los médicos pudieran centrarse en los pacientes, no en el papeleo. La atención médica de calidad debe ser accesible e inmediata.\u201D" },
  quote_author:       { en: "\u2014 Dr. Sandra Okonkwo, Founder & CEO",
                        es: "\u2014 Dra. Sandra Okonkwo, Fundadora y CEO" },
  card_us_label:      { en: "US Clinics",       es: "Clínicas en EE.UU." },
  card_us_detail:     { en: "TX \u00b7 FL \u00b7 GA", es: "TX \u00b7 FL \u00b7 GA" },
  card_uk_label:      { en: "UK Clinics",        es: "Clínicas en Reino Unido" },
  card_uk_detail:     { en: "London \u00b7 Manchester",
                        es: "Londres \u00b7 M\u00e1nchester" },

  // ──────────────────────────────────────────────
  // SECCIÓN ABOUT
  // ──────────────────────────────────────────────
  about_badge:        { en: "About HealthCore",
                        es: "Acerca de HealthCore" },
  about_title:        { en: "A Healthcare Network You Can Trust",
                        es: "Una Red de Salud en la que Puedes Confiar" },
  about_desc:         { en: "Founded in 2011 in Austin, Texas, HealthCore has grown from a single clinic into a transatlantic healthcare network. We serve communities across three US states and two UK cities with the same mission: making quality care accessible to everyone.",
                        es: "Fundada en 2011 en Austin, Texas, HealthCore ha crecido de una sola clínica a una red de salud transatlántica. Servimos a comunidades en tres estados de EE.UU. y dos ciudades del Reino Unido con la misma misión: hacer la atención de calidad accesible para todos." },
  about_1_title:      { en: "Expert Clinical Team",
                        es: "Equipo Clínico Experto" },
  about_1_desc:       { en: "Over 120 clinical staff \u2014 physicians, nurse practitioners, nurses, and medical assistants \u2014 led by Dr. Marcus Reid, ensuring evidence-based care at every location.",
                        es: "Más de 120 profesionales clínicos \u2014 médicos, enfermeros especializados, enfermeros y asistentes médicos \u2014 liderados por el Dr. Marcus Reid, garantizando atención basada en evidencia en cada sede." },
  about_2_title:      { en: "Patient-Centred Experience",
                        es: "Experiencia Centrada en el Paciente" },
  about_2_desc:       { en: "From booking to follow-up, our Patient Experience team led by Priya Nair ensures a seamless journey \u2014 with proactive reminders and personalised care coordination.",
                        es: "Desde la reserva hasta el seguimiento, nuestro equipo de Experiencia del Paciente liderado por Priya Nair asegura un recorrido fluido \u2014 con recordatorios proactivos y coordinación de atención personalizada." },
  about_3_title:      { en: "Data Privacy & Compliance",
                        es: "Privacidad de Datos y Cumplimiento" },
  about_3_desc:       { en: "Under Claire Whitfield\u2019s governance, every system meets HIPAA (US) and UK GDPR standards. Your health data is handled with the highest levels of security and legal compliance.",
                        es: "Bajo la dirección de Claire Whitfield, cada sistema cumple con los estándares HIPAA (EE.UU.) y UK GDPR. Tus datos de salud se manejan con los más altos niveles de seguridad y cumplimiento legal." },

  // ──────────────────────────────────────────────
  // CTA BANNER
  // ──────────────────────────────────────────────
  cta_title:          { en: "Ready to Experience Healthcare That Puts You First?",
                        es: "\u00bfListo para una Atención Médica que Te Pone a Ti Primero?" },
  cta_desc:           { en: "Join thousands of patients who trust HealthCore for accessible, high-quality care. Book your appointment today \u2014 no long waits, no confusing systems.",
                        es: "Únete a miles de pacientes que confían en HealthCore para una atención accesible y de alta calidad. Reserva tu cita hoy \u2014 sin largas esperas, sin sistemas confusos." },
  cta_button:         { en: "Book Your Appointment Now",
                        es: "Reserva Tu Cita Ahora" },

  // ──────────────────────────────────────────────
  // SECCIÓN UBICACIONES
  // ──────────────────────────────────────────────
  loc_badge:          { en: "Our Locations",
                        es: "Nuestras Ubicaciones" },
  loc_title:          { en: "12 Clinics, Two Countries, One Standard of Care",
                        es: "12 Clínicas, Dos Países, Un Solo Estándar de Atención" },
  loc_desc:           { en: "Whether you\u2019re in the US or the UK, you\u2019ll receive the same level of quality, accessible healthcare built on HealthCore\u2019s founding principles.",
                        es: "Ya sea que estés en EE.UU. o en el Reino Unido, recibirás el mismo nivel de atención médica accesible y de calidad, basada en los principios fundacionales de HealthCore." },
  loc_us_title:       { en: "United States",    es: "Estados Unidos" },
  loc_us_desc:        { en: "9 clinics across three states, offering same-day appointments, extended hours, and bilingual staff.",
                        es: "9 clínicas en tres estados, ofreciendo citas el mismo día, horarios extendidos y personal bilingüe." },
  loc_texas:          { en: "Texas",             es: "Texas" },
  loc_texas_detail:   { en: "Headquarters & multiple clinics \u2014 Austin",
                        es: "Sede central y varias clínicas \u2014 Austin" },
  loc_florida:        { en: "Florida",           es: "Florida" },
  loc_florida_detail: { en: "Regional clinics",  es: "Clínicas regionales" },
  loc_georgia:        { en: "Georgia",           es: "Georgia" },
  loc_georgia_detail: { en: "Regional clinics",  es: "Clínicas regionales" },
  loc_uk_title:       { en: "United Kingdom",    es: "Reino Unido" },
  loc_uk_desc:        { en: "3 clinics serving London and Manchester with private pay and NHS contract options.",
                        es: "3 clínicas sirviendo a Londres y Mánchester con opciones de pago privado y contratos del NHS." },
  loc_london:         { en: "London",            es: "Londres" },
  loc_london_detail:  { en: "Multiple locations across the city",
                        es: "Múltiples ubicaciones en la ciudad" },
  loc_manchester:     { en: "Manchester",        es: "Mánchester" },
  loc_manchester_detail: { en: "Regional clinic",
                           es: "Clínica regional" },

  // ──────────────────────────────────────────────
  // FOOTER
  // ──────────────────────────────────────────────
  footer_desc:        { en: "Quality primary care without the wait. Same-day appointments, extended hours, and bilingual staff across 12 clinics in the US & UK.",
                        es: "Atención primaria de calidad sin esperas. Citas el mismo día, horarios extendidos y personal bilingüe en 12 clínicas en EE.UU. y Reino Unido." },
  footer_quick:       { en: "Quick Links",      es: "Enlaces Rápidos" },
  footer_services:    { en: "Services",         es: "Servicios" },
  footer_contact:     { en: "Contact",          es: "Contacto" },
  footer_primary:     { en: "Primary Care",     es: "Atención Primaria" },
  footer_specialist:  { en: "Specialist Consultations",
                        es: "Consultas Especializadas" },
  footer_chronic:     { en: "Chronic Disease Management",
                        es: "Manejo de Enfermedades Crónicas" },
  footer_preventive:  { en: "Preventive Health",
                        es: "Salud Preventiva" },
  footer_hq:          { en: "Austin, Texas (HQ)",
                        es: "Austin, Texas (Sede Central)" },
  footer_copyright:   { en: "\u00a9 2026 HealthCore. All rights reserved.",
                        es: "\u00a9 2026 HealthCore. Todos los derechos reservados." },
  footer_privacy:     { en: "Privacy Policy",   es: "Política de Privacidad" },
  footer_terms:       { en: "Terms of Service",  es: "Términos de Servicio" },
  footer_hipaa:       { en: "HIPAA Notice",      es: "Aviso HIPAA" },

  // ──────────────────────────────────────────────
  // FORMULARIO (aplication.html) — para uso futuro
  // ──────────────────────────────────────────────
  form_title:         { en: "Book Your Appointment",
                        es: "Reserva Tu Cita" },
  form_subtitle:      { en: "Fill in the details below and we\u2019ll get back to you within 24 hours.",
                        es: "Completa los datos a continuación y te responderemos en un plazo de 24 horas." },
  form_first_name:    { en: "First Name",        es: "Nombre" },
  form_last_name:     { en: "Last Name",         es: "Apellido" },
  form_email:         { en: "Email Address",     es: "Correo Electrónico" },
  form_phone:         { en: "Phone Number",      es: "Número de Teléfono" },
  form_dob:           { en: "Date of Birth",     es: "Fecha de Nacimiento" },
  form_service:       { en: "Select a Service",  es: "Selecciona un Servicio" },
  form_location:      { en: "Preferred Location",
                        es: "Ubicación Preferida" },
  form_message:       { en: "Additional Notes (optional)",
                        es: "Notas Adicionales (opcional)" },
  form_submit:        { en: "Submit Appointment Request",
                        es: "Enviar Solicitud de Cita" },
  form_back:          { en: "\u2190 Back to Home",
                        es: "\u2190 Volver al Inicio" },

  // Placeholders
  ph_first_name:      { en: "e.g. John",        es: "ej. Juan" },
  ph_last_name:       { en: "e.g. Doe",         es: "ej. García" },
  ph_email:           { en: "e.g. john@email.com",
                        es: "ej. juan@correo.com" },
  ph_phone:           { en: "e.g. +1 555 123 4567",
                        es: "ej. +1 555 123 4567" },
  ph_message:         { en: "Tell us about your symptoms or preferences...",
                        es: "Cuéntanos sobre tus síntomas o preferencias..." },

  // ──────────────────────────────────────────────
  // MENSAJES DE VALIDACIÓN
  // ──────────────────────────────────────────────
  err_required:       { en: "This field is required.",
                        es: "Este campo es obligatorio." },
  err_first_name:     { en: "Please enter your first name.",
                        es: "Por favor, ingresa tu nombre." },
  err_last_name:      { en: "Please enter your last name.",
                        es: "Por favor, ingresa tu apellido." },
  err_email_required: { en: "Please enter your email address.",
                        es: "Por favor, ingresa tu correo electrónico." },
  err_email_invalid:  { en: "Please enter a valid email address.",
                        es: "Por favor, ingresa un correo electrónico válido." },
  err_phone_required: { en: "Please enter your phone number.",
                        es: "Por favor, ingresa tu número de teléfono." },
  err_phone_invalid:  { en: "Please enter a valid phone number (digits, spaces, + or -).",
                        es: "Por favor, ingresa un número de teléfono válido (dígitos, espacios, + o -)." },
  err_dob:            { en: "Please select your date of birth.",
                        es: "Por favor, selecciona tu fecha de nacimiento." },
  err_service:        { en: "Please select a service.",
                        es: "Por favor, selecciona un servicio." },
  err_location:       { en: "Please select a location.",
                        es: "Por favor, selecciona una ubicación." },

  // Mensaje de éxito
  success_message:    { en: "Appointment request submitted successfully! We will contact you within 24 hours.",
                        es: "¡Solicitud de cita enviada correctamente! Te contactaremos en un plazo de 24 horas." },
};


// ============================================================
// MOTOR DE CAMBIO DE IDIOMA
// ============================================================

/** Idioma actual — siempre arranca en inglés */
let currentLang = "en";

/**
 * Aplica las traducciones a todos los elementos con data-lang
 * y data-lang-placeholder del documento actual.
 * @param {string} lang — "en" o "es"
 */
function setLanguage(lang) {
  currentLang = lang;

  // 1. Actualizar el atributo lang del <html>
  document.documentElement.lang = lang;

  // 2. Recorrer elementos con data-lang → actualizar textContent
  document.querySelectorAll("[data-lang]").forEach(function (el) {
    const key = el.getAttribute("data-lang");
    if (translations[key] && translations[key][lang]) {
      el.textContent = translations[key][lang];
    }
  });

  // 3. Recorrer elementos con data-lang-placeholder → actualizar placeholder
  document.querySelectorAll("[data-lang-placeholder]").forEach(function (el) {
    const key = el.getAttribute("data-lang-placeholder");
    if (translations[key] && translations[key][lang]) {
      el.setAttribute("placeholder", translations[key][lang]);
    }
  });

  // 4. Actualizar mensajes de error dinámicos ya visibles
  document.querySelectorAll("[data-lang-error]").forEach(function (el) {
    const key = el.getAttribute("data-lang-error");
    if (translations[key] && translations[key][lang] && el.textContent.trim() !== "") {
      el.textContent = translations[key][lang];
    }
  });
}

/**
 * Devuelve la traducción de una clave en el idioma actual.
 * Útil para mensajes dinámicos generados desde JS (validación, éxito, etc.)
 * @param {string} key — Clave del diccionario
 * @returns {string}
 */
function t(key) {
  if (translations[key] && translations[key][currentLang]) {
    return translations[key][currentLang];
  }
  return key; // Fallback: devuelve la propia clave
}

// ============================================================
// INICIALIZACIÓN DEL SWITCH DE IDIOMA
// ============================================================
document.addEventListener("DOMContentLoaded", function () {
  // Buscar el toggle del desktop y del mobile
  var toggleDesktop = document.getElementById("lang-toggle");
  var toggleMobile  = document.getElementById("lang-toggle-mobile");

  // Estado inicial: inglés
  setLanguage("en");

  /**
   * Sincroniza ambos toggles y aplica el idioma.
   * @param {boolean} checked — true = español, false = inglés
   */
  function syncLang(checked) {
    var lang = checked ? "es" : "en";
    // Sincronizar ambos checkboxes
    if (toggleDesktop) toggleDesktop.checked = checked;
    if (toggleMobile)  toggleMobile.checked  = checked;
    setLanguage(lang);
  }

  // Eventos de cambio
  if (toggleDesktop) {
    toggleDesktop.addEventListener("change", function () {
      syncLang(this.checked);
    });
  }
  if (toggleMobile) {
    toggleMobile.addEventListener("change", function () {
      syncLang(this.checked);
    });
  }
});
