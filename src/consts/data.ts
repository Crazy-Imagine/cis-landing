import type { OurProcessProps } from '@/types/OurServicesLanding';

export const ourServices = [
  {
    id: 1,
    title: `Desarrollo en WordPress`,
    image: '/src/assets/landing/landing-satelit.webp',
    content: `
         Transforma tu presencia en línea con nuestro equipo de desarrollo en WordPress.
        Ofrecemos:
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
    content: `
          Nuestros especialistas crean plataformas de comercio adaptadas a las necesidades de cada empresa, como:
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
    content: ` 
          Ofrecemos soluciones web personalizadas, creando sitios funcionales y adaptativos:
    
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
    content: ` 
          Ofrecemos aplicaciones móviles innovadoras y personalizadas para llevar tu negocio al próximo nivel:
      
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
    content: ` 
         Mantenemos y optimizamos tu sitio web garantizando su funcionamiento continuo y seguridad:
      
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
    content: ` 
         Impulsa tu negocio en línea con estrategias de marketing digital efectivas:
       
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
    content: ` 
        Optimizamos tus operaciones de desarrollo con prácticas ágiles de DevOps en AWS:
        <br/>  <br/> Automatización, seguridad y escalabilidad.
        
        
        `,
  },
  {
    id: 8,
    title: 'Diseño UI/UX',
    image: '/src/assets/landing/alien.webp',
    content: ` 
         Diseño visual atractivo y centrado en el usuario:
       
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
    content: ` 
        Servicios de soporte personalizados para cubrir todas las necesidades operativas:
      
        <ul class="mt-4 ">
            <li>Gestión de proyectos  </li>
            <li>Asistencia técnica  </li>
          </ul>
        `,
  },
];

export const benefits = [
  {
    image: 'group',
    title: 'Equipo Especializado',
    content: 'Profesionales en desarrollo web con experiencia en proyectos de diferentes sectores.',
  },
  {
    image: 'support',
    title: 'Soporte Continuo',
    content: 'Ofrecemos soporte post-lanzamiento para ajustes y mejoras en tu sitio web.',
  },
  {
    image: 'flexibility',
    title: 'Flexibilidad y Escalabilidad',
    content:
      'Desde sitios informativos hasta complejas tiendas en línea, diseñamos soluciones que crecen con tu negocio.',
  },
  {
    image: 'transparency',
    title: 'Transparencia y Comunicación',
    content: 'Nos aseguramos de mantenerte al tanto del progreso del proyecto en cada etapa.',
  },
];

export const OUR_PROCESS: OurProcessProps[] = [
  {
    id: 1,
    title: '1. Consultoría y Planificación',
    image: '/landing/group2.webp',
    content: 'Analizamos tus necesidades y establecemos un plan de acción.',
  },
  {
    id: 2,
    title: '2. Consultoría y Planificación',
    image: '/landing/develop.webp',
    content: 'Creamos soluciones que combinan funcionalidad y estética.',
  },
  {
    id: 3,
    title: '3. Consultoría y Planificación',
    image: '/landing/test.webp',
    content: 'Aseguramos que cada detalle esté optimizado antes del lanzamiento.',
  },
  {
    id: 4,
    title: '4. Lanzamiento y Mantenimiento',
    image: '/landing/deploy.webp',
    content: 'Implementación y soporte para garantizar el éxito continuo de tu proyecto.',
  },
];
