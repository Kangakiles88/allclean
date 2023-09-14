/** @type {import('next').NextConfig} */
const nextConfig = {
  siteUrl: process.env.SITE_URL || "https://turboclea-n.com",
  generateRobotsTxt: true, // (선택사항)
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["dummyimage.com"],
  },
};

module.exports = nextConfig;
