'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const sidebarLinks = [
  { href: '/docs', label: 'Overview' },
  { href: '/docs/getting-started', label: 'Getting Started' },
  { href: '/docs/concepts', label: 'Core Concepts' },
  { href: '/docs/authorization', label: 'Authorization' },
  { href: '/docs/staking', label: 'Staking' },
  { href: '/docs/token', label: '$SHADE Token' },
  { href: '/docs/roadmap', label: 'Roadmap' },
  { href: '/docs/faq', label: 'FAQ' },
]

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-shade-950">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-shade-800 bg-shade-950/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-3">
              <Image 
                src="/logo.png" 
                alt="SHADE" 
                width={40}
                height={40}
                className="object-contain"
              />
              <span className="text-xl font-bold">SHADE</span>
            </Link>
            <span className="px-2 py-1 text-xs font-medium bg-brand-blue/20 text-brand-blue rounded border border-brand-blue/30">
              Docs
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/app" className="btn-primary text-sm py-2">
              Launch App
            </Link>
          </div>
        </div>
      </header>

      <div className="flex pt-16">
        {/* Sidebar */}
        <aside className="fixed left-0 top-16 bottom-0 w-64 border-r border-shade-800 bg-shade-950/50 overflow-y-auto">
          <nav className="p-6 space-y-1">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
              Documentation
            </p>
            {sidebarLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-2 rounded-lg text-sm transition-colors ${
                    isActive
                      ? 'bg-brand-blue/20 text-brand-blue border-l-2 border-brand-blue'
                      : 'text-gray-400 hover:text-white hover:bg-shade-800'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
            
            <div className="pt-6 mt-6 border-t border-shade-800">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
                Resources
              </p>
              <a
                href="https://github.com/shadepay2026-arch/shade"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-shade-800 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://x.com/shadepay"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-shade-800 transition-colors"
              >
                Twitter
              </a>
            </div>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 ml-64 p-8 max-w-4xl">
          <div className="prose prose-invert max-w-none">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}

