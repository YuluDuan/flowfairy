/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.externals = config.externals || [];
        config.externals.push({
            sharp: 'commonjs sharp',
            canvas: 'commonjs canvas'
        });
        return config;
    }
}

module.exports = nextConfig