/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/sample-route",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
