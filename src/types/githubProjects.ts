export interface RepoSummaryDto {
  name: string
  html_url: string
  description: string
  languages: Array<Technology>
  frameworks: Array<Technology>
  tools: Array<Technology>
  architecture: string
  deployment: string
}

export interface Technology {
  name: string
  description: string
  usage: string
  iconUrl: string
}

export interface RepoSummaryResponse {
  repoSummaryDtoCollections: Array<RepoSummaryDto>
}
