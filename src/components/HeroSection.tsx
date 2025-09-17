import TextType from './TextType'
import TiltedCard from './TiltedCard'

export default function HeroSection() {
  return (
    <section
      className="flex justify-center flex-wrap-reverse gap-8 "
      id="heroSection"
    >
      <div className="w-1/2">
        <h1 className="text-4xl font-bold">
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
        <p>
          I am a pragmatic full-stack Java/.NET developer with strengths in IT,
          administration, sales, and customer service. My focus is modern web
          and backend development, with an interest in lower-level languages and
          hardware-related projects. Based in Stockholm, I thrive in flexible,
          challenge-driven environments and aim for elegant simplicity, solid
          architecture, and reliable logging in the software I build.
        </p>
      </div>
      <div>
        <TiltedCard
          imageSrc="src\assets\David_pp.jpg"
          altText="a picture of David Aslan"
          captionText="a picture of David Aslan"
          containerHeight="300px"
          containerWidth="300px"
          imageHeight="300px"
          imageWidth="300px"
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
