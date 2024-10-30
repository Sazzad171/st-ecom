/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [""],
  },
  env: {
    BASE_URL: process.env.BASE_URL
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;
