/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "cdn.discordapp.com",
      "discord.com",
      "avatars.githubusercontent.com",
      "media.discordapp.net",
      
    ],
  },
  compiler: {
    styledComponents: true,
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
  experimental: {
    appDir: true,
  },
  
};

module.exports = nextConfig;
