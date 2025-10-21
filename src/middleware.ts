
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware({
    ...routing,
    // Disable automatic locale detection to prevent reverting to browser language
    localeDetection: false,
    // Always use the locale from the URL
    alternateLinks: false
});

export const config = {
    matcher: [
        // Match all pathnames except for
        // - /api routes
        // - /_next (Next.js internals)
        // - /_vercel (Vercel internals)
        // - Static files (with extensions)
        '/((?!api|_next|_vercel|.*\\..*).*)'
    ]
};
