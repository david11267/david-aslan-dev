import Project from './Project'
import { projects } from '@/content'

export function ProjectsSection() {
  return (
    <section className="space-y-16">
      {projects.map((p, i) => (
        <div className=" backdrop-blur-xl p-8 ">
          <Project project={p} reverse={false} />
        </div>
      ))}
    </section>
  )
}
