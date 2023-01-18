/** @type {import('next').NextConfig} */
const webpack = require('webpack')

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer}) => {
    if (typeof config.resolve.fallback !== 'undefined') {
      console.log(config.resolve.fallback)
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
  }
}

module.exports = nextConfig
