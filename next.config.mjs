/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["cdn.dummyjson.com"],
  },
  env: {
    BASE_URL: process.env.BASE_URL
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;
