import type { Skill } from './skills'

export type Project = {
  header: string
  text: string
  href?: string
  skills?: Array<Skill>
  repository?: string
  companyName: string
  imagesUrl?: Array<string>
}
