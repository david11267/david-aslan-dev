import { useState, useEffect, useRef } from 'react'
import { Tooltip } from '@radix-ui/react-tooltip'
import { TooltipContent, TooltipTrigger } from './ui/tooltip'
import type { Skill } from '@/types/skills'

export default function SkillBadge({ Icon, description, name }: Skill) {
  const [isMobile, setIsMobile] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const badgeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768) // md breakpoint
    }

    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)

    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  useEffect(() => {
    if (!isMobile || !isOpen) return

    const handleClickOutside = (event: MouseEvent) => {
      if (
        badgeRef.current &&
        !badgeRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isMobile, isOpen])

  const handleClick = (e: React.MouseEvent) => {
    if (isMobile) {
      e.stopPropagation()
      setIsOpen(!isOpen)
    }
  }

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsOpen(true)
    }
  }

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsOpen(false)
    }
  }

  return (
    <Tooltip open={isOpen} onOpenChange={setIsOpen}>
      <TooltipTrigger asChild>
        <div
          ref={badgeRef}
          key={name}
          className={`flex items-center gap-3 rounded-lg border-white/10 backdrop-blur-xl px-3 py-2 transition-all duration-200 ${
            isMobile
              ? 'cursor-pointer active:scale-95 hover:bg-white/10'
              : 'cursor-help hover:bg-white/5'
          } ${isOpen && isMobile ? 'bg-white/10 scale-105' : ''}`}
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Icon className="h-5 w-5" />
          <span className="text-sm">{name}</span>
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <p className="flex max-w-48">{description}</p>
      </TooltipContent>
    </Tooltip>
  )
}
