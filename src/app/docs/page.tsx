export default function DocsPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">SHADE Protocol Documentation</h1>
      <p className="text-xl text-gray-400 mb-8">
        Learn how authorization-based finance works and how to integrate with SHADE.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <a href="/docs/getting-started" className="card hover:border-brand-blue/50 transition-colors">
          <h3 className="text-lg font-semibold mb-2">Getting Started</h3>
          <p className="text-sm text-gray-400">
            Connect your wallet and request your first authorization in minutes.
          </p>
        </a>
        <a href="/docs/concepts" className="card hover:border-brand-blue/50 transition-colors">
          <h3 className="text-lg font-semibold mb-2">Core Concepts</h3>
          <p className="text-sm text-gray-400">
            Understand Fog Pools, ZK Identity, and authorization-based spending.
          </p>
        </a>
        <a href="/docs/authorization" className="card hover:border-brand-blue/50 transition-colors">
          <h3 className="text-lg font-semibold mb-2">Authorization Guide</h3>
          <p className="text-sm text-gray-400">
            Deep dive into how authorizations work, constraints, and best practices.
          </p>
        </a>
        <a href="/docs/token" className="card hover:border-brand-blue/50 transition-colors">
          <h3 className="text-lg font-semibold mb-2">$SHADE Token</h3>
          <p className="text-sm text-gray-400">
            Token utility, staking mechanics, and governance.
          </p>
        </a>
      </div>

      <h2 className="text-2xl font-bold mb-4">What is SHADE?</h2>
      <p className="text-gray-300 mb-4">
        SHADE is a new primitive for decentralized finance that introduces <strong>authorization-based payments</strong>. 
        Instead of holding money in a wallet, users receive cryptographic permission to spend from shared liquidity pools.
      </p>

      <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mb-8">
        <p className="text-yellow-400 text-sm">
          <strong>v0 Status:</strong> SHADE v0 is live on Solana. ZK privacy features are planned for v1 (opt-in). 
          All protocol totals and transfers are currently public on-chain.
        </p>
      </div>

      <h3 className="text-xl font-semibold mb-3 mt-8">Key Principles</h3>
      <ul className="space-y-3 text-gray-300">
        <li className="flex items-start gap-3">
          <span className="text-brand-blue font-bold">1.</span>
          <div>
            <strong>Authorization-Based</strong> - Spend without owning; prove permission to access shared pools
          </div>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-brand-blue font-bold">2.</span>
          <div>
            <strong>Programmable</strong> - Spending caps, time windows, and purpose restrictions
          </div>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-brand-blue font-bold">3.</span>
          <div>
            <strong>Staking Rewards</strong> - Stake $SHADE to unlock tiers and earn USDC from fees
          </div>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-brand-blue font-bold">4.</span>
          <div>
            <strong>Transparent</strong> - Open source, auditable smart contracts on Solana
          </div>
        </li>
      </ul>
      
      <h3 className="text-xl font-semibold mb-3 mt-8">Trust Model (v0)</h3>
      <ul className="space-y-2 text-gray-400 text-sm">
        <li>• <strong>Fog Pools:</strong> Authority-managed, custodial. Depositors trust pool authority.</li>
        <li>• <strong>Staking:</strong> Self-custodial. Users control their own stake/unstake.</li>
        <li>• <strong>Rewards:</strong> Self-custodial. Users claim their own USDC rewards.</li>
        <li>• <strong>Privacy:</strong> Not implemented in v0. All transactions are public.</li>
      </ul>

      <h3 className="text-xl font-semibold mb-3 mt-8">Quick Links</h3>
      <div className="flex flex-wrap gap-3">
        <a 
          href="https://github.com/shadepay2026-arch/shade" 
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-shade-800 rounded-lg text-sm hover:bg-shade-700 transition-colors"
        >
          GitHub Repository
        </a>
        <a 
          href="https://x.com/shadepay" 
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-shade-800 rounded-lg text-sm hover:bg-shade-700 transition-colors"
        >
          Follow on Twitter
        </a>
        <a 
          href="/app"
          className="px-4 py-2 bg-brand-blue/20 text-brand-blue rounded-lg text-sm hover:bg-brand-blue/30 transition-colors"
        >
          Try the App
        </a>
      </div>
    </div>
  )
}

