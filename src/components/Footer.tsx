import styled from "styled-components"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import { siteConfig } from "../data/siteConfig"

const FooterWrapper = styled.footer`
  min-height: 93px;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: center;
  max-width: calc(960px + 48px);
  margin: 0 auto;
  padding: 0 24px;
  background: ${({ theme }) => theme.colors.background};

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

const SocialLinks = styled.div`
  display: flex;
  align-items: center;

  & > a + a {
    margin-left: 24px;
  }
`

const SocialLink = styled.a`
  display: flex;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Footer() {
  const { twitter, linkedin, github } = siteConfig.social

  return (
    <FooterWrapper>
      {`© ${new Date().getFullYear()} ${siteConfig.authorName}`}
      <SocialLinks>
        {github && (
          <SocialLink href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub size={32} />
          </SocialLink>
        )}
        {twitter && (
          <SocialLink href={twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter size={32} />
          </SocialLink>
        )}
        {linkedin && (
          <SocialLink href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin size={32} />
          </SocialLink>
        )}
      </SocialLinks>
    </FooterWrapper>
  )
}
