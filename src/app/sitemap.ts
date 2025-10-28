import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://delightech.asia'
    const locales = ['en', 'kh']
    const routes = [
        '',
        '/about',
        '/services',
        '/calculator',
        '/careers',
        '/contact',
        '/investors'
    ]

    const sitemap: MetadataRoute.Sitemap = []

    // Generate URLs for each locale and route
    locales.forEach(locale => {
        routes.forEach(route => {
            const priority = route === '' ? 1 :
                route === '/calculator' ? 0.9 :
                    route === '/services' ? 0.9 : 0.8

            const changeFreq = route === '' ? 'weekly' :
                route === '/calculator' ? 'monthly' :
                    route === '/services' ? 'monthly' : 'yearly'

            sitemap.push({
                url: `${baseUrl}/${locale}${route}`,
                lastModified: new Date('2024-10-22'),
                changeFrequency: changeFreq,
                priority: priority,
            })
        })
    })
    sitemap.push({
        url: baseUrl,
        lastModified: new Date('2024-10-22'),
        changeFrequency: 'weekly',
        priority: 1,
    })

    return sitemap
}