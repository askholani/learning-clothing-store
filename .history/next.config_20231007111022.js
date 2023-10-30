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
        hostname: 'res.cloudinary',
        port: '',

        pathname: '/dpj4itcvu/image/upload/v1696452562/clothing-store/**',
      },
    ],
  },
}

module.exports = nextConfig
