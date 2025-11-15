import { useQuery } from '@tanstack/react-query'
import type { RepoSummaryResponse } from '@/types/githubProjects'

export default function useGitProjects() {
  const apikey = import.meta.env.VITE_GITHUB_API_KEY

  const blackList = ['GitProjectsAPI', 'david-aslan-dev']

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
          body: JSON.stringify(blackList),
        },
      )

      if (!response.ok) throw new Error('Request failed')
      return response.json()
    },
  })
}
