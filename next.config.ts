import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    domains: ["deisishop.pythonanywhere.com"], // adiciona aqui o domínio do teu backend
  },
};

export default nextConfig;
