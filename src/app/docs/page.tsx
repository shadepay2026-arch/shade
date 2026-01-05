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

      <h3 className="text-xl font-semibold mb-3 mt-8">Key Principles</h3>
      <ul className="space-y-3 text-gray-300">
        <li className="flex items-start gap-3">
          <span className="text-brand-blue font-bold">1.</span>
          <div>
            <strong>Accountless</strong> - No persistent balances or wallet state on-chain
          </div>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-brand-blue font-bold">2.</span>
          <div>
            <strong>Privacy-First</strong> - ZK proofs verify eligibility without exposing identity
          </div>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-brand-blue font-bold">3.</span>
          <div>
            <strong>Programmable</strong> - Spending caps, time windows, and purpose restrictions
          </div>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-brand-blue font-bold">4.</span>
          <div>
            <strong>Non-Custodial</strong> - Users control their authorizations, not the protocol
          </div>
        </li>
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

