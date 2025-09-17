import { Link } from '@tanstack/react-router'

export default function Header() {
  const links = [
    {
      to: '/',
      label: 'Home',
    },
    {
      to: '/projects',
      label: 'Projects',
    },
    {
      to: '/blogs',
      label: 'Blogs',
    },
  ]
  return (
    <header className="sticky top-0 z-50">
      <nav className=" p-4 flex justify-center">
        <div className="font-bold rounded-full space-x-16 p-4 border-2 ">
          {links.map((link) => (
            <Link className="text-foreground/90 hover:underline  " to={link.to}>
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}
