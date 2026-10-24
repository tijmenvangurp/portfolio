import { siteConfig } from "../data/siteConfig"

export interface ThemeColors {
  background: string
  secondaryBackground: string
  primary: string
  fontColor: string
}

export interface Theme {
  colors: ThemeColors
}

export const lightTheme: Theme = {
  colors: {
    background: siteConfig.background_color,
    secondaryBackground: siteConfig.secondaryBackGround,
    primary: siteConfig.theme_color,
    fontColor: siteConfig.fontColor,
  },
}

export const darkTheme: Theme = {
  colors: {
    background: "#212121",
    secondaryBackground: "#171717",
    primary: "#636363",
    fontColor: "#FFF",
  },
}

export const themes = {
  light: lightTheme,
  dark: darkTheme,
} as const

export type ThemeName = keyof typeof themes
