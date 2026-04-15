export const content = {
  hero: {
    fullName: "Darío Vera Muñoz",
    title: "Ingeniero Informático · Desarrollador Fullstack",
    tagline: "Construyo sistemas que funcionan — y experiencias que importan.",
    ctas: [
      { label: "Ver proyectos", href: "#projects", variant: "primary" },
      { label: "Contactarme", href: "#contact", variant: "secondary" },
    ],
    location: "Valparaíso, Chile",
  },
  about: {
    professionalSummary:
      "Como Ingeniero Informático, me enfoco en construir soluciones escalables que resuelven problemas reales. Trabajo principalmente en backend, bases de datos, PHP y Python/Django, mientras sigo fortaleciendo mi camino en React y frontend.",
    personalSummary:
      "Fuera del código disfruto videojuegos, viajes y la vida en Chile junto a mis gatos, con raíces bien marcadas en Chiloé.",
    interests: ["🎮 Gaming", "🐱 Gatos", "✈️ Viajes", "🌿 Chiloé", "💻 Tech"],
  },
  skills: {
    categories: [
      {
        name: "Lenguajes",
        items: [
          { name: "PHP", level: "Intermedio" },
          { name: "Python", level: "Intermedio" },
          { name: "JavaScript", level: "Intermedio" },
          { name: "Java", level: "Intermedio" },
          { name: "C#", level: "Intermedio" },
        ],
      },
      {
        name: "Bases de datos",
        items: [{ name: "MySQL", level: "Avanzado" }],
      },
      {
        name: "Frameworks & APIs",
        items: [
          { name: "Django", level: "Avanzado" },
          { name: ".NET Core", level: "Avanzado" },
          { name: "APIs RESTful", level: "Avanzado" },
        ],
      },
      {
        name: "DevOps/Tools",
        items: [
          { name: "Docker", level: "Intermedio" },
          { name: "AWS EC2", level: "Intermedio" },
          { name: "Git/GitHub", level: "Intermedio" },
          { name: "Linux", level: "Intermedio" },
        ],
      },
      {
        name: "En aprendizaje",
        items: [{ name: "React", level: "Aprendiendo", badge: "Aprendiendo 🚀" }],
      },
      {
        name: "Metodologías",
        items: [{ name: "Scrum", level: "Intermedio" }],
      },
    ],
  },
  experience: [
    {
      role: "Desarrollador Fullstack",
      company: "COSOF",
      location: "Valparaíso, Chile",
      mode: "Remoto",
      period: "Mar 2024 – Mar 2025",
      stack: ["PHP", "JavaScript", "MySQL", "GitHub"],
      achievements: [
        "Participé en análisis y levantamiento de requerimientos para optimizar módulos de la plataforma MIDAS (MINSAL).",
        "Desarrollé nuevas funcionalidades con foco en calidad de código, eficiencia y experiencia de usuario.",
        "Optimicé consultas SQL y procedimientos almacenados en MySQL para mejorar tiempos de carga.",
        "Contribuí en actualización tecnológica de la plataforma y en reuniones de seguimiento técnico.",
        "Gestioné mantenimiento correctivo/evolutivo y resolución de tickets en ambiente productivo.",
      ],
    },
    {
      role: "Desarrollador Backend (Práctica Laboral)",
      company: "Guías y Scouts Chile",
      location: "Valparaíso, Chile",
      mode: "Remoto",
      period: "Ene 2022 – Mar 2022",
      stack: [".NET Core", "C#", "MySQL", "GitHub"],
      achievements: [
        "Diseñé y desarrollé APIs RESTful para integración eficiente entre sistema y base de datos.",
        "Detecté problemas de estructura en base de datos y propuse mejoras para rendimiento y organización.",
        "Implementé pruebas unitarias e integración para asegurar calidad de las APIs.",
        "Documenté APIs y apliqué buenas prácticas de versionado colaborativo con GitHub.",
      ],
    },
  ],
  education: [
    { title: "Ingeniería Informática", institution: "DUOC UC", period: "2021–2024" },
    {
      title: "Analista Programador Computacional",
      institution: "DUOC UC",
      period: "Completado",
    },
    {
      title: "Curso de Iniciación al Desarrollo con IA",
      institution: "Oct 2025",
      period: "Curso",
    },
    { title: "CISCO IT Essentials", institution: "CISCO", period: "2017" },
  ],
  projects: [
    {
      name: "Sistema de Gestión ERP",
      description:
        "Plataforma para administración de recursos y procesos operativos internos con foco en estabilidad y escalabilidad.",
      tech: ["Laravel", "MySQL"],
      githubUrl: "#",
      demoUrl: "#",
    },
    {
      name: "Portfolio React",
      description: "Implementación actual del portfolio con enfoque en arquitectura frontend y experiencia editorial.",
      tech: ["React", "Tailwind", "Framer Motion"],
      githubUrl: "#",
      demoUrl: "#",
      status: "En construcción",
    },
    {
      name: "API Gateway Custom",
      description: "Orquestación de servicios para comunicación entre plataformas distribuidas.",
      tech: [".NET Core", "APIs REST"],
      githubUrl: "#",
      demoUrl: "#",
    },
  ],
  contact: {
    heading: "¿Trabajamos juntos?",
    channels: [
      { type: "email", label: "Email", href: "mailto:contacto@dariodvm.dev" },
      { type: "linkedin", label: "LinkedIn", href: "#" },
      { type: "github", label: "GitHub", href: "#" },
    ],
    form: {
      fields: [
        { name: "name", label: "Nombre", type: "text", required: true },
        { name: "email", label: "Email", type: "email", required: true },
        { name: "message", label: "Mensaje", type: "textarea", required: true },
      ],
      submitLabel: "Enviar mensaje",
    },
    location: "Valparaíso, Chile",
  },
  footer: {
    copyright: "© 2026 Darío Vera Muñoz · Hecho con 💚 en Chile",
  },
};

export default content;
