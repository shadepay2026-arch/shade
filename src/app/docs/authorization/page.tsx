export default function AuthorizationPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Authorization Guide</h1>
      <p className="text-xl text-gray-400 mb-8">
        Everything you need to know about requesting, managing, and using authorizations.
      </p>

      <h2 className="text-2xl font-bold mb-4">What is an Authorization?</h2>
      <p className="text-gray-300 mb-6">
        An authorization is a cryptographic credential that grants you permission to spend 
        up to a specified amount within defined constraints. Think of it as a pre-approved 
        spending limit that draws from shared liquidity rather than your personal balance.
      </p>

      <h2 className="text-2xl font-bold mb-4">Authorization Lifecycle</h2>
      <div className="bg-shade-800 rounded-lg p-6 mb-8">
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <span className="w-8 h-8 rounded-full bg-brand-blue/20 text-brand-blue flex items-center justify-center font-bold text-sm shrink-0">1</span>
            <div>
              <h4 className="font-semibold">Request</h4>
              <p className="text-sm text-gray-400">User submits authorization request with desired parameters</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="w-8 h-8 rounded-full bg-brand-blue/20 text-brand-blue flex items-center justify-center font-bold text-sm shrink-0">2</span>
            <div>
              <h4 className="font-semibold">Stake Verification</h4>
              <p className="text-sm text-gray-400">Protocol checks $SHADE stake for access tier eligibility</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="w-8 h-8 rounded-full bg-brand-blue/20 text-brand-blue flex items-center justify-center font-bold text-sm shrink-0">3</span>
            <div>
              <h4 className="font-semibold">Issuance</h4>
              <p className="text-sm text-gray-400">Authorization credential is generated and delivered to user</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="w-8 h-8 rounded-full bg-brand-blue/20 text-brand-blue flex items-center justify-center font-bold text-sm shrink-0">4</span>
            <div>
              <h4 className="font-semibold">Active</h4>
              <p className="text-sm text-gray-400">User can spend against the authorization until depleted or expired</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="w-8 h-8 rounded-full bg-gray-600 text-gray-400 flex items-center justify-center font-bold text-sm shrink-0">5</span>
            <div>
              <h4 className="font-semibold text-gray-400">Expired/Depleted</h4>
              <p className="text-sm text-gray-500">Authorization becomes inactive and unusable</p>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4">Access Tiers</h2>
      <p className="text-gray-300 mb-4">
        Your $SHADE stake determines your access tier, which affects maximum authorization limits:
      </p>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-left text-sm">
          <thead className="bg-shade-800">
            <tr>
              <th className="px-4 py-3 rounded-tl-lg">Tier</th>
              <th className="px-4 py-3">Stake Required</th>
              <th className="px-4 py-3">Max Single Auth</th>
              <th className="px-4 py-3 rounded-tr-lg">Max Duration</th>
            </tr>
          </thead>
          <tbody className="text-gray-300">
            <tr className="border-b border-shade-700">
              <td className="px-4 py-3 font-medium">Basic</td>
              <td className="px-4 py-3">0 $SHADE</td>
              <td className="px-4 py-3">100 USDC</td>
              <td className="px-4 py-3">24 hours</td>
            </tr>
            <tr className="border-b border-shade-700">
              <td className="px-4 py-3 font-medium text-brand-blue">Standard</td>
              <td className="px-4 py-3">1,000 $SHADE</td>
              <td className="px-4 py-3">1,000 USDC</td>
              <td className="px-4 py-3">7 days</td>
            </tr>
            <tr className="border-b border-shade-700">
              <td className="px-4 py-3 font-medium text-brand-purple">Premium</td>
              <td className="px-4 py-3">10,000 $SHADE</td>
              <td className="px-4 py-3">10,000 USDC</td>
              <td className="px-4 py-3">30 days</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-yellow-400">Enterprise</td>
              <td className="px-4 py-3">100,000 $SHADE</td>
              <td className="px-4 py-3">Unlimited</td>
              <td className="px-4 py-3">90 days</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mb-4">Authorization Parameters</h2>
      <div className="space-y-4 mb-8">
        <div className="bg-shade-800 rounded-lg p-4">
          <h4 className="font-semibold mb-2">Spending Cap</h4>
          <p className="text-sm text-gray-400">
            The maximum amount you can spend with this authorization. Once depleted, the 
            authorization becomes inactive. You can request a new one at any time.
          </p>
        </div>
        <div className="bg-shade-800 rounded-lg p-4">
          <h4 className="font-semibold mb-2">Duration</h4>
          <p className="text-sm text-gray-400">
            How long the authorization remains valid. Options include 1 hour, 24 hours, 
            7 days, and 30 days depending on your tier. Expired authorizations cannot be used.
          </p>
        </div>
        <div className="bg-shade-800 rounded-lg p-4">
          <h4 className="font-semibold mb-2">Purpose</h4>
          <p className="text-sm text-gray-400">
            Optional category that restricts where the authorization can be used. 
            Categories include General Spending, Subscriptions, One-time Purchase, and Transfer.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4">Best Practices</h2>
      <ul className="list-disc list-inside text-gray-300 space-y-2 mb-8">
        <li>Request only what you need - smaller authorizations are processed faster</li>
        <li>Use purpose restrictions for better security and tracking</li>
        <li>Monitor your active authorizations and revoke unused ones</li>
        <li>Stake $SHADE to access higher tiers and better limits</li>
      </ul>

      <div className="mt-12 p-6 bg-brand-blue/10 border border-brand-blue/30 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Learn About Staking</h3>
        <p className="text-gray-300 mb-4">
          Discover how $SHADE tokens power the protocol and unlock higher access tiers.
        </p>
        <a href="/docs/token" className="btn-primary inline-block text-sm">
          $SHADE Token
        </a>
      </div>
    </div>
  )
}

