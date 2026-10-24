import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${({ theme }) => theme.colors.fontColor};
    background: ${({ theme }) => theme.colors.background};
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
  }
`
