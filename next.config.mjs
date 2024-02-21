/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "media.suara.com",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
