import type { ComponentType } from 'react'

export type Skill = {
  name: string
  Icon?: ComponentType<{ className?: string }>
  urlIcon?: string
  description: string
}
