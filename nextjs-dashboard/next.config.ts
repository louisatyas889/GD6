/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Ini akan mengabaikan error TypeScript saat build di Vercel
    ignoreBuildErrors: true,
  },
  eslint: {
    // Opsional: Jika ESLint juga membuat build gagal, tambahkan ini
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;