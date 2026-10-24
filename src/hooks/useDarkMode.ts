import { useCallback, useEffect, useState } from "react"
import type { ThemeName } from "../styles/themes"

const FALLBACK: ThemeName = "light"

/**
 * Reads the theme the inline bootstrap script in `index.html` already applied,
 * and mirrors later system-preference changes through `window.__onThemeChange`.
 */
export function useDarkMode(): [ThemeName, () => void] {
  const [theme, setTheme] = useState<ThemeName>(() => window.__theme ?? FALLBACK)

  useEffect(() => {
    window.__onThemeChange = (next: ThemeName) => setTheme(next)
    return () => {
      window.__onThemeChange = undefined
    }
  }, [])

  const toggleTheme = useCallback(() => {
    const next: ThemeName = theme === "dark" ? "light" : "dark"
    window.__setPreferredTheme?.(next)
    setTheme(next)
  }, [theme])

  return [theme, toggleTheme]
}
