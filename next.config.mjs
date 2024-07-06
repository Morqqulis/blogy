/** @type {import('next').NextConfig} */
const nextConfig = {
  // next.config.js
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      },
      {
        protocol: 'http',
        hostname: '**'
      }
    ]
  }
}

export default nextConfig
