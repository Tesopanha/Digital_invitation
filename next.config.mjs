/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Only use basePath and assetPrefix for production builds (GitHub Pages)
  ...(process.env.NODE_ENV === 'production' && {
    basePath: '/Digital_invitation',
    assetPrefix: '/Digital_invitation',
  }),
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
