/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "ik.imagekit.io", pathname: "/yashbhanu/**" }],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
