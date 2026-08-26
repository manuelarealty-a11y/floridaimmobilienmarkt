/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "floridaimmobilienkauf.de" },
      { protocol: "https", hostname: "g.tlcdn.com" },
      { protocol: "https", hostname: "galaxy-prod.tlcdn.com" },
    ],
  },
};

module.exports = nextConfig;
