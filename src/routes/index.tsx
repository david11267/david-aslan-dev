import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <section className="flex flex-wrap space-x-8" id="heroSection">
      <div>
        <h1 className="text-4xl font-bold">
          Java / .NET / React / Containers{' '}
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
