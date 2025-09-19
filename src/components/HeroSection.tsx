import { SiGithub, SiGmail, SiLinkedin } from 'react-icons/si'
import TextType from './TextType'
import TiltedCard from './TiltedCard'
import type { ComponentType } from 'react'

export default function HeroSection() {
  const socials: Array<{
    name: string
    href: string
    Icon: ComponentType<{ className?: string }>
  }> = [
    { name: 'Github', href: 'https://github.com/david11267', Icon: SiGithub },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/davidaslandev/',
      Icon: SiLinkedin,
    },
    {
      name: 'Email',
      href: 'mailto:david.aslan1999@gmail.com',
      Icon: SiGmail,
    },
  ]

  return (
    <section
      className="w-full flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16 px-4 max-w-full"
      id="heroSection"
    >
      <div className="w-full lg:flex-1 space-y-4 max-w-full">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold break-words">
          <TextType
            text={[
              'Java Developer',
              '.NET Developer',
              'React Developer',
              'Next js Developer',
              'Web developer',
              'Dev ops guy',
              'Student',
              'Nerd',
            ]}
            typingSpeed={75}
            pauseDuration={3000}
            showCursor={true}
            cursorCharacter="|"
          />{' '}
        </h1>
        <p className="text-sm sm:text-base leading-relaxed break-words">
          I am a pragmatic full-stack Java/.NET developer with strengths in IT,
          administration, sales, and customer service. My focus is modern web
          and backend development, with an interest in lower-level languages and
          hardware-related projects. Based in Stockholm, I thrive in flexible,
          challenge-driven environments and aim for elegant simplicity, solid
          architecture, and reliable logging in the software I build.
        </p>

        <div className="mt-6 flex flex-wrap gap-2 sm:gap-4 justify-center lg:justify-start">
          {socials.map(({ href, Icon }) => (
            <a
              key={href}
              href={href}
              className="flex p-3 sm:p-4 rounded-xl hover:scale-110 transition-transform"
            >
              <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
            </a>
          ))}
        </div>
      </div>
      <div className="flex-shrink-0 w-full max-w-[280px] sm:max-w-[300px] flex justify-center">
        <TiltedCard
          imageSrc="/David_pp.jpg"
          altText="a picture of David Aslan"
          captionText="a picture of David Aslan"
          containerHeight="280px"
          containerWidth="280px"
          imageHeight="280px"
          imageWidth="280px"
          rotateAmplitude={12}
          scaleOnHover={1.2}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
        />
      </div>
    </section>
  )
}
