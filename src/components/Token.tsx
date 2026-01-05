'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const utilities = [
  {
    title: 'Stake for Access',
    description: 'Stake $SHADE to unlock authorization tiers. Higher stakes = higher spending limits.',
  },
  {
    title: 'Fee Sharing',
    description: 'Protocol fees are distributed to $SHADE stakers. Earn yield from network activity.',
  },
  {
    title: 'Governance',
    description: 'Vote on protocol parameters, fee structures, and new feature implementations.',
  },
  {
    title: 'LP Rewards',
    description: 'Liquidity providers to Fog Pools earn $SHADE emissions as incentives.',
  },
]

export default function Token() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="token" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-shade-950 via-shade-900 to-shade-950" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-[150px]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="tag mb-4 inline-block">Protocol Token</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">$SHADE</span> Token
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            The coordination and governance asset for SHADE Protocol. 
            Stake to access, earn from fees, and govern the future.
          </p>
        </motion.div>

        {/* Token visual - 3D flip spinning logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-16"
          style={{ perspective: '1000px' }}
        >
          <div className="relative">
            {/* Glow */}
            <div className="absolute inset-0 bg-brand-gradient rounded-full blur-3xl opacity-30 animate-pulse scale-150" />
            
            {/* 3D Flip Spinning Logo */}
            <motion.div 
              animate={{ rotateY: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              className="relative w-48 h-48 md:w-64 md:h-64"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <Image 
                src="/logo.png" 
                alt="$SHADE Token" 
                fill
                className="object-contain"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Utilities */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {utilities.map((utility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="card text-center"
            >
              <div className="text-3xl font-bold bg-brand-gradient bg-clip-text text-transparent mb-4">
                0{index + 1}
              </div>
              <h3 className="text-lg font-semibold mb-2">{utility.title}</h3>
              <p className="text-sm text-gray-400">{utility.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center mt-16"
        >
          <a 
            href="https://pump.fun" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            Buy $SHADE on Pump.fun
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
