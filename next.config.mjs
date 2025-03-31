/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      serverComponentsHmrCache: false, // defaults to true
    },
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "rxxqvzzhgekacpvvxjmh.supabase.co",
        },
      ],
    },
  
    async headers() {
      return [
        {
          source: "/embed",
          headers: [
            {
              key: "Content-Security-Policy",
              value: "frame-src 'self' https://wheelify-waitlist.created.app",
            },
          ],
        },
      ];
    },
  };
  
  export default nextConfig;
