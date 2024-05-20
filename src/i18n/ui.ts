export const languages = {
  en: 'English',
  es: 'Español',
};

export const defaultLang = 'en';

export const showDefaultLang = false;

const year = new Date().getFullYear();

export const ui = {
  en: {
    // Aria Keys

    'aria.home-link': 'Link to home page',
    'aria.contact-us-link': 'Link to contact us page',
    'aria.logo': 'Logo de Crazy Imagine Software',
    'aria.facebook': "Facebook's Logo",
    'aria.instagram': "Instagram's Logo",
    'aria.linkedin': "LinkedIn's Logo",
    'aria.twitter': "X's Logo",
    'aria.upwork': "Upwork's Logo",
    'aria.youtube': "Youtube's Logo",
    'aria.facebook-link': "Crazy Imagine Software's Facebook, it will open in a new tab",
    'aria.instagram-link': "Crazy Imagine Software's Instagram, it will open in a new tab",
    'aria.linkedin-link': "Crazy Imagine Software's LinkedIn, it will open in a new tab",
    'aria.twitter-link': "Crazy Imagine Software's X, it will open in a new tab",
    'aria.upwork-link': "Crazy Imagine Software's Upwork, it will open in a new tab",
    'aria.youtube-link': "Crazy Imagine Software's Youtube, it will open in a new tab",
    'aria.menu-icon': 'Icon to open the menu on mobile',
    'aria.contact-email':
      "Link to open your preferred email application and send an email to Crazy Imagine Software's contact email",

    // Img Alt Keys
    'alt.logo': 'Crazy Imagine Software Logo',

    // Common Keys
    'common.hello': 'Hello',
    'common.contact-us': 'Contact Us',
    'common.terms-and-conditions': 'Terms & Conditions',
    'common:privacy-policy': 'Privacy Policy',

    // Hero Keys
    'hero.home-title': 'Ideas beyond your imagination',
    'hero.home-subtitle': 'Teamwork is the heart of everything we do',
    'hero.home-button': 'Schedule a call',
    'hero.home-img-alt': "Flag with Crazy Imagine Software's logo",

    // Footer Keys
    'footer.all-rights-reserved': `©${year} Crazy Imagine, All Rights Reserved`,
    'footer.text':
      'We are dedicated to designing and developing custom websites and applications that stand out for their exceptional beauty and functionality.',
    'footer.location': 'Location',
    'footer.social-links': 'Social Links',
    'footer.links': 'Links',

    // Nav Keys
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.services': 'Services',
    'nav.blog': 'Blog',
    'nav.work-with-us': 'Work with us',
  },
  es: {
    // Aria keys
    'aria.home-link': 'Enlace a la página de inicio',
    'aria.contact-us-link': 'Enlace a la página de contáctanos',
    'aria.logo': "Crazy Imagine Software's Logo",
    'aria.facebook': 'Logo de Facebook',
    'aria.instagram': 'Logo de Instagram',
    'aria.linkedin': 'Logo de LinkedIn',
    'aria.twitter': 'Logo de X',
    'aria.upwork': 'Logo de Upwork',
    'aria.youtube': 'Logo de Youtube',
    'aria.facebook-link': 'Facebook de Crazy Imagine Software, se abrirá en una nueva pestaña',
    'aria.instagram-link': 'Instagram de Crazy Imagine Software, se abrirá en una nueva pestaña',
    'aria.linkedin-link': 'LinkedIn de Crazy Imagine Software, se abrirá en una nueva pestaña',
    'aria.twitter-link': 'X de Crazy Imagine Software, se abrirá en una nueva pestaña',
    'aria.upwork-link': 'Upwork de Crazy Imagine Software, se abrirá en una nueva pestaña',
    'aria.youtube-link': 'Youtube de Crazy Imagine Software, se abrirá en una nueva pestaña',
    'aria.menu-icon': 'Ícono para abrir el menú en móvil',
    'aria.contact-email':
      'Enlace para enviar un correo electrónico al correo de contact de Crazy Imagine Software',

    // Various Img Alt Keys
    'alt.logo': 'Logo de Crazy Imagine Software',

    // Common Keys
    'common.hello': 'Hola',
    'common.contact-us': 'Contáctanos',
    'common.terms-and-conditions': 'Términos y Condiciones',
    'common:privacy-policy': 'Política de Privacidad',

    // Hero Keys
    'hero.home-title': 'Ideas más allá de tu imaginación',
    'hero.home-subtitle': 'El trabajo en equipo es el corazón de todo lo que hacemos',
    'hero.home-button': 'Programar una llamada',
    'hero.home-img-alt': 'Bandera con el logo de Crazy Imagine Software',

    // Footer Keys
    'footer.all-rights-reserved': `©${year} Crazy Imagine, Todos los derechos reservados`,
    'footer.text':
      'Nos dedicamos a diseñar y desarrollar sitios web y aplicaciones personalizadas que destacan por su belleza y funcionalidad excepcional.',
    'footer.location': 'Ubicación',
    'footer.social-links': 'Redes Sociales',
    'footer.links': 'Enlaces',

    // Nav Keys
    'nav.about': 'Sobre nosotros',
    'nav.projects': 'Proyectos',
    'nav.services': 'Servicios',
    'nav.blog': 'Blog',
    'nav.work-with-us': 'Trabaja con nosotros',
  },
} as const;
