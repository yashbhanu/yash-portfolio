import type { About } from "./types";

export const about: About = {
  // Verbatim from v1 /#about.
  // TODO(yash): v2 wants a shorter, more human bio in your own voice; these are placeholders.
  bio: [
    "I am a Full Stack Developer passionate in creating seamless web applications which exceeds expectations with a knack for crafting optimized solutions.",
    "I design, code, and engineer digital experiences with a focus on user-centric design create solutions that are not just functional, but also beautiful and intuitive.",
  ],
  // Union of the v1 skills list, the stack named in the v2 brief, and tech used in
  // listed projects. Nothing here is new.
  // TODO(yash): add anything missing (Redis? AWS? testing tools?) and remove anything stale.
  stack: [
    { layer: "language", label: "Languages", items: ["TypeScript", "JavaScript"] },
    { layer: "frontend", label: "Frontend", items: ["React", "Next.js", "Material UI"] },
    { layer: "backend", label: "Backend", items: ["Node.js", "NestJS", "Express.js", "Socket.io"] },
    { layer: "data", label: "Data", items: ["MongoDB"] },
    { layer: "infra", label: "Infra & tooling", items: ["Docker", "Git"] },
  ],
};
