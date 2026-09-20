export interface RolePreset {
  id: string
  label: string
  description: string
  targetKeywords: string[]
}

export interface ResumePreset {
  id: string
  label: string
  text: string
}

export const ROLE_PRESETS: RolePreset[] = [
  {
    id: 'swe-ai',
    label: 'Full-Stack / AI',
    description: 'Modern full-stack web applications with LLM integration and real-time systems',
    targetKeywords: [
      'React',
      'TypeScript',
      'Node.js',
      'Express',
      'MongoDB',
      'REST APIs',
      'WebSockets',
      'LLM',
      'Tailwind CSS',
      'Git'
    ]
  },
  {
    id: 'backend-systems',
    label: 'Backend & Systems',
    description: 'Server architectures, database schemas, and network lifecycle debugging',
    targetKeywords: [
      'Node.js',
      'Express',
      'PostgreSQL',
      'SQL',
      'MongoDB',
      'REST APIs',
      'WebSockets',
      'Linux',
      'Git'
    ]
  },
  {
    id: 'frontend-engineer',
    label: 'Frontend Specialist',
    description: 'High-performance reactive interfaces, motion physics, and accessible design',
    targetKeywords: [
      'React',
      'TypeScript',
      'JavaScript',
      'Tailwind CSS',
      'Vite',
      'Framer Motion',
      'Responsive Design',
      'Git'
    ]
  }
]

export const RESUME_PRESETS: ResumePreset[] = [
  {
    id: 'sanjay-profile',
    label: "Sanjay's Profile (SWE & AI)",
    text: `SANJAY
Undergraduate at NIT Durgapur | Self-Directed Software & AI Engineering Track
Portfolio: sanjaycodes.dev | GitHub: github.com/sanjaycodes-code

TECHNICAL SKILLS:
- Languages & Core: TypeScript, JavaScript (ES6+), Python, SQL
- Frontend: React, Vite, Tailwind CSS, Framer Motion, Responsive UI
- Backend & Systems: Node.js, Express, MongoDB Atlas, Mongoose, PostgreSQL, Socket.io (WebSockets), Stripe Webhooks, REST APIs
- AI & Tooling: LLM Orchestration, Google Antigravity, Git, Linux/Bash, Power BI

ENGINEERING PROJECTS:
1. AI Resume Analyzer
- Full-stack resume parsing system engineered end-to-end with Google Antigravity
- Implemented a provider-abstracted LLM interface layer in Node.js/Express with MongoDB persistence
- Structured unstructured document inputs into validated schema models

2. CampusLoop (Solo Rebuild)
- Peer-to-peer campus gear sharing platform rewritten solo from scratch
- Migrated architecture to Node.js/Express + MongoDB Atlas with Mongoose models
- Engineered real-time availability broadcasting using Socket.io and integrated Stripe checkout with webhooks

3. AssetFlow (Solo Hackathon Sprint)
- Full-stack MERN asset management application
- Implemented JWT authentication and core tracking modules; systematically isolated MongoDB Atlas TLS handshake connection timeout during hackathon sprint`
  },
  {
    id: 'frontend-spec',
    label: 'Frontend Specialist Preset',
    text: `ALEX R. — FRONTEND DEVELOPER
Summary: Frontend specialist building responsive web applications with React, TypeScript, and modern CSS.

CORE SKILLS:
- Languages: TypeScript, JavaScript (ES6+), HTML5, CSS3
- Frontend Stack: React, Vite, Tailwind CSS, Framer Motion, Next.js
- Tools: Git, GitHub, Figma, Jest, Webpack

EXPERIENCE:
Frontend Engineer at WebStudio (2024 - Present)
- Engineered responsive user interfaces using React and Tailwind CSS with 60fps micro-animations.
- Built reusable component systems in TypeScript with full keyboard accessibility.
- Optimized bundle sizes using Vite code splitting.`
  },
  {
    id: 'blank-slate',
    label: 'Blank Sandbox (Paste Your Own)',
    text: ''
  }
]

