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
    <header className="sticky top-0 z-50 w-full">
      <nav className="p-2 sm:p-4 flex justify-center">
        <div className="font-bold text-sm sm:text-lg lg:text-xl rounded-full space-x-4 sm:space-x-8 lg:space-x-16 p-2 sm:p-4 backdrop-blur-md bg-black/30 shadow-2xl max-w-full">
          {links.map((link) => (
            <Link
              key={link.to}
              className="text-foreground/90 hover:underline whitespace-nowrap"
              to={link.to}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}
