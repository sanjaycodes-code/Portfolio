import type { ExperienceItem } from '../types'

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'self-directed-track',
    index: '// 03.1',
    period: '2023 — Present',
    title: 'Self-Directed Software & AI Track',
    organization: 'Independent Engineering Curriculum',
    badge: 'ACTIVE PARALLEL TRACK',
    statusType: 'active',
    description: [
      'Pursuing an intensive parallel curriculum focused on full-stack web architecture, real-time WebSocket systems, and LLM application development.',
      'Building production-deployed applications (CampusLoop, AI Resume Analyzer) to translate engineering theory into resilient systems.',
      'Actively exploring agentic engineering workflows using Google Antigravity for structured full-stack delivery.'
    ],
    tags: ['Full-Stack Systems', 'Socket.io', 'LLM Orchestration', 'PostgreSQL', 'Google Antigravity']
  },
  {
    id: 'campusloop-journey',
    index: '// 03.2',
    period: 'Hackathon → Solo Restart',
    title: 'CampusLoop: Team Hackathon to Solo Rebuild',
    organization: 'Collegiate Hackathon & Solo Project',
    badge: 'SOLO REWRITE // DEPLOYED',
    statusType: 'solo-restart',
    description: [
      'Originally built with a team during a collegiate hackathon (React, Firebase, Tailwind) where I developed the UI features, search, filters, and modal flows; left roughly halfway complete at the end of the sprint.',
      'Completed a full-stack solo MERN rewrite with JWT authentication restricted to verified institute emails, protected routes, and backend-enforced ownership checks.',
      'Engineered live inventory status broadcasting via Socket.io alongside race-condition-safe booking flows utilizing atomic MongoDB operations to eliminate double-booking.'
    ],
    tags: ['Solo Rewrite', 'Node/Express', 'MongoDB Atlas', 'Socket.io', 'Atomic Operations']
  },
  {
    id: 'assetflow-journey',
    index: '// 03.3',
    period: 'Hackathon Sprint',
    title: 'AssetFlow: Solo Hackathon Build',
    organization: 'Hackathon Build',
    badge: 'PAUSED // TLS DEBUGGING',
    statusType: 'paused',
    description: [
      'Designed and coded solo during a hackathon, successfully scaffolding the project and implementing authentication and core asset tracking modules.',
      'Blocked mid-build by a server-side MongoDB Atlas TLS handshake connection timeout, leaving the build roughly halfway complete.',
      'Maintained transparent documentation of the networking bottleneck as an active case study in connection debugging.'
    ],
    tags: ['Solo Hackathon', 'MERN Stack', 'JWT Auth', 'MongoDB Atlas', 'Network Debugging']
  },
  {
    id: 'nit-durgapur',
    index: '// 03.4',
    period: '2023 — Present',
    title: 'B.Tech Undergraduate (Entering Third Year)',
    organization: 'National Institute of Technology (NIT), Durgapur',
    badge: 'UNDERGRADUATE',
    statusType: 'academic',
    description: [
      'Undergraduate at an Institute of National Importance, entering third year.',
      'Pivoted from traditional engineering coursework into an intensive self-directed software and AI trajectory — building and shipping production-deployed products alongside degree studies rather than waiting until graduation.'
    ],
    tags: ['NIT Durgapur', 'Analytical Rigor', 'Self-Directed SWE & AI']
  }
]
