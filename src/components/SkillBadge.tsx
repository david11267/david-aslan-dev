import { Tooltip } from '@radix-ui/react-tooltip'
import { TooltipContent, TooltipTrigger } from './ui/tooltip'
import type { Skill } from '@/types/skills'

export default function SkillBadge({ Icon, description, name }: Skill) {
  return (
    <>
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
    </>
  )
}
