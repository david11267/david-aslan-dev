import {
  SiApachekafka,
  SiBootstrap,
  SiC,
  SiCplusplus,
  SiCss3,
  SiDocker,
  SiDotnet,
  SiFigma,
  SiGooglecloud,
  SiGooglegemini,
  SiGooglesheets,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiMqtt,
  SiMui,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenjdk,
  SiOpensourceinitiative,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiRabbitmq,
  SiReact,
  SiReactquery,
  SiReactrouter,
  SiSanity,
  SiShopify,
  SiSpringboot,
  SiStoryblok,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
} from 'react-icons/si'
import {
  FaCloud,
  FaCubes,
  FaDatabase,
  FaJava,
  FaUsers,
  FaVial,
} from 'react-icons/fa'
import type { Project } from '@/types/projects'
import type { Skill } from './types/skills'

export const skills: Array<Skill> = [
  // Languages
  {
    name: 'Java',
    Icon: FaJava,
    description:
      'Object-oriented programming language known for its "write once, run anywhere" philosophy. Widely used for enterprise applications, Android development, and backend services.',
  },
  {
    name: 'C#',
    Icon: SiDotnet,
    description:
      'Modern, type-safe programming language developed by Microsoft. Primarily used for Windows applications, web services, and game development with Unity.',
  },
  {
    name: 'JavaScript',
    Icon: SiJavascript,
    description:
      'Dynamic programming language that powers interactive web pages and server-side applications. Essential for modern web development and increasingly used for mobile and desktop apps.',
  },
  {
    name: 'Typescript',
    Icon: SiTypescript,
    description:
      'Superset of JavaScript that adds static type checking and enhanced tooling. Improves code quality, maintainability, and developer experience for large-scale applications.',
  },
  {
    name: 'C',
    Icon: SiC,
    description:
      'Low-level systems programming language known for its efficiency and direct hardware access. Foundation for operating systems, embedded systems, and performance-critical applications.',
  },
  {
    name: 'C++',
    Icon: SiCplusplus,
    description:
      'Extension of C with object-oriented features and advanced memory management. Used for system software, game engines, and high-performance applications.',
  },
  {
    name: 'Python',
    Icon: SiPython,
    description:
      'High-level, interpreted programming language known for its readability and versatility. Widely used for data science, machine learning, web development, automation, and scripting.',
  },
  {
    name: 'HTML5',
    Icon: SiHtml5,
    description:
      'Latest version of HTML markup language with semantic elements and multimedia support. Provides structure and meaning to web content with improved accessibility features.',
  },
  {
    name: 'CSS',
    Icon: SiCss3,
    description:
      'Stylesheet language for describing the presentation of web documents. Controls layout, colors, typography, and responsive design across different devices and screen sizes.',
  },
  {
    name: 'TailwindCSS',
    Icon: SiTailwindcss,
    description:
      'Utility-first CSS framework that provides low-level utility classes for rapid UI development. Enables consistent design systems and faster prototyping without writing custom CSS.',
  },
  {
    name: 'Bootstrap',
    Icon: SiBootstrap,
    description:
      'Popular CSS framework with pre-built components and responsive grid system. Provides consistent design patterns and speeds up development with ready-to-use UI components.',
  },
  {
    name: 'Material UI',
    Icon: SiMui,
    description:
      "React component library implementing Google's Material Design principles. Offers comprehensive UI components with consistent theming and accessibility features built-in.",
  },

  // Ways of Working
  {
    name: 'Agile',
    Icon: FaUsers,
    description:
      'Iterative software development methodology emphasizing collaboration, flexibility, and continuous delivery. Focuses on delivering working software in short sprints with regular feedback loops.',
  },
  {
    name: 'Mob Programming',
    Icon: FaUsers,
    description:
      'Collaborative programming practice where the entire team works on the same code simultaneously. Promotes knowledge sharing, reduces bugs, and accelerates learning through collective problem-solving.',
  },
  {
    name: 'TDD',
    Icon: FaVial,
    description:
      'Test-Driven Development methodology where tests are written before implementation code. Ensures code quality, reduces bugs, and creates comprehensive test coverage through the red-green-refactor cycle.',
  },

  // Tools
  {
    name: '.NET',
    Icon: SiDotnet,
    description:
      'Cross-platform development framework by Microsoft supporting multiple programming languages. Provides comprehensive libraries and tools for building web, mobile, desktop, and cloud applications.',
  },
  {
    name: 'React',
    Icon: SiReact,
    description:
      'Popular JavaScript library for building user interfaces using component-based architecture. Enables efficient rendering with virtual DOM and promotes reusable, maintainable UI components.',
  },
  {
    name: 'Next.js',
    Icon: SiNextdotjs,
    description:
      'React framework with server-side rendering and static site generation capabilities. Provides optimized performance, SEO benefits, and simplified deployment for production applications.',
  },
  {
    name: 'Spring Boot',
    Icon: SiSpringboot,
    description:
      'Java framework that simplifies enterprise application development with auto-configuration and embedded servers. Reduces boilerplate code and accelerates microservices development.',
  },
  {
    name: 'Node.js',
    Icon: SiNodedotjs,
    description:
      "JavaScript runtime built on Chrome's V8 engine for server-side development. Enables full-stack JavaScript development with non-blocking I/O and extensive package ecosystem.",
  },
  {
    name: 'Vite',
    Icon: SiVite,
    description:
      'Fast build tool and development server for modern web projects. Provides instant hot module replacement, optimized bundling, and excellent developer experience with minimal configuration.',
  },
  {
    name: 'TanStack Router',
    Icon: SiReactrouter,
    description:
      'Type-safe routing library for React applications with file-based routing and data loading. Provides excellent developer experience with automatic code splitting and type inference.',
  },
  {
    name: 'TanStack Query',
    Icon: SiReactquery,
    description:
      'Data fetching and state management library for React applications. Handles caching, synchronization, and background updates with minimal configuration and excellent TypeScript support.',
  },
  {
    name: 'SQL Server',
    Icon: FaDatabase,
    description:
      "Microsoft's relational database management system with enterprise-grade features. Provides high availability, security, and analytics capabilities for mission-critical applications.",
  },
  {
    name: 'postgres-sql',
    Icon: SiPostgresql,
    description:
      'Open-source relational database known for its reliability, extensibility, and standards compliance. Supports complex queries, JSON data types, and advanced indexing strategies.',
  },
  {
    name: 'MQTT',
    Icon: SiMqtt,
    description:
      'Lightweight messaging protocol designed for IoT and low-bandwidth networks. Enables efficient communication between devices with publish-subscribe architecture and minimal overhead.',
  },
  {
    name: 'Apache Kafka',
    Icon: SiApachekafka,
    description:
      'Distributed streaming platform for building real-time data pipelines and applications. Handles high-throughput, fault-tolerant data streaming with horizontal scalability.',
  },
  {
    name: 'RabbitMQ',
    Icon: SiRabbitmq,
    description:
      'Open-source message broker that implements the Advanced Message Queuing Protocol (AMQP). Enables reliable message delivery, routing, and queuing for distributed applications.',
  },
  {
    name: 'Docker',
    Icon: SiDocker,
    description:
      'Containerization platform that packages applications with their dependencies into lightweight, portable containers. Simplifies deployment, scaling, and environment consistency across development and production.',
  },
  {
    name: 'Linux',
    Icon: SiLinux,
    description:
      'Open-source Unix-like operating system kernel powering servers, embedded systems, and development environments. Known for stability, security, and extensive customization options.',
  },
  {
    name: 'JVM',
    Icon: SiOpenjdk,
    description:
      'Java Virtual Machine that executes Java bytecode and provides platform independence. Enables Java applications to run on any operating system with consistent performance characteristics.',
  },
  {
    name: 'Azure',
    Icon: FaCloud,
    description:
      "Microsoft's cloud computing platform offering infrastructure, platform, and software services. Provides scalable solutions for hosting, data storage, AI, and enterprise integration.",
  },
  {
    name: 'Google Cloud',
    Icon: SiGooglecloud,
    description:
      "Google's cloud platform providing computing, storage, and data analytics services. Offers machine learning tools, global infrastructure, and pay-as-you-go pricing models.",
  },
  {
    name: 'Vercel',
    Icon: SiVercel,
    description:
      'Cloud platform specializing in frontend deployment and serverless functions. Optimized for Next.js applications with automatic scaling, edge computing, and seamless Git integration.',
  },
  {
    name: 'CMS',
    Icon: FaCubes,
    description:
      'Content Management System for creating, editing, and organizing digital content. Enables non-technical users to manage websites and applications without programming knowledge.',
  },
  {
    name: 'Figma',
    Icon: SiFigma,
    description:
      'Collaborative design tool for creating user interfaces, prototypes, and design systems. Enables real-time collaboration between designers and developers with cloud-based workflows.',
  },
  {
    name: 'Postman',
    Icon: SiPostman,
    description:
      'API development and testing platform that simplifies the process of building, testing, and documenting APIs. Provides intuitive interface for making HTTP requests and automated testing.',
  },
  {
    name: 'Storyblok',
    Icon: SiStoryblok,
    description:
      'Headless CMS that provides a visual editor for content creation with API-first approach. Enables content management with real-time collaboration and multi-channel publishing.',
  },
  {
    name: 'Sanity CMS',
    Icon: SiSanity,
    description:
      'Structured content platform with real-time collaboration and customizable editing environment. Provides flexible content modeling and powerful query capabilities.',
  },
  {
    name: 'Shopify',
    Icon: SiShopify,
    description:
      'E-commerce platform enabling businesses to create online stores with built-in payment processing, inventory management, and customizable themes.',
  },
  {
    name: 'Google Sheets',
    Icon: SiGooglesheets,
    description:
      'Cloud-based spreadsheet application that enables real-time collaboration, data analysis, and integration with other Google services and APIs.',
  },

  {
    name: 'Google gemini',
    Icon: SiGooglegemini,
    description: `Gemini API enables developers to integrate advanced AI capabilities into applications via RESTful endpoints. It supports multimodal inputs—text, images, audio, PDFs, and video—and offers models like Gemini 2.5 Pro for complex reasoning, code generation, and data analysis. The API is accessible through platforms like Google AI Studio`,
  },
  {
    name: 'Open Source',
    Icon: SiOpensourceinitiative,
    description: `Open source refers to software whose source code is made publicly available, allowing anyone to view, modify, and distribute it. It encourages collaboration, transparency, and community-driven development.`,
  },
]

