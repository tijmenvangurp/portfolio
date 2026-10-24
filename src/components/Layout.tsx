import { motion } from "framer-motion"
import { useEffect, type ReactNode } from "react"
import styled, { ThemeProvider } from "styled-components"
import { useLocation } from "react-router-dom"
import { GlobalStyle } from "../styles/global"
import { themes } from "../styles/themes"
import { useDarkMode } from "../hooks/useDarkMode"
import { animateOnScroll } from "../utils/animateOnScroll"
import Footer from "./Footer"
import Header from "./Header"

const variants = {
  initial: { y: 100, opacity: 0 },
  enter: { y: 0, opacity: 1, transition: { duration: 0.5 } },
}

const StyledContainer = styled.div`
  background: ${({ theme }) => theme.colors.background};
  overflow-x: hidden;
`

export default function Layout({ children }: { children: ReactNode }) {
  const [theme, toggleTheme] = useDarkMode()
  const location = useLocation()

  useEffect(() => animateOnScroll(), [location.pathname])

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle />
      <StyledContainer>
        <Header onChangeTheme={toggleTheme} theme={theme} />
        <motion.main
          key={location.pathname}
          variants={variants}
          initial="initial"
          animate="enter"
        >
          {children}
        </motion.main>
        <Footer />
      </StyledContainer>
    </ThemeProvider>
  )
}
