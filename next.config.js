/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['dummyimage.com', 'www.globalgiving.org', 'api.globalgiving.org'],
  },
  i18n : {
    locales: ['es' , 'en'],
    defaultLocale: 'es',
  }
}

module.exports = nextConfig
