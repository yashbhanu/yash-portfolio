import type { Post } from "./types";

// Migrated from the MongoDB `blogs` collection. Dates come from the Medium RSS feed
// (medium.com/feed/@bhanushaliyash2000); reading time is ceil(RSS word count / 220 wpm).
// Newest first.
export const posts: Post[] = [
  {
    slug: "ssr-server-actions-nextjs-14",
    title: "Server Side Rendering (SSR) using server actions in Next.js 14 App Router",
    description:
      "With the introduction of App router in Next.js 14, we can leverage server actions to implement Server side rendering(SSR).",
    tags: ["Next.js", "SSR", "Frontend", "SEO"],
    publishedAt: "2024-05-26",
    readingMinutes: 6,
    href: "https://medium.com/@bhanushaliyash2000/server-side-rendering-ssr-using-server-actions-in-next-js-14-app-router-65d072aaa686",
    coverImage: "https://ik.imagekit.io/yashbhanu/nextssr%20(1).webp?updatedAt=1728842212028",
    platform: "medium",
  },
  {
    slug: "scaling-websockets-redis-pub-sub",
    title: "Scaling Web Sockets in Node.js using Redis Pub/Sub",
    description:
      "Real-time communication has become an essential aspect of modern web applications, enabling interactive features such as chat, notifications, and live updates.",
    tags: ["Socket.io", "Redis", "Scaling", "Pub Sub"],
    publishedAt: "2023-08-20",
    readingMinutes: 5,
    href: "https://medium.com/@bhanushaliyash2000/scaling-web-sockets-in-node-js-using-redis-pub-sub-f7dcf5b5dd98",
    coverImage: "https://ik.imagekit.io/yashbhanu/socket%20(1).webp?updatedAt=1728842235761",
    platform: "medium",
  },
  {
    slug: "nestjs-jwt-auth-guard",
    title: "Implementing an Auth Guard with JWT tokens in Nest.js",
    description:
      "Authentication guards allow you to control access to routes and controllers in a NestJS application based on user authentication.",
    tags: ["Backend", "NestJs", "Authentication", "JWT"],
    publishedAt: "2023-08-15",
    readingMinutes: 5,
    href: "https://medium.com/@bhanushaliyash2000/implementing-an-auth-guard-with-jwt-tokens-in-nest-js-92176a9c3457",
    coverImage: "https://ik.imagekit.io/yashbhanu/auth_guard%20(1).webp?updatedAt=1728840300091",
    platform: "medium",
  },
  {
    slug: "data-visualization-seaborn",
    title: "Data Visualization in Seaborn",
    description:
      "Seaborn is a high level Data visualization library built on top of matplotlib used for complex plotting of statistical data. Its built on top of the Python programming language.",
    tags: ["Visualization", "Seaborn", "Python", "Statistics"],
    publishedAt: "2023-04-30",
    readingMinutes: 6,
    href: "https://medium.com/@bhanushaliyash2000/data-visualization-in-seaborn-9bb283722ce4",
    coverImage: "https://ik.imagekit.io/yashbhanu/seaborn%20(1).webp?updatedAt=1728842278803",
    platform: "medium",
  },
  {
    slug: "data-visualization-matplotlib",
    title: "Data Visualization for Beginners in Matplotlib",
    description:
      "Matplotlib is a data visualization library in Python which can be used to create 2D graphs, charts using simple Python code. It provides an object-oriented API.",
    tags: ["Visualization", "Matplotlib", "Python", "Data Science"],
    publishedAt: "2023-02-12",
    readingMinutes: 4,
    href: "https://medium.com/@bhanushaliyash2000/data-visualization-for-beginners-in-matplotlib-ac89ae29041e",
    coverImage: "https://ik.imagekit.io/yashbhanu/matplotlib%20(1).webp?updatedAt=1728842314011",
    platform: "medium",
  },
];

export const latestPost = posts[0];
