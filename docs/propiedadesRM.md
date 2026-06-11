Análisis del proyecto
PropiedadesRM es un sitio web de bienes raíces desarrollado para un cliente real con foco en venta y arriendo de propiedades en la Región Metropolitana y O'Higgins, Chile. El modelo de negocio es trato directo con el dueño, sin intermediarios.
Lo que hace el sistema:
Frontend público:
- Landing page con hero parallax, scroll reveal animations y CTA de contacto (teléfono + WhatsApp)
- Catálogo de propiedades con detalle individual, galería de imágenes y highlights por propiedad
- Sección de propiedades destacadas en home (ISR con revalidate cada 60s)
- Video embebido de propiedad top
- Estados de propiedad: disponible, vendida, arrendada
Panel de administración:
- CRUD completo de propiedades protegido por sesión de Supabase
- Upload de imágenes a Supabase Storage con validación de MIME type, tamaño (máx. 5MB) y relación de aspecto
- Multi-admin configurable por env var (ADMIN_EMAILS)
- Gestión de highlights por propiedad
SEO (planificado/en ejecución):
- Metadatos dinámicos, Open Graph, Schema.org JSON-LD
- Sitemap XML dinámico, robots.txt
- URLs semánticas con jerarquía geográfica
---
Texto para el portfolio
Acá van dos versiones: una corta (para cards) y una larga (para página de detalle del proyecto).
---
Versión corta (para card de portfolio)
> Propiedades y Asesorías RM — Plataforma de bienes raíces para venta y arriendo en Chile, con panel de administración completo. Desarrollada con Next.js 16, React 19, Supabase y Tailwind CSS. Incluye catálogo público con animaciones, gestión de imágenes en la nube y sistema de autenticación para administradores.
---
### Tags/chips sugeridos para el portfolio
`Next.js 16` `React 19` `TypeScript` `Supabase` `Tailwind CSS v4` `App Router` `ISR` `Full-stack` `Admin Panel` `SEO` `Real Estate`
---
Versión larga (para página de detalle)
> Propiedades y Asesorías RM es una plataforma web de bienes raíces desarrollada para un cliente real del mercado inmobiliario chileno. El sitio permite publicar y gestionar propiedades en venta y arriendo con un enfoque en trato directo entre propietario e interesado, eliminando intermediarios.
>
> El proyecto abarca dos grandes capas: un frontend público orientado a la conversión, con una landing page de alto impacto (hero con efecto parallax, animaciones de scroll reveal, sección de propiedades destacadas y video embebido), catálogo completo con fichas individuales por propiedad, galería de imágenes y contacto directo por teléfono o WhatsApp; y un panel de administración privado donde el cliente gestiona el inventario de propiedades de forma autónoma, carga imágenes con validación automática (formato, tamaño y relación de aspecto), y controla el estado de cada propiedad (disponible, vendida, arrendada).
>
> La arquitectura está pensada para rendimiento y escalabilidad: se usa Incremental Static Regeneration (ISR) en la home para garantizar velocidad sin sacrificar datos frescos, Supabase como backend-as-a-service con PostgreSQL y Storage para la gestión de imágenes en la nube, y un plan SEO estructurado con metadatos dinámicos, Open Graph y Schema.org para posicionamiento orgánico en Google.
>
> Stack tecnológico: Next.js 16 (App Router) · React 19 · TypeScript · Supabase (PostgreSQL + Storage) · Tailwind CSS v4 · Sonner · Vercel


---