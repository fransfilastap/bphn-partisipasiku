/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    minimumCacheTTL: 300,
    domains: ['images.unsplash.com', 'localhost', '0.0.0.0','res.cloudinary.com'],
  },
};

module.exports = nextConfig;