export const projects: Array<Project> = [
  {
    companyName: '<Salt/>',
    header: 'json2resume',
    text: `Data driven resume editor powered by the jsonresume.org format standard. Manage all your resume information in one place. Create, edit, and export a professional resume with an intuitive editor and beautiful themes.

`,
    repository: 'https://github.com/salt-community/json2resume',
    href: 'https://frontend-proud-butterfly-9919.fly.dev/editor',
    imagesUrl: [
      'json2resume/editor.png',
      'json2resume/json.png',
      'json2resume/root.png',
      'json2resume/themes.png',
    ],
    skills: [
      skills.find((s) => s.name.toLowerCase() === 'typescript')!,
      skills.find((s) => s.name.toLowerCase() === 'tailwindcss')!,
      skills.find((s) => s.name.toLowerCase() === 'tanstack router')!,
      skills.find((s) => s.name.toLowerCase() === 'tanstack query')!,
      skills.find((s) => s.name.toLowerCase() === 'spring boot')!,
      skills.find((s) => s.name.toLowerCase() === 'docker')!,
      skills.find((s) => s.name.toLowerCase() === 'react')!,
      skills.find((s) => s.name.toLowerCase() === 'vite')!,
      skills.find((s) => s.name.toLowerCase() === 'google cloud')!,
      skills.find((s) => s.name.toLowerCase() === 'google gemini')!,
      skills.find((s) => s.name.toLowerCase() === 'open source')!,
    ],
  },
  {
    companyName: '<Salt/>',
    header: 'Nova Bank',
    text: `A fictive bank app with real transaction, currency exchange, fraud detection, ai logs filtering and admin dashboard with historical data.`,
    repository: 'https://github.com/salt-community/jfs-2025-03-31-novabank-ab',
    imagesUrl: [
      'novabank/adminDashboard.png',
      'novabank/adminApplicants.png',
      'novabank/adminApplicantsDetails.png',
      'novabank/allTransactions.png',
      'novabank/novabank3.png',
      'novabank/userManagement.png',
    ],
    href: 'https://youtu.be/nE_16cvehM0?t=1929',
    skills: [
      skills.find((s) => s.name.toLowerCase() === 'typescript')!,
      skills.find((s) => s.name.toLowerCase() === 'tailwindcss')!,
      skills.find((s) => s.name.toLowerCase() === 'tanstack router')!,
      skills.find((s) => s.name.toLowerCase() === 'tanstack query')!,
      skills.find((s) => s.name.toLowerCase() === 'postgres-sql')!,
      skills.find((s) => s.name.toLowerCase() === 'spring boot')!,
      skills.find((s) => s.name.toLowerCase() === 'postgres-sql')!,
      skills.find((s) => s.name.toLowerCase() === 'docker')!,
      skills.find((s) => s.name.toLowerCase() === 'react')!,
      skills.find((s) => s.name.toLowerCase() === 'vite')!,
      skills.find((s) => s.name.toLowerCase() === 'google cloud')!,
    ],
  },
  {
    companyName: '<Salt/>',
    header: 'Disney Guesser',
    text: `A fun little disney guesser in english where the less clues needed for a guess provides a higher score`,
    imagesUrl: ['disneyGuesser/index.png', 'disneyGuesser/postGuess.png'],
    href: 'https://disney-guesser-exrw.vercel.app/',
    skills: [
      skills.find((s) => s.name.toLowerCase() === 'typescript')!,
      skills.find((s) => s.name.toLowerCase() === 'tailwindcss')!,
      skills.find((s) => s.name.toLowerCase() === 'react')!,
      skills.find((s) => s.name.toLowerCase() === 'vite')!,
    ],
  },

  {
    header: 'Quintic-3d',
    text: `Developed a scalable e-commerce platform for custom 3D-printing orders using Next.js, Sanity CMS, and internationalization (i18n) to support multiple languages.
Created a new landing page for a Quintic subsidiary using Next.js.
Converted legacy building plans into CAD format with customer-specific modifications, enabling approved home remodels through Stockholm city.
`,
    skills: [
      skills.find((s) => s.name.toLowerCase() === 'next.js')!,
      skills.find((s) => s.name.toLowerCase() === 'typescript')!,
      skills.find((s) => s.name.toLowerCase() === 'html5')!,
      skills.find((s) => s.name.toLowerCase() === 'css')!,
      skills.find((s) => s.name.toLowerCase() === 'sanity cms')!,
      skills.find((s) => s.name.toLowerCase() === 'shopify')!,
    ].filter(Boolean),
    repository: 'https://github.com/david11267/quintic-3d',
    companyName: 'Jabbar Investment AB',
  },
  {
    header: 'Davidaslan.dev',
    text: 'This is the website you are currently on right now. I needed a place to display my work, skills and provide an easy way to get to know me.',
    href: 'https://davidaslan.dev/',
    skills: [
      skills.find((s) => s.name.toLowerCase() === 'vite')!,
      skills.find((s) => s.name.toLowerCase() === 'react')!,
      skills.find((s) => s.name.toLowerCase() === 'typescript')!,
      skills.find((s) => s.name.toLowerCase() === 'tanstack router')!,
      skills.find((s) => s.name.toLowerCase() === 'tailwindcss')!,
      skills.find((s) => s.name.toLowerCase() === 'html5')!,
      skills.find((s) => s.name.toLowerCase() === 'css')!,
    ].filter(Boolean),
    repository: 'https://github.com/david11267/david-aslan-dev',
    companyName: 'Personal project',
  },
  {
    header: 'RealestateCC',
    text: "This is a Web based client for desktop and mobile that helps users find more USP's (Unique Selling Point) for their clients automatically and then present that data in the client. The application is gathering data from both external api's and web scraping. The backend is built in .NET 6 and is connected to a SQL database via Entity Framework. I use Google's apis for logging in and geolocation data for nearby points of interest as well as route planning between multiple locations.",
    skills: [
      skills.find((s) => s.name.toLowerCase() === '.net')!,
      skills.find((s) => s.name.toLowerCase() === 'c#')!,
      skills.find((s) => s.name.toLowerCase() === 'sql server')!,
      skills.find((s) => s.name.toLowerCase() === 'javascript')!,
      skills.find((s) => s.name.toLowerCase() === 'typescript')!,
      skills.find((s) => s.name.toLowerCase() === 'react')!,
      skills.find((s) => s.name.toLowerCase() === 'css')!,
      skills.find((s) => s.name.toLowerCase() === 'google cloud')!,
    ].filter(Boolean),
    repository: 'https://github.com/david11267/InfoCollCompWebPage',
    companyName: 'Personal project',
  },
  {
    header: 'Värmeverket',
    text: `Redesigned and optimized the Värmeverket website (varmeverket.com) for speed and mobile responsiveness in collaboration with the internal design team. I used Next js for server sided generation (SSG) thus offloading a lot of heavy lifting from the client and I utilized TypeScript and Tailwindcss for faster development time and type safety, storybook as a content management system (cms) and Vercel as hosting provider.
`,
    href: 'https://www.varmeverket.com/en',
    skills: [
      skills.find((s) => s.name.toLowerCase() === 'storyblok')!,
      skills.find((s) => s.name.toLowerCase() === 'next.js')!,
      skills.find((s) => s.name.toLowerCase() === 'javascript')!,
      skills.find((s) => s.name.toLowerCase() === 'typescript')!,
      skills.find((s) => s.name.toLowerCase() === 'html5')!,
      skills.find((s) => s.name.toLowerCase() === 'css')!,
      skills.find((s) => s.name.toLowerCase() === 'tailwindcss')!,
    ].filter(Boolean),
    companyName: 'Värmeverket Ab',
  },
  {
    header: 'Sales prospect information scraper',
    text: 'This was a application built in Python that read organization-numbers from a text file and then scraped relevant information from the web onto a google sheets page that formatted data on a scale of sales potential. This was a really fun and giving project since it provided me with easy sales leads and sales as well as it did the boring brunt work i previously had to do manually.',
    companyName: 'Personal project',
    skills: [
      skills.find((s) => s.name.toLowerCase() === 'python')!,
      skills.find((s) => s.name.toLowerCase() === 'google sheets')!,
    ].filter(Boolean),
  },
]
