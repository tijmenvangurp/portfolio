import React from 'react'
import styled, { css } from 'styled-components'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import siteConfig from '../../data/siteConfig'
import { withPrefix } from 'gatsby'
import loadable from '@loadable/component'
import Hero from '../components/hero'
import SEO from '../components/SEO'
import Wrapper from '../components/wrapper'
import { MdDateRange } from 'react-icons/md'

const Layout = loadable(() => import('../components/layout'))

const maxWidth = '380px'

const Image = styled.img`
  max-height: 220px;
  max-width: ${maxWidth};
  width: 100%;
  object-fit: cover;
  object-position: center center;
`

const JobCard = styled.a`
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
  margin-bottom: 16px;
  padding: 16px;
  border-radius: 4px;
  text-decoration: none;
  color: inherit;
  max-width: ${maxWidth};

  ${({ href }) =>
    href &&
    css`
      &:hover ${Image} {
        transition: transform 0.5s;
        transform: translateY(-5px);
      }
    `}
`

const Title = styled.h3`
  color: inherit;
  max-width: ${maxWidth};
`
const Date = styled.p`
  font-size: 16px;
  display: flex;
  align-items: center;
  svg {
    margin-right: 8px;
  }
  color: inherit;
  opacity: 0.7;
  max-width: ${maxWidth};
`

const Subtitle = styled.p`
  color: inherit;
  max-width: ${maxWidth};
`

const Description = styled.p`
  color: inherit;
  font-size: 14px;
  opacity: 0.7;
  max-width: ${maxWidth};
`

const Portfolio = ({ className, location }) => {
  const title = 'Portfolio'
  const { keywords, portfolio } = siteConfig
  return (
    <Layout location={location}>
      <SEO title={title} keywords={keywords} />

      <Hero
        heroImg={withPrefix(
          '/images/pierre-chatel-innocenti-W5INoOK-5eI-unsplash.jpeg'
        )}
        title={title}
      />

      <Wrapper className={className}>
        <Container className="page-content" fluid>
          <Row>
            {portfolio.map(job => (
              <Col key={job.description} align="center">
                <JobCard
                  as={job.url ? 'a' : 'div'}
                  href={job.url}
                  target="_blank"
                >
                  <Image src={withPrefix(job.image)} />
                  <Title>{job.title} </Title>

                  {job.date && (
                    <Date>
                      <MdDateRange /> {job.date}
                    </Date>
                  )}

                  {job.subTitle && <Subtitle>{job.subTitle}</Subtitle>}

                  <Description>{job.description}</Description>
                </JobCard>
              </Col>
            ))}
          </Row>
        </Container>
      </Wrapper>
    </Layout>
  )
}

export default styled(Portfolio)`
  .page-content {
    max-width: 100%;
    margin-bottom: 40px;
  }
`
