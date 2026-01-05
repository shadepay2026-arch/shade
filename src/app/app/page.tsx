'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useWallet } from '@/components/WalletProvider'
import Link from 'next/link'
import Image from 'next/image'

// Mock staking data
const mockStakingData = {
  stakedAmount: 1250,
  tier: 'Silver',
  tierNumber: 2,
  pendingRewards: 12.45,
  nextTier: 'Gold',
  nextTierRequirement: 10000,
  apy: 8.5,
}

const tierThresholds = [
  { name: 'None', min: 0, color: 'gray' },
  { name: 'Bronze', min: 100, color: 'orange' },
  { name: 'Silver', min: 1000, color: 'slate' },
  { name: 'Gold', min: 10000, color: 'yellow' },
]

// Mock authorization data
const mockAuthorizations = [
  {
    id: '1',
    status: 'active',
    spendingCap: 500,
    used: 123.45,
    currency: 'USDC',
    expiresIn: '23h 42m',
    purpose: 'General Spending',
    createdAt: '2 hours ago',
  },
  {
    id: '2',
    status: 'active',
    spendingCap: 100,
    used: 0,
    currency: 'USDC',
    expiresIn: '6d 12h',
    purpose: 'Subscription',
    createdAt: '1 day ago',
  },
  {
    id: '3',
    status: 'expired',
    spendingCap: 250,
    used: 250,
    currency: 'USDC',
    expiresIn: 'Expired',
    purpose: 'One-time Purchase',
    createdAt: '5 days ago',
  },
]

