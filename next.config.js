/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['dummyimage.com', 'www.globalgiving.org', 'api.globalgiving.org'],
  }
}

module.exports = nextConfig
