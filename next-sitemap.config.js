/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://calvinchiff.com',
    generateRobotsTxt: true,
    sitemapSize: 7000,
    changefreq: 'monthly',
    priority: 0.7,
    trailingSlash: false,
    additionalPaths: async (config) => [
        await config.transform(config, '/'),
    ],
};