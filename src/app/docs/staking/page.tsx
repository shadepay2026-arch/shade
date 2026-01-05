export default function StakingPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Staking</h1>
      <p className="text-xl text-gray-400 mb-8">
        Stake $SHADE to unlock higher spending caps and earn protocol fees.
      </p>

      <h2 className="text-2xl font-bold mb-4">Why Stake?</h2>
      <p className="text-gray-300 mb-6">
        Staking is the core mechanism that aligns incentives between protocol users and 
        token holders. When you stake $SHADE, you:
      </p>
      <ul className="list-disc list-inside text-gray-300 space-y-2 mb-8">
        <li><strong>Unlock higher tiers</strong> with increased authorization spending caps</li>
        <li><strong>Earn passive income</strong> from protocol fees on every transaction</li>
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
        Every time someone spends using an authorization, a small fee (0.1%) is collected 
        by the protocol. These fees are distributed to stakers proportionally:
      </p>
      
      <div className="bg-shade-800 rounded-lg p-6 mb-8">
        <h4 className="font-semibold mb-4">Example</h4>
        <div className="text-sm text-gray-300 space-y-2">
          <p>Alice spends <span className="text-brand-blue">1,000 USDC</span> using her authorization</p>
          <p>Protocol collects <span className="text-green-400">1 USDC</span> fee (0.1%)</p>
          <p>Bob has staked <span className="text-yellow-400">5,000 $SHADE</span> (50% of total staked)</p>
          <p>Bob earns <span className="text-green-400">0.50 USDC</span> from this transaction</p>
        </div>
      </div>

      <div className="bg-shade-800 rounded-lg p-6 mb-8 font-mono text-sm">
        <p className="text-gray-500 mb-2">// Fee calculation</p>
        <p className="text-gray-300">fee = spend_amount × 0.001</p>
        <p className="text-gray-300">your_share = fee × (your_stake / total_staked)</p>
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
        Rewards accumulate in real-time as protocol fees are collected. You can claim 
        your rewards at any time without unstaking.
      </p>
      <div className="bg-shade-800 rounded-lg p-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <span className="text-gray-400">Pending Rewards</span>
          <span className="text-2xl font-bold text-green-400">12.45 USDC</span>
        </div>
        <button className="w-full py-3 bg-brand-blue rounded-lg font-semibold hover:bg-brand-blue/80 transition-colors">
          Claim Rewards
        </button>
        <p className="text-xs text-gray-500 mt-3 text-center">
          Rewards are paid in USDC directly to your wallet
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

