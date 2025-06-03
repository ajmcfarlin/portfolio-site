/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['alecjm.com'], // Add any other domains you're using for images
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: false, // Keep this false to catch real errors
  },
  typescript: {
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    ignoreBuildErrors: false,
  },
}

module.exports = nextConfig