function WalletButton() {
  const { connected, publicKey, connecting, connect, disconnect, connectDemo, isDemo } = useWallet()

  const shortenAddress = (address: string) => {
    return `${address.slice(0, 4)}...${address.slice(-4)}`
  }

  if (connected && publicKey) {
    return (
      <div className="flex items-center gap-2">
        {isDemo && (
          <span className="px-2 py-1 text-xs bg-yellow-500/20 text-yellow-400 rounded border border-yellow-500/30">
            Demo Mode
          </span>
        )}
        <div className="px-4 py-2 bg-shade-800 border border-shade-600 rounded-lg flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${isDemo ? 'bg-yellow-400' : 'bg-green-400'}`} />
          <span className="text-sm font-mono">{shortenAddress(publicKey)}</span>
        </div>
        <button 
          onClick={disconnect}
          className="p-2 text-gray-400 hover:text-white hover:bg-shade-800 rounded-lg transition-colors"
          title="Disconnect"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
        </button>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-2">
      <button 
        onClick={connect}
        disabled={connecting}
        className="btn-primary flex items-center gap-2"
      >
        {connecting ? (
          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
          </svg>
        )}
        Connect Wallet
      </button>
      <button 
        onClick={connectDemo}
        className="px-4 py-2 text-sm text-gray-400 hover:text-white border border-shade-600 hover:border-brand-blue rounded-lg transition-colors flex items-center gap-2"
        title="Try demo mode without a real wallet"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
        Demo
      </button>
    </div>
  )
}

function AuthorizationCard({ auth }: { auth: typeof mockAuthorizations[0] }) {
  const isActive = auth.status === 'active'
  const usagePercent = (auth.used / auth.spendingCap) * 100

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`card ${!isActive ? 'opacity-60' : ''}`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2">
          {isActive ? (
            <span className="flex items-center gap-1.5 text-sm text-green-400">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Active
            </span>
          ) : (
            <span className="flex items-center gap-1.5 text-sm text-gray-500">
              <span className="w-2 h-2 bg-gray-500 rounded-full" />
              Expired
            </span>
          )}
        </div>
        <span className="tag">{auth.purpose}</span>
      </div>

      {/* Spending limit */}
      <div className="mb-4">
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-3xl font-bold">{auth.spendingCap}</span>
          <span className="text-gray-400">{auth.currency}</span>
        </div>
        <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
          <span>Used: {auth.used} {auth.currency}</span>
          <span>{usagePercent.toFixed(0)}%</span>
        </div>
        <div className="h-2 bg-shade-700 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${usagePercent}%` }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className={`h-full rounded-full ${
              usagePercent > 80 ? 'bg-red-500' : usagePercent > 50 ? 'bg-yellow-500' : 'bg-brand-blue'
            }`}
          />
        </div>
      </div>

      {/* Details */}
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-1.5 text-gray-400">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{auth.expiresIn}</span>
        </div>
        {isActive && (
          <button className="btn-primary text-xs px-4 py-2">
            Use Authorization
          </button>
        )}
      </div>
    </motion.div>
  )
}

function StakingPanel() {
  const { isDemo } = useWallet()
  const [showStakeModal, setShowStakeModal] = useState(false)
  const [stakeAction, setStakeAction] = useState<'stake' | 'unstake'>('stake')
  
  const progressToNext = ((mockStakingData.stakedAmount - 1000) / (mockStakingData.nextTierRequirement - 1000)) * 100

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15 }}
      className="mb-8"
    >
      <h2 className="text-lg font-semibold mb-4">Staking</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {/* Stake Info Card */}
        <div className="card">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-sm text-gray-400 mb-1">Your Stake</p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold">{mockStakingData.stakedAmount.toLocaleString()}</span>
                <span className="text-gray-400">$SHADE</span>
              </div>
            </div>
            <div className={`px-3 py-1.5 rounded-lg font-semibold text-sm ${
              mockStakingData.tier === 'Gold' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
              mockStakingData.tier === 'Silver' ? 'bg-slate-400/20 text-slate-300 border border-slate-400/30' :
              mockStakingData.tier === 'Bronze' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' :
              'bg-gray-500/20 text-gray-400 border border-gray-500/30'
            }`}>
              {mockStakingData.tier} Tier
            </div>
          </div>

          {/* Progress to next tier */}
          <div className="mb-4">
            <div className="flex justify-between text-sm text-gray-400 mb-2">
              <span>Progress to {mockStakingData.nextTier}</span>
              <span>{mockStakingData.nextTierRequirement.toLocaleString()} $SHADE required</span>
            </div>
            <div className="h-2 bg-shade-700 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(progressToNext, 100)}%` }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="h-full bg-gradient-to-r from-brand-blue to-purple-500 rounded-full"
              />
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex gap-3">
            <button 
              onClick={() => { setStakeAction('stake'); setShowStakeModal(true) }}
              className="flex-1 btn-primary text-sm"
            >
              Stake More
            </button>
            <button 
              onClick={() => { setStakeAction('unstake'); setShowStakeModal(true) }}
              className="flex-1 btn-secondary text-sm"
            >
              Unstake
            </button>
          </div>
        </div>

        {/* Rewards Card */}
        <div className="card">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-sm text-gray-400 mb-1">Pending Rewards</p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-green-400">{mockStakingData.pendingRewards.toFixed(2)}</span>
                <span className="text-green-400 font-medium">USDC</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-400">Est. APY</p>
              <p className="text-lg font-semibold text-green-400">{mockStakingData.apy}%</p>
            </div>
          </div>

          <div className="p-3 bg-shade-800/50 rounded-lg border border-shade-700 mb-4">
            <p className="text-xs text-gray-400">
              <span className="text-yellow-400">Stake $SHADE</span> → <span className="text-green-400">Earn USDC</span> from 0.1% protocol fees
            </p>
          </div>

          <button 
            className="w-full btn-primary flex items-center justify-center gap-2"
            disabled={mockStakingData.pendingRewards === 0}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Claim USDC Rewards
          </button>

          {isDemo && (
            <p className="text-xs text-yellow-400/70 text-center mt-3">
              Demo mode: Staking actions are simulated
            </p>
          )}
        </div>
      </div>

      {/* Tier Benefits */}
      <div className="mt-4 card">
        <h3 className="font-semibold mb-3">Tier Benefits</h3>
        <div className="grid grid-cols-4 gap-2 text-center text-sm">
          {tierThresholds.map((tier, i) => (
            <div 
              key={tier.name}
              className={`p-3 rounded-lg border ${
                mockStakingData.tier === tier.name 
                  ? 'border-brand-blue bg-brand-blue/10' 
                  : 'border-shade-700 bg-shade-800/50'
              }`}
            >
              <p className={`font-semibold ${
                tier.name === 'Gold' ? 'text-yellow-400' :
                tier.name === 'Silver' ? 'text-slate-300' :
                tier.name === 'Bronze' ? 'text-orange-400' :
                'text-gray-500'
              }`}>{tier.name}</p>
              <p className="text-xs text-gray-400 mt-1">{tier.min.toLocaleString()}+ $SHADE</p>
              <p className="text-xs text-gray-500 mt-1">{i === 0 ? '0.5x' : i === 1 ? '1x' : i === 2 ? '5x' : '10x'} Cap</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stake/Unstake Modal */}
      <AnimatePresence>
        {showStakeModal && (
          <StakeModal action={stakeAction} onClose={() => setShowStakeModal(false)} />
        )}
      </AnimatePresence>
    </motion.div>
  )
}

