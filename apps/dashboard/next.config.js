/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn.discordapp.com', 'discord.com', 'avatars.githubusercontent.com'],
  },
  compiler:{
    styledComponents: true,
  },
}

module.exports = nextConfig
