import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Delightech',
        short_name: 'DLT',
        description: 'Delightech: Everyone Can Access to Finance',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#000000',
        icons: [
            {
                src: '/icon.png',
                sizes: '32x32',
                type: 'image/png',
            },
            {
                src: '/android-chrome-192.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/android-chrome-512.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    }
} 