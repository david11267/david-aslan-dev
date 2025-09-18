import Autoplay from 'embla-carousel-autoplay'
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel'
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
        <h3 className="text-2xl">{project.header}</h3>
        <p>{project.text}</p>
        <div className="flex gap-4">
          {project.skills?.map(({ Icon }) => (
            <Icon />
          ))}
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
