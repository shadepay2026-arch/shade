/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // Use Turbopack (Next.js 16 default)
  turbopack: {},
  serverExternalPackages: ['@solana/web3.js'],
}

module.exports = nextConfig
