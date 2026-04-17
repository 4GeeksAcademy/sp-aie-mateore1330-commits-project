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
  // FORMULARIO (application.html)
  // ──────────────────────────────────────────────
  form_badge:         { en: "Patient Inquiry",
                        es: "Consulta de Paciente" },
  form_title:         { en: "Request an Appointment",
                        es: "Solicitar una Cita" },
  form_subtitle:      { en: "Fill in the details below and a member of our front-desk team will contact you within 1 business day to confirm your appointment.",
                        es: "Completa los datos a continuación y un miembro de nuestro equipo de recepción se pondrá en contacto contigo en 1 día hábil para confirmar tu cita." },
  form_partnership_notice: { en: "Are you a healthcare provider or organisation looking to partner with HealthCore? Contact our operations team at partnerships@healthcore.com",
                             es: "¿Eres un proveedor de salud u organización que busca asociarse con HealthCore? Contacta a nuestro equipo de operaciones en partnerships@healthcore.com" },
  form_first_name:    { en: "First Name",        es: "Nombre" },
  form_last_name:     { en: "Last Name",         es: "Apellido" },
  form_email:         { en: "Email Address",     es: "Correo Electrónico" },
  form_phone:         { en: "Phone Number",      es: "Número de Teléfono" },
  form_dob:           { en: "Date of Birth",     es: "Fecha de Nacimiento" },
  form_preferred_language: { en: "Preferred Language", es: "Idioma Preferido" },
  form_preferred_clinic:   { en: "Preferred Clinic",   es: "Clínica Preferida" },
  form_preferred_date:     { en: "Preferred Date",     es: "Fecha Preferida" },
  form_preferred_time:     { en: "Preferred Time Slot", es: "Franja Horaria Preferida" },
  form_service_type:       { en: "Service Required",    es: "Servicio Requerido" },
  form_new_patient:        { en: "Is this your first visit to HealthCore?",
                             es: "¿Es tu primera visita a HealthCore?" },
  form_has_insurance:      { en: "Do you have health insurance?",
                             es: "¿Tienes seguro médico?" },
  form_insurance_provider: { en: "Insurance Provider",  es: "Aseguradora" },
  form_insurance_member_id:{ en: "Member ID",           es: "ID de Afiliado" },
  form_patient_id:         { en: "Patient ID (optional)", es: "ID de Paciente (opcional)" },
  form_health_concern:     { en: "Brief description of your health concern",
                             es: "Descripción breve de tu consulta médica" },
  form_consent_label:      { en: "I consent to HealthCore contacting me by phone or email to follow up on this inquiry and confirm appointment details.",
                             es: "Consiento que HealthCore me contacte por teléfono o correo electrónico para dar seguimiento a esta consulta y confirmar los detalles de la cita." },
  form_submit:        { en: "Submit Inquiry",
                        es: "Enviar Solicitud" },
  form_reset:         { en: "Clear Form",
                        es: "Limpiar Formulario" },
  form_back:          { en: "\u2190 Back to Home",
                        es: "\u2190 Volver al Inicio" },
  form_yes:           { en: "Yes",   es: "Sí" },
  form_no:            { en: "No",    es: "No" },
  form_select_placeholder: { en: "-- Select --", es: "-- Seleccionar --" },
  form_lang_english:  { en: "English", es: "Inglés" },
  form_lang_spanish:  { en: "Spanish", es: "Español" },
  form_time_morning:  { en: "Morning (7am\u201312pm)",   es: "Mañana (7am\u201312pm)" },
  form_time_afternoon:{ en: "Afternoon (12pm\u20135pm)", es: "Tarde (12pm\u20135pm)" },
  form_time_evening:  { en: "Evening (5pm\u20138pm)",    es: "Noche (5pm\u20138pm)" },
  form_service_primary_care: { en: "Primary Care", es: "Atención Primaria" },
  form_service_chronic:      { en: "Chronic Disease Management", es: "Manejo de Enfermedades Crónicas" },
  form_service_specialist:   { en: "Specialist Consultation", es: "Consulta con Especialista" },
  form_service_preventive:   { en: "Preventive Health", es: "Salud Preventiva" },
  form_service_womens:       { en: "Women's Health", es: "Salud de la Mujer" },
  form_service_paediatric:   { en: "Paediatric Care", es: "Atención Pediátrica" },
  form_service_mental:       { en: "Mental Health", es: "Salud Mental" },

  // Fieldset legends
  fs_personal:        { en: "Personal Information", es: "Información Personal" },
  fs_appointment:     { en: "Appointment Details",  es: "Detalles de la Cita" },
  fs_status:          { en: "Patient Status",       es: "Estado del Paciente" },
  fs_concern:         { en: "Health Concern",       es: "Consulta Médica" },

  // Placeholders
  ph_first_name:      { en: "e.g. John",        es: "ej. Juan" },
  ph_last_name:       { en: "e.g. Doe",         es: "ej. García" },
  ph_email:           { en: "e.g. john@email.com",
                        es: "ej. juan@correo.com" },
  ph_phone:           { en: "e.g. +1 305 555 0191",
                        es: "ej. +1 305 555 0191" },
  ph_health_concern:  { en: "Describe your symptoms, concerns, or reason for the visit...",
                        es: "Describe tus síntomas, preocupaciones o motivo de la visita..." },
  ph_patient_id:      { en: "e.g. HC-A3F291",
                        es: "ej. HC-A3F291" },
  ph_insurance_provider:   { en: "e.g. Blue Cross",
                             es: "ej. Blue Cross" },
  ph_insurance_member_id:  { en: "e.g. ABC123456",
                             es: "ej. ABC123456" },

  // ──────────────────────────────────────────────
  // MENSAJES DE VALIDACIÓN (según CONTEXT.md)
  // ──────────────────────────────────────────────
  err_first_name_val:  { en: "First name must contain only letters and be at least 2 characters",
                         es: "El nombre debe contener solo letras y tener al menos 2 caracteres" },
  err_last_name_val:   { en: "Last name must contain only letters and be at least 2 characters",
                         es: "El apellido debe contener solo letras y tener al menos 2 caracteres" },
  err_dob_val:         { en: "Enter a valid date of birth. Patient must be between 0 and 120 years old",
                         es: "Ingresa una fecha de nacimiento válida. El paciente debe tener entre 0 y 120 años" },
  err_email_val:       { en: "Enter a valid email address (example: name@provider.com)",
                         es: "Ingresa un correo electrónico válido (ejemplo: nombre@proveedor.com)" },
  err_phone_val:       { en: "Phone must include a country code (example: +1 305 555 0191)",
                         es: "El teléfono debe incluir un código de país (ejemplo: +1 305 555 0191)" },
  err_preferred_language_val: { en: "Select your preferred language",
                                es: "Selecciona tu idioma preferido" },
  err_preferred_clinic_val:   { en: "Select the clinic you would like to visit",
                                es: "Selecciona la clínica que te gustaría visitar" },
  err_preferred_date_val:     { en: "Select a date at least 1 business day from today and no more than 60 days ahead",
                                es: "Selecciona una fecha de al menos 1 día hábil desde hoy y no más de 60 días hacia adelante" },
  err_preferred_time_val:     { en: "Select your preferred time slot",
                                es: "Selecciona tu franja horaria preferida" },
  err_service_type_val:       { en: "Select the type of care you are looking for",
                                es: "Selecciona el tipo de atención que estás buscando" },
  err_service_paediatric:     { en: "Paediatric Care is available for patients under 18 years of age. Please check the date of birth or select a different service.",
                                es: "Paediatric Care está disponible para pacientes menores de 18 años. Revisa la fecha de nacimiento o selecciona un servicio diferente." },
  err_new_patient_val:        { en: "Indicate whether this is your first visit to HealthCore",
                                es: "Indica si esta es tu primera visita a HealthCore" },
  err_has_insurance_val:      { en: "Indicate whether you have health insurance",
                                es: "Indica si tienes seguro médico" },
  err_insurance_provider_val: { en: "Enter your insurance provider name",
                                es: "Ingresa el nombre de tu aseguradora" },
  err_insurance_member_id_val:{ en: "Member ID must be between 6 and 20 alphanumeric characters",
                                es: "El ID de afiliado debe tener entre 6 y 20 caracteres alfanuméricos" },
  err_patient_id_val:         { en: "Patient ID must follow format HC- followed by 6 alphanumeric characters (e.g. HC-A3F291)",
                                es: "El ID de paciente debe seguir el formato HC- seguido de 6 caracteres alfanuméricos (ej. HC-A3F291)" },
  err_health_concern_val:     { en: "Describe your health concern in at least 20 characters (X characters remaining)",
                                es: "Describe tu consulta médica en al menos 20 caracteres (faltan X caracteres)" },
  err_contact_consent_val:    { en: "You must consent to being contacted before submitting this form",
                                es: "Debes dar tu consentimiento para ser contactado antes de enviar este formulario" },
  warn_evening_clinic:        { en: "This clinic may not be available for evening appointments. Consider selecting a different time or clinic.",
                                es: "Es posible que esta clínica no esté disponible para citas en horario nocturno. Considera seleccionar otro horario u otra clínica." },

  // Mensajes de éxito
  success_title:      { en: "Thank you for contacting HealthCore.",
                        es: "Gracias por contactar a HealthCore." },
  success_body:       { en: "We have received your inquiry. A member of our front-desk team will get in touch with you within 1 business day to confirm your appointment details and answer any questions.",
                        es: "Hemos recibido tu consulta. Un miembro de nuestro equipo de recepción se pondrá en contacto contigo dentro de 1 día hábil para confirmar los detalles de tu cita y responder cualquier pregunta." },
  success_urgent:     { en: "If you need urgent assistance, please call your preferred clinic directly using the numbers listed on our website.",
                        es: "Si necesitas asistencia urgente, llama directamente a tu clínica preferida usando los números listados en nuestro sitio web." },
  success_closing:    { en: "We look forward to caring for you.",
                        es: "Esperamos poder atenderte pronto." },
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

  // Notify other scripts (e.g. phone input) to re-localise runtime UI.
  document.dispatchEvent(new CustomEvent("healthcore:languagechange", {
    detail: { lang: lang }
  }));
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
