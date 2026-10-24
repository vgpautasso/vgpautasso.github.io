export interface Project {
  id: string;
  title: string;
  category: "Fullstack" | "Backend" | "AI & Vision";
  description: string;
  longDescription: string;
  architecture: string[];
  highlights: string[];
  technologies: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl: string;
}

export const projectsData: Project[] = [
  {
    id: "1",
    title: "Plataforma de Reserva de Clases Online",
    category: "Fullstack",
    description: "Sistema web con calendario interactivo para la gestión y reserva de turnos de clases particulares con sincronización en tiempo real.",
    longDescription: "Plataforma diseñada para automatizar la coordinación de clases particulares entre docente y estudiantes. Gestiona el ciclo de vida de la reserva persistiendo los datos de contacto, rangos horarios y estados de turno, integrándose con Google Calendar API para sincronizar la agenda y generar automáticamente la sesión en Google Meet.",
    architecture: [
      "Persistencia relacional en PostgreSQL mediante Prisma ORM con modelo dedicado de Bookings y mapeo de campos a snake_case.",
      "Integración con Google Calendar API para reserva de turnos, generación de Google Meet link y trazabilidad por google_event_id.",
      "Gestión de estados de sesión ('confirmed', etc.) y control de solapamiento de horarios (startTime / endTime).",
      "Roadmap: incorporación de pasarela de pagos con webhooks de Mercado Pago para confirmación automática tras el cobro.",
      "Despliegue y frontend moderno con Next.js, TypeScript y Tailwind CSS."
    ],
    highlights: [
      "Reserva y asignación automática de turnos",
      "Sincronización con Google Calendar & Meet",
      "Modelado relacional con Prisma & PostgreSQL"
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma ORM",
      "PostgreSQL",
      "Google Calendar API"
    ],
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    demoUrl: "https://estudiandovirtual.vercel.app",
    githubUrl: "https://github.com/vgpautasso/estudiandovirtual",
  }
];