import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://delightech.asia'
    const locales = ['en', 'kh']
    const routes = [
        '',
        '/about',
        '/services',
        '/careers',
        '/contact',
        '/investors'
    ]

    const sitemap: MetadataRoute.Sitemap = []

    // Generate URLs for each locale and route
    locales.forEach(locale => {
        routes.forEach(route => {
            sitemap.push({
                url: `${baseUrl}/${locale}${route}`,
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: route === '' ? 1 : 0.8,
            })
        })
    })
    sitemap.push({
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1,
    })

    return sitemap
}