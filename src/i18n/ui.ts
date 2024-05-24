export const languages = {
  en: 'English',
  es: 'Español',
};

export const defaultLang = 'en';

export const showDefaultLang = false;

const year = new Date().getFullYear();

export const ui = {
  en: {
    // SEO
    'SEO.home-title': 'Crazy Imagine Software | Ideas beyond your imagination',
    'SEO.home-description':
      'We are a growing startup with more than 5 years in the market, with experience on mobile and web development, using the most popular Javascript technologies like React js, Angular js, Vue js, Node js and PHP frameworks like Laravel, Code Igniter, Prestashop, and Wordpress.',
    'SEO.about-title': 'Crazy Imagine Software | Our Team is Your Greatest Resource',
    'SEO.about-description': 'Description',

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
    'aria.about-link': 'Link to about page',
    'aria.projects-link': 'Link to projects page',
    'aria.services-link': 'Link to services page',
    'aria.blog-link': 'Link to blog page',
    'aria.work-with-us-link': 'Link to work with us page',

    // Img Alt Keys
    'alt.logo': 'Crazy Imagine Software Logo',
    'alt.light-bulb': 'Light Bulb',

    // About Us Page
    'about.references-title': 'References',
    'about.references-description': 'In-depth testimonials from former and actual clients.',
    'about.faq-title': 'Faq',
    'about.faq-description': 'Know the most frequently asked questions by our clients.',
    'about.roadmap-title': 'Roadmap',
    'about.roadmap-description': 'Our process for designing and developing branding and webflow.',
    'about.meet-the-team-title': 'Meet the team',
    'about.meet-the-team-description': 'Become acquainted with the Management Team.',
    'about.mission-title': 'Mission',
    'about.mission-description': 'We are dedicated to software development to provide a...',
    'about.working-together-title': 'Working together',
    'about.working-together-description':
      'We have a dynamic and diverse mix of full-stack front-end...',
    'about.blog-title': 'Blog',
    'about.blog-description': 'The latest in tech and design tal from our team.',
    'about.who-we-are-title': 'Who we are',
    'about.who-we-are-description': 'We have a dynamic and diverse mix of full-stack, front-end...',
    'about.work-with-us-title': 'Work with us',
    'about.work-with-us-description': 'Our biggest strength is the quality of our team.',

    // Common Keys
    'common.hello': 'Hello',
    'common.contact-us': 'Contact Us',
    'common.terms-and-conditions': 'Terms & Conditions',
    'common:privacy-policy': 'Privacy Policy',
    'common.previous-projects': 'Previous Projects',
    'common.view-project': 'View Project',
    'common.read-more': 'Read More',
    'common.latest-in-tech-talk': 'The latest in tech talk',
    'common.all-projects': 'All Projects',
    'common.partners': 'Partners',
    'common.get-started': 'Get Started',
    'common.reach.out': 'Reach Out',
    'common.imagine-what-we-can-create': 'Imagine what we can create',
    'common.people-who-work-with-us-say': 'People who work with us say',
    'common.google': 'Google',
    'common.rrss': 'RRSS',
    'common.linkedin': 'LinkedIn',
    'common.recommended': 'Recommended',
    'common.other': 'Other',
    'common.web-development': 'Web Development',
    'common.e-commerce': 'E-commerce',
    'common.mobile-apps': 'Mobile Apps',
    'common.customized-development': 'Customized Development',

    // Hero Keys
    'hero.home-title': 'Ideas beyond your imagination',
    'hero.home-subtitle': 'Teamwork is the heart of everything we do',
    'hero.home-button': 'Schedule a call',
    'hero.home-img-alt': "Flag with Crazy Imagine Software's logo",
    'hero.about-title': 'Our Team is Your Greatest Resource',
    'hero.about-subtitle': 'Leading a team of world-class engineers, developers and designers',
    'hero.about-button': 'Contact us',
    'hero.about-img-alt': 'Rocket image',

    // Services Keys
    'services.why-should-you': 'Why Should You',
    'services.choose-us': 'Choose Us',
    'services.we-will-help-you-strategize':
      'We will help you to strategize your web presence, designing and executing sitemaps and wireframes to provide a sleek, elegant, and seamless end-user experience.',
    'services.with-deep-expertise':
      'With deep expertise that spans across the web development spectrum, we can optimize your digital presence at any level.',
    'services.full-stack-development': 'Full-stack Development',
    'services.user-experience': 'User Experience',
    'services.quality-support': 'Quality Support',

    // Contact form
    'forms.submit': 'Submit',
    'forms.name': 'Name',
    'forms.company': 'Company',
    'forms.country': 'Country',
    'forms.email': 'Email Address',
    'forms.phone': 'Phone',
    'forms.comments-questions-schemes': 'Comments/Questions/Schemes',
    'forms.project-type': 'Project Type',
    'forms.how-did-you-find-us': 'How did you find us?',

    // Forms error
    'errors.name-required': 'Name is required',
    'errors.email-is-not-valid': 'Email must be a valid email address',
    'errors.email-required': 'Phone is required',
    'errors.comments-required': 'Comments/Questions/Schemes is required',

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
    // SEO
    'SEO.home-title': 'Crazy Imagine Software | Ideas más allá de tu imaginación',
    'SEO.home-description':
      'Somos una startup en crecimiento con más de 5 años en el mercado, con experiencia en desarrollo móvil y web, utilizando las tecnologías Javascript más populares como React js, Angular js, Vue js, Node js y frameworks PHP como Laravel, Code Igniter, Prestashop, y Wordpress.',
    'SEO.about-title': 'Crazy Imagine Software | Nuestro equipo es su mejor recurso',
    'SEO.about-description': 'Description',

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
    'aria.about-link': 'Enlace a la página de sobre nosotros',
    'aria.projects-link': 'Enlace a la página de proyectos',
    'aria.services-link': 'Enlace a la página de servicios',
    'aria.blog-link': 'Enlace a la página de blog',
    'aria.work-with-us-link': 'Enlace a la página de trabaja con nosotros',

    // Img Alt Keys
    'alt.logo': 'Logo de Crazy Imagine Software',
    'alt.light-bulb': 'Un bombillo',

    // About Us Page
    'about.references-title': 'References',
    'about.references-description': 'In-depth testimonials from former and actual clients.',
    'about.faq-title': 'Faq',
    'about.faq-description': 'Know the most frequently asked questions by our clients.',
    'about.roadmap-title': 'Roadmap',
    'about.roadmap-description': 'Our process for designing and developing branding and webflow.',
    'about.meet-the-team-title': 'Meet the team',
    'about.meet-the-team-description': 'Become acquainted with the Management Team.',
    'about.mission-title': 'Mission',
    'about.mission-description': 'We are dedicated to software development to provide a...',
    'about.working-together-title': 'Working together',
    'about.working-together-description':
      'We have a dynamic and diverse mix of full-stack front-end...',
    'about.blog-title': 'Blog',
    'about.blog-description': 'The latest in tech and design tal from our team.',
    'about.who-we-are-title': 'Who we are',
    'about.who-we-are-description': 'We have a dynamic and diverse mix of full-stack, front-end...',
    'about.work-with-us-title': 'Work with us',
    'about.work-with-us-description': 'Our biggest strength is the quality of our team.',

    // Common Keys
    'common.hello': 'Hola',
    'common.contact-us': 'Contáctanos',
    'common.terms-and-conditions': 'Términos y Condiciones',
    'common:privacy-policy': 'Política de Privacidad',
    'common.previous-projects': 'Proyectos Anteriores',
    'common.view-project': 'Ver Proyecto',
    'common.read-more': 'Leer más',
    'common.latest-in-tech-talk': 'Lo último en tecnología',
    'common.all-projects': 'Todos los proyectos',
    'common.partners': 'Socios Comerciales',
    'common.get-started': 'Empecemos',
    'common.reach.out': 'Contáctanos', // TODO: check translation
    'common.imagine-what-we-can-create': 'Imagina lo que podemos crear',
    'common.people-who-work-with-us-say': 'La gente que trabaja con nosotros dice',
    'common.google': 'Google',
    'common.rrss': 'RRSS',
    'common.linkedin': 'LinkedIn',
    'common.recommended': 'Recomendado',
    'common.other': 'Otro',
    'common.web-development': 'Desarrollo Web',
    'common.e-commerce': 'E-commerce',
    'common.mobile-apps': 'Aplicaciones Móviles',
    'common.customized-development': 'Desarrollo a Medida',

    // Hero Keys
    'hero.home-title': 'Ideas más allá de tu imaginación',
    'hero.home-subtitle': 'El trabajo en equipo es el corazón de todo lo que hacemos',
    'hero.home-button': 'Programar una llamada',
    'hero.home-img-alt': 'Bandera con el logo de Crazy Imagine Software',
    'hero.about-title': 'Nuestro Equipo es tu mejor recurso',
    'hero.about-subtitle': 'Nuestro equipo excepcional está distribuido en toda América Latina',
    'hero.about-button': 'Contáctanos',
    'hero.about-img-alt': 'Imagen de un cohete',

    // Services
    'services.why-should-you': 'Por qué deberías',
    'services.choose-us': 'Elegirnos',
    'services.we-will-help-you-strategize':
      'Te ayudaremos a crear una estrategia para su presencia en la web, diseñando y ejecutando mapas de sitio y esquemas para proporcionar una experiencia de usuario final elegante y fluida.',
    'services.with-deep-expertise':
      'Con una profunda experiencia que abarca todo el espectro del desarrollo web, podemos optimizar tu presencia digital a cualquier nivel.',
    'services.full-stack-development': 'Desarrollo Full-Stack',
    'services.user-experience': 'Experiencia de Usuario',
    'services.quality-support': 'Control de Calidad',

    // Contact form
    'forms.submit': 'Enviar',
    'forms.name': 'Nombre',
    'forms.company': 'Empresa',
    'forms.country': 'País',
    'forms.email': 'Dirección de correo electrónico',
    'forms.phone': 'Teléfono',
    'forms.comments-questions-schemes': 'Comentarios/Preguntas/Esquemas',
    'forms.project-type': 'Tipo de proyecto',
    'forms.how-did-you-find-us': '¿Cómo nos encontraste?',

    // Forms error
    'errors.name-required': 'Nombre es requerido',
    'errors.email-is-not-valid': 'Debe ser una dirección de correo válida',
    'errors.email-required': 'Dirección de correo electrónico es requerido',
    'errors.comments-required': 'Comentarios/Preguntas/Esquemas es requerido',

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
