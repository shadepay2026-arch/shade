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
            <p className="text-brand-blue mb-2">SHADE</p>
            <ul className="text-gray-300 space-y-1">
              <li>You can spend up to 500 USDC</li>
              <li>No balance, just permission</li>
              <li>Spending is private</li>
              <li>Lose keys = lose permission only</li>
            </ul>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4" id="fog-pools">Fog Pools</h2>
      <p className="text-gray-300 mb-4">
        Fog Pools are shared liquidity reservoirs where ownership attribution is 
        <strong> intentionally impossible</strong>. When liquidity providers deposit funds, 
        they receive LP tokens but the deposited assets become part of an undifferentiated pool.
      </p>
      <p className="text-gray-300 mb-6">
        When an authorized user spends, funds are drawn from the Fog Pool. Because there is no 
        way to trace which deposit funded which spend, privacy is cryptographically guaranteed.
      </p>

      <div className="bg-shade-800 rounded-lg p-6 mb-8">
        <h4 className="font-semibold mb-3">How Fog Pools Work</h4>
        <div className="text-sm text-gray-300 font-mono">
          <p className="mb-2">LP Deposits → [Fog Pool] → Authorized Spends</p>
          <p className="text-gray-500">              ↑ No attribution possible ↑</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4" id="zk-identity">ZK Identity</h2>
      <p className="text-gray-300 mb-4">
        Zero-Knowledge proofs allow users to prove statements about themselves without 
        revealing the underlying data. In SHADE, ZK-ID enables:
      </p>
      <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
        <li><strong>Eligibility proofs</strong> - Prove you qualify for an authorization tier</li>
        <li><strong>Compliance proofs</strong> - Satisfy regulatory requirements privately</li>
        <li><strong>Spend proofs</strong> - Verify authorization validity without exposing identity</li>
      </ul>

      <div className="bg-shade-800 rounded-lg p-6 mb-8">
        <h4 className="font-semibold mb-3">Example</h4>
        <p className="text-gray-300 text-sm">
          A user can prove I am over 18 and I have staked enough $SHADE for Tier 2 access 
          without revealing their actual age, stake amount, or wallet address.
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

