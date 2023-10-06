/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["image.tmdb.org"],
    },
    env: {
        URL_MOVIES: process.env.URL_MOVIES,
    }
}

module.exports = nextConfig
