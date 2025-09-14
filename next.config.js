/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'out',
  images: {
    unoptimized: true,
  },
  // Para funcionar com subpaths no GitHub Pages
  basePath: '/fittrack',
  assetPrefix: '/fittrack/',
};

module.exports = nextConfig;
