/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  publicRuntimeConfig: {
    favicon: "/favicon.ico", // 파비콘 파일 경로
  },
  images: {
    domains: [
      "dummyimage.com",
      "prod-files-secure.s3.us-west-2.amazonaws.com",
      "www.w3.org",
    ],
  },
};

module.exports = nextConfig;
