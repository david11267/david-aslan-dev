import { Link } from '@tanstack/react-router'

export default function Header() {
  return (
    <header>
      <nav className="flex justify-center">
        <div className="font-bold ">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/blogs">Blogs</Link>
        </div>
      </nav>
    </header>
  )
}
