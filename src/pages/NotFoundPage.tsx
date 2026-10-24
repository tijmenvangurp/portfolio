import styled from "styled-components"
import { usePageMeta } from "../hooks/usePageMeta"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import Wrapper from "../components/Wrapper"

const MainTitle = styled.h1`
  line-height: 1.5;
  text-align: center;
  font-size: 3rem;
`

const Icon = styled.div`
  width: 150px;
  margin: 0 auto;
`

const Text = styled.p`
  text-align: center;
`

export default function NotFoundPage() {
  usePageMeta({ title: "Page Not Found" })

  return (
    <Layout>
      <Hero title="404" image="/images/404.jpeg" />
      <Wrapper>
        <MainTitle>404 Page Not Found</MainTitle>
        <Icon>
          <img src="/images/ufo-and-cow.svg" alt="ufo and cow" />
        </Icon>
        <Text>
          Looks like you&apos;ve followed a broken link or entered a URL that doesn&apos;t exist
          on this site.
        </Text>
      </Wrapper>
    </Layout>
  )
}
