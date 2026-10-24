import type { Skill } from "../data/siteConfig"
import SkillBar from "./SkillBar"

interface SkillsProps {
  title?: string
  skills?: Skill[]
}

export default function Skills({ title = "Skills", skills = [] }: SkillsProps) {
  return (
    <div>
      <h1>{title}</h1>
      {skills.map((skill) => (
        <SkillBar key={skill.name} name={skill.name} level={skill.level} />
      ))}
    </div>
  )
}
