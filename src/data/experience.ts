import type { ExperienceItem } from '../types'

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'btech-cs',
    period: '2022 — Present',
    role: 'B.Tech in Computer Science & Engineering',
    organization: 'Undergraduate Program',
    badge: 'Senior Undergraduate',
    description: [
      'Comprehensive coursework in Data Structures, Algorithms, DBMS, Operating Systems, Computer Networks, and Machine Learning.',
      'Active builder developing end-to-end full-stack systems, data engineering pipelines, and LLM-assisted applications.',
      'Active participant in collegiate coding competitions and open-source software explorations.'
    ],
    tags: ['Data Structures & Algorithms', 'DBMS & SQL', 'Operating Systems', 'System Design Basics']
  },
  {
    id: 'assetflow-hackathon',
    period: '2024',
    role: 'Solo Hackathon Builder // AssetFlow',
    organization: '36-Hour Hackathon',
    badge: 'Solo Project',
    description: [
      'Engineered AssetFlow entirely solo in 36 hours — a full-stack MERN enterprise asset tracking platform with JWT-based role management (RBAC).',
      'Implemented real-time asset lifecycle state transitions and dynamic audit logging for hardware check-ins/checkouts.',
      'Designed a responsive, high-contrast dashboard with Tailwind CSS and rapid state management.'
    ],
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Role-Based Access Control']
  },
  {
    id: 'campusloop-hackathon',
    period: '2023 — 2024',
    role: 'Frontend Lead & Core Contributor // CampusLoop',
    organization: 'Collegiate Team Hackathon',
    badge: 'Team Hackathon',
    description: [
      'Led UI architecture and API integration for CampusLoop, a peer-to-peer campus hardware and device lending platform.',
      'Engineered conflict-free booking mechanisms to eliminate double-reservations for shared campus tech equipment.',
      'Spearheaded sprint planning and Git branch management within a 4-person engineering team.'
    ],
    tags: ['React', 'TypeScript', 'API Integration', 'Team Collaboration', 'Git Workflow']
  }
]
