import type { NextConfig } from "next";

const withMDX = require('@next/mdx')()

const nextConfig: NextConfig = {
  //Using SSG Option
  output: 'export', 


  distDir: 'out',

  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
};

module.exports = withMDX(nextConfig)

export default nextConfig;
