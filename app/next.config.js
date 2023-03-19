/** @type {import('next').NextConfig} */
const webpack = require('webpack')

const withPWA = require('next-pwa')({
  dest: 'public',
  // disable: process.env.NODE_ENV === "development",
  register: true,
  sw: '/sw.js'
})

const nextConfig = withPWA({
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer}) => {
    if (typeof config.resolve.fallback !== 'undefined') {
      config.resolve.fallback.buffer = require.resolve('buffer')
    }

    if (typeof config.plugins !== 'undefined') {
      config.plugins.push(
        new webpack.ProvidePlugin({
          Buffer: ['buffer', 'Buffer'],
        }),
      )
    }
    
    return config
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://victorsdev.com/:path*'
      }
    ]
  }
})

module.exports = nextConfig
