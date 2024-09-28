/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cryptologos.cc",
        pathname: "/**",
      },
    ],
  },
  i18n: {
    locales: ['en', 'fr', 'it'],
    defaultLocale: 'en', 
  },
};

export default nextConfig;
