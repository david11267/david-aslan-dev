import ReposSummary from './ReposSummary'
import useGitProjects from '@/hooks/useGitProjects'

export default function GithubProjects() {
  /*   const { isLoading, data, error } = useGitProjects()

  if (isLoading) return <p>loading</p>
  if (error) return <p>error: {error.message}</p>
  if (data) */

  const data = {
    repoSummaryDtoCollections: [
      {
        name: 'GitProjectsAPI',
        html_url: 'https://github.com/david11267/GitProjectsAPI',
        description:
          'A lightweight API that scans a developer’s public GitHub to extract skills, tools, and project summaries, returning clean JSON for easy integration. It makes GitHub the single source of truth for portfolios, ideal for dashboards, recruiters, and automation tools.',
        languages: [
          {
            name: 'Java',
            description:
              'Primary language for backend logic and API development.',
            usage: 'Backend API development',
            iconUrl:
              'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
          },
          {
            name: 'Svelte',
            description: 'Used for one of the frontend applications.',
            usage: 'Frontend development',
            iconUrl:
              'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg',
          },
          {
            name: 'TypeScript',
            description: 'Used for both frontend applications.',
            usage: 'Frontend development',
            iconUrl:
              'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
          },
          {
            name: 'CSS',
            description: 'Styling for both frontend applications.',
            usage: 'Styling',
            iconUrl:
              'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
          },
          {
            name: 'JavaScript',
            description: 'General scripting for frontend.',
            usage: 'Frontend scripting',
            iconUrl:
              'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
          },
          {
            name: 'HTML',
            description: 'Structure for frontend applications.',
            usage: 'Frontend structure',
            iconUrl:
              'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
          },
          {
            name: 'Dockerfile',
            description: 'Defines the Docker image for the backend service.',
            usage: 'Containerization configuration',
            iconUrl:
              'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
          },
        ],
        frameworks: [
          {
            name: 'Spring Boot',
            description:
              'Backend API development, dependency injection, web server.',
            usage: 'Backend API development',
            iconUrl:
              'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
          },
          {
            name: 'SvelteKit',
            description: 'Frontend web application framework.',
            usage: 'Frontend web application development',
            iconUrl:
              'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg',
          },
          {
            name: 'React',
            description: 'Frontend web application framework.',
            usage: 'Frontend web application development',
            iconUrl:
              'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
          },
        ],
        tools: [
          {
            name: 'Maven',
            description:
              'Java project build automation and dependency management.',
            usage: 'Backend build tool',
            iconUrl:
              'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg',
          },
          {
            name: 'Vite',
            description:
              'Fast frontend build tool for both React and SvelteKit applications.',
            usage: 'Frontend build tool',
            iconUrl:
              'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg',
          },
          {
            name: 'Docker',
            description: 'Containerization of the application services.',
            usage: 'Application containerization',
            iconUrl:
              'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
          },
          {
            name: 'Docker Compose',
            description:
              'Orchestration of multi-container Docker applications.',
            usage: 'Multi-container orchestration',
            iconUrl:
              'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
          },
          {
            name: 'Clerk',
            description: 'User authentication and management for the frontend.',
            usage: 'Authentication integration',
            iconUrl: '',
          },
          {
            name: 'Gemini AI',
            description:
              'AI service integration for content generation or analysis.',
            usage: 'AI service integration',
            iconUrl: '',
          },
          {
            name: 'GitHub API',
            description: 'Used to fetch repository and profile data.',
            usage: 'Data source integration',
            iconUrl:
              'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
          },
          {
            name: 'shadcn/ui',
            description:
              'UI component library for building accessible and customizable components.',
            usage: 'UI component library',
            iconUrl: '',
          },
          {
            name: 'ESLint',
            description:
              'Code linting to maintain code quality and consistency.',
            usage: 'Code linting',
            iconUrl:
              'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg',
          },
          {
            name: 'Prettier',
            description: 'Code formatter to ensure consistent code style.',
            usage: 'Code formatting',
            iconUrl:
              'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prettier/prettier-original.svg',
          },
        ],
        architecture: 'Microservices, RESTful API',
        deployment: 'Docker, Docker Compose',
      },
      {
        name: 'david-aslan-dev',
        html_url: 'https://github.com/david11267/david-aslan-dev',
        description:
          'A modern, responsive developer portfolio built with React (TypeScript), TanStack Router for file-based routing, Tailwind CSS for styling, shadcn/ui for components, TanStack Store and Query for state management, and Vite for builds.',
        languages: [
          {
            name: 'TypeScript',
            description: 'Primary development language for the application.',
            usage: 'Primary development language',
            iconUrl:
              'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
          },
          {
            name: 'CSS',
            description:
              'Styling for the user interface, primarily through Tailwind CSS.',
            usage: 'Styling',
            iconUrl:
              'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
          },
          {
            name: 'HTML',
            description: 'Provides the structural foundation of the web pages.',
            usage: 'Web page structure',
            iconUrl:
              'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
          },
          {
            name: 'JavaScript',
            description: 'Runtime for the frontend application.',
            usage: 'Frontend runtime',
            iconUrl:
              'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
          },
        ],
        frameworks: [
          {
            name: 'React',
            description: 'Frontend library for building user interfaces.',
            usage: 'Frontend UI development',
            iconUrl:
              'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
          },
          {
            name: 'TanStack Router',
            description: 'File-based routing solution for React applications.',
            usage: 'Routing',
            iconUrl: '',
          },
          {
            name: 'Tailwind CSS',
            description: 'Utility-first CSS framework for rapid styling.',
            usage: 'Styling',
            iconUrl:
              'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
          },
        ],
        tools: [
          {
            name: 'Vite',
            description:
              'Fast frontend build tool for development and production.',
            usage: 'Frontend build tool',
            iconUrl:
              'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg',
          },
          {
            name: 'shadcn/ui',
            description: 'Reusable UI components for React applications.',
            usage: 'UI component library',
            iconUrl: '',
          },
          {
            name: 'TanStack Query',
            description:
              'Data fetching, caching, and state management for asynchronous data.',
            usage: 'Data fetching and caching',
            iconUrl: '',
          },
          {
            name: 'TanStack Store',
            description: 'State management library for React applications.',
            usage: 'State management',
            iconUrl: '',
          },
          {
            name: 'Vitest',
            description:
              'Testing framework for JavaScript/TypeScript projects.',
            usage: 'Testing framework',
            iconUrl: '',
          },
          {
            name: 'ESLint',
            description: 'Code linting to enforce code quality and style.',
            usage: 'Code linting',
            iconUrl:
              'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg',
          },
          {
            name: 'Prettier',
            description: 'Code formatter to ensure consistent code style.',
            usage: 'Code formatting',
            iconUrl:
              'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prettier/prettier-original.svg',
          },
          {
            name: 'npm',
            description:
              'Package manager for installing and managing project dependencies.',
            usage: 'Package management',
            iconUrl:
              'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg',
          },
        ],
        architecture:
          'Single Page Application (SPA), Component-based architecture',
        deployment: 'Static site hosting',
      },
    ],
  }
  return (
    <div className=" backdrop-blur-xl p-8 space-y-24 ">
      {data.repoSummaryDtoCollections.map((rs) => (
        <ReposSummary repoSummary={rs} />
      ))}
    </div>
  )
}