function StakeModal({ action, onClose }: { action: 'stake' | 'unstake', onClose: () => void }) {
  const { isDemo } = useWallet()
  const [amount, setAmount] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async () => {
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsSuccess(true)
    setTimeout(onClose, 1500)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        onClick={e => e.stopPropagation()}
        className="w-full max-w-md card"
      >
        {isSuccess ? (
          <div className="text-center py-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center"
            >
              <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </motion.div>
            <h3 className="text-xl font-semibold mb-2">
              {action === 'stake' ? 'Staked Successfully!' : 'Unstaked Successfully!'}
            </h3>
            <p className="text-gray-400">Your tier has been updated.</p>
          </div>
        ) : (
          <>
            <h3 className="text-xl font-semibold mb-6 capitalize">{action} $SHADE</h3>

            {isDemo && (
              <div className="mb-4 p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg flex items-start gap-2">
                <svg className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <p className="text-sm text-yellow-200">
                  Demo mode: This is a simulated {action}. No real transactions will occur.
                </p>
              </div>
            )}

            <div className="mb-4">
              <label className="block text-sm text-gray-400 mb-2">
                Amount to {action}
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={amount}
                  onChange={e => setAmount(e.target.value)}
                  placeholder="0"
                  className="w-full px-4 py-3 bg-shade-800 border border-shade-600 rounded-lg 
                           focus:outline-none focus:border-brand-blue transition-colors pr-20"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">$SHADE</span>
              </div>
              {action === 'unstake' && (
                <p className="text-sm text-gray-500 mt-2">
                  Available: {mockStakingData.stakedAmount.toLocaleString()} $SHADE
                </p>
              )}
            </div>

            {action === 'stake' && amount && Number(amount) > 0 && (
              <div className="mb-4 p-3 bg-shade-800/50 rounded-lg border border-shade-700">
                <p className="text-sm text-gray-400">
                  New stake: {(mockStakingData.stakedAmount + Number(amount)).toLocaleString()} $SHADE
                </p>
                {mockStakingData.stakedAmount + Number(amount) >= 10000 && (
                  <p className="text-sm text-yellow-400 mt-1">You'll reach Gold tier!</p>
                )}
              </div>
            )}

            <div className="flex gap-3">
              <button onClick={onClose} className="flex-1 btn-secondary">
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                disabled={!amount || Number(amount) <= 0 || isSubmitting}
                className="flex-1 btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 capitalize"
              >
                {isSubmitting ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  action
                )}
              </button>
            </div>
          </>
        )}
      </motion.div>
    </motion.div>
  )
}

