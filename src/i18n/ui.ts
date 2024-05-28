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
    'aria.about-link': 'Link to about page',
    'aria.projects-link': 'Link to projects page',
    'aria.services-link': 'Link to services page',
    'aria.blog-link': 'Link to blog page',
    'aria.work-with-us-link': 'Link to work with us page',

    // Img Alt Keys
    'alt.logo': 'Crazy Imagine Software Logo',
    'alt.light-bulb': 'Light Bulb',
    'alt.laptop': 'Laptop',
    'alt.wireframe': 'Wireframe of a Mobile Application',
    'alt.double-cellphone': 'Two mobile phones with a fingerprint',
    'alt.laptop-with-phone': 'Laptop with a mobile and a tablet',

    // About Us Page
    'about.references-title': 'References',
    'about.references-description': 'In-depth testimonials from former and actual clients.',
    'about.faq-title': 'FAQ',
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
    'common.home': 'Home',
    'common.page-not-found': 'Oops, page not found',
    'common-browse-all-articles': 'Browse All Articles',
    'common.contact-us': 'Contact Us',
    'common.terms-and-conditions': 'Terms & Conditions',
    'common:privacy-policy': 'Privacy Policy',
    'common.previous-projects': 'Previous Projects',
    'common.featured-projects': 'Featured Projects',
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
    'common.news-and-updates': 'News And Updates',
    'common.news-and-updates-description':
      'Get insight into our latest projects, news related to popular technologies, and updates on our services',

    // Hero Keys
    'hero.home-title': 'Ideas beyond your imagination',
    'hero.home-subtitle': 'Teamwork is the heart of everything we do',
    'hero.home-button': 'Schedule a call',
    'hero.home-img-alt': "Flag with Crazy Imagine Software's logo",
    'hero.about-title': 'Our Team is Your Greatest Resource',
    'hero.about-subtitle': 'Leading a team of world-class engineers, developers and designers',
    'hero.about-button': 'Contact us',
    'hero.about-img-alt': 'Rocket',
    'hero.blog-title': 'The Latest in Tech Talk from our Team',
    'hero.blog-subtitle': '',
    'hero.blog-button': '',
    'hero.blog-img-alt': 'Shield',
    'hero.references-title': 'Client References',
    'hero.references-subtitle': '',
    'hero.references-button': '',
    'hero.references-img-alt': '5 starts',
    'hero.services-title': 'Let Your Imagination Run Wild',
    'hero.services-subtitle': '',
    'hero.services-button': '',
    'hero.services-img-alt': 'Explorer vehicle',
    'hero.mission-title': 'Mission & Vision',
    'hero.mission-subtitle':
      'What we want to accomplish and provide, and what we see in the future for our agency',
    'hero.mission-button': '',
    'hero.mission-img-alt': 'Mars explorer vehicle',
    'hero.meet-the-team-title': 'Our Team is Your Greatest Resource',
    'hero.meet-the-team-subtitle': 'Leading a Team World-Class Engineers, Developers and Designers',
    'hero.meet-the-team-button': 'Contact Us',
    'hero.meet-the-team-img-alt': 'Rocket',

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
    'services.capabilities': 'Capabilities',
    'services.custom-software-development': 'Custom Software Development',
    'services.custom-software-development-description':
      "We create tailored software solutions to meet the specific needs of your business. Whether it's a website or a mobile app, our expert development team utilizes a wide range of technologies, including:",
    'services.wordpress-packages-maintenance': 'WordPress Packages and Maintenance',
    'services.wordpress-packages-maintenance-description':
      'From basic websites to complex online stores, we handle the entire lifecycle of your WordPress site. We offer:',
    'services.devops-aws-hosting': 'DevOps and AWS Hosting',
    'services.devops-aws-hosting-description':
      'Optimize your development operations with agile DevOps practices. Additionally, we offer hosting services on the secure and scalable infrastructure of Amazon Web Services (AWS).',
    'services.digital-marketing': 'Digital Marketing',
    'services.digital-marketing-description':
      'Our team of marketing experts can boost your online business visibility with effective strategies, including',
    'services.support-project-management': 'Support and Project Management',
    'services.support-project-management-description':
      'We offer personalized support services to cover your operational needs, including',
    'services.frontend': 'Frontend',
    'services.backend': 'Backend',
    'services.design-and-development': 'Design and Development',
    'services.ongoing-maintenance': 'Ongoing Maintenance',
    'services.technical-support': 'Technical Support',
    'services.marketing-strategies': 'Marketing Strategies',
    'services.online-advertising': 'Online Advertising',
    'services.social-media-management': 'Social Media Management',
    'services.virtual-assistant': 'Virtual Assistant',
    'services.project-management': 'Project Management',
    'services.staff-outsourcing': 'Staff Outsourcing',

    // Contact form
    'forms.submit': 'Submit',
    'forms.name': 'Name',
    'forms.lastName': 'Last Name',
    'forms.company': 'Company',
    'forms.country': 'Country',
    'forms.email': 'Email Address',
    'forms.phone': 'Phone',
    'forms.comments-questions-schemes': 'Comments/Questions/Schemes',
    'forms.project-type': 'Project Type',
    'forms.how-did-you-find-us': 'How did you find us?',
    'forms.subscribe': 'Subscribe',

    // Forms error
    'errors.name-required': 'Name is required',
    'errors.lastName-required': 'Last name is required',
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
    'alt.laptop': 'Laptop',
    'alt.wireframe': 'Wireframe de una aplicación móvil',
    'alt.double-cellphone': 'Dos teléfonos celulares con una huella en ellos',
    'alt.laptop-with-phone': 'Laptop con un teléfono y una table a sus lados',

    // About Us Page
    'about.references-title': 'References',
    'about.references-description': 'In-depth testimonials from former and actual clients.',
    'about.faq-title': 'FAQ',
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
    'common.home': 'Inicio',
    'common.page-not-found': 'Vaya, página no encontrada',
    'common-browse-all-articles': 'Ver todos los artículos',
    'common.contact-us': 'Contáctanos',
    'common.terms-and-conditions': 'Términos y Condiciones',
    'common:privacy-policy': 'Política de Privacidad',
    'common.previous-projects': 'Proyectos Anteriores',
    'common.featured-projects': 'Proyectos Destacados',
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
    'common.news-and-updates': 'Novedades Y Actualizaciones',
    'common.news-and-updates-description':
      'Mántengase al día sobre nuestros últimos proyectos, noticias relacionadas con tecnologías populares y actualizaciones sobre nuestros servicios.',

    // Hero Keys
    'hero.home-title': 'Ideas más allá de tu imaginación',
    'hero.home-subtitle': 'El trabajo en equipo es el corazón de todo lo que hacemos',
    'hero.home-button': 'Programar una llamada',
    'hero.home-img-alt': 'Bandera con el logo de Crazy Imagine Software',
    'hero.about-title': 'Nuestro Equipo es tu mejor recurso',
    'hero.about-subtitle': 'Nuestro equipo excepcional está distribuido en toda América Latina',
    'hero.about-button': 'Contáctanos',
    'hero.about-img-alt': 'Cohete',
    'hero.blog-title': 'Lo último En Tecnologia Por Nuestro Equipo',
    'hero.blog-subtitle': '',
    'hero.blog-button': '',
    'hero.blog-img-alt': 'Un Escudo',
    'hero.references-title': 'Clientes Referencia',
    'hero.references-subtitle': '',
    'hero.references-button': '',
    'hero.references-img-alt': '5 estrellas',
    'hero.services-title': 'Deja Volar tu Imaginación',
    'hero.services-subtitle': '',
    'hero.services-button': '',
    'hero.services-img-alt': 'Vehículo explorador',
    'hero.mission-title': 'Misión Y Visión',
    'hero.mission-subtitle':
      'Lo que queremos lograr, ofrecer y lo que vemos en el futuro de nuestra agencia.',
    'hero.mission-button': '',
    'hero.mission-img-alt': 'Explorador de Marte',
    'hero.meet-the-team-title': 'Nuestro Equipo es su Mayor Recurso',
    'hero.meet-the-team-subtitle':
      'Liderando un equipo de ingenieros, desarrolladores y diseñadores de clase mundial.',
    'hero.meet-the-team-button': 'Contáctanos',
    'hero.meet-the-team-img-alt': 'Cohete',

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
    'services.capabilities': 'Capacidades',
    // TODO: TRANSLATIONS
    'services.custom-software-development': 'Custom Software Development',
    'services.custom-software-development-description':
      "We create tailored software solutions to meet the specific needs of your business. Whether it's a website or a mobile app, our expert development team utilizes a wide range of technologies, including:",
    'services.wordpress-packages-maintenance': 'WordPress Packages Maintenance',
    'services.wordpress-packages-maintenance-description':
      'From basic websites to complex online stores, we handle the entire lifecycle of your WordPress site. We offer:',
    'services.devops-aws-hosting': 'DevOps y Hosting en AWS',
    'services.devops-aws-hosting-description':
      'Optimize your development operations with agile DevOps practices. Additionally, we offer hosting services on the secure and scalable infrastructure of Amazon Web Services (AWS).',
    'services.digital-marketing': 'Marketing Digital',
    'services.digital-marketing-description':
      'Our team of marketing experts can boost your online business visibility with effective strategies, including',
    'services.support-project-management': 'Support and Project Management',
    'services.support-project-management-description':
      'We offer personalized support services to cover your operational needs, including',
    'services.frontend': 'Frontend',
    'services.backend': 'Backend',
    'services.design-and-development': 'Design and Development',
    'services.ongoing-maintenance': 'Ongoing Maintenance',
    'services.technical-support': 'Technical Support',
    'services.marketing-strategies': 'Marketing Strategies',
    'services.online-advertising': 'Online Advertising',
    'services.social-media-management': 'Social Media Management',
    'services.virtual-assistant': 'Virtual Assistant',
    'services.project-management': 'Project Management',
    'services.staff-outsourcing': 'Staff Outsourcing',
    // TODO: TRANSLATIONS END

    // Contact form
    'forms.submit': 'Enviar',
    'forms.name': 'Nombre',
    'forms.lastName': 'Apellido',
    'forms.company': 'Empresa',
    'forms.country': 'País',
    'forms.email': 'Dirección de correo electrónico',
    'forms.phone': 'Teléfono',
    'forms.comments-questions-schemes': 'Comentarios/Preguntas/Esquemas',
    'forms.project-type': 'Tipo de proyecto',
    'forms.how-did-you-find-us': '¿Cómo nos encontraste?',
    'forms.subscribe': 'Suscribir',

    // Forms error
    'errors.name-required': 'Nombre es requerido',
    'errors.lastName-required': 'Apellido es requerido',
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
