import { useTranslations } from '@/i18n/utils';
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
    title: '1. Acceso Rápido a Talento y Flexibilidad',
    image: '/landing/astronauta.webp',
    content:
      'Permite incorporar rápidamente profesionales especializados y ajustar el tamaño de su equipo según las necesidades del proyecto, escalando de forma eficiente.',
  },
  {
    id: 2,
    title: '2. Reducción de Costos y Riesgos',
    image: '/landing/meteorit.webp',
    content:
      'Evita los gastos significativos de la contratación tradicional y minimiza el riesgo de incorporaciones inadecuadas a largo plazo.',
  },
  {
    id: 3,
    title: '3. Control y Eficiencia Aumentada',
    image: '/landing/telescopio.webp',
    content:
      'Mantiene la gestión directa de sus proyectos mientras integra talento que acelera el desarrollo y mejora la productividad.',
  },
  {
    id: 4,
    title: '4. Foco Estratégico y Diversificación',
    image: '/landing/satelit.webp',
    content:
      'Permite a su empresa concentrarse en sus actividades principales al delegar la búsqueda de talento, enriqueciendo su equipo con nuevas perspectivas y habilidades.',
  },
];

export const OUR_BENEFITS_OUTSOURCING: OurProcessProps[] = [
  {
    id: 1,
    title: '1. Acceso a un Equipo Multidisciplinario',
    image: '/landing/satelite.webp',
    content:
      'No solo obtienes desarrolladores, sino un equipo completo de expertos: Project Managers, Diseñadores UI/UX y especialistas en QA.',
  },
  {
    id: 2,
    title: '2. Costo Fijo y Predecible',
    image: '/landing/cohete.webp',
    content:
      'Trabaja con un presupuesto cerrado para tu proyecto, eliminando el riesgo de sobrecostes inesperados y dándote total control financiero.',
  },
  {
    id: 3,
    title: '3. Gestión Profesional y Transparente',
    image: '/landing/planeta.webp',
    content:
      'Nosotros nos encargamos de la gestión completa del proyecto, pero tú mantienes la visibilidad total con informes de avance claros y comunicación constante.',
  },
  {
    id: 4,
    title: '4. Libera a tu Equipo Intern',
    image: '/landing/telescopio-2.webp',
    content:
      'Permite que tu equipo principal se concentre en sus tareas estratégicas y el crecimiento del negocio, mientras nosotros nos encargamos de la ejecución tecnológica.',
  },
];

export function OUR_BENEFITS_CUSTOM_SOFTWARE_DEVELOPMENT(urlLang: 'es' | 'en'): OurProcessProps[] {
  const t = useTranslations(urlLang);

  return [
    {
      id: 1,
      title: t('custom-development.benefits-1'),
      image: '/landing/satelit.webp',
      content: t('custom-development.benefits-1-description'),
    },
    {
      id: 2,
      title: t('custom-development.benefits-2'),
      image: '/landing/meteorit.webp',
      content: t('custom-development.benefits-2-description'),
    },
    {
      id: 3,
      title: t('custom-development.benefits-3'),
      image: '/landing/repare-satelit.webp',
      content: t('custom-development.benefits-3-description'),
    },
    {
      id: 4,
      title: t('custom-development.benefits-4'),
      image: '/landing/planeta.webp',
      content: t('custom-development.benefits-4-description'),
    },
  ];
}

export function OUR_PROCESS_CUSTOM_SOFTWARE_DEVELOPMENT(urlLang: 'es' | 'en'): OurProcessProps[] {
  const t = useTranslations(urlLang);

  return [
    {
      id: 1,
      title: t('custom-development.process-1'),
      content: t('custom-development.process-1-description'),
      image: '/landing/process-1.webp',
    },
    {
      id: 2,
      title: t('custom-development.process-2'),
      content: t('custom-development.process-2-description'),
      image: '/landing/process-2.webp',
    },
    {
      id: 3,
      title: t('custom-development.process-3'),
      content: t('custom-development.process-3-description'),
      image: '/landing/process-3.webp',
    },
    {
      id: 4,
      title: t('custom-development.process-4'),
      content: t('custom-development.process-4-description'),
      image: '/landing/process-4.webp',
    },
    {
      id: 5,
      title: t('custom-development.process-5'),
      content: t('custom-development.process-5-description'),
      image: '/landing/process-5.webp',
    },
  ];
}

export function OUR_PROCESS_LEAD_MAGNET(urlLang: 'es' | 'en'): OurProcessProps[] {
  const t = useTranslations(urlLang);

  return [
    {
      id: 1,
      title: t('lead-magnet.questions-1'),
      content: t('lead-magnet.questions-1-description'),
      image: '/landing/lead-magnet-1.webp',
    },
    {
      id: 2,
      title: t('lead-magnet.questions-2'),
      content: t('lead-magnet.questions-2-description'),
      image: '/landing/lead-magnet-2.webp',
    },
    {
      id: 3,
      title: t('lead-magnet.questions-3'),
      content: t('lead-magnet.questions-3-description'),
      image: '/landing/lead-magnet-3.webp',
    },
    {
      id: 4,
      title: t('lead-magnet.questions-4'),
      content: t('lead-magnet.questions-4-description'),
      image: '/landing/lead-magnet-4.webp',
    },
  ];
}

export function THE_CLARITY_YOU_NEED(urlLang: 'es' | 'en'): OurProcessProps[] {
  const t = useTranslations(urlLang);

  return [
    {
      id: 1,
      title: t('lead-magnet.the-clarity-you-need-1'),
      content: t('lead-magnet.the-clarity-you-need-1-description'),
      image: '/landing/lead-magnet-5.webp',
    },
    {
      id: 2,
      title: t('lead-magnet.the-clarity-you-need-2'),
      content: t('lead-magnet.the-clarity-you-need-2-description'),
      image: '/landing/lead-magnet-6.webp',
    },
    {
      id: 1,
      title: t('lead-magnet.the-clarity-you-need-3'),
      content: t('lead-magnet.the-clarity-you-need-3-description'),
      image: '/landing/lead-magnet-7.webp',
    },
  ];
}
