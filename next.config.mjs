// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.deccanchronicle.com'],
  },
  output: 'export', // 👈 Required for `next export`
};

export default nextConfig;
