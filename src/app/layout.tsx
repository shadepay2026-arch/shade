import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'SHADE | Spend Without Owning',
  description: 'Authorization-based payments. No accounts. No balances. Just cryptographic permission.',
  keywords: ['crypto', 'defi', 'privacy', 'payments', 'solana', 'web3'],
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'SHADE Protocol',
    description: 'Spend Without Owning - Authorization-based payments',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-shade-950 text-white antialiased font-sans">
        {children}
      </body>
    </html>
  )
}
