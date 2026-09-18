import type { SkillCategory } from '../types'

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'ai-ml',
    categoryName: 'AI & Machine Learning',
    iconName: 'Cpu',
    description: 'Model deployment, vector pipelines, speculative decoding, and fine-tuning.',
    skills: [
      { name: 'PyTorch', isPrimary: true },
      { name: 'Transformers / HF', isPrimary: true },
      { name: 'vLLM & TensorRT-LLM', isPrimary: true },
      { name: 'CUDA / Triton Kernels', isPrimary: false },
      { name: 'Vector DBs (Qdrant, Pinecone)', isPrimary: true },
      { name: 'RAG & Semantic Cache', isPrimary: true },
      { name: 'LoRA & QLoRA Fine-tuning', isPrimary: false }
    ]
  },
  {
    id: 'systems-backend',
    categoryName: 'Systems & Backend',
    iconName: 'Server',
    description: 'Distributed consensus, concurrent services, microservices, and storage engines.',
    skills: [
      { name: 'Python (FastAPI, AsyncIO)', isPrimary: true },
      { name: 'Go / Rust Basics', isPrimary: true },
      { name: 'Node.js & TypeScript', isPrimary: true },
      { name: 'PostgreSQL & Redis', isPrimary: true },
      { name: 'Docker & Linux Systems', isPrimary: true },
      { name: 'gRPC & Protocol Buffers', isPrimary: false },
      { name: 'CI/CD & Git Workflows', isPrimary: false }
    ]
  },
  {
    id: 'frontend-architecture',
    categoryName: 'Frontend & UI Engineering',
    iconName: 'Layout',
    description: 'Type-safe interfaces, high-performance animations, and design engineering.',
    skills: [
      { name: 'React 19 / Next.js', isPrimary: true },
      { name: 'TypeScript', isPrimary: true },
      { name: 'Tailwind CSS', isPrimary: true },
      { name: 'Framer Motion', isPrimary: true },
      { name: 'State Architecture', isPrimary: false },
      { name: 'WebSockets & SSE', isPrimary: false }
    ]
  }
]
