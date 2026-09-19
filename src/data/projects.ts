import type { Project } from '../types'

export const PROJECTS: Project[] = [
  {
    id: 'ai-resume-analyzer',
    index: '01 // 04',
    title: 'AI Resume Analyzer',
    italicAccent: 'provider-abstracted LLM parsing pipeline',
    summary:
      'Full-stack resume analysis application built end-to-end using Google Antigravity. Architected with a React/Vite and Tailwind frontend, Node/Express backend, and MongoDB/Mongoose. Implements a provider-abstracted LLM integration to structure raw resume text and execute contextual evaluations.',
    buildStatus: 'in-development',
    statusLabel: 'IN DEVELOPMENT // GOOGLE ANTIGRAVITY BUILD',
    architectureHighlights: [
      'Engineered end-to-end utilizing Google Antigravity agentic workflows',
      'Decoupled, provider-abstracted LLM interface layer for model flexibility',
      'Structured entity parsing pipeline converting unstructured resumes into MongoDB schemas'
    ],
    technicalHighlight: {
      label: 'Core Architecture',
      value: 'Provider-Abstracted LLM Integration'
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
    italicAccent: 'solo rewrite: real-time sockets & Stripe booking',
    summary:
      'Peer-to-peer campus device and gear rental platform. Originally built with a team during a hackathon (React, Firebase, Tailwind) where I implemented features, search, and modals. Restarted solo from scratch with a full-stack MERN stack, Socket.io for live availability broadcasts, race-condition-safe booking flows, and Stripe checkout with webhook fulfillment.',
    buildStatus: 'solo-restart',
    statusLabel: 'SOLO REWRITE // SHIPPED TO VERCEL & RENDER',
    architectureHighlights: [
      'Solo rewrite migrating from Firebase to Node/Express + MongoDB Atlas + Mongoose',
      'Socket.io implementation broadcasting live equipment availability across clients',
      'Date-range reservation flow with status states, Stripe checkout, and webhook fulfillment'
    ],
    technicalHighlight: {
      label: 'Real-Time Architecture',
      value: 'Socket.io + Stripe Webhook Flow'
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
