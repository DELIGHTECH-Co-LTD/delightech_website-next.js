import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
    locales: ['en', 'kh'],
    defaultLocale: 'en',
    // Disable automatic locale detection to prevent reverting to browser language
    localeDetection: false,
    // Configure locale prefix to always show locale in URL
    localePrefix: 'always'
});
