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
        year: "2024",
        description:
          "Plataforma para administración de recursos y procesos operativos internos con foco en estabilidad y escalabilidad.",
        tech: ["Laravel", "MySQL"],
        githubUrl: "https://github.com/dariovm96/erp-gestion",
      },
      {
        name: "Portfolio React",
        year: "2025",
        description:
          "Portfolio personal diseñado y desarrollado desde cero con enfoque en arquitectura frontend, animaciones accesibles y despliegue continuo.",
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
        name: "API Gateway Custom",
        year: "2024",
        description: "Orquestación de servicios para comunicación entre plataformas distribuidas.",
        tech: [".NET Core", "APIs REST"],
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
      tagline: "I build systems that work — and experiences that matter.",
      ctas: [
        { label: "View projects", href: "#projects", variant: "primary" },
        { label: "Contact me", href: "#contact", variant: "secondary" },
      ],
      location: "Valparaíso, Chile",
    },
    about: {
      professionalSummary:
        "As a Software Engineer, I specialize in backend development with PHP and Python/Django, building scalable and robust solutions. Lately I've been deepening my focus on process automation — an area I'm increasingly integrating into my work.",
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
          period: "Mar 2021 – Dec 2024",
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
        name: "ERP Management System",
        year: "2024",
        description:
          "Platform for managing internal resources and operational processes with a focus on stability and scalability.",
        tech: ["Laravel", "MySQL"],
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
         name: "Custom API Gateway",
        year: "2024",
        description: "Service orchestration for communication between distributed platforms.",
        tech: [".NET Core", "REST APIs"],
      },
    ],
    contact: {
      heading: "Work together?",
      channels: [
        { type: "email", label: "Email", href: "mailto:contacto@dariodvm.dev" },
        { type: "linkedin", label: "LinkedIn", href: "#" },
        { type: "github", label: "GitHub", href: "#" },
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
