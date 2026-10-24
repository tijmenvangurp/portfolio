/// <reference types="vite/client" />

declare global {
  interface Window {
    __theme?: "light" | "dark"
    __setPreferredTheme?: (theme: "light" | "dark") => void
    __onThemeChange?: (theme: "light" | "dark") => void
  }
}

export {}
