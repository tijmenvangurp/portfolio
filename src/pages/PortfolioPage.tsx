import styled from "styled-components"
import { MdDateRange } from "react-icons/md"
import { siteConfig } from "../data/siteConfig"
import { usePageMeta } from "../hooks/usePageMeta"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import Wrapper from "../components/Wrapper"

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  justify-items: center;
  max-width: 100%;
  margin-bottom: 40px;
`

const JobCard = styled.a<{ $interactive: boolean }>`
  display: block;
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
  margin-bottom: 16px;
  padding: 16px;
  border-radius: 4px;
  text-decoration: none;
  color: inherit;
  max-width: 380px;
  width: 100%;

  ${(props) =>
    props.$interactive &&
    `
      &:hover img {
        transition: transform 0.5s;
        transform: translateY(-5px);
      }
    `}
`

const Image = styled.img`
  max-height: 220px;
  max-width: 380px;
  width: 100%;
  object-fit: cover;
  object-position: center center;
`

const Title = styled.h3`
  color: inherit;
  max-width: 380px;
`

const Date = styled.p`
  font-size: 16px;
  display: flex;
  align-items: center;
  color: inherit;
  opacity: 0.7;
  max-width: 380px;

  svg {
    margin-right: 8px;
  }
`

const Subtitle = styled.p`
  color: inherit;
  max-width: 380px;
`

const Description = styled.p`
  color: inherit;
  font-size: 14px;
  opacity: 0.7;
  max-width: 380px;
`

export default function PortfolioPage() {
  usePageMeta({ title: "Portfolio" })

  return (
    <Layout>
      <Hero title="Portfolio" image="/images/pierre-chatel-innocenti-W5INoOK-5eI-unsplash.jpeg" />
      <Wrapper>
        <Grid>
          {siteConfig.portfolio.map((item) => (
            <JobCard
              key={item.title}
              as={item.url ? "a" : "div"}
              href={item.url}
              target={item.url ? "_blank" : undefined}
              rel={item.url ? "noreferrer" : undefined}
              $interactive={Boolean(item.url)}
            >
              <Image src={item.image} alt={item.title} />
              <Title>{item.title}</Title>
              {item.date && (
                <Date>
                  <MdDateRange /> {item.date}
                </Date>
              )}
              {item.subTitle && <Subtitle>{item.subTitle}</Subtitle>}
              <Description>{item.description}</Description>
            </JobCard>
          ))}
        </Grid>
      </Wrapper>
    </Layout>
  )
}
