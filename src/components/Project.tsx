import Autoplay from 'embla-carousel-autoplay'
import { TooltipProvider } from '@radix-ui/react-tooltip'
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel'
import SkillBadge from './SkillBadge'
import type { Project } from '@/types/projects'

type Props = {
  reverse: boolean
  project: Project
}

export default function Project({ project, reverse }: Props) {
  return (
    <div
      className={
        'flex md:flex-nowrap flex-wrap gap-8' +
        (reverse ? ' flex-row-reverse' : '')
      }
    >
      <div className="space-y-4">
        <div>
          <a href={project.href}>
            <h3 className="text-2xl">{project.header}</h3>
          </a>
          <h4>{project.companyName}</h4>
        </div>

        <p>{project.text}</p>
        <a className="text-accent" href={project.repository}>
          {project.repository}
        </a>

        <div className="flex flex-wrap gap-4">
          <TooltipProvider>
            {project.skills?.map(({ name, Icon, description }) => (
              <SkillBadge description={description} Icon={Icon} name={name} />
            ))}
          </TooltipProvider>
        </div>
      </div>
      {project.imagesUrl && (
        <div>
          <Carousel
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
          >
            <CarouselContent>
              {project.imagesUrl.map((img) => (
                <>
                  <CarouselItem className="basis-1/2">
                    <img src={img} alt="project related image" />
                  </CarouselItem>
                </>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      )}
    </div>
  )
}
