export default function StakingPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Staking</h1>
      <p className="text-xl text-gray-400 mb-8">
        Stake $SHADE to unlock higher spending caps and earn USDC from protocol fees.
      </p>

      <div className="bg-brand-blue/10 border border-brand-blue/30 rounded-lg p-6 mb-8">
        <h3 className="font-semibold mb-3">Two-Token System</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div className="bg-shade-800 rounded-lg p-4">
            <p className="text-yellow-400 font-semibold mb-2">$SHADE Token</p>
            <ul className="text-gray-300 space-y-1">
              <li>Launched on Pump.fun</li>
              <li>Stake to unlock tiers</li>
              <li>Governance voting</li>
            </ul>
          </div>
          <div className="bg-shade-800 rounded-lg p-4">
            <p className="text-green-400 font-semibold mb-2">USDC (Rewards)</p>
            <ul className="text-gray-300 space-y-1">
              <li>LPs deposit to Fog Pools</li>
              <li>Users spend from Fog Pools</li>
              <li>0.1% fee → distributed to stakers</li>
            </ul>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4">Why Stake?</h2>
      <p className="text-gray-300 mb-6">
        Staking is the core mechanism that aligns incentives between protocol users and 
        token holders. When you stake $SHADE, you:
      </p>
      <ul className="list-disc list-inside text-gray-300 space-y-2 mb-8">
        <li><strong>Unlock higher tiers</strong> with increased authorization spending caps</li>
        <li><strong>Earn USDC</strong> from protocol fees on every spend transaction</li>
        <li><strong>Support the protocol</strong> by providing economic security</li>
        <li><strong>Gain governance rights</strong> to vote on protocol parameters</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">Tier System</h2>
      <p className="text-gray-300 mb-4">
        The protocol has four tiers based on your staked $SHADE amount:
      </p>
      
      <div className="grid md:grid-cols-4 gap-4 mb-8">
        <div className="bg-shade-800 rounded-lg p-4 border border-gray-700">
          <div className="text-gray-500 font-bold text-lg mb-2">None</div>
          <p className="text-2xl font-bold mb-1">0</p>
          <p className="text-xs text-gray-500 mb-3">$SHADE</p>
          <div className="text-sm text-gray-400">
            <p>Cap: 100 USDC</p>
            <p>Fee Share: 0%</p>
          </div>
        </div>
        <div className="bg-shade-800 rounded-lg p-4 border border-orange-500/30">
          <div className="text-orange-400 font-bold text-lg mb-2">Bronze</div>
          <p className="text-2xl font-bold mb-1">100+</p>
          <p className="text-xs text-gray-500 mb-3">$SHADE</p>
          <div className="text-sm text-gray-400">
            <p>Cap: 1,000 USDC</p>
            <p>Fee Share: 1x</p>
          </div>
        </div>
        <div className="bg-shade-800 rounded-lg p-4 border border-slate-400/30">
          <div className="text-slate-300 font-bold text-lg mb-2">Silver</div>
          <p className="text-2xl font-bold mb-1">1,000+</p>
          <p className="text-xs text-gray-500 mb-3">$SHADE</p>
          <div className="text-sm text-gray-400">
            <p>Cap: 5,000 USDC</p>
            <p>Fee Share: 2x</p>
          </div>
        </div>
        <div className="bg-shade-800 rounded-lg p-4 border border-yellow-500/30">
          <div className="text-yellow-400 font-bold text-lg mb-2">Gold</div>
          <p className="text-2xl font-bold mb-1">10,000+</p>
          <p className="text-xs text-gray-500 mb-3">$SHADE</p>
          <div className="text-sm text-gray-400">
            <p>Cap: 10,000 USDC</p>
            <p>Fee Share: 5x</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4">Fee Distribution</h2>
      <p className="text-gray-300 mb-4">
        Every time someone spends USDC using an authorization, a 0.1% fee is collected. 
        These USDC fees are distributed to $SHADE stakers proportionally:
      </p>

      <div className="bg-shade-800 rounded-lg p-6 mb-8">
        <h4 className="font-semibold mb-4">The Flow</h4>
        <div className="text-sm text-gray-300 space-y-3 font-mono">
          <div className="flex items-center gap-2">
            <span className="text-gray-500">1.</span>
            <span>LPs deposit <span className="text-green-400">USDC</span> → Fog Pool</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-500">2.</span>
            <span>User spends <span className="text-green-400">USDC</span> from Fog Pool via authorization</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-500">3.</span>
            <span>0.1% fee collected in <span className="text-green-400">USDC</span> → Fee Vault</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-500">4.</span>
            <span><span className="text-green-400">USDC</span> distributed to <span className="text-yellow-400">$SHADE</span> stakers</span>
          </div>
        </div>
      </div>
      
      <div className="bg-shade-800 rounded-lg p-6 mb-8">
        <h4 className="font-semibold mb-4">Example</h4>
        <div className="text-sm text-gray-300 space-y-2">
          <p>Alice spends <span className="text-green-400">1,000 USDC</span> using her authorization</p>
          <p>Protocol collects <span className="text-green-400">1 USDC</span> fee (0.1%)</p>
          <p>Bob has staked <span className="text-yellow-400">5,000 $SHADE</span> (50% of total staked)</p>
          <p>Bob earns <span className="text-green-400">0.50 USDC</span> from this transaction</p>
        </div>
        <div className="mt-4 pt-4 border-t border-shade-700">
          <p className="text-xs text-gray-500">
            Note: Bob staked $SHADE but earns USDC. This creates real yield from protocol activity.
          </p>
        </div>
      </div>

      <div className="bg-shade-800 rounded-lg p-6 mb-8 font-mono text-sm">
        <p className="text-gray-500 mb-2">// Smart contract fee calculation</p>
        <p className="text-gray-300">usdc_fee = spend_amount × 0.001</p>
        <p className="text-gray-300">your_usdc_reward = usdc_fee × (your_shade_stake / total_shade_staked)</p>
      </div>

      <h2 className="text-2xl font-bold mb-4">Staking Flow</h2>
      <div className="relative mb-8">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-shade-700"></div>
        <div className="space-y-6">
          <div className="relative pl-10">
            <div className="absolute left-2 w-4 h-4 rounded-full bg-brand-blue"></div>
            <h4 className="font-semibold mb-1">Connect Wallet</h4>
            <p className="text-sm text-gray-400">Connect your Solana wallet (Phantom, Solflare, etc.)</p>
          </div>
          <div className="relative pl-10">
            <div className="absolute left-2 w-4 h-4 rounded-full bg-brand-blue"></div>
            <h4 className="font-semibold mb-1">Approve Transaction</h4>
            <p className="text-sm text-gray-400">Approve the staking transaction in your wallet</p>
          </div>
          <div className="relative pl-10">
            <div className="absolute left-2 w-4 h-4 rounded-full bg-brand-blue"></div>
            <h4 className="font-semibold mb-1">Tokens Locked</h4>
            <p className="text-sm text-gray-400">Your $SHADE is transferred to the staking contract</p>
          </div>
          <div className="relative pl-10">
            <div className="absolute left-2 w-4 h-4 rounded-full bg-green-500"></div>
            <h4 className="font-semibold mb-1">Tier Assigned</h4>
            <p className="text-sm text-gray-400">You receive your tier and can create authorizations</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4">Claiming Rewards</h2>
      <p className="text-gray-300 mb-4">
        USDC rewards accumulate as protocol fees are collected. You can claim 
        your rewards at any time without unstaking your $SHADE.
      </p>
      <div className="bg-shade-800 rounded-lg p-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-gray-400 text-sm">Pending Rewards</span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-green-400">12.45</span>
              <span className="text-green-400">USDC</span>
            </div>
          </div>
          <div className="text-right">
            <span className="text-gray-400 text-sm">Your Stake</span>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold text-yellow-400">5,000</span>
              <span className="text-yellow-400 text-sm">$SHADE</span>
            </div>
          </div>
        </div>
        <button className="w-full py-3 bg-brand-blue rounded-lg font-semibold hover:bg-brand-blue/80 transition-colors">
          Claim USDC Rewards
        </button>
        <p className="text-xs text-gray-500 mt-3 text-center">
          USDC is sent directly to your wallet. Your $SHADE stake remains locked.
        </p>
      </div>

      <h2 className="text-2xl font-bold mb-4">Unstaking</h2>
      <p className="text-gray-300 mb-4">
        You can unstake your $SHADE at any time. There is no lock-up period or unbonding time.
      </p>
      <ul className="list-disc list-inside text-gray-300 space-y-2 mb-8">
        <li>Unstaking is instant with no waiting period</li>
        <li>Your tier is recalculated immediately</li>
        <li>Unclaimed rewards remain available to claim</li>
        <li>Active authorizations remain valid until expiry</li>
      </ul>

      <div className="mt-12 p-6 bg-brand-blue/10 border border-brand-blue/30 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Start Staking</h3>
        <p className="text-gray-300 mb-4">
          Head to the app to stake your $SHADE and start earning.
        </p>
        <a href="/app" className="btn-primary inline-block text-sm">
          Go to App
        </a>
      </div>
    </div>
  )
}

