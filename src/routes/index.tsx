import { createFileRoute } from '@tanstack/react-router'
import HeroSection from '@/components/HeroSection'
import { ProjectsSection } from '@/components/ProjectsSection'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
    </>
  )
}
