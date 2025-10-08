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
        'w-full flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 max-w-full' +
        (reverse ? ' lg:flex-row-reverse' : '')
      }
    >
      {/* Text Section */}
      <div className="flex-1 space-y-4">
        <div>
          <a href={project.href}>
            <h3 className="text-2xl">{project.header}</h3>
          </a>
          <h4>{project.companyName}</h4>
        </div>

        <p>{project.text}</p>
        <a className="text-accent break-words" href={project.repository}>
          {project.repository}
        </a>

        <div className="flex flex-wrap gap-4">
          <TooltipProvider>
            {project.skills?.map(({ name, Icon, description }) => (
              <SkillBadge
                key={name}
                description={description}
                Icon={Icon}
                name={name}
              />
            ))}
          </TooltipProvider>
        </div>
      </div>

      {/* Carousel Section */}
      {project.imagesUrl && (
        <div className="w-full lg:w-1/3 flex-shrink-0">
          <Carousel
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
          >
            <CarouselContent className="gap-4">
              {project.imagesUrl.map((img, idx) => (
                <CarouselItem
                  key={idx}
                  className="flex-[0_0_auto] w-full h-48 sm:h-64 md:h-72 lg:h-80 overflow-hidden rounded-lg hover:"
                >
                  <img
                    src={img}
                    alt="project related image"
                    className="w-full h-full object-contain  transition-all"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      )}
    </div>
  )
}
