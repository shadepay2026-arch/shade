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

      <h2 className="text-2xl font-bold mb-4">Token Utility</h2>
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <div className="bg-shade-800 rounded-lg p-6">
          <div className="text-2xl font-bold text-brand-blue mb-2">01</div>
          <h3 className="font-semibold mb-2">Stake for Access</h3>
          <p className="text-sm text-gray-400">
            Stake $SHADE to unlock higher authorization tiers with increased spending 
            limits and longer durations.
          </p>
        </div>
        <div className="bg-shade-800 rounded-lg p-6">
          <div className="text-2xl font-bold text-brand-blue mb-2">02</div>
          <h3 className="font-semibold mb-2">Fee Sharing</h3>
          <p className="text-sm text-gray-400">
            Stakers earn a share of protocol fees generated from authorization 
            requests and Fog Pool activity.
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
        Your staked $SHADE determines your access tier in the protocol:
      </p>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-left text-sm">
          <thead className="bg-shade-800">
            <tr>
              <th className="px-4 py-3 rounded-tl-lg">Tier</th>
              <th className="px-4 py-3">Stake</th>
              <th className="px-4 py-3">Fee Share</th>
              <th className="px-4 py-3 rounded-tr-lg">Governance Weight</th>
            </tr>
          </thead>
          <tbody className="text-gray-300">
            <tr className="border-b border-shade-700">
              <td className="px-4 py-3 font-medium">Basic</td>
              <td className="px-4 py-3">0 $SHADE</td>
              <td className="px-4 py-3">0%</td>
              <td className="px-4 py-3">None</td>
            </tr>
            <tr className="border-b border-shade-700">
              <td className="px-4 py-3 font-medium text-brand-blue">Standard</td>
              <td className="px-4 py-3">1,000 $SHADE</td>
              <td className="px-4 py-3">1x</td>
              <td className="px-4 py-3">1x</td>
            </tr>
            <tr className="border-b border-shade-700">
              <td className="px-4 py-3 font-medium text-brand-purple">Premium</td>
              <td className="px-4 py-3">10,000 $SHADE</td>
              <td className="px-4 py-3">2x</td>
              <td className="px-4 py-3">2x</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-yellow-400">Enterprise</td>
              <td className="px-4 py-3">100,000 $SHADE</td>
              <td className="px-4 py-3">5x</td>
              <td className="px-4 py-3">5x</td>
            </tr>
          </tbody>
        </table>
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
          href="https://pump.fun" 
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

