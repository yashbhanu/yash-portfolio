/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "ik.imagekit.io", pathname: "/yashbhanu/**" }],
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // v1 blog index → v2 writing index. Old /#about, /#projects, /#contact
      // anchors still resolve on the home page.
      { source: "/blog", destination: "/writing", permanent: true },
      { source: "/projects", destination: "/work", permanent: true },
    ];
  },
};

export default nextConfig;
