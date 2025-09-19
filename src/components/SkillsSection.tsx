import SkillBadge from './SkillBadge'
import { TooltipProvider } from './ui/tooltip'
import { skills } from '@/content'

export default function SkillsSection() {
  return (
    <section className="flex justify-center">
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        <TooltipProvider>
          {skills.map(({ name, Icon, description }) => (
            <SkillBadge description={description} Icon={Icon} name={name} />
          ))}
        </TooltipProvider>
      </div>
    </section>
  )
}
