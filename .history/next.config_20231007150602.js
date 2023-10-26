/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['res.cloudinary.com'],
    // remotePatterns: [
    //   {
    //     // protocol: 'https',
    //     // hostname: 'picsum.photos',
    //     // port: '',
    //     // pathname: '/seed/**',

    //     protocol: 'https',
    //     hostname: 'res.cloudinary.com',
    //     port: '',
    //     pathname: '/dpj4itcvu/image/upload/v1696452561/clothing-store/**',
    //   },
    // ],
  },
}

module.exports = nextConfig
