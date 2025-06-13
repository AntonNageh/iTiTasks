/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/uploads/**',
      },
      { protocol: 'https', hostname: 'www.npr.org', pathname: '/**' },
      { protocol: 'https', hostname: 'www.cnbc.com', pathname: '/**' },
      { protocol: 'https', hostname: 'www.investors.com', pathname: '/**' },
      { protocol: 'https', hostname: 'www.nbcnews.com', pathname: '/**' },
      { protocol: 'https', hostname: 'www.forbes.com', pathname: '/**' },
      { protocol: 'https', hostname: 'www.ft.com', pathname: '/**' },
      { protocol: 'https', hostname: 'www.barrons.com', pathname: '/**' },
      { protocol: 'https', hostname: 'www.wral.com', pathname: '/**' },
      { protocol: 'https', hostname: 'apnews.com', pathname: '/**' },
      { protocol: 'https', hostname: 'www.theverge.com', pathname: '/**' },
      { protocol: 'https', hostname: 'media-cldnry.s-nbcnews.com', pathname: '/**' },
      { protocol: 'https', hostname: 'npr.brightspotcdn.com', pathname: '/**' },
      { protocol: 'https', hostname: 'image.cnbcfm.com', pathname: '/**' },
      { protocol: 'https', hostname: 'imageio.forbes.com', pathname: '/**' },
      { protocol: 'https', hostname: 'platform.theverge.com', pathname: '/**' },
      { protocol: 'https', hostname: 'd1e00ek4ebabms.cloudfront.net', pathname: '/**' },
      { protocol: 'https', hostname: 'dims.apnews.com', pathname: '/**' },
      { protocol: 'https', hostname: 'investors.micron.com', pathname: '/**' },
      { protocol: 'https', hostname: 'images.barrons.com', pathname: '/**' },
      { protocol: 'https', hostname: 'media.cnn.com', pathname: '/**' },
      { protocol: 'https', hostname: 'www.wral.com', pathname: '/**' },
      { protocol: 'https', hostname: 'www.cnn.com', pathname: '/**' },
      { protocol: 'https', hostname: 'www.businesswire.com', pathname: '/**' },
      { protocol: 'https', hostname: 'images.wral.com', pathname: '/**' },
      // Removed incorrect www. subdomains and duplicates
    ],
  },
};

export default nextConfig;