import { TooltipProvider } from './ui/tooltip'
import SkillBadge from './SkillBadge'
import type { RepoSummaryDto } from '@/types/githubProjects'

type Props = {
  repoSummary: RepoSummaryDto
}

export default function ReposSummary({ repoSummary }: Props) {
  return (
    <div
      className={
        'w-full flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 max-w-full'
      }
    >
      {/* Text Section */}
      <div className="flex-1 space-y-4">
        <div>
          <a href={repoSummary.html_url}>
            <h3 className="text-2xl">{repoSummary.name}</h3>
          </a>
        </div>

        <p>{repoSummary.description}</p>
        <p>{repoSummary.architecture}</p>

        <div className="flex flex-wrap gap-4">
          <TooltipProvider>
            {repoSummary.languages.map(({ name, iconUrl, description }) => (
              <SkillBadge
                key={name}
                description={description}
                urlIcon={iconUrl}
                name={name}
              />
            ))}
          </TooltipProvider>
        </div>

        <div className="flex flex-wrap gap-4">
          <TooltipProvider>
            {repoSummary.frameworks.map(({ name, iconUrl, description }) => (
              <SkillBadge
                key={name}
                description={description}
                urlIcon={iconUrl}
                name={name}
              />
            ))}
          </TooltipProvider>
        </div>

        <div className="flex flex-wrap gap-4">
          <TooltipProvider>
            {repoSummary.tools.map(({ name, iconUrl, description }) => (
              <SkillBadge
                key={name}
                description={description}
                urlIcon={iconUrl}
                name={name}
              />
            ))}
          </TooltipProvider>
        </div>

        <a className="text-accent break-words" href={repoSummary.html_url}>
          {repoSummary.html_url}
        </a>
      </div>
    </div>
  )
}
