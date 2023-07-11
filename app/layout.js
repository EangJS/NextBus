import './globals.css'
import {Inter} from 'next/font/google'

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'NextBus',
    viewport: 'width=device-width,initial-scale=1.0,maximum-scale=1.0'
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <head>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
                  rel="stylesheet"></link>
        </head>
        <body className={inter.className}>{children}</body>
        </html>
    )
}