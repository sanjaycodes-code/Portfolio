export type ProjectCategory = 'ai-ml' | 'systems' | 'fullstack'

export interface ProjectMetric {
  label: string
  value: string
}

export interface Project {
  id: string
  index: string // e.g. '01 // 04'
  title: string
  italicAccent: string // Accent phrase rendered in Instrument Serif italic
  summary: string
  architectureHighlights: string[]
  metrics: ProjectMetric[]
  techStack: string[]
  category: ProjectCategory
  githubUrl?: string
  liveDemoUrl?: string
  compositionTiltDeg?: number // Base editorial tilt angle (-3 to +3 deg)
}

export interface SkillItem {
  name: string
  isPrimary?: boolean
}

export interface SkillCategory {
  id: string
  categoryName: string
  iconName: string
  description: string
  skills: SkillItem[]
}

export interface ExperienceItem {
  id: string
  period: string
  role: string
  organization: string
  badge?: string
  description: string[]
  tags: string[]
}

export interface SocialLink {
  label: string
  url: string
  username: string
  type: 'github' | 'linkedin' | 'email' | 'x'
}
