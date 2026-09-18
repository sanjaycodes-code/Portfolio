import type { Project } from '../types'

export const PROJECTS: Project[] = [
  {
    id: 'omnirag',
    index: '01 // 04',
    title: 'OmniRAG Engine',
    italicAccent: 'sub-50ms hybrid neural retrieval',
    summary:
      'High-throughput vector search and hybrid retrieval system combining dense semantic embeddings with sparse BM25 reranking, optimized for real-time AI agents.',
    architectureHighlights: [
      'Async pipeline utilizing asynchronous Qdrant vector client & FastAPI',
      'FlashRank cross-encoder reranking layer for precision recall boost',
      'Sub-50ms p99 latency profile on a 2.4M multi-corpus embedding index'
    ],
    metrics: [
      { label: 'p99 Latency', value: '38ms' },
      { label: 'Recall@10', value: '94.2%' },
      { label: 'Index Size', value: '2.4M Docs' }
    ],
    techStack: ['PyTorch', 'FastAPI', 'Qdrant', 'HuggingFace', 'Docker'],
    category: 'ai-ml',
    githubUrl: 'https://github.com/sanjay',
    liveDemoUrl: 'https://omnirag.demo',
    compositionTiltDeg: -2.5
  },
  {
    id: 'hyperion',
    index: '02 // 04',
    title: 'Hyperion Inference Engine',
    italicAccent: 'speculative decoding & memory bounds',
    summary:
      'High-performance LLM serving layer implementing speculative draft-verify decoding and paged attention KV caching for 7B-14B open weights.',
    architectureHighlights: [
      'Speculative execution pipeline drafting with 1.1B model verified by 7B target',
      'Continuous batching with chunked prefill to eliminate tail latency',
      'CUDA kernel profiling and Triton custom fused activation layers'
    ],
    metrics: [
      { label: 'Generation', value: '142 tok/s' },
      { label: 'Speedup', value: '2.1x FP16' },
      { label: 'VRAM Usage', value: '-35%' }
    ],
    techStack: ['Python', 'CUDA / Triton', 'vLLM', 'PyTorch', 'C++'],
    category: 'ai-ml',
    githubUrl: 'https://github.com/sanjay',
    compositionTiltDeg: 2.0
  },
  {
    id: 'nexus-kv',
    index: '03 // 04',
    title: 'NexusKV Distributed Store',
    italicAccent: 'consensus across network partitions',
    summary:
      'Distributed, fault-tolerant key-value store powered by a custom Raft consensus implementation with Write-Ahead Logging (WAL) and memory-mapped LSM trees.',
    architectureHighlights: [
      'Leader election and log replication with randomized heartbeat timers',
      'LSM-tree storage backend with periodic bloom filter compaction',
      'High-concurrency gRPC transport layer processing concurrent client streams'
    ],
    metrics: [
      { label: 'Throughput', value: '85k ops/sec' },
      { label: 'Consensus', value: 'Raft protocol' },
      { label: 'Fault-Tolerance', value: 'N/2 - 1 nodes' }
    ],
    techStack: ['Go', 'gRPC', 'Protobuf', 'LSM-Tree', 'Docker'],
    category: 'systems',
    githubUrl: 'https://github.com/sanjay',
    compositionTiltDeg: -1.5
  },
  {
    id: 'synapse-eval',
    index: '04 // 04',
    title: 'Synapse Agent Harness',
    italicAccent: 'autonomous sandbox execution & validation',
    summary:
      'Multi-agent evaluation runtime benchmarking code-generation LLMs inside isolated, ephemerally provisioned Linux containers with telemetry tracking.',
    architectureHighlights: [
      'Orchestrated multi-threaded worker queue managing sandboxed Docker runtimes',
      'Automated dynamic test harness validating code AST correctness and execution',
      'Real-time WebSocket telemetry visualizer built for latency & token diagnostics'
    ],
    metrics: [
      { label: 'Execution Rate', value: '600 runs/hr' },
      { label: 'Container Boot', value: '< 180ms' },
      { label: 'Pass Rate', value: '99.1%' }
    ],
    techStack: ['TypeScript', 'Node.js', 'React', 'Docker SDK', 'Tailwind'],
    category: 'fullstack',
    githubUrl: 'https://github.com/sanjay',
    liveDemoUrl: 'https://synapse.demo',
    compositionTiltDeg: 1.8
  }
]
