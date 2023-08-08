/** @type {import('next').NextConfig} */
const nextConfig = { reactStrictMode: true };
// module.exports = nextConfig;
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["pokii.s3.amazonaws.com"],
  },
};