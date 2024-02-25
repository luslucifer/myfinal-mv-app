/** @type {import('next').NextConfig} */
const nextConfig = {images: {
  unoptimized:true,
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
      },
      {
        protocol:'https',
        hostname:'image.tmdb.org'
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
