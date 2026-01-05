export default function TokenPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">$SHADE Token</h1>
      <p className="text-xl text-gray-400 mb-8">
        The coordination and governance token powering the SHADE Protocol.
      </p>

      <h2 className="text-2xl font-bold mb-4">Overview</h2>
      <p className="text-gray-300 mb-6">
        $SHADE is the native token of the SHADE Protocol. It serves multiple purposes 
        within the ecosystem, from unlocking access tiers to participating in governance 
        and earning protocol fees.
      </p>

      <div className="bg-brand-blue/10 border border-brand-blue/30 rounded-lg p-6 mb-8">
        <h3 className="font-semibold mb-3">Two-Token Economy</h3>
        <p className="text-gray-300 text-sm mb-4">
          SHADE Protocol uses two tokens with distinct roles:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-shade-800 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center">
                <span className="text-yellow-400 font-bold text-sm">$</span>
              </div>
              <span className="font-semibold text-yellow-400">$SHADE</span>
            </div>
            <p className="text-xs text-gray-400">
              Governance token launched on Pump.fun. Stake to unlock tiers and earn rewards.
            </p>
          </div>
          <div className="bg-shade-800 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                <span className="text-green-400 font-bold text-sm">$</span>
              </div>
              <span className="font-semibold text-green-400">USDC</span>
            </div>
            <p className="text-xs text-gray-400">
              Stablecoin used in Fog Pools. Fees collected in USDC are distributed to stakers.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4">Token Utility</h2>
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <div className="bg-shade-800 rounded-lg p-6">
          <div className="text-2xl font-bold text-brand-blue mb-2">01</div>
          <h3 className="font-semibold mb-2">Stake for Access</h3>
          <p className="text-sm text-gray-400">
            Stake $SHADE to unlock higher authorization tiers with increased spending 
            limits (up to 10,000 USDC for Gold tier).
          </p>
        </div>
        <div className="bg-shade-800 rounded-lg p-6">
          <div className="text-2xl font-bold text-brand-blue mb-2">02</div>
          <h3 className="font-semibold mb-2">Earn USDC</h3>
          <p className="text-sm text-gray-400">
            Stakers earn <span className="text-green-400">USDC</span> from the 0.1% fee 
            on every spend transaction. Real yield, not token emissions.
          </p>
        </div>
        <div className="bg-shade-800 rounded-lg p-6">
          <div className="text-2xl font-bold text-brand-blue mb-2">03</div>
          <h3 className="font-semibold mb-2">Governance</h3>
          <p className="text-sm text-gray-400">
            Vote on protocol parameters, fee structures, and new feature 
            implementations.
          </p>
        </div>
        <div className="bg-shade-800 rounded-lg p-6">
          <div className="text-2xl font-bold text-brand-blue mb-2">04</div>
          <h3 className="font-semibold mb-2">LP Incentives</h3>
          <p className="text-sm text-gray-400">
            Liquidity providers to Fog Pools earn $SHADE emissions as rewards 
            for their capital contribution.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4">Staking Tiers</h2>
      <p className="text-gray-300 mb-4">
        Your staked $SHADE determines your access tier in the protocol. Higher tiers unlock 
        greater spending caps and fee share multipliers:
      </p>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-left text-sm">
          <thead className="bg-shade-800">
            <tr>
              <th className="px-4 py-3 rounded-tl-lg">Tier</th>
              <th className="px-4 py-3">Min Stake</th>
              <th className="px-4 py-3">Spending Cap</th>
              <th className="px-4 py-3 rounded-tr-lg">Fee Share</th>
            </tr>
          </thead>
          <tbody className="text-gray-300">
            <tr className="border-b border-shade-700">
              <td className="px-4 py-3 font-medium text-gray-500">None</td>
              <td className="px-4 py-3">0 $SHADE</td>
              <td className="px-4 py-3">100 USDC</td>
              <td className="px-4 py-3">0%</td>
            </tr>
            <tr className="border-b border-shade-700">
              <td className="px-4 py-3 font-medium text-orange-400">Bronze</td>
              <td className="px-4 py-3">10,000 $SHADE</td>
              <td className="px-4 py-3">1,000 USDC</td>
              <td className="px-4 py-3">1x</td>
            </tr>
            <tr className="border-b border-shade-700">
              <td className="px-4 py-3 font-medium text-slate-300">Silver</td>
              <td className="px-4 py-3">100,000 $SHADE</td>
              <td className="px-4 py-3">5,000 USDC</td>
              <td className="px-4 py-3">2x</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-yellow-400">Gold</td>
              <td className="px-4 py-3">500,000 $SHADE</td>
              <td className="px-4 py-3">10,000 USDC</td>
              <td className="px-4 py-3">5x</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mb-4">How Staking Works</h2>
      <div className="space-y-4 mb-8">
        <div className="bg-shade-800 rounded-lg p-6">
          <h3 className="font-semibold mb-3">1. Stake $SHADE</h3>
          <p className="text-gray-400 text-sm mb-2">
            Connect your wallet and stake $SHADE tokens to the protocol. Your tokens are 
            locked in a staking contract and contribute to the total staked supply.
          </p>
          <code className="text-xs bg-shade-900 px-2 py-1 rounded text-brand-blue">
            stake(amount) → StakerAccount created/updated
          </code>
        </div>
        <div className="bg-shade-800 rounded-lg p-6">
          <h3 className="font-semibold mb-3">2. Tier Automatically Assigned</h3>
          <p className="text-gray-400 text-sm mb-2">
            Based on your staked amount, you are automatically assigned a tier. This determines 
            your maximum authorization spending cap.
          </p>
          <code className="text-xs bg-shade-900 px-2 py-1 rounded text-brand-blue">
            tier = calculate_tier(staked_amount)
          </code>
        </div>
        <div className="bg-shade-800 rounded-lg p-6">
          <h3 className="font-semibold mb-3">3. Earn Fee Rewards</h3>
          <p className="text-gray-400 text-sm mb-2">
            A 0.1% fee is collected on every spend transaction. These fees accumulate in the 
            protocol and are distributed proportionally to stakers based on their stake.
          </p>
          <code className="text-xs bg-shade-900 px-2 py-1 rounded text-brand-blue">
            your_reward = (your_stake / total_staked) × collected_fees
          </code>
        </div>
        <div className="bg-shade-800 rounded-lg p-6">
          <h3 className="font-semibold mb-3">4. Claim Rewards</h3>
          <p className="text-gray-400 text-sm mb-2">
            Claim your accumulated rewards at any time. Rewards are paid in the same token 
            used for spending (e.g., USDC).
          </p>
          <code className="text-xs bg-shade-900 px-2 py-1 rounded text-brand-blue">
            claim_rewards() → USDC transferred to wallet
          </code>
        </div>
        <div className="bg-shade-800 rounded-lg p-6">
          <h3 className="font-semibold mb-3">5. Unstake Anytime</h3>
          <p className="text-gray-400 text-sm mb-2">
            You can unstake your $SHADE at any time. Your tier will be recalculated and 
            any unclaimed rewards remain available.
          </p>
          <code className="text-xs bg-shade-900 px-2 py-1 rounded text-brand-blue">
            unstake(amount) → $SHADE returned to wallet
          </code>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4">How to Acquire $SHADE</h2>
      <div className="space-y-4 mb-8">
        <div className="bg-shade-800 rounded-lg p-4 flex items-center gap-4">
          <span className="text-2xl">1</span>
          <div>
            <h4 className="font-semibold">Buy on Pump.fun</h4>
            <p className="text-sm text-gray-400">
              Purchase $SHADE directly on the Solana DEX
            </p>
          </div>
        </div>
        <div className="bg-shade-800 rounded-lg p-4 flex items-center gap-4">
          <span className="text-2xl">2</span>
          <div>
            <h4 className="font-semibold">Provide Liquidity</h4>
            <p className="text-sm text-gray-400">
              Earn $SHADE rewards by providing liquidity to Fog Pools
            </p>
          </div>
        </div>
        <div className="bg-shade-800 rounded-lg p-4 flex items-center gap-4">
          <span className="text-2xl">3</span>
          <div>
            <h4 className="font-semibold">Community Rewards</h4>
            <p className="text-sm text-gray-400">
              Participate in community programs and earn tokens
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4">Token Details</h2>
      <div className="bg-shade-800 rounded-lg p-6 mb-8">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-gray-500">Network</p>
            <p className="font-medium">Solana</p>
          </div>
          <div>
            <p className="text-gray-500">Token Standard</p>
            <p className="font-medium">SPL Token</p>
          </div>
          <div>
            <p className="text-gray-500">Decimals</p>
            <p className="font-medium">9</p>
          </div>
          <div>
            <p className="text-gray-500">Launch Platform</p>
            <p className="font-medium">Pump.fun</p>
          </div>
        </div>
      </div>

      <div className="mt-12 p-6 bg-brand-blue/10 border border-brand-blue/30 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Ready to Buy?</h3>
        <p className="text-gray-300 mb-4">
          Get $SHADE on Pump.fun and start staking for higher access tiers.
        </p>
        <a 
          href="https://pump.fun/coin/GnSY5HZ9TeG1FmzJjBi8srwTtsBQG1vRt7PKq3NBpump" 
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-block text-sm"
        >
          Buy on Pump.fun
        </a>
      </div>
    </div>
  )
}

