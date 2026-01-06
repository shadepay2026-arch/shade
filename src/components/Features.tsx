'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const features = [
  {
    title: 'Authorization-Based',
    description: 'Spend without owning. Receive cryptographic permission to access shared liquidity pools.',
    tags: ['v0 Live', 'Core Feature'],
  },
  {
    title: 'Fog Pools',
    description: 'Shared liquidity reservoirs managed by pool authorities. Funds drawn at time of spend.',
    tags: ['v0 Live', 'Pooled Capital'],
  },
  {
    title: 'Staking & Rewards',
    description: 'Stake $SHADE to unlock higher spending tiers and earn USDC from protocol fees.',
    tags: ['v0 Live', 'Earn USDC'],
  },
  {
    title: 'Constraints',
    description: 'Spending caps, time windows, and purpose restrictions. Security through policy.',
    tags: ['v0 Live', 'Programmable'],
  },
  {
    title: 'Open Source',
    description: 'Fully auditable smart contracts on Solana. Verify everything on GitHub.',
    tags: ['Transparent', 'Auditable'],
  },
  {
    title: 'Privacy Layer',
    description: 'ZK-based authorization unlinking planned for v1. Opt-in privacy, not default.',
    tags: ['v1 Planned', 'Opt-In'],
  },
]

function FeatureCard({ feature, index }: { feature: typeof features[0], index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card group"
    >
      {/* Number indicator */}
      <div className="text-4xl font-bold bg-brand-gradient bg-clip-text text-transparent mb-4">
        0{index + 1}
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>

      {/* Description */}
      <p className="text-gray-400 text-sm mb-4">{feature.description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {feature.tags.map((tag, i) => (
          <span key={i} className="tag">{tag}</span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="features" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-shade-950 via-shade-900 to-shade-950" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="tag mb-4 inline-block">Core Features</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            A New Primitive for{' '}
            <span className="gradient-text">Onchain Finance</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            SHADE introduces authorization-based payments where users never hold money, 
            never manage balances, and never appear on-chain.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
