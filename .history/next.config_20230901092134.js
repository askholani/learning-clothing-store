/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/seed/**',
      },
    ],
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Tambahkan rule untuk node addon loader
    config.module.rules.push({
      test: /\.node$/,
      use: 'node-addon-loader',
    })

    return config
  },
}

module.exports = nextConfig
