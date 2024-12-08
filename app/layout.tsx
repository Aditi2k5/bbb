import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Beyond Broken Brains',
  description: 'Empowering individuals with brain injuries and disabilities',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/lucide-react@0.258.0/dist/umd/lucide-react.min.css"
        />
      </head>
      <body className={`${inter.className} bg-navy text-white`}>{children}</body>
    </html>
  )
}

