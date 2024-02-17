/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
        // ...
      },
      {
        protocol: "https",
        hostname: "https://www.pexels.com/",
        // ...
      },
    ],
  },
};

export default nextConfig;
