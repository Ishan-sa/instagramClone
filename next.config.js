/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['links.papareact.com', 'https://placekitten.com/200/200'],
  },
};

module.exports = nextConfig