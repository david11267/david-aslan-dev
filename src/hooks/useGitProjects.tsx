import { useQuery } from '@tanstack/react-query'
import type { RepoSummaryResponse } from '@/types/githubProjects'

export default function useGitProjects() {
  const apikey = import.meta.env.VITE_GITHUB_API_KEY
  return useQuery({
    queryKey: ['projects'],
    queryFn: async (): Promise<RepoSummaryResponse> => {
      const response = await fetch(
        `https://spring-backend-a4qk4.ondigitalocean.app/api/projects`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            apiKey: apikey,
          },
        },
      )

      if (!response.ok) throw new Error('Request failed')
      return response.json()
    },
  })
}
