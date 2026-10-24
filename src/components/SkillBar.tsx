import styled from "styled-components"

const SkillBarWrapper = styled.div<{ $level: number }>`
  width: 100%;

  .skill__bar {
    width: 100%;
    height: 10px;
    background-color: lightgrey;
    padding: 1px;
    margin-bottom: 20px;
  }

  .skill__level {
    background-color: ${({ theme }) => theme.colors.primary};
    width: 0;
    height: 8px;

    &.is-visible {
      transition: width 0.5s ease-in;
      width: ${(props) => props.$level}%;
    }
  }
`

interface SkillBarProps {
  name: string
  level: number
}

export default function SkillBar({ name, level }: SkillBarProps) {
  return (
    <SkillBarWrapper $level={level}>
      <label htmlFor={`${name}-bar`}>{name}</label>
      <div id={`${name}-bar`} className="skill__bar">
        <div className="skill__level animate-on-scroll" />
      </div>
    </SkillBarWrapper>
  )
}
