/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'localhost', '0.0.0.0','192.168.1.6'],
  },
};

module.exports = nextConfig;
