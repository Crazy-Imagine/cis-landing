import { useTranslations } from '@/i18n/utils';
import type { ExecutionSpeedProps, OurProcessProps } from '@/types/OurServicesLanding';

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

export function OUR_PROCESS_IA(urlLang: 'es' | 'en'): OurProcessProps[] {
  const t = useTranslations(urlLang);

  return [
    {
      id: 1,
      title: 'Tasa de Errores:',
      content: 'Cada factura o documento procesado manualmente añade riesgo y costosas auditorías.',
      image: '/landing/computer-error.webp',
    },
    {
      id: 2,
      title: 'Burnout:',
      content:
        'Tu equipo de soporte dedica horas a responder preguntas que la IA ya resolvió 1000 veces.',
      image: '/landing/Burnout.webp',
    },
    {
      id: 3,
      title: 'Tiempo Perdido:',
      content:
        'Cada hora que un vendedor dedica a data entry es una oportunidad perdida de cerrar un negocio de alto valor.',
      image: '/landing/loss-time.webp',
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
export function EXECUTION_SPEED(urlLang: 'es' | 'en'): ExecutionSpeedProps[] {
  const t = useTranslations(urlLang);

  return [
    {
      id: 1,
      title: 'Lleva la Delantera (Competencia):',
      content:
        'Mientras la competencia sigue invirtiendo en más nómina para escalar, tú inviertes en Inteligencia. Tu capacidad de procesar datos, atender clientes e investigar el mercado se multiplica sin tener que duplicar tu equipo.',
    },
    {
      id: 2,
      title: 'El Foco en el Core Business (Eficiencia):',
      content:
        'Integramos Agentes Autónomos que se conectan a tu CRM, ERP y Slack. Estos "empleados digitales" gestionan la calificación de leads, auditan gastos y generan reportes. Tu equipo de planta queda liberado para el trabajo creativo y estratégico que solo los humanos pueden hacer.',
    },
    {
      id: 1,
      title: 'Caso Práctico Rápido (Ahorro de Dinero):',
      content:
        'Un Agente de IA para el soporte al cliente reduce el tiempo promedio de respuesta de 48 horas a 5 segundos, lo que reduce la frustración del cliente y ahorra el salario de 2 a 3 empleados de soporte en el primer año.',
    },
  ];
}
