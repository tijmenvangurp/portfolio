import { useEffect, useState } from "react"
import styled from "styled-components"
import { GoLinkExternal, GoRepoForked, GoStar } from "react-icons/go"
import { siteConfig } from "../data/siteConfig"
import Loader from "./Loader"

interface GitHubRepo {
  name: string
  description: string | null
  html_url: string
  updated_at: string
  fork: boolean
  stargazers_count: number
}

const endpoint = `https://api.github.com/users/${siteConfig.githubUsername}/repos?type=owner&sort=updated&per_page=5&page=1`

const RepositoriesWrapper = styled.div`
  position: relative;

  .repositories__content {
    margin-bottom: 40px;
  }

  .repositories__repo {
    position: relative;
  }

  .repositories__repo-link,
  .repositories_user-link a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
    display: flex;
    align-items: center;
  }

  .repositories_user-link {
    display: flex;
    justify-content: flex-end;
  }

  .repositories__repo-date {
    font-size: 10px;
  }

  .repositories__repo-star {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;

    svg {
      margin-right: 4px;
    }
  }

  .repositories__loader {
    display: flex;
  }

  hr {
    margin-top: 16px;
    background-color: ${({ theme }) => theme.colors.fontColor};
    opacity: 0.2;
  }
`

export default function Repositories() {
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading")

  useEffect(() => {
    const controller = new AbortController()

    fetch(endpoint, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`GitHub responded with ${response.status}`)
        }
        return response.json() as Promise<GitHubRepo[]>
      })
      .then((data) => {
        setRepos(data)
        setStatus("ready")
      })
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === "AbortError") {
          return
        }
        setStatus("error")
      })

    return () => controller.abort()
  }, [])

  return (
    <RepositoriesWrapper>
      <h2>Latest repositories on Github</h2>
      {status === "loading" && (
        <div className="repositories__loader">
          <Loader />
        </div>
      )}
      {status === "error" && <p>Could not load repositories right now.</p>}
      {status === "ready" && (
        <>
          <div className="repositories__content">
            {repos.map((repo) => (
              <div key={repo.name}>
                <div className="repositories__repo">
                  <a
                    className="repositories__repo-link"
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <strong>{repo.name}</strong>
                  </a>
                  <div>{repo.description}</div>
                  <div className="repositories__repo-date">
                    Updated: {new Date(repo.updated_at).toUTCString()}
                  </div>
                  <div className="repositories__repo-star">
                    {repo.fork && <GoRepoForked />}
                    <GoStar /> {repo.stargazers_count}
                  </div>
                </div>
                <hr />
              </div>
            ))}
          </div>
          <div className="repositories_user-link">
            <a
              href={`https://github.com/${siteConfig.githubUsername}`}
              target="_blank"
              rel="noreferrer"
            >
              See all my repositories
              <GoLinkExternal style={{ marginLeft: 8 }} />
            </a>
          </div>
        </>
      )}
    </RepositoriesWrapper>
  )
}
