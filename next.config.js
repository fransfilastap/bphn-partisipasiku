/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const removeImports = require('next-remove-imports')();

const withPWA = require("next-pwa");

const nextConfig = {
  reactStrictMode: true,
  images: {
    minimumCacheTTL: 300,
    domains: ['images.unsplash.com','res.cloudinary.com'],
  }
}



module.exports = removeImports(nextConfig);
