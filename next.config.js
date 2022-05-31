/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io", "www.paymentsjournal.com"],
  },
};

module.exports = nextConfig;
