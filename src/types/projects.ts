import type { Skill } from './skills'

export type Project = {
  header: string
  text: string
  skills?: Array<Skill>
  imagesUrl?: Array<string>
}
