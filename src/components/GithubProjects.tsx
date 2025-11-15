import ReposSummary from './ReposSummary'
import useGitProjects from '@/hooks/useGitProjects'

export default function GithubProjects() {
  const { isLoading, data, error } = useGitProjects()

  if (isLoading)
    return (
      <div className=" p-8 space-y-8 ">
        <h3 className="text-3xl">Loading projects from github projects api</h3>
      </div>
    )
  if (error)
    return (
      <div className=" p-8 space-y-8 ">
        <h3 className="text-3xl">error: {error.message}</h3>
      </div>
    )
  if (data)
    return (
      <div className=" p-8 space-y-8 ">
        <h3 className="text-3xl">Generated data via GithubProjects api</h3>
        <div className=" backdrop-blur-xl space-y-24 ">
          {data.repoSummaryDtoCollections.map((rs) => (
            <ReposSummary repoSummary={rs} />
          ))}
        </div>
      </div>
    )
}
