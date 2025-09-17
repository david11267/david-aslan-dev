import { createFileRoute } from '@tanstack/react-router'
import HeroSection from '@/components/HeroSection'
import { ProjectsSection } from '@/components/ProjectsSection'
import SkillsSection from '@/components/SkillsSection'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="space-y-32 py-16">
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
    </div>
  )
}
