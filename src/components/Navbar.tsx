'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-shade-950/80 border-b border-shade-800"
    >
      <div className="max-w-7xl mx-auto px-6 py-2">
        <div className="flex items-center justify-between">
          {/* Logo - static, no animation, properly aligned */}
          <Link href="/" className="flex items-center gap-3">
            <Image 
              src="/logo.png" 
              alt="SHADE" 
              width={56}
              height={56}
              className="object-contain"
              priority
            />
            <span className="text-2xl font-bold tracking-tight">SHADE</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-sm text-gray-400 hover:text-white transition-colors">
              Features
            </Link>
            <Link href="#protocol" className="text-sm text-gray-400 hover:text-white transition-colors">
              Protocol
            </Link>
            <Link href="#token" className="text-sm text-gray-400 hover:text-white transition-colors">
              $SHADE
            </Link>
            <Link href="/docs" className="text-sm text-gray-400 hover:text-white transition-colors">
              Docs
            </Link>
            <Link href="/app" className="btn-primary text-sm">
              Launch App
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-400 hover:text-white p-2"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pt-4 pb-2 space-y-4"
          >
            <Link href="#features" className="block text-gray-400 hover:text-white">Features</Link>
            <Link href="#protocol" className="block text-gray-400 hover:text-white">Protocol</Link>
            <Link href="#token" className="block text-gray-400 hover:text-white">$SHADE</Link>
            <Link href="/app" className="btn-primary inline-block text-sm">Launch App</Link>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
