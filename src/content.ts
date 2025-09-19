import {
  SiApachekafka,
  SiC,
  SiCplusplus,
  SiCss3,
  SiDocker,
  SiDotnet,
  SiFigma,
  SiGooglecloud,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiMqtt,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenjdk,
  SiPostgresql,
  SiReact,
  SiReactquery,
  SiReactrouter,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
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
    name: 'ASP MVC',
    Icon: SiDotnet,
    description:
      'Web application framework following the Model-View-Controller pattern. Enables clean separation of concerns and testable web applications with built-in routing and dependency injection.',
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
    name: 'Cloud',
    Icon: FaCloud,
    description:
      'On-demand computing resources and services delivered over the internet. Enables scalable, cost-effective solutions without managing physical infrastructure or hardware.',
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
]

export const projects: Array<Project> = [
  {
    header: 'Header',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam dolor iusto esse magnam similique, dolorem quae voluptate pariatur cumque sequi iste recusandae velit incidunt doloremque obcaecati! Reprehenderit voluptatum, odio, laudantium, sunt nulla ea rem possimus quibusdam aliquam minima nisi iusto corporis eum laborum doloremque. Harum assumenda quos soluta exercitationem repellat!',
    imagesUrl: [
      'https://picsum.photos/500/500',
      'https://picsum.photos/500/500',
      'https://picsum.photos/500/500',
    ],
    skills: [
      skills.find((s) => s.name.toLowerCase() === 'c')!,
      skills.find((s) => s.name.toLowerCase() === 'cms')!,
    ],
  },
]
