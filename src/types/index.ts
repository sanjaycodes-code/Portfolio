export type ProjectCategory = 'ai-ml' | 'systems' | 'fullstack'
export type ProjectBuildStatus = 'in-development' | 'paused' | 'solo-restart' | 'data-pipeline'

export interface ProjectTechnicalHighlight {
  label: string
  value: string
}

export interface Project {
  id: string
  index: string // e.g. '01 // 04'
  title: string
  italicAccent: string // Accent phrase rendered in Instrument Serif italic
  summary: string
  buildStatus: ProjectBuildStatus
  statusLabel: string
  architectureHighlights: string[]
  technicalHighlight: ProjectTechnicalHighlight
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
