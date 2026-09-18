import type { ExperienceItem } from '../types'

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'btech-cs',
    period: '2022 — Present',
    role: 'B.Tech in Computer Science & Engineering',
    organization: 'Undergraduate Program',
    badge: 'Senior Year // GPA 8.8/10',
    description: [
      'Core focus on Distributed Systems, Operating Systems, Machine Learning, and Algorithms.',
      'Active researcher in LLM inference optimization and multimodal retrieval algorithms.',
      'Lead technical organizer for campus developer circles and hackathon mentoring.'
    ],
    tags: ['Distributed Systems', 'Computer Architecture', 'Deep Learning', 'Data Structures']
  },
  {
    id: 'ai-intern',
    period: '2024 — Summer',
    role: 'Software Engineering / AI Intern',
    organization: 'Technology Research Lab',
    badge: 'Summer Internship',
    description: [
      'Engineered an internal RAG knowledge engine reducing document query latency from 4.2s to 280ms.',
      'Containerized and deployed embedding models on NVIDIA T4 GPUs using Triton Inference Server.',
      'Built automated data curation pipelines cleaning 500k+ unstructured enterprise files.'
    ],
    tags: ['Python', 'Docker', 'FastAPI', 'Qdrant', 'Triton Server']
  },
  {
    id: 'hackathons',
    period: '2023 — 2024',
    role: 'National Hackathon Winner & Finalist',
    organization: 'Competitive Engineering',
    badge: '1st Place Winner',
    description: [
      'Won 1st prize at 36-hour national AI hackathon building an autonomous multi-modal agent for code refactoring.',
      'Authored open-source developer tooling with 200+ stars across GitHub repositories.'
    ],
    tags: ['Open Source', 'Hackathons', 'Multi-Agent Systems', 'WebSockets']
  }
]
