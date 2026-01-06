'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  {
    number: '01',
    title: 'Request Authorization',
    description: 'Connect your wallet and request spending authorization. Stake $SHADE to unlock access tiers.',
  },
  {
    number: '02',
    title: 'Receive Permission',
    description: 'Get cryptographic proof of your spending limits, time windows, and purpose constraints.',
  },
  {
    number: '03',
    title: 'Submit Intent',
    description: 'Express what you want to spend. No balance checks, no ownership verification.',
  },
  {
    number: '04',
    title: 'Access Fog Pools',
    description: 'Liquidity is drawn from shared pools. Your spend is validated, executed, and forgotten.',
  },
]

const comparison = [
  {
    aspect: 'Spending Model',
    traditional: 'Own first, then spend',
    shade: 'Authorize first, spend from pools',
  },
  {
    aspect: 'Liquidity',
    traditional: 'Fragmented across individual wallets',
    shade: 'Unified Fog Pools (authority-managed)',
  },
  {
    aspect: 'Constraints',
    traditional: 'Unlimited spending if you own it',
    shade: 'Caps, expiry, purpose restrictions',
  },
  {
    aspect: 'Privacy (v1)',
    traditional: 'Transaction history fully exposed',
    shade: 'Authorization unlinking planned',
  },
]

export default function Protocol() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="protocol" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-shade-950" />
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* How it works */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="tag mb-4 inline-block">How It Works</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Spendability Without{' '}
            <span className="gradient-text">Ownership</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-6 mb-32">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-brand-blue/50 to-transparent" />
              )}
              
              <div className="card h-full">
                <div className="text-4xl font-bold bg-brand-gradient bg-clip-text text-transparent mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-gray-400">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold mb-4">The Paradigm Shift</h3>
          <p className="text-gray-400">Traditional finance vs. authorization-based finance</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="overflow-hidden rounded-2xl border border-shade-700"
        >
          <table className="w-full">
            <thead>
              <tr className="bg-shade-800">
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Aspect</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-500">Traditional</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-brand-blue">SHADE</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, index) => (
                <tr key={index} className="border-t border-shade-700">
                  <td className="px-6 py-4 text-sm font-medium">{row.aspect}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{row.traditional}</td>
                  <td className="px-6 py-4 text-sm text-brand-blue">{row.shade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  )
}
