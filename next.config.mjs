/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true, // Evita problemas de optimización de imágenes en exportación estática
  },
  basePath: isGitHubPages ? "/alejandrogomezl.github.io" : "",
  assetPrefix: isGitHubPages ? "/alejandrogomezl.github.io" : "",
};

export default nextConfig;