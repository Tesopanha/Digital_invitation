/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath:'/Digital_invitation',
  assetPrefix:'/Digital_invitation',
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
