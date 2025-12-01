/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_BASE_PATH || '';
const assetPrefix = process.env.NEXT_ASSET_PREFIX || undefined;

const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix,
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
