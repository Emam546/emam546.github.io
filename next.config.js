/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    distDir: "dist",
    images: {
        unoptimized: true,
    },
    basePath: "",
    assetPrefix: "./",
};

module.exports = nextConfig;