function RequestModal({ onClose }: { onClose: () => void }) {
  const { isDemo } = useWallet()
  const [amount, setAmount] = useState('')
  const [duration, setDuration] = useState('24h')
  const [purpose, setPurpose] = useState('general')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async () => {
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsSuccess(true)
    setTimeout(() => {
      onClose()
    }, 1500)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        onClick={e => e.stopPropagation()}
        className="w-full max-w-md card"
      >
        {isSuccess ? (
          <div className="text-center py-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center"
            >
              <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </motion.div>
            <h3 className="text-xl font-semibold mb-2">Authorization Granted!</h3>
            <p className="text-gray-400">Your spending authorization is now active.</p>
          </div>
        ) : (
          <>
            <h3 className="text-xl font-semibold mb-6">Request Authorization</h3>

            {isDemo && (
              <div className="mb-4 p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg flex items-start gap-2">
                <svg className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <p className="text-sm text-yellow-200">
                  Demo mode: This is a simulated authorization. No real transactions will occur.
                </p>
              </div>
            )}
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Spending Cap (USDC)</label>
                <input
                  type="number"
                  value={amount}
                  onChange={e => setAmount(e.target.value)}
                  placeholder="100"
                  className="w-full px-4 py-3 bg-shade-800 border border-shade-600 rounded-lg 
                           focus:outline-none focus:border-brand-blue transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Duration</label>
                <div className="grid grid-cols-4 gap-2">
                  {['1h', '24h', '7d', '30d'].map(d => (
                    <button
                      key={d}
                      onClick={() => setDuration(d)}
                      className={`py-2 rounded-lg border transition-colors ${
                        duration === d 
                          ? 'border-brand-blue bg-brand-blue/20 text-brand-blue' 
                          : 'border-shade-600 hover:border-shade-500'
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Purpose</label>
                <select
                  value={purpose}
                  onChange={e => setPurpose(e.target.value)}
                  className="w-full px-4 py-3 bg-shade-800 border border-shade-600 rounded-lg 
                           focus:outline-none focus:border-brand-blue transition-colors"
                >
                  <option value="general">General Spending</option>
                  <option value="subscription">Subscription</option>
                  <option value="one-time">One-time Purchase</option>
                  <option value="transfer">Transfer</option>
                </select>
              </div>
            </div>

            <div className="mt-6 p-4 bg-shade-800/50 rounded-lg border border-shade-700">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="text-sm text-gray-400">
                  <p className="mb-1">This authorization allows spending up to the cap without holding funds.</p>
                  <p>Funds are drawn from Fog Pools at time of use.</p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <button onClick={onClose} className="flex-1 btn-secondary">
                Cancel
              </button>
              <button 
                onClick={handleSubmit} 
                disabled={!amount || isSubmitting}
                className="flex-1 btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  'Request Authorization'
                )}
              </button>
            </div>
          </>
        )}
      </motion.div>
    </motion.div>
  )
}

export default function AppPage() {
  const { connected, publicKey, isDemo } = useWallet()
  const [showModal, setShowModal] = useState(false)

  const shortenAddress = (address: string) => {
    return `${address.slice(0, 4)}...${address.slice(-4)}`
  }

  return (
    <div className="min-h-screen bg-checkerboard">
      {/* Background */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[150px] pointer-events-none" />
      
      {/* Header */}
      <header className="relative z-10 border-b border-shade-800 bg-shade-950/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="text-sm">Back</span>
            </Link>
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12">
                <Image 
                  src="/logo.png" 
                  alt="SHADE" 
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold tracking-tight">SHADE</span>
              <span className="tag ml-2">App</span>
            </div>
          </div>
          
          <WalletButton />
        </div>
      </header>

      {/* Main content */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        {!connected ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-24"
          >
            <div className="flex justify-center mb-6" style={{ perspective: '1000px' }}>
              <motion.div
                animate={{ rotateY: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                className="relative w-32 h-32"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <Image 
                  src="/logo.png" 
                  alt="SHADE" 
                  fill
                  className="object-contain"
                />
              </motion.div>
            </div>
            <h1 className="text-3xl font-bold mb-4">Connect Your Wallet</h1>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
              Connect your Solana wallet to view your authorizations and request new spending permissions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <WalletButton />
            </div>
            <p className="mt-6 text-sm text-gray-500">
              Don't have a wallet? Click <strong>Demo</strong> to try without one.
            </p>
          </motion.div>
        ) : (
          <>
            {isDemo && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg flex items-center gap-3"
              >
                <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
                <div>
                  <p className="text-yellow-200 font-medium">Demo Mode Active</p>
                  <p className="text-sm text-yellow-200/70">You're using a simulated wallet. No real transactions will occur.</p>
                </div>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold mb-1">Authorization Dashboard</h1>
                  <div className="flex items-center gap-2 text-gray-400">
                    <span className="text-sm font-mono">
                      {publicKey ? shortenAddress(publicKey) : ''}
                    </span>
                    {!isDemo && (
                      <>
                        <button 
                          onClick={() => navigator.clipboard.writeText(publicKey || '')}
                          className="hover:text-white transition-colors"
                          title="Copy address"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                        </button>
                        <a 
                          href={`https://solscan.io/account/${publicKey}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-white transition-colors"
                          title="View on Solscan"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </>
                    )}
                  </div>
                </div>
                <button 
                  onClick={() => setShowModal(true)}
                  className="btn-primary flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Request Authorization
                </button>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
            >
              {[
                { label: 'Active Authorizations', value: '2' },
                { label: 'Total Cap', value: '600 USDC' },
                { label: 'Used', value: '123.45 USDC' },
                { label: 'Available', value: '476.55 USDC' },
              ].map((stat, i) => (
                <div key={i} className="card">
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Staking */}
            <StakingPanel />

            {/* Authorizations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-lg font-semibold mb-4">Your Authorizations</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {mockAuthorizations.map((auth) => (
                  <AuthorizationCard key={auth.id} auth={auth} />
                ))}
              </div>
            </motion.div>
          </>
        )}
      </main>

      <AnimatePresence>
        {showModal && <RequestModal onClose={() => setShowModal(false)} />}
      </AnimatePresence>
    </div>
  )
}
