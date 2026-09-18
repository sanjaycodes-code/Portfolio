import type { Project } from '../types'

export const PROJECTS: Project[] = [
  {
    id: 'ai-resume-analyzer',
    index: '01 // 04',
    title: 'AI Resume Analyzer',
    italicAccent: 'semantic scoring & latent skill extraction',
    summary:
      'LLM-powered resume evaluation engine that parses resumes into structured schemas, performs embeddings-based semantic similarity scoring against job descriptions, and returns actionable skill-gap diagnostics.',
    architectureHighlights: [
      'Multi-stage parsing pipeline extracting structured entity trees from unstructured PDFs',
      'Vector cosine similarity scoring against target job description requirements',
      'Automated ATS keyword gap analysis generating targeted refactoring recommendations'
    ],
    metrics: [
      { label: 'ATS Match Precision', value: '92%' },
      { label: 'Analysis Latency', value: '< 1.4s' },
      { label: 'Schema Validity', value: '99.2%' }
    ],
    techStack: ['Python', 'FastAPI', 'LangChain / LLM', 'React', 'Tailwind CSS'],
    category: 'ai-ml',
    githubUrl: 'https://github.com/sanjay',
    liveDemoUrl: 'https://resume-analyzer.demo',
    compositionTiltDeg: -2.0
  },
  {
    id: 'assetflow',
    index: '02 // 04',
    title: 'AssetFlow Enterprise Hub',
    italicAccent: 'deterministic lifecycle tracking & audit trails',
    summary:
      'Full-stack asset management platform built solo during an intensive 36-hour hackathon. Features role-based access control (RBAC), end-to-end hardware tracking, and automated lifecycle audit trails.',
    architectureHighlights: [
      'Engineered complete MERN stack architecture with optimized MongoDB indexing',
      'Granular JWT authentication distinguishing Admin, Auditor, and Employee permission levels',
      'Deterministic state transition machine managing asset depreciation, maintenance, and returns'
    ],
    metrics: [
      { label: 'Hackathon Build', value: '36 hrs Solo' },
      { label: 'Record Capacity', value: '10k+ Assets' },
      { label: 'Access Control', value: 'JWT + RBAC' }
    ],
    techStack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Tailwind CSS'],
    category: 'fullstack',
    githubUrl: 'https://github.com/sanjay',
    compositionTiltDeg: 2.2
  },
  {
    id: 'campusloop',
    index: '03 // 04',
    title: 'CampusLoop Sharing Network',
    italicAccent: 'decentralized hardware sharing on campus',
    summary:
      'Peer-to-peer campus device and lab equipment lending network built with a team during a collegiate hackathon. Enables verified university students to borrow, loan, and monitor expensive tech hardware securely.',
    architectureHighlights: [
      'Institutional email domain verification gating access to a trusted peer network',
      'Real-time reservation engine with automated conflict prevention for high-demand devices',
      'Collaborative team development: led frontend architecture and REST API contracts'
    ],
    metrics: [
      { label: 'Collegiate Hackathon', value: '24 hrs Sprint' },
      { label: 'Double-Booking Rate', value: '0.0%' },
      { label: 'Pilot Cohort', value: '120+ Students' }
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    category: 'fullstack',
    githubUrl: 'https://github.com/sanjay',
    compositionTiltDeg: -1.8
  },
  {
    id: 'job-market-analytics',
    index: '04 // 04',
    title: 'Tech Job-Market Intelligence',
    italicAccent: 'uncovering hiring signals across 50k+ postings',
    summary:
      'Comprehensive data analytics and business intelligence project dissecting 50,000+ tech job postings to reveal emerging software/AI skill premiums, salary bands, and regional demand dynamics.',
    architectureHighlights: [
      'Multi-step Python ETL pipeline deduplicating and structuring messy semi-structured job feeds',
      'Advanced SQL analytics utilizing CTEs, window functions, and multi-table aggregations',
      'Interactive Power BI analytical dashboards with dynamic drill-downs by role and experience tier'
    ],
    metrics: [
      { label: 'Postings Analyzed', value: '50,000+' },
      { label: 'SQL Query Tuning', value: '-38% Run Time' },
      { label: 'Interactive Views', value: '6 Dashboards' }
    ],
    techStack: ['SQL (PostgreSQL)', 'Python (Pandas)', 'Power BI', 'ETL Pipelines'],
    category: 'systems',
    githubUrl: 'https://github.com/sanjay',
    compositionTiltDeg: 1.6
  }
]
