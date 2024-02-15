/** @type {import('next').NextConfig} */
const nextConfig = {images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's4.anilist.co',
        // port: '',
        // pathname: '/account123/**',
      },
      {
        protocol:'https',
        hostname:'gogocdn.net'
      }
    ],
  },eslint:{
    ignoreDuringBuilds:true
  },
  typescript:{
    ignoreBuildErrors:true
  }
};

export default nextConfig;
