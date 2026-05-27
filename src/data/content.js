export const content = {
  es: {
    nav: [
      { label: "Sobre mí", href: "#about" },
      { label: "Proyectos", href: "#projects" },
      { label: "Habilidades", href: "#skills" },
      { label: "Experiencia", href: "#experience" },
      { label: "Educación", href: "#education" },
      { label: "Contacto", href: "#contact" },
    ],
    hero: {
      fullName: "Darío Vera Muñoz",
      title: "Ingeniero Informático · Desarrollador Fullstack",
      tagline: "Construyo sistemas que funcionan y experiencias que importan.",
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
          period: "Mar 2021 – Jul 2023",
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
        name: "PropiedadesRM",
        year: "2026",
        description:
          "Plataforma de bienes raíces para venta y arriendo en Chile, con panel de administración completo. Incluye catálogo público con animaciones, gestión de imágenes en la nube y autenticación para administradores.",
        highlights: [
          "Catálogo público con hero parallax, scroll reveal y estados de propiedad (disponible, vendida, arrendada)",
          "ISR con revalidate cada 60s para propiedades destacadas en home",
          "Panel admin con CRUD completo, upload a Supabase Storage y validación de imágenes (MIME, tamaño, aspecto)",
          "Multi-admin configurable por env var y SEO con metadatos dinámicos, Open Graph y Schema.org JSON-LD",
        ],
        tech: ["Next.js", "React", "TypeScript", "Supabase", "Tailwind CSS", "ISR"],
        imageUrl: "/images/projects/propiedadesRM.png",
        githubUrl: "https://github.com/dariovm96/propiedades-rm",
        demoUrl: "https://propiedades-rm.vercel.app/",
        isCurrentSite: false,
      },
      {
        name: "Portafolio React",
        year: "2026",
        description:
          "Portafolio personal diseñado y desarrollado desde cero con enfoque en arquitectura frontend, animaciones accesibles y despliegue continuo.",
        highlights: [
          "Arquitectura component-driven inspirada en Atomic Design",
          "Animaciones con Framer Motion respetando prefers-reduced-motion",
          "Deploy continuo en Vercel con integración a rama main",
          "Diseño mobile-first con Tailwind CSS y sistema de tokens de color",
        ],
        tech: ["React", "Vite", "Tailwind CSS", "Framer Motion", "EmailJS", "Vercel"],
        imageUrl: "/images/projects/portfolio.png",
        githubUrl: "https://github.com/dariovm96/portfolio-dario",
        isCurrentSite: true,
      },
      {
        name: "GS Motors Bot",
        year: "2026",
        description:
          "Automatización para un taller mecánico real que opera vía Telegram. Interpreta mensajes en lenguaje natural con IA para registrar, cerrar y consultar citas directamente en Google Sheets, sin formularios ni interfaces.",
        highlights: [
          "LLM (Llama 3.3 70B vía Groq) extrae datos estructurados desde mensajes descriptivos en lenguaje natural",
          "Flujo de ingreso: genera ID único, registra cliente, vehículo, servicio, fecha y hora en Google Sheets",
          "Flujo de cierre: detecta keywords (ENTREGADO, FINALIZADO) y actualiza la fila con servicios realizados, kilometraje y fecha de entrega",
          "Comandos de consulta vía Telegram: agenda del día, resumen semanal y búsqueda de cliente por nombre",
          "Nodos JavaScript personalizados para parsing de respuestas LLM, generación de IDs, filtrado con fuzzy matching y normalización Unicode, y construcción de mensajes Telegram",
        ],
        tech: ["n8n", "Llama 3.3", "Telegram API", "Google Sheets", "Railway", "Docker"],
        imageUrl: "/images/projects/gs-motors.png",
        githubUrl: null,
        demoUrl: null,
        isCurrentSite: false,
      },
    ],
    contact: {
      heading: "¿Trabajamos juntos?",
      channels: [
        { type: "email", label: "Email", href: "mailto:darioveramunoz@gmail.com" },
        { type: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/dario-veram" },
        { type: "github", label: "GitHub", href: "https://github.com/dariovm96" },
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
    ui: {
      about: {
        sectionTitle: "Sobre mí",
        professionalProfile: "Perfil profesional",
        personalProfile: "Perfil personal",
        interests: "Intereses",
      },
      skills: {
        sectionTitle: "Habilidades",
      },
      experience: {
        sectionTitle: "Experiencia",
        hideAchievements: "Ocultar logros",
        showAchievements: "Ver {n} logros",
      },
      education: {
        sectionTitle: "Formación Académica",
        degrees: "TÍTULOS Y GRADOS",
        certsAndCourses: "CERTIFICACIONES & CURSOS",
        certifications: "CERTIFICACIONES",
        courses: "CURSOS",
        viewCredential: "Ver credencial ↗",
        comingSoon: "Próximamente",
      },
      projects: {
        sectionTitle: "Proyectos",
        thisSite: "✦ Este sitio",
        githubLabel: "GitHub",
        demoLabel: "Demo",
        githubAriaLabel: "GitHub de {name}",
        demoAriaLabel: "Demo de {name}",
        imageAlt: "Vista previa de {name}",
        fallbackAlt: "Fallback visual {name}",
      },
    },
  },

  en: {
    nav: [
      { label: "About", href: "#about" },
      { label: "Projects", href: "#projects" },
      { label: "Skills", href: "#skills" },
      { label: "Experience", href: "#experience" },
      { label: "Education", href: "#education" },
      { label: "Contact", href: "#contact" },
    ],
    hero: {
      fullName: "Darío Vera Muñoz",
      title: "Software Engineer · Fullstack Developer",
      tagline: "I build systems that work and experiences that matter.",
      ctas: [
        { label: "View projects", href: "#projects", variant: "primary" },
        { label: "Contact me", href: "#contact", variant: "secondary" },
      ],
      location: "Valparaíso, Chile",
    },
    about: {
      professionalSummary:
        "As a Software Engineer, I specialize in backend development with PHP and Python/Django, building scalable and robust solutions. Lately I've been deepening my focus on process automation, an area I'm increasingly integrating into my work.",
      personalSummary:
        "Outside of code I enjoy music, video games, traveling, and life in Chile alongside my cats, friends, and family.",
      interests: ["🎮 Gaming", "🐱 Cats", "✈️ Travel", "💻 Tech"],
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
          name: "Databases",
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
          name: "Tools",
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
        role: "Fullstack Developer",
        company: "COSOF",
        location: "Valparaíso, Chile",
        mode: "Remote",
        period: "Mar 2024 – Mar 2025",
        stack: ["PHP", "JavaScript", "MySQL", "GitHub"],
        achievements: [
          "Participated in requirements analysis and gathering to optimize modules of the MIDAS platform (MINSAL).",
          "Developed new features with a focus on code quality, efficiency, and user experience.",
          "Optimized SQL queries and stored procedures in MySQL to improve load times.",
          "Contributed to the platform's technology upgrade and participated in technical follow-up meetings.",
          "Managed corrective/evolutionary maintenance and ticket resolution in a production environment.",
        ],
      },
      {
        role: "Backend Developer (Internship)",
        company: "Guías y Scouts Chile",
        location: "Valparaíso, Chile",
        mode: "Remote",
        period: "Jan 2022 – Mar 2022",
        stack: [".NET Core", "C#", "MySQL", "GitHub"],
        achievements: [
          "Designed and developed RESTful APIs for efficient integration between the system and the database.",
          "Identified database structure issues and proposed improvements for performance and organization.",
          "Implemented unit and integration tests to ensure API quality.",
          "Documented APIs and applied collaborative versioning best practices with GitHub.",
        ],
      },
    ],
    education: {
      degrees: [
        {
          icon: "🎓",
          typeBadge: "Engineering",
          title: "Computer Engineering",
          institution: "Instituto Profesional DUOC UC",
          period: "Mar 2021 – Dec 2024",
          location: "Valparaíso, Chile",
          status: "Graduated",
        },
        {
          icon: "📋",
          typeBadge: "Technical",
          title: "Computer Programmer Analyst",
          institution: "Instituto Profesional DUOC UC",
          period: "Mar 2021 – Jul 2023",
          location: "Valparaíso, Chile",
          status: "Graduated",
        },
      ],
      certifications: [
        {
          icon: "🏅",
          typeBadge: "Certification",
          title: "CISCO IT Essentials",
          entity: "Cisco Networking Academy",
          period: "Aug 2017 – Dec 2017",
          credentialUrl: null,
        },
      ],
      courses: [
        {
          icon: "🤖",
          typeBadge: "Course",
          title: "Introduction to AI Development",
          entity: "Online platform",
          period: "Oct 2025",
          credentialUrl: null,
        },
      ],
    },
    projects: [
      {
        name: "PropiedadesRM",
        year: "2026",
        description:
          "Real estate platform for property sales and rentals in Chile, featuring a full admin panel. Includes a public catalog with animations, cloud image management, and admin authentication.",
        highlights: [
          "Public catalog with hero parallax, scroll reveal, and property status tags (available, sold, rented)",
          "ISR with 60s revalidation for featured properties on the home page",
          "Full CRUD admin panel with Supabase Storage uploads and image validation (MIME type, size, aspect ratio)",
          "Multi-admin support via env var and SEO with dynamic metadata, Open Graph, and Schema.org JSON-LD",
        ],
        tech: ["Next.js", "React", "TypeScript", "Supabase", "Tailwind CSS", "ISR"],
        imageUrl: "/images/projects/propiedadesRM.png",
        githubUrl: "https://github.com/dariovm96/propiedades-rm",
        demoUrl: "https://propiedades-rm.vercel.app/",
        isCurrentSite: false,
      },
      {
        name: "React Portfolio",
        year: "2025",
        description:
          "Personal portfolio designed and built from scratch with a focus on frontend architecture, accessible animations, and continuous deployment.",
        highlights: [
          "Component-driven architecture inspired by Atomic Design",
          "Animations with Framer Motion respecting prefers-reduced-motion",
          "Continuous deployment on Vercel integrated with the main branch",
          "Mobile-first design with Tailwind CSS and a color token system",
        ],
        tech: ["React", "Vite", "Tailwind CSS", "Framer Motion", "EmailJS", "Vercel"],
        imageUrl: "/images/projects/portfolio.png",
        githubUrl: "https://github.com/dariovm96/portfolio-dario",
        isCurrentSite: true,
      },
      {
        name: "GS Motors Bot",
        year: "2026",
        description:
          "Automation for a real auto repair shop operating via Telegram. Uses AI to interpret natural language messages and register, close, and query appointments directly in Google Sheets. No forms, no interfaces.",
        highlights: [
          "LLM (Llama 3.3 70B via Groq) extracts structured data from free-form descriptive messages",
          "Intake flow: generates a unique ID and logs client, vehicle, service, date, and time to Google Sheets",
          "Closing flow: detects keywords (DELIVERED, DONE) and updates the row with services performed, mileage, and delivery date",
          "Telegram query commands: daily agenda, weekly summary, and client lookup by name",
          "Custom JavaScript nodes for LLM response parsing, ID generation, fuzzy matching with Unicode normalization, and Telegram message formatting",
        ],
        tech: ["n8n", "Llama 3.3", "Telegram API", "Google Sheets", "Railway", "Docker"],
        imageUrl: "/images/projects/gs-motors.png",
        githubUrl: null,
        demoUrl: null,
        isCurrentSite: false,
      },
    ],
    contact: {
      heading: "Work together?",
      channels: [
        { type: "email", label: "Email", href: "mailto:darioveramunoz@gmail.com" },
        { type: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/dario-veram" },
        { type: "github", label: "GitHub", href: "https://github.com/dariovm96" },
      ],
      form: {
        fields: [
          { name: "name", label: "Name", type: "text", required: true },
          { name: "email", label: "Email", type: "email", required: true },
          { name: "message", label: "Message", type: "textarea", required: true },
        ],
        submitLabel: "Send message",
      },
      location: "Valparaíso, Chile",
    },
    footer: {
      copyright: "© 2026 Darío Vera Muñoz · Hecho con 💚 en Chile",
    },
    ui: {
      about: {
        sectionTitle: "About me",
        professionalProfile: "Professional profile",
        personalProfile: "Personal profile",
        interests: "Interests",
      },
      skills: {
        sectionTitle: "Skills",
      },
      experience: {
        sectionTitle: "Experience",
        hideAchievements: "Hide achievements",
        showAchievements: "View {n} achievements",
      },
      education: {
        sectionTitle: "Academic background",
        degrees: "DEGREES & TITLES",
        certsAndCourses: "CERTIFICATIONS & COURSES",
        certifications: "CERTIFICATIONS",
        courses: "COURSES",
        viewCredential: "View credential ↗",
        comingSoon: "Coming soon",
      },
      projects: {
        sectionTitle: "Projects",
        thisSite: "✦ This site",
        githubLabel: "GitHub",
        demoLabel: "Demo",
        githubAriaLabel: "GitHub for {name}",
        demoAriaLabel: "Demo for {name}",
        imageAlt: "Preview of {name}",
        fallbackAlt: "Fallback visual {name}",
      },
    },
  },
};

export default content;
