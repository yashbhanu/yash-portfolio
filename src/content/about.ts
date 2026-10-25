import type { About } from "./types";

export const about: About = {
  // Verbatim from v1 /#about.
  // TODO(yash): v2 wants a shorter, more human bio in your own voice; these are placeholders.
  bio: [
    "I am a Full Stack Developer passionate in creating seamless web applications which exceeds expectations with a knack for crafting optimized solutions.",
    "I design, code, and engineer digital experiences with a focus on user-centric design create solutions that are not just functional, but also beautiful and intuitive.",
  ],
  // Skills section of the résumé (Oct 2026).
  stack: [
    { layer: "language", label: "Languages", items: ["TypeScript", "JavaScript", "Python"] },
    { layer: "frontend", label: "Frontend", items: ["React", "Next.js", "Svelte", "Tailwind CSS"] },
    { layer: "backend", label: "Backend", items: ["Node.js", "NestJS", "Express.js", "RabbitMQ", "Socket.io"] },
    { layer: "ai", label: "AI", items: ["RAG pipelines", "Vector search", "LLM integration"] },
    { layer: "data", label: "Data", items: ["MongoDB", "SQL", "DynamoDB"] },
    { layer: "infra", label: "Cloud & DevOps", items: ["AWS (ECS)", "Docker", "GitHub Actions", "Vercel"] },
  ],
};
