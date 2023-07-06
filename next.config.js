/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  nextConfig,
  serverRuntimeConfig: {
    // Will only be available on the server side
    REACT_APP_API_KEY: process.env.REACT_APP_API_KEY,
    REACT_API_BASE_URL: process.env.REACT_API_BASE_URL,
    REACT_API_USERNAME: process.env.REACT_API_USERNAME,
    REACT_API_PASSWORD: process.env.REACT_API_PASSWORD,
  },
  publicRuntimeConfig: {
    REACT_APP_API_KEY: process.env.REACT_APP_API_KEY,
    REACT_API_BASE_URL: process.env.REACT_API_BASE_URL,
    REACT_API_USERNAME: process.env.REACT_API_USERNAME,
    REACT_API_PASSWORD: process.env.REACT_API_PASSWORD,
  },
}
