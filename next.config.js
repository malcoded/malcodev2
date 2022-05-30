/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [ 'malcode.dev', 'canva.com', 'lh3.googleusercontent.com' ],
  }
}

const withMDX = require('@next/mdx')({extension: /\.mdx?$/})

module.exports = {
  ...nextConfig,
  ...withMDX({pageExtensions: [ 'ts', 'tsx', 'js', 'jsx', 'md', 'mdx' ]})
}
