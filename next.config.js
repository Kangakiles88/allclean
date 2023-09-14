/** @type {import('next').NextConfig} */

const withSitemap = require("next-sitemap").default;

module.exports = withSitemap({
  // sitemap
  siteUrl: "https://turboclea-n.com",
  generateRobotsTxt: true,
  transform: async (config, paths) => {
    return paths.map((path) => ({
      ...path,
      changefreq: "daily",
      priority: 0.7,
    }));
  },

  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["dummyimage.com"],
    // other Next.js config
  },
});
