/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "www.hire22.ai",
			},
		],
	},
};

export default nextConfig;
