const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    output: 'export',
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
    },

};

export default nextConfig;
