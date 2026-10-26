import type { Project } from "./types";

// Names, summaries, stacks, images and links migrated from v1. Problem statements
// written from Yash's descriptions; architectures confirmed by Yash.
export const projects: Project[] = [
  {
    slug: "scape",
    index: "01",
    name: "Scape",
    summary:
      "Scape is a cutting-edge chat application that brings people together through intuitive and dynamic communication features.",
    stack: ["Next.js", "NestJS", "MongoDB", "Socket.io"],
    image: {
      src: "https://ik.imagekit.io/yashbhanu/scapeHome.png?updatedAt=1716111214158",
      alt: "Scape chat application home screen",
      width: 1760,
      height: 605,
    },
    links: {
      github: "https://github.com/yashbhanu/scape-frontend",
      live: "https://scape-chat.vercel.app",
    },
    problem:
      "Starting a conversation online usually means swapping numbers or adding someone on another platform first. Scape keeps it to one step: search for anyone on the app by their username and start chatting, with messages delivered in real time over Socket.io.",
    architecture: {
      caption: "realtime message flow",
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
    screenshots: [],
    metrics: [],
  },
  {
    slug: "zest",
    index: "02",
    name: "Zest",
    summary:
      "An ecommerce web application to instantly order groceries with user friendly interface, JWT Authentication & seamless checkout process with payment integration",
    stack: ["React", "Express.js", "MongoDB", "Razorpay"],
    image: {
      src: "https://ik.imagekit.io/yashbhanu/zest.png?updatedAt=1716111049499",
      alt: "Zest grocery ordering storefront",
      width: 1760,
      height: 605,
    },
    links: {
      github: "https://github.com/yashbhanu/zest-frontend",
      live: "https://zest-organic.vercel.app/",
    },
    problem:
      "Finding genuinely organic groceries online means sifting through catalogues where organic is just one filter among many. Zest is a complete e-commerce store that sells only organic products, covering browsing, cart, sign-in and online payment.",
    architecture: {
      caption: "order + payment flow",
      inferred: false,
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
    screenshots: [],
    metrics: [],
  },
  {
    slug: "cinematix",
    index: "03",
    name: "Cinematix",
    summary:
      "An entertainment app built using ReactJS, Material UI, and Movie Database API to show Top trending movies & Web series.",
    stack: ["React", "TMDB API", "Material UI"],
    image: {
      src: "https://ik.imagekit.io/yashbhanu/cine2.jpg?updatedAt=1716227843269",
      alt: "Cinematix trending movies grid",
      width: 1760,
      height: 605,
    },
    links: {
      github: "https://github.com/yashbhanu/CineMatix-Entertainment-App-ReactJS",
      live: "https://cinematix-entertainment.netlify.app",
    },
    problem:
      "Keeping up with what's popular means checking several sites, then working out which service is actually streaming it. Cinematix brings the top movies, shows and web series together in one place, each with links to where you can watch it.",
    architecture: {
      caption: "client-side data flow",
      inferred: false,
      nodes: [
        { id: "client", label: "React SPA", detail: "Material UI", tier: "client" },
        { id: "tmdb", label: "TMDB API", detail: "movies · series", tier: "external" },
      ],
      edges: [{ from: "client", to: "tmdb", label: "REST" }],
    },
    screenshots: [],
    metrics: [],
  },
  {
    slug: "travel-log",
    index: "04",
    name: "Travel Log",
    summary:
      "A web-based mapping platform providing reviews & user generated information of various geographical locations & tourist attractions.",
    stack: ["React", "Express.js", "MongoDB", "Mapbox"],
    image: {
      src: "https://ik.imagekit.io/yashbhanu/travel.jpg?updatedAt=1716227649593",
      alt: "Travel Log map with user-submitted locations",
      width: 1760,
      height: 605,
    },
    links: {
      github: "https://github.com/yashbhanu/Travel-Log-MERN-App",
      // No live deployment.
    },
    problem:
      "Reviews of places are scattered across sites and detached from where the places actually are. Travel Log lets registered users mark places directly on a map and review them, and every review is visible to anyone exploring the map.",
    architecture: {
      caption: "map + review flow",
      inferred: false,
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
    screenshots: [],
    metrics: [],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
