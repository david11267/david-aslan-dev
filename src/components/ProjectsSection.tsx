import Project from './Project'
import { projects } from '@/content'

export function ProjectsSection() {
  return (
    <section>
      {projects.map((p) => (
        <Project project={p} reverse={false} />
      ))}
    </section>
  )
}
