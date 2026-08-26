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
  async redirects() {
    return [
      {
        source: "/objekte",
        destination: "https://floridaimmobilienkauf.de/objekte",
        permanent: true,
      },
      {
        source: "/objekte/:slug",
        destination: "https://floridaimmobilienkauf.de/objekte/:slug",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
