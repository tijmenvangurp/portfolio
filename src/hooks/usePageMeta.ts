import { useEffect } from "react"
import { siteConfig } from "../data/siteConfig"

interface PageMeta {
  title: string
  description?: string
  keywords?: string[]
}

/**
 * Sets the document title and description for the current route. The initial
 * HTML already carries the home-page values, so crawlers see a useful head even
 * before the client renders.
 */
export function usePageMeta({ title, description, keywords }: PageMeta): void {
  useEffect(() => {
    document.title = `${title} | ${siteConfig.siteTitle}`

    const setMeta = (name: string, content: string) => {
      let element = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`)
      if (!element) {
        element = document.createElement("meta")
        element.name = name
        document.head.append(element)
      }
      element.content = content
    }

    setMeta("description", description ?? siteConfig.siteDescription)
    setMeta("keywords", (keywords ?? siteConfig.keyWords).join(", "))
  }, [title, description, keywords])
}
