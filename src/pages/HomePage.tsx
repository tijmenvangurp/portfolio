import styled from "styled-components"
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import { siteConfig } from "../data/siteConfig"
import { usePageMeta } from "../hooks/usePageMeta"
import About from "../components/About"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import Repositories from "../components/Repositories"
import Skills from "../components/Skills"
import Timeline from "../components/Timeline"
import Wrapper from "../components/Wrapper"

const Content = styled.div`
  max-width: 100%;
  margin-bottom: 40px;
`

const AvatarRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
`

const Avatar = styled.img`
  box-shadow: 3px 3px 15px 0 rgba(0, 0, 0, 0.75);
  max-width: 200px;
  border-radius: 100px;
  margin: 0 auto 24px;
`

const SocialRow = styled.div`
  margin-top: 12px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;

  a + a {
    margin-left: 8px;
  }
`

const SocialLink = styled.a<{ $hoverColor: string }>`
  padding: 8px;
  color: #555;
  display: flex;

  &:hover {
    color: ${(props) => props.$hoverColor};
  }
`

const TwoColumns = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`

const Separator = styled.hr`
  margin-top: 24px;
  margin-bottom: 16px;
  background-color: ${({ theme }) => theme.colors.fontColor};
  opacity: 0.2;
`

const socialLinks = [
  { key: "github", href: siteConfig.social.github, color: "#24292e", Icon: FaGithub },
  { key: "linkedin", href: siteConfig.social.linkedin, color: "#0077B5", Icon: FaLinkedin },
  { key: "twitter", href: siteConfig.social.twitter, color: "#1da1f2", Icon: FaTwitter },
  { key: "email", href: `mailto:${siteConfig.social.email}`, color: "#c23a2b", Icon: FaEnvelope },
]

export default function HomePage() {
  usePageMeta({ title: siteConfig.siteTitle })

  return (
    <Layout>
      <Hero title={siteConfig.siteTitle} />
      <Wrapper>
        <Content>
          <AvatarRow>
            <Avatar src={siteConfig.authorAvatar} alt="Tijmen van Gurp" />
            <SocialRow>
              {socialLinks
                .filter((link) => link.href)
                .map(({ key, href, color, Icon }) => (
                  <SocialLink
                    key={key}
                    href={href}
                    $hoverColor={color}
                    aria-label={key}
                    target={key === "email" ? undefined : "_blank"}
                    rel={key === "email" ? undefined : "noopener noreferrer"}
                  >
                    <Icon size={32} />
                  </SocialLink>
                ))}
            </SocialRow>
          </AvatarRow>

          <TwoColumns>
            <About title="About" text={siteConfig.authorDescription} />
            <Skills title="Skills" skills={siteConfig.skills} />
          </TwoColumns>

          <Separator />
          <Timeline />
          <Separator />
          {siteConfig.githubUsername && <Repositories />}
        </Content>
      </Wrapper>
    </Layout>
  )
}
