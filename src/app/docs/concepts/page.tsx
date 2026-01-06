export default function ConceptsPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Core Concepts</h1>
      <p className="text-xl text-gray-400 mb-8">
        Understanding the fundamental principles behind SHADE Protocol.
      </p>

      <h2 className="text-2xl font-bold mb-4" id="authorization-based-finance">
        Authorization-Based Finance
      </h2>
      <p className="text-gray-300 mb-4">
        Traditional finance operates on <strong>ownership</strong>: you have money in your account, 
        and you spend from that balance. SHADE flips this model entirely.
      </p>
      <p className="text-gray-300 mb-6">
        In SHADE, you never hold funds. Instead, you receive <strong>authorization</strong> — 
        cryptographic permission to spend up to a certain amount within defined constraints. 
        When you spend, funds are drawn from shared liquidity pools at the moment of transaction.
      </p>

      <div className="bg-shade-800 rounded-lg p-6 mb-8">
        <h4 className="font-semibold mb-3">Comparison</h4>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-gray-500 mb-2">Traditional</p>
            <ul className="text-gray-300 space-y-1">
              <li>You own 500 USDC</li>
              <li>Balance stored on-chain</li>
              <li>Transaction history visible</li>
              <li>Lose keys = lose funds</li>
            </ul>
          </div>
          <div>
            <p className="text-brand-blue mb-2">SHADE (v0)</p>
            <ul className="text-gray-300 space-y-1">
              <li>You can spend up to 500 USDC</li>
              <li>No balance, just permission</li>
              <li>Transactions still public (v0)</li>
              <li>Lose keys = lose permission only</li>
            </ul>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4" id="fog-pools">Fog Pools</h2>
      <p className="text-gray-300 mb-4">
        Fog Pools are shared liquidity reservoirs managed by a pool authority.
        When the authority issues an authorization, the authorized user can spend from the pool.
      </p>
      <p className="text-gray-300 mb-6">
        <strong>Trust Model (v0):</strong> Fog Pools are custodial. Depositors trust the pool 
        authority to manage funds responsibly. There is no withdrawal mechanism in v0 — 
        deposits are contributions to the pool, not retrievable balances.
      </p>

      <div className="bg-shade-800 rounded-lg p-6 mb-8">
        <h4 className="font-semibold mb-3">How Fog Pools Work</h4>
        <div className="text-sm text-gray-300 font-mono">
          <p className="mb-2">LP Deposits → [Fog Pool] → Authorized Spends</p>
          <p className="text-gray-500">              ↑ No attribution possible ↑</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4" id="zk-identity">ZK Identity (v1 Planned)</h2>
      
      <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mb-6">
        <p className="text-yellow-400 text-sm">
          <strong>Note:</strong> ZK Identity is planned for v1. It is NOT implemented in v0.
          All v0 transactions are public on-chain.
        </p>
      </div>
      
      <p className="text-gray-300 mb-4">
        In v1, Zero-Knowledge proofs will allow users to prove authorization validity without 
        revealing which specific authorization they hold. This is called <strong>authorization unlinking</strong>.
      </p>
      
      <h4 className="font-semibold mb-3 text-lg">What v1 Privacy Will Hide (Opt-In)</h4>
      <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
        <li><strong>Spender ↔ Authorization link</strong> - Which authorization is being used</li>
        <li><strong>Spending cap</strong> - The maximum amount authorized</li>
        <li><strong>Amount remaining</strong> - How much is left to spend</li>
      </ul>

      <h4 className="font-semibold mb-3 text-lg">What Will Remain Public</h4>
      <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
        <li>Spend amounts (visible in token transfers)</li>
        <li>Transaction signers (unless relayer used)</li>
        <li>Protocol totals (fees collected, total staked)</li>
        <li>Fog Pool balances</li>
      </ul>

      <div className="bg-shade-800 rounded-lg p-6 mb-8">
        <h4 className="font-semibold mb-3">v1 Privacy Goal</h4>
        <p className="text-gray-300 text-sm">
          An observer cannot determine WHICH authorization a spend drew from.
          This is authorization unlinking, not full anonymity.
        </p>
      </div>

      <h2 className="text-2xl font-bold mb-4" id="programmable-constraints">
        Programmable Constraints
      </h2>
      <p className="text-gray-300 mb-4">
        Every authorization comes with constraints that define how it can be used:
      </p>

      <div className="overflow-x-auto mb-8">
        <table className="w-full text-left text-sm">
          <thead className="bg-shade-800">
            <tr>
              <th className="px-4 py-3 rounded-tl-lg">Constraint</th>
              <th className="px-4 py-3">Description</th>
              <th className="px-4 py-3 rounded-tr-lg">Example</th>
            </tr>
          </thead>
          <tbody className="text-gray-300">
            <tr className="border-b border-shade-700">
              <td className="px-4 py-3 font-medium">Spending Cap</td>
              <td className="px-4 py-3">Maximum amount that can be spent</td>
              <td className="px-4 py-3">500 USDC</td>
            </tr>
            <tr className="border-b border-shade-700">
              <td className="px-4 py-3 font-medium">Time Window</td>
              <td className="px-4 py-3">Duration the authorization is valid</td>
              <td className="px-4 py-3">24 hours</td>
            </tr>
            <tr className="border-b border-shade-700">
              <td className="px-4 py-3 font-medium">Purpose</td>
              <td className="px-4 py-3">Category restricting spend usage</td>
              <td className="px-4 py-3">Subscriptions only</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">Revocability</td>
              <td className="px-4 py-3">Can be cancelled before expiry</td>
              <td className="px-4 py-3">Instant revoke</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mb-4" id="stateless-design">Stateless Design</h2>
      <p className="text-gray-300 mb-6">
        SHADE contracts store minimal state. User data, balances, and transaction history 
        are not persisted on-chain. The protocol only verifies:
      </p>
      <ul className="list-disc list-inside text-gray-300 space-y-2 mb-8">
        <li>Proof validity (is this authorization legitimate?)</li>
        <li>Pool solvency (can this spend be fulfilled?)</li>
        <li>Constraint satisfaction (is this spend within limits?)</li>
      </ul>

      <div className="mt-12 p-6 bg-brand-blue/10 border border-brand-blue/30 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Continue Learning</h3>
        <p className="text-gray-300 mb-4">
          Ready to dive deeper into how authorizations work?
        </p>
        <a href="/docs/authorization" className="btn-primary inline-block text-sm">
          Authorization Guide
        </a>
      </div>
    </div>
  )
}