// All technical keywords recognized for text analysis
const RECOGNIZED_KEYWORDS = [
  'React',
  'TypeScript',
  'JavaScript',
  'Node.js',
  'Express',
  'MongoDB',
  'Mongoose',
  'PostgreSQL',
  'SQL',
  'Python',
  'Pandas',
  'Socket.io',
  'WebSockets',
  'Stripe',
  'Tailwind CSS',
  'Vite',
  'Git',
  'GitHub',
  'REST APIs',
  'LLM',
  'Google Antigravity',
  'Framer Motion',
  'Linux',
  'Power BI',
  'Responsive Design'
]

// Pure client-side token count estimator (BPE approximation)
export function estimateTokens(text: string): number {
  if (!text || text.trim().length === 0) return 0
  // Heuristic: Average English word ~ 1.33 tokens; punctuation and whitespace contribute additional tokens
  const clean = text.trim()
  const charCount = clean.length
  const wordCount = clean.split(/\s+/).filter(Boolean).length
  // Blended approximation between character count (~3.8 chars/token) and word count (1.3 tokens/word)
  const tokenEst = Math.round((charCount / 3.8 + wordCount * 1.3) / 2)
  return Math.max(1, tokenEst)
}

// Client-side technical keyword extraction
export function extractKeywords(text: string): string[] {
  if (!text) return []
  const lowerText = text.toLowerCase()
  return RECOGNIZED_KEYWORDS.filter((keyword) => {
    const escaped = keyword.toLowerCase().replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    // Match whole words or boundary
    const regex = new RegExp(`(^|[^a-z0-9])${escaped}([^a-z0-9]|$)`, 'i')
    return regex.test(lowerText)
  })
}

// Real-time ATS match calculation
export interface ATSAnalysisResult {
  wordCount: number
  tokenCount: number
  estimatedPromptTokens: number // Token footprint if passed to an LLM context
  matchedKeywords: string[]
  missingKeywords: string[]
  matchScore: number // 0 - 100%
  contextUtilizationPct: number // % of 8k context window
}

export function analyzeResumeText(text: string, targetRole: RolePreset): ATSAnalysisResult {
  const words = text.trim().split(/\s+/).filter(Boolean)
  const wordCount = text.trim().length === 0 ? 0 : words.length
  const tokenCount = estimateTokens(text)
  const systemPromptTokens = 350 // Baseline system prompt budget
  const estimatedPromptTokens = tokenCount > 0 ? tokenCount + systemPromptTokens : 0

  const presentKeywords = extractKeywords(text)
  const matchedKeywords = targetRole.targetKeywords.filter((tk) =>
    presentKeywords.some((pk) => pk.toLowerCase() === tk.toLowerCase())
  )
  const missingKeywords = targetRole.targetKeywords.filter(
    (tk) => !matchedKeywords.some((mk) => mk.toLowerCase() === tk.toLowerCase())
  )

  const matchScore =
    targetRole.targetKeywords.length > 0
      ? Math.round((matchedKeywords.length / targetRole.targetKeywords.length) * 100)
      : 0

  // Based on an 8,192 token context window
  const contextUtilizationPct = Math.min(100, Math.round((estimatedPromptTokens / 8192) * 100))

  return {
    wordCount,
    tokenCount,
    estimatedPromptTokens,
    matchedKeywords,
    missingKeywords,
    matchScore,
    contextUtilizationPct
  }
}

// ----------------------------------------------------------------------------
// Mode 2: Real TLS Handshake Diagnostic Terminal Data (Strictly Unresolved/Isolated)
// ----------------------------------------------------------------------------

export interface DiagnosticStep {
  step: number
  command: string
  output: string[]
  status: 'info' | 'pass' | 'fail' | 'summary'
}

