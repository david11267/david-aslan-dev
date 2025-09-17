import TextType from './TextType'

export default function HeroSection() {
  return (
    <section className="flex flex-wrap space-x-8" id="heroSection">
      <div>
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
        <p>Are some of the technologies I'm currently working with.</p>
      </div>
      <div>
        <img
          className="rounded-full w-40 h-40 object-cover "
          src="src\assets\David_pp.jpg"
          alt="a picture of me"
        />
      </div>
    </section>
  )
}
