import type { OurProcessProps } from "@/types/OurServicesLanding";

export const ourServices = [
  {
    id: 1,
    title: `Desarrollo en WordPress`,
    image: '/src/assets/landing/landing-satelit.webp',
    content: ` <Typography class=" " as="p" variant="h3">
         Transforma tu presencia en línea con nuestro equipo de desarrollo en WordPress
        </Typography>
        <Typography class=" my-10" as="span" variant="h3">
          Ofrecemos:
        </Typography>
        <ul>
            <li>Diseño personalizado </li>
            <li>Optimización SEO  </li>
            <li>Diseño responsive </li>
          </ul>
        `,
  },
  {
    id: 2,
    title: `E-commerce con WooCommerce`,
    image: '/src/assets/landing/jupiter.webp',
    content: ` <Typography class="mb-2 " as="p" variant="h3">
          Nuestros especialistas crean plataformas de comercio adaptadas a las necesidades de cada empresa. Como:
        </Typography>
        <ul>
            <li>Integración de pagos </li>
            <li>Gestión de inventario  </li>
            <li>Experiencia de usuario optimizada </li>
          </ul>
        `,
  },
  {
    id: 3,
    title: 'Servicio de Desarrollo de Software Especializado',
    image: '/src/assets/landing/astronauta.webp',
    content: ` <Typography class="mb-2 " as="p" variant="h3">
          Ofrecemos soluciones web personalizadas, creando sitios funcionales y adaptativos:
        </Typography>
        <ul class="mt-4 ">
            <li>Diseño a medida </li>
            <li>Optimización y rendimiento  </li>
          </ul>
        `,
  },
  {
    id: 4,
    title: 'Desarrollo de Aplicaciones Móviles',
    image: '/src/assets/landing/landing-meteorit.webp',
    content: ` <Typography class="mb-2 " as="p" variant="h3">
          Ofrecemos aplicaciones móviles innovadoras y personalizadas para llevar tu negocio al próximo nivel:
        </Typography>
        <ul class="mt-4 ">
            <li>Aplicaciones multiplataforma </li>
            <li>Experiencia de usuario  </li>
          </ul>
        `,
  },
  {
    id: 5,
    title: 'Mantenimiento Web',
    image: '/src/assets/landing/astronauta-2.webp',
    content: ` <Typography class="mb-2 " as="p" variant="h3">
         Mantenemos y optimizamos tu sitio web garantizando  su funcionamiento continuo y seguridad:
        </Typography>
        <ul class="mt-4 ">
            <li>Monitoreo y soporte continuo </li>
            <li>Actualización de contenido  </li>
          </ul>
        `,
  },
  {
    id: 6,
    title: 'Marketing Digital',
    image: '/src/assets/landing/martian.webp',
    content: ` <Typography class="mb-2 " as="p" variant="h3">
         Impulsa tu negocio en línea con estrategias de marketing digital efectivas:
        </Typography>
        <ul class="mt-4 ">
            <li>SEO </li>
            <li>Redes sociales </li>
            <li>Publicidad PPC </li>
          </ul>
        `,
  },
  {
    id: 7,
    title: 'DevOps y Hosting en AWS',
    image: '/src/assets/landing/satelit.webp',
    content: ` <Typography class="mb-2 " as="p" variant="h3">
        Optimizamos tus operaciones de desarrollo con prácticas ágiles de DevOps en AWS:
        <br/>  <br/> Automatización Seguridad y escalabilidad
        </Typography>
        
        `,
  },
  {
    id: 8,
    title: 'Diseño UI/UX',
    image: '/src/assets/landing/alien.webp',
    content: ` <Typography class="mb-2 " as="p" variant="h3">
         Diseño visuales atractivos y centrados en el usuario:
        </Typography>
        <ul class="mt-4 ">
            <li>Interfaces intuitivas  </li>
            <li>Experiencia mejorada  </li>
          </ul>
        `,
  },
  {
    id: 9,
    title: 'Soporte y Gestión de Proyectos',
    image: '/src/assets/landing/telescopio.webp',
    content: ` <Typography class="mb-2 " as="p" variant="h3">
        Servicios de soporte personalizados para cubrir todas las necesidades operativas:
        </Typography>
        <ul class="mt-4 ">
            <li>Gestión de proyectos  </li>
            <li>Asistencia técnica  </li>
          </ul>
        `,
  },
];

export const benefits = [
  {
    image: '/src/assets/landing/group.webp',
    title: 'Equipo Especializado',
    content: 'Profesionales en desarrollo web con experiencia en proyectos de diferentes sectores'
  },
  {
    image: '/src/assets/landing/support.webp',
    title: 'Soporte Continuo',
    content: 'Ofrecemos soporte post-lanzamiento para ajustes y mejoras en tu sitio web.'
  },
  {
    image: '/src/assets/landing/flexibility.webp',
    title: 'Flexibilidad y Escalabilidad',
    content: 'Desde sitios informativos hasta complejas tiendas en línea, diseñamos soluciones que crecen con tu negocio.'
  },
  {
    image: '/src/assets/landing/transparency.webp',
    title: 'Transparencia y Comunicación',
    content: 'Nos aseguramos de mantenerte al tanto del progreso del proyecto en cada etapa.'
  },
];

export const OUR_PROCESS: OurProcessProps[] = [
  {
    id: 1,
    title: '1. Consultoría y Planificación',
    image: '/src/assets/landing/group2.webp',
    content: 'Analizamos tus necesidades y establecemos un plan de acción.',
  },
  {
    id: 2,
    title: '2. Consultoría y Planificación',
    image: '/src/assets/landing/develop.webp',
    content: 'Creamos soluciones que combinan funcionalidad y estética.',
  },
  {
    id: 3,
    title: '3. Consultoría y Planificación',
    image: '/src/assets/landing/test.webp',
    content: 'Aseguramos que cada detalle esté optimizado antes del lanzamiento.',
  },
  {
    id: 4,
    title: '4. Lanzamiento y Mantenimiento',
    image: '/src/assets/landing/deploy.webp',
    content: 'Implementación y soporte para garantizar el éxito continuo de tu proyecto.',
  },
];