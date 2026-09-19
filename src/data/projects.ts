import type { Project } from '../types'

export const PROJECTS: Project[] = [
  {
    id: 'ai-resume-analyzer',
    index: '01 // 04',
    title: 'AI Resume Analyzer',
    italicAccent: '7-rule ATS heuristics & provider-agnostic AI',
    summary:
      'Full-stack resume optimization platform engineered with a React/Vite frontend, Node/Express backend, and MongoDB. Scores resumes against 7 deterministic ATS heuristics while executing contextual job-description matching through an LLM-backed pipeline. Built with a provider-agnostic AI service layer to swap backends without application refactors, alongside PDF report generation and AI-powered bullet point rewriting using the STAR method.',
    buildStatus: 'deployed',
    statusLabel: 'DEPLOYED // PRODUCTION BUILD',
    architectureHighlights: [
      'Scores resumes against 7 deterministic ATS heuristics with contextual job-description matching via an LLM pipeline',
      'Provider-agnostic AI service layer enabling seamless model swaps without touching core application logic',
      'Production PDF report generation and AI-powered bullet rewriting implementing the STAR method'
    ],
    technicalHighlight: {
      label: 'Core Architecture',
      value: '7 Heuristics & Provider-Agnostic LLM Layer'
    },
    techStack: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Google Antigravity'],
    category: 'ai-ml',
    githubUrl: 'https://github.com/sanjaycodes-code/AI-Resume-Analyzer',
    liveDemoUrl: 'https://ai-resume-analyzer-ashy-pi-13.vercel.app/',
    compositionTiltDeg: -2.0
  },
  {
    id: 'assetflow',
    index: '02 // 04',
    title: 'AssetFlow',
    italicAccent: 'MERN hackathon build paused on TLS timeout',
    summary:
      'Full-stack asset management system built solo during a hackathon. Implemented the core MERN scaffold, authentication, and initial asset tracking feature modules before running into a MongoDB Atlas TLS handshake and connection timeout issue mid-build. Currently paused as a deep-dive case study in network debugging.',
    buildStatus: 'paused',
    statusLabel: 'HACKATHON BUILD // PAUSED ON TLS ISSUE',
    architectureHighlights: [
      'Solo hackathon project built with React, Node/Express, and MongoDB Atlas',
      'Implemented foundational authentication and core asset tracking modules',
      'Diagnosed server-side MongoDB Atlas TLS connection timeouts in cloud environments'
    ],
    technicalHighlight: {
      label: 'Technical Blocker',
      value: 'MongoDB Atlas TLS Handshake / Timeout'
    },
    techStack: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB Atlas', 'Tailwind CSS'],
    category: 'fullstack',
    compositionTiltDeg: 2.2
  },
  {
    id: 'campusloop',
    index: '03 // 04',
    title: 'CampusLoop',
    italicAccent: 'real-time sockets & atomic booking concurrency',
    summary:
      'Peer-to-peer campus device and gear rental platform completed as a solo full-stack rewrite. Features JWT authentication restricted to verified institute emails with protected routes and backend-enforced ownership checks. Broadcasts live equipment availability across clients via Socket.io and implements race-condition-safe booking using atomic MongoDB operations to prevent double-booking, integrated with Stripe checkout and webhook fulfillment.',
    buildStatus: 'deployed',
    statusLabel: 'DEPLOYED // SHIPPED TO VERCEL & RENDER',
    architectureHighlights: [
      'Solo rewrite with JWT auth restricted to verified institute emails, protected routes, and backend-enforced ownership checks',
      'Real-time availability broadcasts across clients via Socket.io with date-range reservation states',
      'Race-condition-safe booking utilizing atomic MongoDB operations to eliminate double-booking concurrency bugs'
    ],
    technicalHighlight: {
      label: 'Concurrency & Real-Time',
      value: 'Socket.io + Atomic MongoDB Operations'
    },
    techStack: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB Atlas', 'Socket.io', 'Stripe', 'Tailwind CSS'],
    category: 'fullstack',
    githubUrl: 'https://github.com/sanjaycodes-code/Campus_Loop',
    liveDemoUrl: 'https://campus-loop-ten.vercel.app/',
    compositionTiltDeg: -1.8
  },
  {
    id: 'job-market-analytics',
    index: '04 // 04',
    title: 'Tech Job-Market Intelligence',
    italicAccent: 'Kaggle baseline to PostgreSQL & Power BI star schema',
    summary:
      'Data analytics project currently in the pipeline stage. Aggregating a baseline dataset from Kaggle and Hugging Face with supplemental API feeds. Building an end-to-end data pipeline targeting a PostgreSQL schema, an analytical SQL modeling layer, and a Power BI star schema for compensation and skill trend visualization.',
    buildStatus: 'data-pipeline',
    statusLabel: 'IN PROGRESS // DATA PIPELINE STAGE',
    architectureHighlights: [
      'Dataset ingestion from Kaggle and Hugging Face repositories with API supplements',
      'Relational PostgreSQL schema design for normalized storage of job postings',
      'Developing analytical SQL modeling layer and Power BI star schema'
    ],
    technicalHighlight: {
      label: 'Current Pipeline Stage',
      value: 'Dataset Ingestion & PostgreSQL Modeling'
    },
    techStack: ['Python (Pandas)', 'PostgreSQL', 'Power BI', 'SQL', 'Kaggle / Hugging Face'],
    category: 'systems',
    compositionTiltDeg: 1.6
  }
]
