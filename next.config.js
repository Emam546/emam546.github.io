/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = "";
let basePath = "";

module.exports = {
    assetPrefix: assetPrefix,
    basePath: basePath,
    images: {
        unoptimized: true,
    },
};
