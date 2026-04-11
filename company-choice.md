# MI ELECCIÓN DE EMPRESA
Si bien todos los sectores me resultan atractivos, he elegido HealthCore por dos razones particulares. Por un lado, mi camino en la IA está enfocado al emprendimiento, y ya cuento con clientes en el área de salud donde las herramientas de este proyecto tendrían un impacto inmediato. Por otro lado, al ser mi esposa médico, me motiva especialmente la posibilidad de implementar lo aprendido para aportar soluciones tecnológicas en su entorno de trabajo.

## DEPARTAMENTOS DE INTERÉS
- DEPARTAMENTO DE OPERACIONES CLÍNICAS
Me llama la atención solucionar el problerma con las historias clícias, ya sea creando un sistema propio a nivel global o buscar la forma de conectar ambos sistemas.
- DEPARTAMENTO DE CUMPLIMIENTO Y GOBIERNO DEL DATO
Me parece importante el saber como gestionar los datos privados de los clientes.

## RETO DE AUTOMATIZACIÓN
El reto de automatización que más ganas tengo de construir es el del apartado de **reserva y recordatorio de citas**.

## MI IDEA DE AGENTE DE IA
1. **Arquitectura del Agente de Voz (Voice AI)**
    - **Interfaz de Voz Multilingüe:** Implementación de un agente de IA con capacidades de Conversational AI y procesamiento de lenguaje natural (NLP). El sistema debe integrar tecnologías de Speech-to-Text (STT) y Text-to-Speech (TTS) para permitir una comunicación fluida y bidireccional en múltiples idiomas.
    - **Integración de Base de Conocimientos:** Conexión del agente mediante RAG (Retrieval-Augmented Generation) a una base de datos vectorial para proporcionar información técnica y comercial precisa sobre los servicios de la empresa.

2. **Gestión de Disponibilidad y Reservas**
    - **Sincronización de Calendario:** Integración vía API con sistemas de gestión de tiempo (Google Calendar, Outlook o Cal.com) para la consulta de slots disponibles en tiempo real.
    - **Lógica de Agendamiento:** Una vez verificada la disponibilidad, el flujo en n8n debe ejecutar un nodo de escritura para registrar la cita y bloquear el horario seleccionado, evitando duplicidades (race conditions).

3. **Flujo de Notificaciones y Confirmación Omincanal**
    - **Confirmación Inmediata:** Disparo de eventos automatizados tras la reserva para el envío de notificaciones mediante SMS (vía Twilio o similar) y WhatsApp Business API.
        - **Payload del mensaje:** Ubicación, fecha, hora y metadatos relevantes de la cita.
    - **Recordatorio Pre-Cita:** Configuración de un disparador cronológico (Cron Job) programado para ejecutarse exactamente una hora antes del evento.

4. **Gestión de Estado y Lógica de Respuesta**
El sistema implementará una lógica de decisión basada en la interacción del usuario con el recordatorio:
    - **Confirmación:** Actualización del estado de la cita a "Confirmada" en el sistema central.
    - **Cancelación:** Ejecución de un workflow de borrado en el calendario y liberación del horario.
    - **Reprogramación (Rescheduling):** Reactivación del agente de IA o envío de un enlace dinámico para la selección de un nuevo horario disponible.
    - **Protocolo de No-Respuesta:** Se establece una política de cancelación automática por defecto. Si no se detecta un input del usuario en un periodo de tiempo determinado previo a la cita, el sistema procederá a la invalidación de la reserva.

5. **Stack Tecnológico Sugerido**
    - **Orquestador:** n8n.
    - **Motor de IA:** OpenAI GPT-4o / Claude 3.5 Sonnet.
    - **Telefonía/Voz:** Vapi / Retell AI / Twilio Voice.
    - **Canales de Mensajería:** WhatsApp Business API / SMS Gateway.
