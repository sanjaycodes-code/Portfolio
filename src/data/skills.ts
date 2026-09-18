import type { SkillCategory } from '../types'

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'ai-data',
    categoryName: 'AI & Data Engineering',
    iconName: 'BrainCircuit',
    description: 'LLM orchestration, vector embeddings, data pipelines, and analytical intelligence.',
    skills: [
      { name: 'Python', isPrimary: true },
      { name: 'LangChain & LLM APIs', isPrimary: true },
      { name: 'Vector Search & Embeddings', isPrimary: true },
      { name: 'SQL (PostgreSQL / MySQL)', isPrimary: true },
      { name: 'Pandas & NumPy', isPrimary: true },
      { name: 'Power BI / Data Viz', isPrimary: true },
      { name: 'FastAPI', isPrimary: false }
    ]
  },
  {
    id: 'fullstack-systems',
    categoryName: 'Full Stack & Backend Systems',
    iconName: 'Server',
    description: 'Scalable web architecture, state management, REST APIs, and database modeling.',
    skills: [
      { name: 'React (Hooks, Modern Patterns)', isPrimary: true },
      { name: 'TypeScript / JavaScript', isPrimary: true },
      { name: 'Node.js & Express', isPrimary: true },
      { name: 'MongoDB (Mongoose)', isPrimary: true },
      { name: 'Tailwind CSS', isPrimary: true },
      { name: 'REST API Design & RBAC', isPrimary: true },
      { name: 'Framer Motion', isPrimary: false }
    ]
  },
  {
    id: 'cs-foundations',
    categoryName: 'Core CS & Engineering Rigor',
    iconName: 'Code2',
    description: 'Undergraduate computer science foundations and software engineering discipline.',
    skills: [
      { name: 'Data Structures & Algorithms', isPrimary: true },
      { name: 'Object-Oriented Programming (OOP)', isPrimary: true },
      { name: 'Database Management Systems (DBMS)', isPrimary: true },
      { name: 'Git & Version Control', isPrimary: true },
      { name: 'Operating Systems & Linux', isPrimary: false },
      { name: 'C / C++ (Academic)', isPrimary: false }
    ]
  }
]
