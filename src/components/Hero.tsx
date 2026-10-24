import styled from "styled-components"
import { siteConfig } from "../data/siteConfig"

const HeroContainer = styled.div<{ $image?: string }>`
  position: relative;
  display: table;
  width: 100%;
  overflow: hidden;
  background-image: url(${(props) => props.$image ?? siteConfig.siteCover});
  height: 70vh;
  background-attachment: fixed;
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: cover;
`

const TitleContainer = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  width: 100%;
`

const HeroTitle = styled.h1`
  font-weight: 700;
  font-size: 3rem;
  margin: 10px 60px;
  color: #fff;
  text-shadow: 1px 1px 4px rgba(34, 34, 34, 0.6);

  @media (max-width: 480px) {
    font-size: 2.25rem;
    margin: 10px 24px;
  }
`

interface HeroProps {
  title: string
  image?: string
}

export default function Hero({ title, image }: HeroProps) {
  return (
    <HeroContainer $image={image}>
      <TitleContainer>
        <HeroTitle>{title}</HeroTitle>
      </TitleContainer>
    </HeroContainer>
  )
}