export const TLS_DIAGNOSTIC_STEPS: DiagnosticStep[] = [
  {
    step: 1,
    command: 'node server.js',
    status: 'fail',
    output: [
      '[server] Initializing Express HTTP server on port 5000...',
      '[db] Connecting to MongoDB Atlas cluster0.xxxx.mongodb.net...',
      '[error] MongooseServerSelectionError: connection <monitor> timed out during TLS handshake',
      '    at Connection.openUri (node_modules/mongoose/lib/connection.js:847:32)',
      '    at async startServer (src/server.js:18:5) {',
      '  reason: TopologyDescription {',
      '    type: "ReplicaSetNoPrimary",',
      '    servers: [',
      '      "cluster0-shard-00-00.mongodb.net:27017" => {',
      '        error: "connection timed out during TLS handshake"',
      '      }',
      '    ]',
      '  }',
      '}',
      '>>> SYSTEM: Process exited with status 1. Initiating isolation protocol...'
    ]
  },
  {
    step: 2,
    command: 'dig srv _mongodb._tcp.cluster0.mongodb.net',
    status: 'pass',
    output: [
      ';; QUESTION SECTION:',
      ';_mongodb._tcp.cluster0.mongodb.net. IN SRV',
      '',
      ';; ANSWER SECTION:',
      '_mongodb._tcp.cluster0.mongodb.net. 60 IN SRV 0 0 27017 cluster0-shard-00-00.mongodb.net.',
      '_mongodb._tcp.cluster0.mongodb.net. 60 IN SRV 0 0 27017 cluster0-shard-00-01.mongodb.net.',
      '_mongodb._tcp.cluster0.mongodb.net. 60 IN SRV 0 0 27017 cluster0-shard-00-02.mongodb.net.',
      '',
      '[status] DNS SRV record resolution: PASS (All 3 shard hosts resolved)'
    ]
  },
  {
    step: 3,
    command: 'nc -zv -w 5 cluster0-shard-00-00.mongodb.net 27017',
    status: 'pass',
    output: [
      'Connection to cluster0-shard-00-00.mongodb.net 27017 port [tcp/*] succeeded!',
      '[status] Layer 4 TCP transport reachability: PASS (Port 27017 open & socket connected)'
    ]
  },
  {
    step: 4,
    command: 'test-auth --uri=$MONGO_URI',
    status: 'pass',
    output: [
      'Parsing connection URI: mongodb+srv://<user>:<pwd>@cluster0.mongodb.net/assetflow',
      'Checking URL encoding of credentials...',
      '[status] Credential formatting, authSource query parameter, and syntax: PASS'
    ]
  },
  {
    step: 5,
    command: 'trace-handshake cluster0-shard-00-00.mongodb.net:27017',
    status: 'fail',
    output: [
      '>>> Sending TLS ClientHello (TLSv1.2, TLSv1.3 enabled)...',
      '<<< ServerHello received (Negotiating cipher suite)...',
      '<<< Server Certificate received',
      '>>> Client Key Exchange sent...',
      '[timeout] Socket closed after 30000ms waiting for handshake completion.',
      '[status] Secure socket negotiation: TIMED OUT'
    ]
  },
  {
    step: 6,
    command: 'summary',
    status: 'summary',
    output: [
      '========================================================================',
      'DIAGNOSIS SUMMARY // ASSETFLOW NETWORKING POST-MORTEM',
      '========================================================================',
      '  - DNS SRV Resolution:    [PASS]  Cluster hostnames resolve cleanly',
      '  - Network Transport:     [PASS]  Layer 4 TCP socket connected to 27017',
      '  - Credentials & URI:     [PASS]  URI syntax & auth encoding valid',
      '  - TLS Handshake:         [FAIL]  Timed out during secure socket negotiation',
      '------------------------------------------------------------------------',
      'ISOLATION STATUS:',
      '  Failure is strictly isolated to Layer 6 TLS handshake negotiation.',
      '  Underlying network transport, DNS, and credentials ruled out.',
      'CURRENT STATE:',
      '  Remediation in progress; project paused at this documented checkpoint.',
      '========================================================================'
    ]
  }
]
