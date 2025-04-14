/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://calvinchiff.com',
    generateRobotsTxt: true,
    sitemapSize: 50000,
    changefreq: 'monthly',
    priority: 1,
    trailingSlash: false,
    additionalPaths: async (config) => [
        await config.transform(config, '/'),
    ],
};