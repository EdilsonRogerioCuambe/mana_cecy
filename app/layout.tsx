import { Providers } from "@/components/providers"
import type { Metadata } from 'next'
import { Playfair_Display, Poppins } from 'next/font/google'

import './globals.css'

const _playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const _poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Inocencia Gaisse | Mana dos Manos',
  description: 'Conselheira de Lar, Educadora Familiar e Coach de Vida. Fortalecendo familias, edificando lares com amor e sabedoria.',
  keywords: ['conselheira de lar', 'educadora familiar', 'coach de vida', 'familia', 'relacionamento', 'casamento', 'inocencia gaisse', 'mana dos manos', 'mocambique'],
  authors: [{ name: 'Inocencia Gaisse' }],
  creator: 'Inocencia Gaisse',
  publisher: 'Inocencia Gaisse',
  metadataBase: new URL('https://manacecy.com'), // Replace with actual domain when known
  openGraph: {
    type: 'website',
    locale: 'pt_MZ',
    url: 'https://manacecy.com',
    title: 'Inocencia Gaisse | Mana dos Manos',
    description: 'Conselheira de Lar, Educadora Familiar e Coach de Vida. Fortalecendo familias, edificando lares.',
    siteName: 'Inocencia Gaisse',
    images: [
      {
        url: '/logo.svg', // Using the logo as a placeholder OG image for now
        width: 800,
        height: 600,
        alt: 'Inocencia Gaisse - Mana dos Manos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Inocencia Gaisse | Mana dos Manos',
    description: 'Conselheira de Lar, Educadora Familiar e Coach de Vida.',
    images: ['/logo.svg'],
  },
  icons: {
    icon: '/logo.svg',
    shortcut: '/logo.svg',
    apple: '/logo.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt" className={`${_playfair.variable} ${_poppins.variable}`}>
      <body className="font-sans antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
