import { NavLink } from "react-router-dom"
import styled from "styled-components"
import { FiMoon, FiSun } from "react-icons/fi"
import Switch from "react-switch"
import { siteConfig } from "../data/siteConfig"
import type { ThemeName } from "../styles/themes"

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: ${({ theme }) => theme.colors.primary};
`

const HeaderNav = styled.nav`
  margin-left: auto;
  margin-right: auto;
  height: 60px;
  display: flex;
  flex-direction: row;
  max-width: 960px;
  justify-content: space-between;
  overflow-x: auto;
  overflow-y: hidden;
  background-color: ${({ theme }) => theme.colors.primary};

  a:hover {
    filter: brightness(0.6);
  }
`

const HeaderLinkGroup = styled.div`
  display: flex;
  flex-direction: row;
`

const HeaderLink = styled(NavLink)`
  position: relative;
  box-sizing: border-box;
  text-decoration: none;
  display: flex;
  align-items: center;
  color: #fff;
  border: 0;
  margin: 0;
  margin-right: 0.5rem;
  padding-left: 20px;
  padding-right: 20px;
  min-width: 42px;
  z-index: 10;

  &.active {
    pointer-events: none;
    border-bottom: 2px solid #fff;
  }
`

const StyledSwitch = styled(Switch).attrs((props) => ({
  onHandleColor: props.theme.colors.primary,
  offHandleColor: props.theme.colors.primary,
}))``

const SwitchWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-right: 20px;
`

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`

interface HeaderProps {
  theme: ThemeName
  onChangeTheme: () => void
}

export default function Header({ theme, onChangeTheme }: HeaderProps) {
  return (
    <HeaderWrapper>
      <HeaderNav>
        <HeaderLinkGroup>
          {siteConfig.headerLinks.map((headerLink) => (
            <HeaderLink
              key={headerLink.url}
              to={headerLink.url}
              end={headerLink.url === "/"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {headerLink.label}
            </HeaderLink>
          ))}
        </HeaderLinkGroup>
        {siteConfig.enableDarkmode && (
          <SwitchWrapper>
            <StyledSwitch
              onChange={onChangeTheme}
              checked={theme === "light"}
              onColor="#626262"
              offColor="#212121"
              checkedIcon={
                <IconWrapper>
                  <FiSun color="yellow" />
                </IconWrapper>
              }
              uncheckedIcon={
                <IconWrapper>
                  <FiMoon color="white" />
                </IconWrapper>
              }
            />
          </SwitchWrapper>
        )}
      </HeaderNav>
    </HeaderWrapper>
  )
}
