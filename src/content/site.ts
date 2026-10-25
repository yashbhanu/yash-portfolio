import type { Site } from "./types";

export const site: Site = {
  name: "Yash Bhanushali",
  shortName: "Yash",
  role: "Full Stack Developer",
  // Adapted from v1 hero copy ("I design, code and engineer software applications
  // focusing on creating efficient scalable solutions while writing about code").
  // TODO(yash): confirm or rewrite the one-line positioning statement.
  positioning:
    "Full stack developer who designs, codes and engineers efficient, scalable software, and writes about it.",
  description:
    "Software Engineer with experience in web application development & expertise in various technologies",
  url: "https://yash-bhanushali.vercel.app",
  location: { country: "India", countryCode: "IN", timeZone: "Asia/Kolkata", tzLabel: "IST" },
  // TODO(yash): availability line for the status bar, e.g. "Open to senior FE/FS roles".
  availability: null,
  currentRole: "SDE II @ The Sleep Company",
  worksFor: "The Sleep Company",
  email: "bhanushaliyash2000@gmail.com",
  resumeUrl:
    "https://drive.google.com/file/d/1_kXKWn5HqzifzL7yVshdq605NmgI8H4f/view?usp=sharing",
  mediumFeed: "https://medium.com/feed/@bhanushaliyash2000",
  sourceRepo: "https://github.com/yashbhanu/yash-portfolio",
  socials: [
    { id: "github", label: "GitHub", href: "https://github.com/yashbhanu", handle: "yashbhanu" },
    {
      id: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/yash-bhanushali-024301212/",
      handle: "yash-bhanushali",
    },
    {
      id: "medium",
      label: "Medium",
      href: "https://medium.com/@bhanushaliyash2000",
      handle: "@bhanushaliyash2000",
    },
    {
      id: "email",
      label: "Email",
      href: "mailto:bhanushaliyash2000@gmail.com",
      handle: "bhanushaliyash2000@gmail.com",
    },
  ],
};
