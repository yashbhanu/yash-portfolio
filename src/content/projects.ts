import type { Project } from "./types";

// Migrated from the MongoDB `projects` collection (names, summaries, stacks, images,
// links are verbatim). Everything else is a placeholder until Yash fills it in.
export const projects: Project[] = [
  {
    slug: "scape",
    index: "01",
    name: "Scape",
    summary:
      "Scape is a cutting-edge chat application that brings people together through intuitive and dynamic communication features.",
    year: null, // TODO(yash): year built
    role: null, // TODO(yash): e.g. "Solo · full stack"
    stack: ["Next.js", "NestJS", "MongoDB", "Socket.io"],
    image: {
      src: "https://ik.imagekit.io/yashbhanu/scapeHome.png?updatedAt=1716111214158",
      alt: "Scape chat application home screen",
    },
    links: {
      github: "https://github.com/yashbhanu/scape-frontend",
      live: "https://scape-chat.vercel.app",
      // TODO(yash): backend repo link (scape-backend?), if public.
    },
    problem: null, // TODO(yash): what problem Scape solves, 2-3 sentences.
    architecture: {
      caption: "realtime message flow",
      // Flow given in the v2 brief: client → NestJS → MongoDB → Socket.io.
      // TODO(yash): confirm hosting, auth, and whether Redis pub/sub is used here.
      inferred: false,
      nodes: [
        { id: "client", label: "Next.js client", detail: "browser", tier: "client" },
        { id: "api", label: "NestJS API", detail: "REST", tier: "service" },
        { id: "ws", label: "Socket.io gateway", detail: "websocket", tier: "service" },
        { id: "db", label: "MongoDB", detail: "messages · users", tier: "data" },
      ],
      edges: [
        { from: "client", to: "api", label: "HTTPS" },
        { from: "api", to: "db", label: "read / write" },
        { from: "client", to: "ws", label: "events", duplex: true },
        { from: "ws", to: "db", label: "persist" },
      ],
    },
    decisions: [], // TODO(yash): 2-4 key technical decisions (title + why).
    screenshots: [], // TODO(yash): ImageKit URLs for extra screenshots.
    metrics: [], // TODO(yash): any real numbers (users, latency, etc.), or leave empty.
  },
  {
    slug: "zest",
    index: "02",
    name: "Zest",
    summary:
      "An ecommerce web application to instantly order groceries with user friendly interface, JWT Authentication & seamless checkout process with payment integration",
    year: null, // TODO(yash)
    role: null, // TODO(yash)
    stack: ["React", "Express.js", "MongoDB", "Razorpay"],
    image: {
      src: "https://ik.imagekit.io/yashbhanu/zest.png?updatedAt=1716111049499",
      alt: "Zest grocery ordering storefront",
    },
    links: {
      github: "https://github.com/yashbhanu/zest-frontend",
      live: "https://zest-organic.vercel.app/",
      // TODO(yash): backend repo link, if public.
    },
    problem: null, // TODO(yash)
    architecture: {
      caption: "order + payment flow",
      // TODO(yash): derived from the stack list only; confirm or correct.
      inferred: true,
      nodes: [
        { id: "client", label: "React SPA", detail: "browser", tier: "client" },
        { id: "api", label: "Express API", detail: "JWT auth", tier: "service" },
        { id: "db", label: "MongoDB", detail: "products · orders", tier: "data" },
        { id: "pay", label: "Razorpay", detail: "payments", tier: "external" },
      ],
      edges: [
        { from: "client", to: "api", label: "REST + JWT" },
        { from: "api", to: "db", label: "read / write" },
        { from: "client", to: "pay", label: "checkout" },
        { from: "pay", to: "api", label: "verify" },
      ],
    },
    decisions: [], // TODO(yash)
    screenshots: [], // TODO(yash)
    metrics: [], // TODO(yash)
  },
  {
    slug: "cinematix",
    index: "03",
    name: "Cinematix",
    summary:
      "An entertainment app built using ReactJS, Material UI, and Movie Database API to show Top trending movies & Web series.",
    year: null, // TODO(yash)
    role: null, // TODO(yash)
    stack: ["React", "TMDB API", "Material UI"],
    image: {
      src: "https://ik.imagekit.io/yashbhanu/cine2.jpg?updatedAt=1716227843269",
      alt: "Cinematix trending movies grid",
    },
    links: {
      github: "https://github.com/yashbhanu/CineMatix-Entertainment-App-ReactJS",
      live: "https://cinematix-entertainment.netlify.app",
    },
    problem: null, // TODO(yash)
    architecture: {
      caption: "client-side data flow",
      // TODO(yash): derived from the stack list only; confirm or correct.
      inferred: true,
      nodes: [
        { id: "client", label: "React SPA", detail: "Material UI", tier: "client" },
        { id: "tmdb", label: "TMDB API", detail: "movies · series", tier: "external" },
      ],
      edges: [{ from: "client", to: "tmdb", label: "REST" }],
    },
    decisions: [], // TODO(yash)
    screenshots: [], // TODO(yash)
    metrics: [], // TODO(yash)
  },
  {
    slug: "travel-log",
    index: "04",
    name: "Travel Log",
    summary:
      "A web-based mapping platform providing reviews & user generated information of various geographical locations & tourist attractions.",
    year: null, // TODO(yash)
    role: null, // TODO(yash)
    stack: ["React", "Express.js", "MongoDB", "Mapbox"],
    image: {
      src: "https://ik.imagekit.io/yashbhanu/travel.jpg?updatedAt=1716227649593",
      alt: "Travel Log map with user-submitted locations",
    },
    links: {
      github: "https://github.com/yashbhanu/Travel-Log-MERN-App",
      // No live link in v1. TODO(yash): add one if deployed.
    },
    problem: null, // TODO(yash)
    architecture: {
      caption: "map + review flow",
      // TODO(yash): derived from the stack list only; confirm or correct.
      inferred: true,
      nodes: [
        { id: "client", label: "React SPA", detail: "browser", tier: "client" },
        { id: "map", label: "Mapbox", detail: "tiles", tier: "external" },
        { id: "api", label: "Express API", detail: "REST", tier: "service" },
        { id: "db", label: "MongoDB", detail: "places · reviews", tier: "data" },
      ],
      edges: [
        { from: "client", to: "map", label: "tiles" },
        { from: "client", to: "api", label: "REST" },
        { from: "api", to: "db", label: "read / write" },
      ],
    },
    decisions: [], // TODO(yash)
    screenshots: [], // TODO(yash)
    metrics: [], // TODO(yash)
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
