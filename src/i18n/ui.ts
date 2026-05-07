export const langFlags = {
  en: '🇺🇸',
  es: '🇻🇪',
};

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
    'aria.link-to-blog-post': 'Link to blog post titled',
    'aria.link-to-project-page': 'Link to page showing project',

    // Img Alt Keys
    'alt.logo': 'Crazy Imagine Software Logo',
    'alt.light-bulb': 'Light Bulb',
    'alt.laptop': 'Laptop',
    'alt.wireframe': 'Wireframe of a Mobile Application',
    'alt.double-cellphone': 'Two mobile phones with a fingerprint',
    'alt.laptop-with-phone': 'Laptop with a mobile and a tablet',
    'alt.comet': 'Comet',
    'alt.telescope': 'Telescope',

    // About Us Page
    'about.references-title': 'References',
    'about.references-description': 'In-depth testimonials from former and actual clients.',
    'about.faq-title': 'FAQ',
    'about.faq-description': 'Know the most frequently asked questions by our clients.',
    'about.roadmap-title': 'Roadmap',
    'about.roadmap-description': 'Our process for designing and developing branding and webflow.',
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
    'about.meet-the-team-title': 'Leading the Innovation',
    'about.meet-the-team-description': 'Masterminds focused on digital perfection.',

    // Common Keys
    'common.home': 'Home',
    'common.coming-soon': 'Coming Soon',
    'common.project-category': 'Project Category',
    'common.related-projects': 'Related Projects',
    'common.comment-list': 'Comment List',
    'common.the-reviewer': 'The reviewer',
    'common.all': 'All',
    'common.featured-article': 'Featured Articles',
    'common.staff-augmentation': 'Staff Augmentation',
    'common.staff-augmentation-description': 'Expert talent for your teams',
    'common.recently-posted': 'Recently Posted',
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
    'common.view-more': 'View More',
    'common.reach.out': 'Reach Out',
    'common.imagine-what-we-can-create': 'Imagine what we can create',
    'common.people-who-work-with-us-say': 'People who work with us say',
    'common.google': 'Google',
    'common.rrss': 'RRSS',
    'common.linkedin': 'LinkedIn',
    'common.facebook': 'Facebook',
    'common.instagram': 'Instagram',
    'common.recommended': 'Recommended',
    'common.other': 'Other',
    'common.web-development': 'Web Development',
    'common.e-commerce': 'E-commerce',
    'common.mobile-apps': 'Mobile Apps',
    'common.customized-development': 'Customized Development',
    'common.news-and-updates': 'News And Updates',
    'common.news-and-updates-description':
      'Get insight into our latest projects, news related to popular technologies, and updates on our services',
    'common.work-with-us': 'Interested In Working With Us?',
    'common.home-hero-button': 'Start Project',
    'common.see-all': 'See All',
    'common.the-latest-in-tech-talk': 'The Latest in Tech Talk',
    'common.search': 'Search',
    'common.all-articles': 'All Articles',
    'common.news': 'News',
    'common.news-description': 'Get all the news and updates that we have for you!',
    'common.whatsapp': 'WhatsApp',
    'common.about-the-project': 'About the Project',
    'common.turn-your-vision-into-a-product': 'Turn Your Vision Into a Product',
    'common.technology-partners-of-market-leading-companies':
      'Technology Partners of Market-Leading Companies',
    'common.phase': 'Phase',
    'common.partners-title': 'Companies that scale with us',
    'common.latest-projects-title': 'Digital Transformations',
    'common.custom-development': 'Custom Development',
    'common.custom-development-description':
      'Collaboration designed for consultants and agencies that want to monetize their contact network',
    'common.mobile-apps-description': 'Native and multiplatform experiences',
    'common.crazy-partner-program': 'Crazy Partner Program',
    'common.crazy-partner-program-description':
      'Collaboration designed for consultants and agencies that want to monetize their contact network',
    'common.outsourcing': 'Outsourcing',
    'common.outsourcing-description':
      'Collaboration designed for consultants and agencies that want to monetize their contact network',
    'common.odoo': 'Odoo',
    'common.odoo-description':
      'Collaboration designed for consultants and agencies that want to monetize their contact network',
    'common.ai-agents': 'AI Agents',
    'common.ai-agents-description': 'IA and automation of conversations',
    'common.start-project': 'Start Project',
    'common.projects-title': 'Digital Transformations',
    'common.projects-description':
      'We transform technical visions into robust and scalable market realities.',
    'common.reviews-title': 'What our partners say',
    'common.challenge': 'The challenge',
    'common.solution': 'The solution',
    'common.explore-other-projects': 'Explore other projects ->',
    'common.other-projects-title': 'Empowering Other Industry Leaders',
    'common.other-projects-description':
      'Discover how we have transformed complex challenges into competitive advantages for high-level companies.',
    'common.our-values': 'Our Values',
    'common.satisfaction': 'Satisfaction',
    'common.projects': 'Projects',
    'common.reach-out-title': 'Let’s Talk About Your Project',
    'common.reach-out-subtitle':
      'From the initial idea to launch, or from an outdated system to a modern platform. We handle the technology so you can focus on your business.',
    'common.recent': 'Recent',
    // CTO Manual Keys
    'cto-manual.title': 'Know our CTO Manual',
    'cto-manual.description':
      'Join our technical community and receive the manual directly in your inbox that every technical leader needs for 2026.',
    // Services Keys
    'services.a-technology-partner-for': 'A Technology Partner for ',
    'services.every-stage-of-your-growth': 'Every Stage of Your Growth',
    'services.we-will-help-you-strategize':
      'Whether you need to upgrade your current equipment or build a product from scratch, we have the solution.',
    'services.with-deep-expertise':
      'With deep expertise that spans across the web development spectrum, we can optimize your digital presence at any level.',
    'services.user-experience': 'User Experience',
    'services.quality-support': 'Quality Support',
    'services.capabilities': 'Capabilities',
    'services.custom-software-development': 'Custom Software Development',
    'services.custom-software-development-description':
      'For companies with a clear vision that need a technology partner to build it from scratch.',
    'services.wordpress-packages-maintenance': 'WordPress Packages and Maintenance',
    'services.custom-software-development-1':
      'Are off-the-shelf solutions not right for your business? We build your Custom Vision: We create software specifically designed to solve your problems and adapt to your processes, giving you a competitive advantage that generic tools cannot offer.',
    'services.custom-software-development-2':
      'Do you have the idea but not the team to execute it? Your Product Team from Start to Finish: We become your technology arm. We take care of the entire project lifecycle: strategy, design, development, launch, and support. ',
    'services.custom-software-development-3':
      'Do you have the idea but not the team to execute it? Your Product Team from Start to Finish: We become your technology arm. We take care of the entire project lifecycle: strategy, design, development, launch, and support. ',
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
    'services.frontend-description': 'JavaScript (React.js, Angular, Vue.js)',
    'services.backend': 'Backend',
    'services.backend-description': 'PHP (Laravel, Symfony), Python (Django), Java',
    'services.full-stack-development-description':
      'We implement comprehensive solutions that encompass all layers of development, from the user interface to business logic and database management.',
    'services.design-and-development': 'Design and Development',
    'services.design-and-development-description':
      'Creation of attractive and functional websites.',
    'services.ongoing-maintenance': 'Ongoing Maintenance',
    'services.ongoing-maintenance-description': 'Updates, backups, and optimization.',
    'services.technical-support': 'Technical Support',
    'services.technical-support-description': 'Troubleshooting and addressing requests.',
    'services.marketing-strategies': 'Marketing Strategies',
    'services.marketing-strategies-description': 'Development of personalized campaigns.',
    'services.online-advertising': 'Online Advertising',
    'services.online-advertising-description':
      'Management of ads on Google Ads and other platforms.',
    'services.social-media-management': 'Social Media Management',
    'services.social-media-management-description': 'Content creation and performance analysis.',
    'services.virtual-assistant': 'Virtual Assistant',
    'services.virtual-assistant-description': 'Administrative assistance and routine tasks.',
    'services.project-management': 'Project Management',
    'services.project-management-description': 'Supervision and direction of projects.',
    'services.staff-outsourcing': 'Staff Outsourcing',
    'services.staff-outsourcing-description': 'Remote collaborators for your team.',
    'services.quote-now': 'Quote now',
    'services.single-payment': 'Single Payment',
    'services.hourly-payment': 'Hour',
    'services.monthly-payment': 'Per Month',
    'services.pricing-plans': 'Pricing Plans',
    'services.better-option': 'Better Option',
    'services.services': 'Services',
    'services.crazy-partner': 'Crazy Partner',
    'services.projects': 'Projects',
    'services.services-description':
      'Custom development for real challenges. From robust web architectures and mobile applications to intelligent automation.',
    'services.crazy-partner-description':
      'We expand your team instantly so you stop rejecting projects and turn every request into a new business opportunity.',
    'services.projects-description':
      'Our solutions know no borders. We design thinking about global scalability and cultural adaptability.',

    // Custom Software Development
    'custom-development.hero-title': 'You Have the Vision, We Build the Software to Make It Real',
    'custom-development.hero-subtitle':
      'From the initial idea to launch, or from an outdated system to a modern platform. We handle the technology so you can focus on your business.',
    'custom-development.experience-title': 'Experience',
    'custom-development.your-team': 'Your Product Team, Focused on Your Results',
    'custom-development.your-team-description':
      'Forget about the risks of building a technical team from scratch or the headaches of an outdated system. We act as your comprehensive technology partner, providing the strategy, design, and elite engineering needed to build or modernize the software that will give you a real competitive advantage.',
    'custom-development.benefits-title': 'Benefits of a Real Technology Partner',
    'custom-development.benefits-1': '1. Access to a Comprehensive and Vetted Team',
    'custom-development.benefits-1-description':
      'You don’t just get developers. We provide a complete team: Software Architects, UI/UX Designers, and Project Managers who ensure your product’s success.',
    'custom-development.benefits-2': '2. Radical Speed in Time-to-Market',
    'custom-development.benefits-2-description':
      'Whether it’s launching your MVP before the competition or deploying a critical new feature, our agile process allows us to deliver results in a fraction of the traditional time.',
    'custom-development.benefits-3': '3. Scalable and Future-Proof Technology',
    'custom-development.benefits-3-description':
      'We don’t build for today, we build for tomorrow. We design your software with a solid and scalable foundation, ensuring it can support your growth without costly restructurings.',
    'custom-development.benefits-4': '4. Certainty in Budget and Deadlines',
    'custom-development.benefits-4-description':
      'We work with clear roadmaps and defined budgets. We give you the peace of mind of knowing exactly what to expect, when you’ll receive it, and how much it will cost.',
    'custom-development.cta-title': 'Ready to stop planning and start building?',
    'custom-development.cta-button': 'Let’s Talk About Your Project',
    'custom-development.process-1': 'Discovery and Strategic Alignment',
    'custom-development.process-1-description':
      'We conduct workshops with you to understand your business objectives. We translate your vision into a clear roadmap.',
    'custom-development.process-2': 'Architecture and Functional Design (Blueprint)',
    'custom-development.process-2-description':
      'We create the application blueprint with wireframes and flow diagrams to validate logic and usability.',
    'custom-development.process-3': 'Experience and Interface Design (UI/UX)',
    'custom-development.process-3-description':
      'Our design team creates a high-fidelity, visually appealing, and intuitive interface.',
    'custom-development.process-4': 'Agile Development and Implementation',
    'custom-development.process-4-description':
      'We build your application in short "sprints," allowing you to see tangible progress and provide continuous feedback.',
    'custom-development.process-5': 'Launch, Support, and Continuous Evolution',
    'custom-development.process-5-description':
      'We manage deployment and offer support plans to ensure your platform operates at peak performance.',
    'custom-development.our-process-title': 'Our Process: From Vision to Reality',
    'custom-development.faqs-title': 'FAQs',
    'custom-development.start-now': 'Start Now',
    'custom-development.schedule-an-appointment': 'Schedule an Appointment',
    'custom-development.15-minute-chat-without-commitment': '15 minute chat, no commitment.',
    'custom-development.receive-an-action-plan-to-scale-your-team':
      'Receive an action plan to scale your team.',
    'custom-development.access-elite-talent-in-less-than-7-days':
      'Access elite talent in less than 7 days.',

    // Mission
    'mission.our-mission': 'Our Mission',
    'mission.what-we-want-to-achieve': 'What we want to achieve',
    'mission.our-vision': 'Our Vision',
    'mission.how-we-see-in-the-future': 'How we see in the future',

    // Contact form
    'forms.submit': 'Submit',
    'forms.submitting': 'Submitting',
    'forms.name': 'Name',
    'forms.lastName': 'Last Name',
    'forms.company': 'Company',
    'forms.country': 'Country',
    'forms.email': 'Email Address',
    'forms.phone': 'Phone',
    'forms.comments-questions-schemes': 'Comments/Questions/Schemes',
    'forms.project-type': 'Project Type',
    'forms.how-did-you-find-us': 'How did you hear about us?',
    'forms.subscribe': 'Subscribe',
    'forms.linkedIn': 'LinkedIn',
    'forms.webSite': 'Website',
    'forms.curriculum': 'Resume/CV',
    'forms.attach': 'Attach',
    'forms.max-size': 'Max. 2MB',
    'forms.file-uploaded': 'File uploaded successfully',
    'forms.thank-you': 'Thank You!',
    'forms.submission-received': 'Your submission has been received.',
    'forms.oops': 'Oops...',
    'forms.something-went-wrong': 'Something went wrong.',

    // Forms error
    'errors.name-required': 'Name is required',
    'errors.lastName-required': 'Last name is required',
    'errors.email-is-not-valid': 'Email must be a valid email address',
    'errors.email-required': 'Email is required',
    'errors.comments-required': 'Comments/Questions/Schemes is required',
    'errors.linkedIn-required': 'Linkedin is required',
    'errors.phone-required': 'Phone number is required',
    'errors.phone-invalid': 'Phone number is invalid',
    'errors.webSite-required': 'Website is required',
    'errors.curriculum-size': 'The file must have a maximum size of 2 MB.',
    'errors.curriculum-type': 'Only the following formats are accepted: .pdf, .jpg, .jpeg, .doc',
    'errors.curriculum-required': 'Curriculum is required',

    // Footer Keys
    'footer.all-rights-reserved': `©${year} Crazy Imagine, All Rights Reserved`,
    'footer.text':
      'We are dedicated to designing and developing custom websites and applications that stand out for their exceptional beauty and functionality.',
    'footer.location': 'Location',
    'footer.social-links': 'Social Links',
    'footer.links': 'Links',
    'footer.reviews': 'Reviews',

    // Nav Keys
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.services': 'Services',
    'nav.blog': 'Blog',
    'nav.work-with-us': 'Work with us',

    // Experience Keys
    'experience.years-of': 'Years of',
    'experience.experience': 'Experience',
    'experience.employees': 'Employees',
    'experience.contracted': 'Contracted',
    'experience.projects': 'Projects',
    'experience.successful': 'Successful',

    // Thank you page
    'thankyou.hero-title': '¡Great Choice!',
    'thankyou.hero-subtitle': `Your "CTO's Playbook" is on its way to your inbox.`,
    'thankyou.hero-caption':
      'It should arrive in the next 5 minutes. (Please check your spam or promotions folder, just in case the email gods are angry today).',
    'thankyou.wait-title': 'WAIT A SECOND...',
    'thankyou.wait-subtitle': `Let’s be honest. You didn't download this guide for light weekend reading`,
    'thankyou.wait-caption-1': `You downloaded it because you likely have this problem right now.`,
    'thankyou.wait-caption-2': `Your roadmap is stuck. Your hiring cycles are hell. And every day a developer seat sits empty, your competitors are inching ahead.`,
    'thankyou.wait-caption-3': `The guide will absolutely help you. But if you need a shortcut...`,
    'thankyou.diagnostic-title': 'Get a Free Roadmap Rapid-Diagnostic.',
    'thankyou.diagnostic-subtitle':
      'Skip the theory for now. I want to invite you to a 20-minute whiteboard strategy session.',
    'thankyou.diagnostic-paragraph-1': 'Let’s be clear: This is NOT a thinly veiled sales call',
    'thankyou.diagnostic-paragraph-2': 'It’s a high-level consulting session where we will:',
    'thankyou.diagnostic-list-1': 'Diagnose your #1 hiring bottleneck in under 5 minutes.',
    'thankyou.diagnostic-list-2':
      'Hand you an immediate Battle Plan to accelerate your time-to-market.',
    'thankyou.diagnostic-list-3':
      'Show you the exact framework we used to solve this same issue for fast-growing scale-ups like Clientify and Ordering.',
    'thankyou.schedule-title': 'Yes, I want my free action plan.',
    'thankyou.schedule-button': 'SCHEDULE AN APPOINTMENT',
    'thankyou.schedule-caption':
      'You’ll be speaking directly with our senior strategy team, who have helped scale 400+ tech teams. Bring us your toughest challenge.',

    // Lead Magnet Page
    'lead-magnet.hero-title': 'Your Hiring Process is Broken.',
    'lead-magnet.hero-subtitle': "Here's why... and how to fix it.",
    'lead-magnet.hero-description':
      'Stop playing Russian roulette with your roadmap. Download the free "CTO\'s Playbook" and defuse the 3 ticking time bombs sabotaging your growth (before it’s too late).',
    'lead-magnet.questions-title': 'If this sounds familiar, you’re not alone...',
    'lead-magnet.questions-1': 'Do you feel like you spend more time interviewing',
    'lead-magnet.questions-1-description': 'than leading and progressing with your current team?',
    'lead-magnet.questions-2': 'Have you ever hired a "crack"',
    'lead-magnet.questions-2-description':
      'who was perfect on paper but turned out to be a technical fiasco or, worse, toxic to your culture?',
    'lead-magnet.questions-3': 'Does your roadmap lag quarter after quarter',
    'lead-magnet.questions-3-description':
      'because you simply can’t find the right senior talent at the speed you need?',
    'lead-magnet.questions-4': 'Do you get frustrated watching competitors launch features',
    'lead-magnet.questions-4-description':
      'while your team is stuck in technical debt or endless selection processes?',
    'lead-magnet.not-your-fault-title': "It's not your fault.",
    'lead-magnet.not-your-fault-description':
      'The traditional hiring system is not designed for the speed and complexity of today’s tech world.',
    'lead-magnet.the-clarity-you-need-title-1': 'The Clarity You Need,',
    'lead-magnet.the-clarity-you-need-title-2': 'in Less Than 10 Minutes of Reading.',
    'lead-magnet.the-clarity-you-need-description':
      'This is not a 50-page theoretical guide. It’s a direct, no-nonsense field manual where we distill over 8 years of experience building elite teams.',
    'lead-magnet.the-clarity-you-need-caption': 'When you finish reading, you will be able to:',
    'lead-magnet.the-clarity-you-need-1': 'Defuse the "Perfect Resume Bomb":',
    'lead-magnet.the-clarity-you-need-1-description':
      'You’ll learn to spot a true problem solver, instead of someone who’s just good at interviews.',
    'lead-magnet.the-clarity-you-need-2': 'Neutralize the "Toxic Genius":',
    'lead-magnet.the-clarity-you-need-2-description':
      'We’ll give you a checklist of key questions to catch bad cultural hires before they infect your team.',
    'lead-magnet.the-clarity-you-need-3': 'Avoid the "Slow Onboarding Poison":',
    'lead-magnet.the-clarity-you-need-3-description':
      'You’ll get a simple template so your new talent (internal or external) is productive in their first week—not their third month.',
    'lead-magnet.clientify-title-1': 'Written from the Trenches,',
    'lead-magnet.clientify-title-2': 'Not from Theory',
    'lead-magnet.clientify-description-1':
      "This guide was written by Blas Hernández, CEO of Crazy Imagine Software. He doesn't speak from the perspective of a consultant, but rather from the experience of a technical leader who has faced the same challenges you have for over a decade. Here you won't find hypotheses, but rather tactical lessons validated after building over 400 projects and scaling dozens of engineering teams. We know what works, simply because we do it every day.",
    'lead-magnet.clientify-quote':
      'Crazy Imagine didn’t just give us developers, they gave us a strategic partner who understood our business from day one.',
    'lead-magnet.clientify-quote-author': 'CEO of Clientify',
    'lead-magnet.roadmap-title-1': 'Your Roadmap Can’t Wait.',
    'lead-magnet.roadmap-title-2': 'Neither Can Your Peace of Mind.',
    'lead-magnet.roadmap-description':
      'The cost of a bad hire is brutal. The cost of inaction is even worse. This guide is the first, fastest, and easiest step to secure your team and your project. It’s free. What have you got to lose?',
    'lead-magnet.contact-us-description':
      '100% spam free. We hate junk marketing as much as you do.',
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
    'aria.link-to-blog-post': 'Enlace a la entrada del blog titulada',
    'aria.link-to-project-page': 'Enlace a la página del proyecto',

    // Img Alt Keys
    'alt.logo': 'Logo de Crazy Imagine Software',
    'alt.light-bulb': 'Un bombillo',
    'alt.laptop': 'Laptop',
    'alt.wireframe': 'Wireframe de una aplicación móvil',
    'alt.double-cellphone': 'Dos teléfonos celulares con una huella en ellos',
    'alt.laptop-with-phone': 'Laptop con un teléfono y una table a sus lados',
    'alt.comet': 'Cometa',
    'alt.telescope': 'Telescopio',

    // About Us Page
    'about.references-title': 'Referencias',
    'about.references-description': 'Testimonios detallados de clientes antiguos y actuales.',
    'about.faq-title': 'Preguntas Frecuentes',
    'about.faq-description': 'Conoce las preguntas más frecuentes de nuestros clientes.',
    'about.roadmap-title': 'Hoja de Ruta',
    'about.roadmap-description': 'Nuestro proceso para diseñar y desarrollar branding y webflow.',
    'about.mission-title': 'Misión',
    'about.mission-description': 'Nos dedicamos al desarrollo de software para proporcionar una...',
    'about.working-together-title': 'Trabajando juntos',
    'about.working-together-description':
      'Tenemos una mezcla dinámica y diversa de full-stack, front-end...',
    'about.blog-title': 'Blog',
    'about.blog-description': 'Lo último en tecnología y diseño de nuestro equipo.',
    'about.who-we-are-title': 'Quiénes somos',
    'about.who-we-are-description':
      'Tenemos una mezcla dinámica y diversa de full-stack, front-end...',
    'about.work-with-us-title': 'Trabaja con nosotros',
    'about.work-with-us-description': 'Nuestra mayor fortaleza es la calidad de nuestro equipo.',
    'about.meet-the-team-title': 'Liderando la Innovación',
    'about.meet-the-team-description': 'Mentes maestras enfocadas en la perfección digital.',

    // Common Keys
    'common.home': 'Inicio',
    'common.coming-soon': 'Próximamente',
    'common.project-category': 'Categoría del Proyecto',
    'common.related-projects': 'Proyectos Relacionados',
    'common.comment-list': 'Lista de Comentarios',
    'common.the-reviewer': 'El revisor',
    'common.all': 'Todos',
    'common.featured-article': 'Artículos destacados',
    'common.recently-posted': 'Publicados recientemente',
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
    'common.view-more': 'Ver más',
    'common.reach.out': 'Contáctanos', // TODO: check translation
    'common.imagine-what-we-can-create': 'Imagina lo que podemos crear',
    'common.people-who-work-with-us-say': 'La gente que trabaja con nosotros dice',
    'common.google': 'Google',
    'common.rrss': 'RRSS',
    'common.linkedin': 'LinkedIn',
    'common.facebook': 'Facebook',
    'common.instagram': 'Instagram',
    'common.recommended': 'Recomendado',
    'common.other': 'Otro',
    'common.web-development': 'Desarrollo Web',
    'common.e-commerce': 'E-commerce',
    'common.mobile-apps': 'Aplicaciones Móviles',
    'common.customized-development': 'Desarrollo a Medida',
    'common.news-and-updates': 'Novedades Y Actualizaciones',
    'common.news-and-updates-description':
      'Mántengase al día sobre nuestros últimos proyectos, noticias relacionadas con tecnologías populares y actualizaciones sobre nuestros servicios.',
    'common.work-with-us': '¿Quieres Ser parte de Nuestro Equipo?',
    'common.home-hero-button': 'Iniciar Proyecto',
    'common.see-all': 'Ver todos',
    'common.the-latest-in-tech-talk': 'Lo último en tecnología',
    'common.search': 'Buscar',
    'common.all-articles': 'Todos los artículos',
    'common.news': 'Novedades',
    'common.news-description': '¡Recibe todas las noticias y novedades que tenemos para ti!',
    'common.whatsapp': 'WhatsApp',
    'common.about-the-project': 'Sobre el Proyecto',
    'common.turn-your-vision-into-a-product': 'Convierte tu Visión en un Producto',
    'common.technology-partners-of-market-leading-companies':
      'Socios Tecnológicos de Empresas que Lideran el Mercado',
    'common.phase': 'Fase',
    'common.partners-title': 'Empresas que escalan con nosotros',
    'common.latest-projects-title': 'Transformaciones digitales',
    'common.custom-development': 'Desarrollo Personalizado',
    'common.custom-development-description':
      'Colaboración diseñada para consultores y agencias que desean monetizar su red de contactos',
    'common.staff-augmentation': 'Aumento de Personal',
    'common.staff-augmentation-description': 'Talento experto para tus equipos',
    'common.mobile-apps-description': 'Experiencias nativas y multiplataformas',
    'common.crazy-partner-program': 'Programa Crazy Partner',
    'common.crazy-partner-program-description':
      'Colaboración diseñada para consultores y agencias que desean monetizar su red de contactos',
    'common.outsourcing': 'Externalización de Personal',
    'common.outsourcing-description':
      'Colaboración diseñada para consultores y agencias que desean monetizar su red de contactos',
    'common.odoo': 'Odoo',
    'common.start-project': 'Iniciar proyecto',
    'common.odoo-description':
      'Colaboración diseñada para consultores y agencias que desean monetizar su red de contactos',
    'common.ai-agents': 'Agentes IA',
    'common.ai-agents-description': 'IA y automatización de  conversaciones',
    'common.projects-title': 'Transformaciones digitales',
    'common.projects-description':
      'Transformamos visiones técnicas en realidades de mercado robustas y escalables.',
    'common.reviews-title': 'Lo que dicen nuestros socios',
    'common.challenge': 'El desafío',
    'common.solution': 'La solución',
    'common.explore-other-projects': 'Explora otros proyectos ->',
    'common.other-projects-title': 'Impulsando a otros líderes del sector',
    'common.other-projects-description':
      'Descubre cómo hemos transformado desafíos complejos en ventajas competitivas para empresas de alto nivel.',
    'common.our-values': 'Nuestros Valores',
    'common.satisfaction': 'Satisfacción',
    'common.projects': 'Proyectos',
    'common.reach-out-title': 'Hablemos de tu Proyecto',
    'common.reach-out-subtitle':
      'De la idea inicial al lanzamiento, o de un sistema obsoleto a una plataforma moderna. Nos encargamos de la tecnología para que tú te enfoques en el negocio.',
    'common.recent': 'Reciente',
    // CTO Manual Keys
    'cto-manual.title': ' Conoce nuestro Manual del CTO',
    'cto-manual.description':
      '  Únete a nuestra comunidad técnica y recibe directamente en tu bandeja de entrada el manual que todo líder tecnológico necesita para este 2026.',
    // Services
    'services.a-technology-partner-for': 'Un Socio Tecnológico para',
    'services.every-stage-of-your-growth': 'Cada Etapa de tu Crecimiento',
    'services.we-will-help-you-strategize':
      'Ya sea que necesites potenciar tu equipo actual o construir un producto desde cero, tenemos la solución.',
    'services.with-deep-expertise':
      'Con una profunda experiencia que abarca todo el espectro del desarrollo web, podemos optimizar tu presencia digital a cualquier nivel.',
    'services.user-experience': 'Experiencia de Usuario',
    'services.quality-support': 'Control de Calidad',
    'services.capabilities': 'Capacidades',
    'services.custom-software-development': 'Desarrollo de Software a Medida',
    'services.custom-software-development-description':
      'Para empresas con una visión clara que necesitan un socio tecnológico para construirla desde cero.',
    'services.custom-software-development-1':
      '¿Las soluciones "de caja" no se adaptan a tu negocio?Construimos tu Visión a Medida: Creamos software diseñado específicamente para resolver tus problemas y adaptarse a tus procesos, dándote una ventaja competitiva que las herramientas genéricas no pueden ofrecer.',
    'services.custom-software-development-2':
      '¿Tienes la idea pero no el equipo para ejecutarla?Tu Equipo de Producto de Principio a Fin: Nos convertimos en tu brazo tecnológico. Nos encargamos de todo el ciclo de vida del proyecto: estrategia, diseño, desarrollo, lanzamiento y soporte. ',
    'services.custom-software-development-3':
      '¿Necesitas un producto robusto que pueda crecer contigo?Arquitectura Escalable para el Futuro: No solo construimos para hoy. Diseñamos tu plataforma con una arquitectura sólida y escalable, asegurando que pueda soportar tu crecimiento futuro sin problemas de rendimiento.',
    'services.wordpress-packages-maintenance': 'Mantenimiento de Paquetes de WordPress',
    'services.wordpress-packages-maintenance-description':
      'Desde sitios web básicos hasta tiendas en línea complejas, gestionamos todo el ciclo de vida de su sitio de WordPress. Ofrecemos:',
    'services.devops-aws-hosting': 'DevOps y Hosting en AWS',
    'services.devops-aws-hosting-description':
      'Optimice sus operaciones de desarrollo con prácticas ágiles de DevOps. Además, ofrecemos servicios de alojamiento en la infraestructura segura y escalable de Amazon Web Services (AWS).',
    'services.digital-marketing': 'Marketing Digital',
    'services.digital-marketing-description':
      'Nuestro equipo de expertos en marketing puede aumentar la visibilidad de su negocio en línea con estrategias efectivas, incluyendo:',
    'services.support-project-management': 'Soporte y Gestión de Proyectos',
    'services.support-project-management-description':
      'Ofrecemos servicios de soporte personalizado para cubrir sus necesidades operativas, incluyendo:',
    'services.frontend': 'Frontend',
    'services.frontend-description': 'JavaScript (React.js, Angular, Vue.js)',
    'services.backend': 'Backend',
    'services.backend-description': 'PHP (Laravel, Symfony), Python (Django), Java',
    'services.full-stack-development-description':
      'Implementamos soluciones integrales que abarcan todas las capas del desarrollo, desde la interfaz de usuario hasta la lógica de negocio y la gestión de bases de datos.',
    'services.design-and-development': 'Diseño y Desarrollo',
    'services.design-and-development-description':
      'Creación de sitios web atractivos y funcionales.',
    'services.ongoing-maintenance': 'Mantenimiento Continuo',
    'services.ongoing-maintenance-description':
      'Actualizaciones, copias de seguridad y optimización.',
    'services.technical-support': 'Soporte Técnico',
    'services.technical-support-description': 'Resolución de problemas y atención a solicitudes.',
    'services.marketing-strategies': 'Estrategias de Marketing',
    'services.marketing-strategies-description': 'Desarrollo de campañas personalizadas.',
    'services.online-advertising': 'Publicidad en Línea',
    'services.online-advertising-description':
      'Gestión de anuncios en Google Ads y otras plataformas.',
    'services.social-media-management': 'Gestión de Redes Sociales',
    'services.social-media-management-description':
      'Creación de contenido y análisis de rendimiento.',
    'services.virtual-assistant': 'Asistente Virtual',
    'services.virtual-assistant-description': 'Asistencia administrativa y tareas rutinarias.',
    'services.project-management': 'Gestión de Proyectos',
    'services.project-management-description': 'Supervisión y dirección de proyectos.',
    'services.staff-outsourcing': 'Externalización de Personal',
    'services.staff-outsourcing-description': 'Colaboradores remotos para tu equipo.',
    'services.quote-now': 'Cotiza ahora',
    'services.single-payment': 'Pago único',
    'services.hourly-payment': 'Por hora',
    'services.monthly-payment': 'Por mes',
    'services.pricing-plans': 'Precios',
    'services.better-option': 'Mejor Opción',
    'services.services': 'Servicios',
    'services.crazy-partner': 'Crazy Partner',
    'services.projects': 'Proyectos',
    'services.services-description':
      'Desarrollo a medida para desafíos reales. Desde arquitecturas web robustas y aplicaciones móviles hasta automatización inteligente.',
    'services.crazy-partner-description':
      'Ampliamos tu equipo al instante para que dejes de rechazar proyectos y conviertas cada solicitud en una nueva oportunidad de negocio.',
    'services.projects-description':
      'Nuestras soluciones no conocen fronteras. Diseñamos pensando en la escalabilidad global y la adaptabilidad cultural.',

    // Custom Software Development
    'custom-development.hero-title':
      'Tienes la Visión Nosotros Construimos el Software que la Hace Realidad',
    'custom-development.hero-subtitle':
      'De la idea inicial al lanzamiento, o de un sistema obsoleto a una plataforma moderna. Nos encargamos de la tecnología para que tú te enfoques en el negocio.',
    'custom-development.experience-title': 'Experiencia',
    'custom-development.your-team': 'Tu Equipo de Producto Externo, Enfocado en tus Resultados',
    'custom-development.your-team-description':
      'Olvídate de los riesgos de construir un equipo técnico desde cero o de los dolores de cabeza de un sistema que ya no da la talla. Actuamos como tu socio tecnológico integral, aportando la estrategia, el diseño y la ingeniería de élite necesarios para construir o modernizar el software que te dará una ventaja competitiva real.',
    'custom-development.benefits-title': 'Beneficios de un Socio Tecnológico Real',
    'custom-development.benefits-1': '1. Acceso a un Equipo Integral y Verificado',
    'custom-development.benefits-1-description':
      'No solo obtienes desarrolladores. Te damos un equipo completo: Arquitectos de Software, Diseñadores UI/UX y Project Managers que garantizan el éxito de tu producto.',
    'custom-development.benefits-2': '2. Velocidad Radical en el Time-to-Market',
    'custom-development.benefits-2-description':
      'Ya sea para lanzar tu MVP antes que la competencia o para desplegar una nueva funcionalidad crítica, nuestro proceso ágil nos permite entregar resultados en una fracción del tiempo tradicional.',
    'custom-development.benefits-3': '3. Tecnología Escalable y a Prueba de Futuro',
    'custom-development.benefits-3-description':
      'No construimos para hoy, construimos para mañana. Diseñamos tu software con una base sólida y escalable, asegurando que pueda soportar tu crecimiento sin costosas reestructuraciones.',
    'custom-development.benefits-4': '4. Certeza en el Presupuesto y los Plazos',
    'custom-development.benefits-4-description':
      'Trabajamos con hojas de ruta claras y presupuestos definidos. Te damos la tranquilidad de saber exactamente qué esperar, cuándo lo recibirás y cuánto costará.',
    'custom-development.cta-title': '¿Listo para dejar de planificar y empezar a construir?',
    'custom-development.cta-button': 'Hablemos de tu Proyecto',
    'custom-development.process-1': 'Descubrimiento y Alineación Estratégica',
    'custom-development.process-1-description':
      'Realizamos talleres contigo para entender tus objetivos de negocio. Traducimos tu visión en una hoja de ruta clara.',
    'custom-development.process-2': 'Arquitectura y Diseño Funcional (Blueprint)',
    'custom-development.process-2-description':
      'Creamos el plano de la aplicación con wireframes y diagramas de flujo para validar la lógica y la usabilidad.',
    'custom-development.process-3': 'Diseño de Experiencia e Interfaz (UI/UX)',
    'custom-development.process-3-description':
      'Nuestro equipo de diseño crea una interfaz de alta fidelidad, visualmente atractiva e intuitiva.',
    'custom-development.process-4': 'Desarrollo Ágil e Implementación',
    'custom-development.process-4-description':
      'Construimos tu aplicación en "sprints" cortos, permitiéndote ver un progreso tangible y dar feedback continuo.',
    'custom-development.process-5': 'Lanzamiento, Soporte y Evolución Continua',
    'custom-development.process-5-description':
      'Gestionamos el despliegue y ofrecemos planes de soporte para garantizar que tu plataforma funcione a su máximo rendimiento.',
    'custom-development.our-process-title': 'Nuestro Proceso: De la Visión a la Realidad',
    'custom-development.faqs-title': 'Preguntas Frecuentes',
    'custom-development.start-now': '¡Comienza Ahora!',
    'custom-development.schedule-an-appointment': 'Agenda una Cita',
    'custom-development.15-minute-chat-without-commitment': 'Charla de 15 min, sin compromiso.',
    'custom-development.receive-an-action-plan-to-scale-your-team':
      'Recibe un plan de acción para escalar tu equipo.',
    'custom-development.access-elite-talent-in-less-than-7-days':
      'Accede a talento de élite en menos de 7 días.',

    // Mission
    'mission.our-mission': 'Nuestra Misión',
    'mission.what-we-want-to-achieve': 'Lo que queremos lograr',
    'mission.our-vision': 'Nuestra Visión',
    'mission.how-we-see-in-the-future': 'Cómo nos vemos en el futuro',

    // Contact form
    'forms.submit': 'Enviar',
    'forms.submitting': 'Enviando',
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
    'forms.linkedIn': 'LinkedIn',
    'forms.webSite': 'Sitio Web',
    'forms.curriculum': 'Currículum/CV',
    'forms.attach': 'Adjuntar',
    'forms.max-size': 'Max. 2MB',
    'forms.file-uploaded': 'Archivo cargado con éxito',
    'forms.thank-you': '¡Gracias!',
    'forms.submission-received': 'Su solicitud ha sido recibida.',
    'forms.oops': 'Ups...',
    'forms.something-went-wrong': 'Algo salió mal.',

    // Forms error
    'errors.name-required': 'Nombre es requerido',
    'errors.lastName-required': 'Apellido es requerido',
    'errors.email-is-not-valid': 'Debe ser una dirección de correo válida',
    'errors.email-required': 'Dirección de correo electrónico es requerido',
    'errors.comments-required': 'Comentarios/Preguntas/Esquemas es requerido',
    'errors.phone-required': 'Teléfono es requerido',
    'errors.phone-invalid': 'Número de teléfono inválido',
    'errors.linkedIn-required': 'LinkedIn es requerido',
    'errors.webSite-required': 'Sitio Web es Requerido',
    'errors.curriculum-size': 'El archivo debe tener un tamaño máximo de 2 MB.',
    'errors.curriculum-type': 'Solo se aceptan los siguientes formatos: .pdf, .jpg, .jpeg, .doc',
    'errors.curriculum-required': 'Currículum es requerido',

    // Footer Keys
    'footer.all-rights-reserved': `©${year} Crazy Imagine, Todos los derechos reservados`,
    'footer.text':
      'Nos dedicamos a diseñar y desarrollar sitios web y aplicaciones personalizadas que destacan por su belleza y funcionalidad excepcional.',
    'footer.location': 'Ubicación',
    'footer.social-links': 'Redes Sociales',
    'footer.links': 'Enlaces',
    'footer.reviews': 'Reseñas',

    // Nav Keys
    'nav.about': 'Sobre nosotros',
    'nav.projects': 'Proyectos',
    'nav.services': 'Servicios',
    'nav.blog': 'Blog',
    'nav.work-with-us': 'Trabaja con nosotros',

    // Experience Keys
    'experience.years-of': 'Años de',
    'experience.experience': 'Experiencia',
    'experience.employees': 'Empleados',
    'experience.contracted': 'Contratados',
    'experience.projects': 'Proyectos',
    'experience.successful': 'Exitosos',

    // Thank you page
    'thankyou.hero-title': '¡Excelente Decisión!',
    'thankyou.hero-subtitle': 'Tu "Manual del CTO" ya va en camino a tu email.',
    'thankyou.hero-caption':
      'Deberías recibirlo en los próximos 5 minutos. (Por favor, revisa tu carpeta de spam o promociones, por si acaso).',
    'thankyou.wait-title': 'PERO ESPERA...',
    'thankyou.wait-subtitle': `Si descargaste esta guía, no es por curiosidad.`,
    'thankyou.wait-caption-1': `Es porque probablemente tienes este problema ahora mismo.`,
    'thankyou.wait-caption-2': `Tu roadmap está atascado. Tus ciclos de contratación son un infierno. Y cada día que una silla de desarrollador está vacía, tu competencia te está sacando ventaja. La guía te ayudará, sin duda.`,
    'thankyou.wait-caption-3': `Pero si lo que necesitas es un atajo...`,
    'thankyou.diagnostic-title': 'Te Ofrecemos un Diagnóstico de Roadmap Gratuito.',
    'thankyou.diagnostic-subtitle':
      'En lugar de solo leer la teoría, te invito a una sesión de pizarra de 20 minutos',
    'thankyou.diagnostic-paragraph-1': 'Seamos claros: Esto NO es una llamada de ventas.',
    'thankyou.diagnostic-paragraph-2': 'Es una sesión de consultoría de alto valor donde vamos a:',
    'thankyou.diagnostic-list-1': 'Diagnosticar tu cuello de botella #1 en 5 minutos.',
    'thankyou.diagnostic-list-2':
      'Darte un plan de acción inmediato para acelerar tu time-to-market.',
    'thankyou.diagnostic-list-3':
      'Mostrarte cómo hemos resuelto ese mismo problema para empresas como Clientify y Ordering.',
    'thankyou.schedule-title': 'Si, quiero mi plan de acción gratuito.',
    'thankyou.schedule-button': 'AGENDA UNA CITA',
    'thankyou.schedule-caption':
      'Hablarás directamente con nuestro equipo de estrategia especializado, que ha ayudado a más de 400 empresas a escalar sus equipos tecnológicos. Trae tu desafío más grande.',

    // Lead Magnet Page
    'lead-magnet.hero-title': 'Tu Proceso de Contratación Está Roto.',
    'lead-magnet.hero-subtitle': 'Aquí te explicamos por qué... y cómo arreglarlo.',
    'lead-magnet.hero-description':
      'Deja de jugar a la ruleta rusa con tu roadmap. Descarga gratis "El Manual del CTO" y desactiva las 3 bombas de tiempo que están saboteando tu crecimiento (antes de que sea tarde).',
    'lead-magnet.questions-title': 'Si esto te suena familiar, no estás solo...',
    'lead-magnet.questions-1': '¿Sientes que pasas más tiempo en entrevistas',
    'lead-magnet.questions-1-description': 'que liderando y progresando con tu equipo actual?',
    'lead-magnet.questions-2': '¿Alguna vez has contratado a un "crack"',
    'lead-magnet.questions-2-description':
      'que en el papel era perfecto, pero que resultó ser un fiasco técnico o, peor aún, tóxico para tu cultura?',
    'lead-magnet.questions-3': '¿Tu roadmap se retrasa trimestre tras trimestre',
    'lead-magnet.questions-3-description':
      'porque simplemente no encuentras el talento senior adecuado a la velocidad que necesitas?',
    'lead-magnet.questions-4': '¿Te frustra ver cómo la competencia lanza features ',
    'lead-magnet.questions-4-description':
      'mientras tu equipo está atascado en deuda técnica o en procesos de selección interminables?',
    'lead-magnet.not-your-fault-title': 'No es tu culpa.',
    'lead-magnet.not-your-fault-description':
      'El sistema de contratación tradicional no está diseñado para la velocidad y la complejidad del mundo tecnológico actual.',
    'lead-magnet.the-clarity-you-need-title-1': 'La Claridad que Necesitas,',
    'lead-magnet.the-clarity-you-need-title-2': 'en Menos de 10 Minutos de Lectura.',
    'lead-magnet.the-clarity-you-need-description':
      'Esta no es una guía teórica de 50 páginas. Es un manual de campo, directo y sin rodeos, donde destilamos más de 8 años de experiencia construyendo equipos de élite.',
    'lead-magnet.the-clarity-you-need-caption': 'Al terminar de leer, serás capaz de:',
    'lead-magnet.the-clarity-you-need-1': 'Desactivar la "Bomba del CV Perfecto":',
    'lead-magnet.the-clarity-you-need-1-description':
      'Aprenderás a identificar a un verdadero solucionador de problemas, en lugar de a alguien que solo es bueno haciendo entrevistas.',
    'lead-magnet.the-clarity-you-need-2': 'Neutralizar al "Genio Tóxico":',
    'lead-magnet.the-clarity-you-need-2-description':
      'Te daremos un checklist de preguntas clave para detectar las malas contrataciones culturales antes de que infecten a tu equipo.',
    'lead-magnet.the-clarity-you-need-3': 'Evitar el "Veneno del Onboarding Lento":',
    'lead-magnet.the-clarity-you-need-3-description':
      'Recibirás una plantilla simple para que tus nuevos talentos (internos o externos) sean productivos en su primera semana, no en su tercer mes.',
    'lead-magnet.clientify-title-1': 'Escrito desde la Trinchera,',
    'lead-magnet.clientify-title-2': 'no desde la Teoría',
    'lead-magnet.clientify-description-1':
      'Esta guía fue escrita por Blas Hernández, CEO de Crazy Imagine Software. No habla desde la teoría de un consultor, sino desde la experiencia de un líder técnico que ha vivido tus mismos desafíos durante más de una década. Aquí no encontrarás hipótesis, sino lecciones tácticas validadas tras construir más de 400 proyectos y escalar docenas de equipos de ingeniería. Sabemos lo que funciona, simplemente porque lo ejecutamos todos los días.',
    'lead-magnet.clientify-quote':
      'Crazy Imagine no solo nos dio desarrolladores, nos dio un socio estratégico que entendió nuestro negocio desde el primer día.',
    'lead-magnet.clientify-quote-author': '- CEO de Clientify',
    'lead-magnet.roadmap-title-1': 'Tu Roadmap no puede esperar.',
    'lead-magnet.roadmap-title-2': 'Tu tranquilidad tampoco.',
    'lead-magnet.roadmap-description':
      'El coste de una mala contratación es brutal. El coste de la inacción es aún peor. Esta guía es el primer paso, el más fácil y rápido, para blindar tu equipo y tu proyecto. Es gratis. ¿Qué tienes que perder?',
    'lead-magnet.contact-us-description':
      '100% libre de spam. Odiamos el marketing basura tanto como tú.',
  },
} as const;
