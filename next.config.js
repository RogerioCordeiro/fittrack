/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Se o seu repositório não estiver na raiz do GitHub Pages, descomente e configure:
  // basePath: '/nome-do-repositorio',
  // assetPrefix: '/nome-do-repositorio/',
};

module.exports = nextConfig;
