/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_GOOGLE_ANALYTICS: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS,
    GOOGLE_ANALYTICS: process.env.GOOGLE_ANALYTICS
  },
  reactStrictMode: true,
  images: {
      dangerouslyAllowSVG: true,
      domains: [
          "picsum.photos",
          "localhost",
      ],
  },
  webpack(config) {
      config.module.rules.push({
          test: /\.svg$/,
          use: ["@svgr/webpack"],
      });

      config.module.rules.push({
          test: /\.woff2$/,
          use: ["url-loader"],
      });

      return config;
  },
};

module.exports = nextConfig;
