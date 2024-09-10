/** @type {import('next').NextConfig} */
const nextConfig = {
	// para acceder a la imagenes de github
	images: {
		remotePatterns:[
			{
				protocol:"https",
				hostname: "github.com"
			}
		]
	}
};

export default nextConfig;
