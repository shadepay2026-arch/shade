export default function GettingStartedPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Getting Started</h1>
      <p className="text-xl text-gray-400 mb-8">
        Get up and running with SHADE in just a few steps.
      </p>

      <h2 className="text-2xl font-bold mb-4">Prerequisites</h2>
      <ul className="list-disc list-inside text-gray-300 space-y-2 mb-8">
        <li>A Solana wallet (Phantom recommended)</li>
        <li>SOL for transaction fees</li>
        <li>$SHADE tokens for staking (optional, for higher tiers)</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">Step 1: Connect Your Wallet</h2>
      <div className="bg-shade-800 rounded-lg p-6 mb-6">
        <ol className="list-decimal list-inside text-gray-300 space-y-3">
          <li>Navigate to <a href="/app" className="text-brand-blue hover:underline">shadepay.org/app</a></li>
          <li>Click <strong>Connect Wallet</strong> in the top right</li>
          <li>Select your wallet provider (Phantom, Solflare, etc.)</li>
          <li>Approve the connection request in your wallet</li>
        </ol>
      </div>
      <p className="text-gray-400 text-sm mb-8">
        Dont have a wallet? Click <strong>Demo</strong> to try with a simulated wallet.
      </p>

      <h2 className="text-2xl font-bold mb-4">Step 2: Request an Authorization</h2>
      <div className="bg-shade-800 rounded-lg p-6 mb-6">
        <ol className="list-decimal list-inside text-gray-300 space-y-3">
          <li>Click <strong>Request Authorization</strong> on the dashboard</li>
          <li>Enter your desired spending cap (e.g., 500 USDC)</li>
          <li>Select a duration (1h, 24h, 7d, or 30d)</li>
          <li>Choose a purpose category</li>
          <li>Confirm the request</li>
        </ol>
      </div>

      <h2 className="text-2xl font-bold mb-4">Step 3: Use Your Authorization</h2>
      <p className="text-gray-300 mb-4">
        Once approved, your authorization appears on the dashboard. You can:
      </p>
      <ul className="list-disc list-inside text-gray-300 space-y-2 mb-8">
        <li>View remaining balance and time</li>
        <li>Track usage with the progress bar</li>
        <li>Click <strong>Use Authorization</strong> to spend</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">Understanding the Dashboard</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-shade-800">
            <tr>
              <th className="px-4 py-3 rounded-tl-lg">Element</th>
              <th className="px-4 py-3 rounded-tr-lg">Description</th>
            </tr>
          </thead>
          <tbody className="text-gray-300">
            <tr className="border-b border-shade-700">
              <td className="px-4 py-3 font-medium">Active Authorizations</td>
              <td className="px-4 py-3">Number of valid, usable authorizations</td>
            </tr>
            <tr className="border-b border-shade-700">
              <td className="px-4 py-3 font-medium">Total Cap</td>
              <td className="px-4 py-3">Combined spending limit across all authorizations</td>
            </tr>
            <tr className="border-b border-shade-700">
              <td className="px-4 py-3 font-medium">Used</td>
              <td className="px-4 py-3">Total amount spent so far</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">Available</td>
              <td className="px-4 py-3">Remaining spending power (Total Cap - Used)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-12 p-6 bg-brand-blue/10 border border-brand-blue/30 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Next Steps</h3>
        <p className="text-gray-300 mb-4">
          Now that you understand the basics, learn more about the underlying technology:
        </p>
        <a href="/docs/concepts" className="btn-primary inline-block text-sm">
          Explore Core Concepts
        </a>
      </div>
    </div>
  )
}

