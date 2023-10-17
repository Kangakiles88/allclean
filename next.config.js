/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "dummyimage.com",
      "prod-files-secure.s3.us-west-2.amazonaws.com",
      "www.w3.org",
    ],
  },
};

module.exports = nextConfig;
