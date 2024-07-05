/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.schema.io",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.swell.store",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
