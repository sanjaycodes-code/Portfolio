import type { SkillCategory } from '../types'

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'ai-ml',
    index: '// 02.1',
    categoryName: 'AI & Machine Learning',
    iconName: 'Bot',
    projectContext: 'Applied in AI Resume Analyzer & Job-Market Analytics',
    description:
      'Orchestrating provider-abstracted LLM workflows, document parsing pipelines, and baseline dataset ingestion.',
    skills: [
      { name: 'Python', isCore: true },
      { name: 'LangChain & LLM APIs', isCore: true },
      { name: 'Google Antigravity', isCore: true },
      { name: 'Embeddings & Semantic Search', isCore: true },
      { name: 'Pandas (Data Wrangling)', isCore: false },
      { name: 'Kaggle / Hugging Face Feeds', isCore: false }
    ]
  },
  {
    id: 'systems-backend',
    index: '// 02.2',
    categoryName: 'Systems & Backend',
    iconName: 'Server',
    projectContext: 'Applied in CampusLoop, AssetFlow & Job-Market DB',
    description:
      'Constructing RESTful endpoints, real-time WebSocket state distribution, database modeling, and webhook lifecycles.',
    skills: [
      { name: 'Node.js', isCore: true },
      { name: 'Express.js', isCore: true },
      { name: 'MongoDB Atlas & Mongoose', isCore: true },
      { name: 'PostgreSQL & SQL', isCore: true },
      { name: 'Socket.io (WebSockets)', isCore: true },
      { name: 'Stripe API & Webhooks', isCore: false },
      { name: 'REST API Design', isCore: false }
    ]
  },
  {
    id: 'frontend-architecture',
    index: '// 02.3',
    categoryName: 'Frontend Architecture',
    iconName: 'Layout',
    projectContext: 'Applied in CampusLoop, AssetFlow & AI Resume UI',
    description:
      'Designing reactive user interfaces, component state architectures, type-safe props, and fluid spring physics.',
    skills: [
      { name: 'React', isCore: true },
      { name: 'Vite', isCore: true },
      { name: 'TypeScript', isCore: true },
      { name: 'JavaScript (ES6+)', isCore: true },
      { name: 'Tailwind CSS', isCore: true },
      { name: 'Framer Motion', isCore: false },
      { name: 'Responsive UI Design', isCore: false }
    ]
  },
  {
    id: 'tools-environments',
    index: '// 02.4',
    categoryName: 'Tools & Environments',
    iconName: 'Terminal',
    projectContext: 'Daily dev workflows across all four repositories',
    description:
      'Version control discipline, serverless & containerized deployments, API contract verification, and data modeling.',
    skills: [
      { name: 'Git & GitHub', isCore: true },
      { name: 'Vercel Deployment', isCore: true },
      { name: 'Render Hosting', isCore: true },
      { name: 'Postman (API Testing)', isCore: false },
      { name: 'Linux / Bash CLI', isCore: false },
      { name: 'Power BI (Star Schema)', isCore: false }
    ]
  }
]
