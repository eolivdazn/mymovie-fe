/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        domains: ["image.tmdb.org"],
    },
    env: {
        URL_MOVIES: process.env.URL_MOVIES,
        API_KEY: process.env.API_KEY,
    }
}

module.exports = nextConfig
