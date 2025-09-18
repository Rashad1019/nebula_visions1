
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nebula Visions Studios - Where Reality Bends',
  description: 'A cutting-edge TV production house specializing in gripping, genre-bending narratives that push the boundaries of horror, sci-fi, and action. Join 54M+ fans across TikTok and YouTube Shorts.',
  keywords: 'horror, sci-fi, action, TikTok, YouTube Shorts, streaming, viral content, Gen Z, entertainment',
  openGraph: {
    title: 'Nebula Visions Studios - Where Reality Bends',
    description: 'Experience the future of entertainment with our viral horror, sci-fi, and action content across social platforms.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nebula Visions Studios - Where Reality Bends',
    description: 'Experience the future of entertainment with our viral horror, sci-fi, and action content across social platforms.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        {children}
      </body>
    </html>
  )
}
