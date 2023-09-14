/** @type {import('next').NextConfig} */

import sitemap from "next-sitemap";

const sitemapConfig = {
  siteUrl: "https://turboclea-n.com",
  generateRobotsTxt: true,
  transform: async (config, paths) => {
    return paths.map((path) => ({
      ...path,
      changefreq: "daily",
      priority: 0.7,
    }));
  },
};

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["dummyimage.com"],
  },
};

module.exports = {
  ...sitemap(sitemapConfig),
  ...nextConfig,
};
