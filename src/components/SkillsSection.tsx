import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { skills } from '@/content'

export default function SkillsSection() {
  return (
    <section className="flex justify-center">
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {skills.map(({ name, Icon, description }) => (
          <Tooltip>
            <TooltipTrigger>
              <div
                key={name}
                className="flex items-center gap-3 rounded-lg  border-white/10 backdrop-blur px-3 py-2 cursor-help"
              >
                <Icon className="h-5 w-5 " />
                <span className="text-sm">{name}</span>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p className="flex max-w-48">{description}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </section>
  )
}
