// next-sitemap.config.js

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_APP_URL ?? process.env.NEXT_PUBLIC_VERCEL_URL,
  generateRobotsTxt: true,
  exclude: ['/server-sitemap-index.xml'],
  robotsTxtOptions: {
    additionalSitemaps: [
      `${process.env.NEXT_PUBLIC_APP_URL ?? process.env.NEXT_PUBLIC_VERCEL_URL}/sitemap.xml`,
    ],
  },
}
