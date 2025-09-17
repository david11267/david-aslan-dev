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
import type { ComponentType } from 'react'

export default function SkillsSection() {
  const skills: Array<{
    name: string
    Icon: ComponentType<{ className?: string }>
  }> = [
    // Languages
    { name: 'Java', Icon: FaJava },
    { name: 'C#', Icon: SiDotnet },
    { name: 'JavaScript', Icon: SiJavascript },
    { name: 'Typescript', Icon: SiTypescript },
    { name: 'C', Icon: SiC },
    { name: 'C++', Icon: SiCplusplus },
    { name: 'HTML5', Icon: SiHtml5 },
    { name: 'CSS', Icon: SiCss3 },
    { name: 'TailwindCSS', Icon: SiTailwindcss },

    // Ways of Working
    { name: 'Agile', Icon: FaUsers },
    { name: 'Mob Programming', Icon: FaUsers },
    { name: 'TDD', Icon: FaVial },

    // Tools
    { name: '.NET', Icon: SiDotnet },
    { name: 'ASP MVC', Icon: SiDotnet },
    { name: 'React', Icon: SiReact },
    { name: 'Next.js', Icon: SiNextdotjs },
    { name: 'Spring Boot', Icon: SiSpringboot },
    { name: 'Node.js', Icon: SiNodedotjs },
    { name: 'TanStack Router', Icon: SiReactrouter },
    { name: 'TanStack Query', Icon: SiReactquery },
    { name: 'SQL Server', Icon: FaDatabase },
    { name: 'postgres-sql', Icon: SiPostgresql },
    { name: 'MQTT', Icon: SiMqtt },
    { name: 'Apache Kafka', Icon: SiApachekafka },
    { name: 'Docker', Icon: SiDocker },
    { name: 'Linux', Icon: SiLinux },
    { name: 'JVM', Icon: SiOpenjdk },
    { name: 'Azure', Icon: FaCloud },
    { name: 'Google Cloud', Icon: SiGooglecloud },
    { name: 'Vercel', Icon: SiVercel },
    { name: 'Cloud', Icon: FaCloud },
    { name: 'CMS', Icon: FaCubes },
    { name: 'Figma', Icon: SiFigma },
  ]
  return (
    <section className="flex justify-center">
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {skills.map(({ name, Icon }) => (
          <div
            key={name}
            className="flex items-center gap-3 rounded-lg  border-white/10 backdrop-blur px-3 py-2"
          >
            <Icon className="h-5 w-5" />
            <span className="text-sm">{name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
