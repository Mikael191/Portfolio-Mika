import { Project, Skill, Achievement } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "NEBULA_ANALYTICS",
    description: "High-frequency crypto trading dashboard with WebGL data visualization. Handles 50k+ data points/sec via WebSocket.",
    tags: ["Next.js", "Three.js", "Rust", "WebSockets"],
    status: "ONLINE",
    version: "v3.0.0",
    image: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "GHOST_PROTOCOL",
    description: "Decentralized, end-to-end encrypted communication platform. Zero-knowledge architecture.",
    tags: ["TypeScript", "Node.js", "Socket.io", "Redis"],
    status: "ONLINE",
    version: "v1.5.0",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "AURA_AI_CORE",
    description: "Context-aware AI assistant integrated with IDEs for real-time code debugging and refactoring suggestions.",
    tags: ["Python", "TensorFlow", "FastAPI"],
    status: "IN_DEV",
    version: "v0.8.alpha",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "SYNTH_OS",
    description: "Web-based operating system simulation with window management, file system, and terminal emulator.",
    tags: ["Vue", "Vite", "Pinia"],
    status: "ARCHIVED",
    version: "v1.0.0",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop"
  }
];

export const SKILLS: Skill[] = [
  { name: "Frontend Architecture", level: 98, color: "#00f0ff" },
  { name: "Backend / Node.js", level: 92, color: "#7000df" },
  { name: "DevOps / Docker", level: 85, color: "#0bda54" },
  { name: "UI/UX Design", level: 88, color: "#ff003c" },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "1",
    title: "System Initialization",
    date: "2008",
    description: "Mikael Barbosa spawned into the world.",
    icon: "user"
  },
  {
    id: "2",
    title: "Hello World",
    date: "2020",
    description: "Wrote first line of code. No turning back.",
    icon: "code"
  },
  {
    id: "3",
    title: "Full Stack Mastery",
    date: "2024",
    description: "Reached Level 16. Building enterprise-grade solutions.",
    icon: "zap"
  }
];