import { useQuery } from '@tanstack/react-query'
import type { RepoSummaryResponse } from '@/types/githubProjects'

export default function useGitProjects() {
  const apikey = import.meta.env.VITE_GITHUB_PROJECTS_API_KEY

  return useQuery({
    queryKey: ['projects'],
    queryFn: async (): Promise<RepoSummaryResponse> => {
      const response = await fetch('http://localhost:8080/api/projects', {
        method: 'POST',
        headers: {
          apiKey: apikey,
        },
        body: '',
      })

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`)
      }

      const data: RepoSummaryResponse = await response.json()
      return data
    },
  })
}
