export const content = {
  nav: [
    { label: "Sobre mí", href: "#about" },
    { label: "Habilidades", href: "#skills" },
    { label: "Experiencia", href: "#experience" },
    { label: "Educación", href: "#education" },
    { label: "Proyectos", href: "#projects" },
    { label: "Contacto", href: "#contact" },
  ],
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
      "Como Ingeniero Informático, me especializo en backend con PHP y Python/Django, construyendo soluciones escalables y robustas. Últimamente he estado profundizando en automatización de procesos, un área que cada vez integro más a mi trabajo.",
    personalSummary:
      "Fuera del código disfruto la música, videojuegos, viajes y la vida en Chile junto a mis gatos, amigos y familia.",
    interests: ["🎮 Gaming", "🐱 Gatos", "✈️ Viajes", "💻 Tech"],
  },
  skills: {
    categories: [
      {
        name: "Frontend",
        items: [
          { name: "JavaScript", icon: "javascript", color: "F7DF1E" },
          { name: "React", icon: "react", color: "61DAFB" },
          { name: "HTML5", icon: "html5", color: "E34F26" },
          { name: "CSS3", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
          { name: "Tailwind CSS", icon: "tailwindcss", color: "06B6D4" },
        ],
      },
      {
        name: "Backend",
        items: [
          { name: "PHP", icon: "php", color: "777BB4" },
          { name: "Python", icon: "python", color: "4B8BBE" },
          { name: "Java", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
          { name: "C#", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" },
        ],
      },
      {
        name: "Frameworks",
        items: [
          { name: "Django", icon: "django", color: "44B78B" },
          { name: ".NET Core", icon: "dotnet", color: "512BD4" },
          { name: "Laravel", icon: "laravel", color: "FF2D20" },
        ],
      },
      {
        name: "Base de Datos",
        items: [
          { name: "MySQL", icon: "mysql", color: "00758F" },
          { name: "PostgreSQL", icon: "postgresql", color: "336791" },
          { name: "Supabase", icon: "supabase", color: "3ECF8E" },
        ],
      },
      {
        name: "Cloud & Deploy",
        items: [
          { name: "Docker", icon: "docker", color: "2496ED" },
          { name: "AWS EC2", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
          { name: "Vercel", icon: "vercel", color: "ffffff" },
          { name: "Railway", icon: "railway", color: "ffffff" },
        ],
      },
      {
        name: "Herramientas",
        items: [
          { name: "Git", icon: "git", color: "F05032" },
          { name: "GitHub", icon: "github", color: "ffffff" },
          { name: "Linux", icon: "linux", color: "FCC624" },
          { name: "n8n", icon: "n8n", color: "EA4B71" },
          { name: "Postman", icon: "postman", color: "FF6C37" },
          { name: "Scrum", icon: null },
        ],
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
  education: {
    degrees: [
      {
        icon: "🎓",
        typeBadge: "Ingeniería",
        title: "Ingeniería Informática",
        institution: "Instituto Profesional DUOC UC",
        period: "Mar 2021 – Dic 2024",
        location: "Valparaíso, Chile",
        status: "Titulado",
      },
      {
        icon: "📋",
        typeBadge: "Técnico",
        title: "Analista Programador Computacional",
        institution: "Instituto Profesional DUOC UC",
        period: "Mar 2021 – Dic 2024",
        location: "Valparaíso, Chile",
        status: "Titulado",
      },
    ],
    certifications: [
      {
        icon: "🏅",
        typeBadge: "Certificación",
        title: "CISCO IT Essentials",
        entity: "Cisco Networking Academy",
        period: "Ago 2017 – Dic 2017",
        credentialUrl: null,
      },
    ],
    courses: [
      {
        icon: "🤖",
        typeBadge: "Curso",
        title: "Iniciación al Desarrollo con IA",
        entity: "Plataforma online",
        period: "Oct 2025",
        credentialUrl: null,
      },
    ],
  },
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
