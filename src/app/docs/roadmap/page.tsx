export default function RoadmapPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Roadmap</h1>
      <p className="text-xl text-gray-400 mb-8">
        Clear separation between what is live today and what is planned.
      </p>

      {/* v0 Section */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm font-medium rounded-full">
            v0 — LIVE
          </span>
          <span className="text-gray-500 text-sm">Current Release</span>
        </div>

        <h2 className="text-2xl font-bold mb-4">Authorization-Based Finance</h2>
        <p className="text-gray-300 mb-6">
          v0 is live on Solana. All core features are deployed and tested.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="bg-shade-800 rounded-lg p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-green-400">✓</span>
              <h4 className="font-semibold">Fog Pools</h4>
            </div>
            <p className="text-gray-400 text-sm">
              Shared liquidity reservoirs managed by pool authorities. 
              Authority-issued authorizations enable spending.
            </p>
          </div>

          <div className="bg-shade-800 rounded-lg p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-green-400">✓</span>
              <h4 className="font-semibold">Authorizations</h4>
            </div>
            <p className="text-gray-400 text-sm">
              Cryptographic spending permissions with caps, expiry, 
              and purpose constraints. Revocable by issuer.
            </p>
          </div>

          <div className="bg-shade-800 rounded-lg p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-green-400">✓</span>
              <h4 className="font-semibold">Staking & Tiers</h4>
            </div>
            <p className="text-gray-400 text-sm">
              Stake $SHADE to unlock Bronze (10K), Silver (100K), 
              or Gold (500K) tiers with higher spending limits.
            </p>
          </div>

          <div className="bg-shade-800 rounded-lg p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-green-400">✓</span>
              <h4 className="font-semibold">Fee Distribution</h4>
            </div>
            <p className="text-gray-400 text-sm">
              Protocol fees (USDC) distributed to stakers proportionally.
              Snapshot-based to prevent gaming.
            </p>
          </div>

          <div className="bg-shade-800 rounded-lg p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-green-400">✓</span>
              <h4 className="font-semibold">Open Source</h4>
            </div>
            <p className="text-gray-400 text-sm">
              Fully auditable smart contracts and frontend.
              Comprehensive test suites for security edge cases.
            </p>
          </div>

          <div className="bg-shade-800 rounded-lg p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-green-400">✓</span>
              <h4 className="font-semibold">2-of-3 Multisig</h4>
            </div>
            <p className="text-gray-400 text-sm">
              Upgrade authority transferred to multisig for mainnet.
              Public announcements before any upgrades.
            </p>
          </div>
        </div>

        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
          <h4 className="font-semibold text-red-400 mb-2">What v0 Does NOT Have</h4>
          <ul className="text-gray-400 text-sm space-y-1">
            <li>• No ZK proofs or privacy features</li>
            <li>• No anonymous transactions</li>
            <li>• No depositor withdrawals from Fog Pools</li>
            <li>• No protocol pause mechanism</li>
            <li>• Fog Pools are custodial (trust the authority)</li>
          </ul>
        </div>
      </div>

      {/* v1 Section */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm font-medium rounded-full">
            v1 — PLANNED
          </span>
          <span className="text-gray-500 text-sm">Future Release</span>
        </div>

        <h2 className="text-2xl font-bold mb-4">Privacy Layer (Opt-In)</h2>
        <p className="text-gray-300 mb-6">
          v1 introduces optional ZK-based privacy. Not yet implemented.
          All v0 features remain unchanged.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="bg-shade-800 border border-dashed border-shade-600 rounded-lg p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-blue-400">○</span>
              <h4 className="font-semibold">Authorization Unlinking</h4>
            </div>
            <p className="text-gray-400 text-sm">
              ZK proofs to hide which authorization a spend uses.
              Observers cannot link spender to specific authorization.
            </p>
          </div>

          <div className="bg-shade-800 border border-dashed border-shade-600 rounded-lg p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-blue-400">○</span>
              <h4 className="font-semibold">Hidden Spending Caps</h4>
            </div>
            <p className="text-gray-400 text-sm">
              Commitment-based authorizations where cap and remaining
              amount are hidden behind Pedersen commitments.
            </p>
          </div>

          <div className="bg-shade-800 border border-dashed border-shade-600 rounded-lg p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-blue-400">○</span>
              <h4 className="font-semibold">Nullifier Registry</h4>
            </div>
            <p className="text-gray-400 text-sm">
              Merkle tree-based nullifier storage to prevent
              double-spending without revealing authorization identity.
            </p>
          </div>

          <div className="bg-shade-800 border border-dashed border-shade-600 rounded-lg p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-blue-400">○</span>
              <h4 className="font-semibold">Stealth Addresses</h4>
            </div>
            <p className="text-gray-400 text-sm">
              Unlinkable recipient addresses for payments.
              Each payment goes to a fresh address.
            </p>
          </div>
        </div>

        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
          <h4 className="font-semibold text-yellow-400 mb-2">What v1 Privacy Will NOT Hide</h4>
          <ul className="text-gray-400 text-sm space-y-1">
            <li>• Spend amounts (visible in token transfers)</li>
            <li>• Transaction signers (unless relayer used)</li>
            <li>• Protocol totals (fees, total staked)</li>
            <li>• Fog Pool balances</li>
          </ul>
        </div>
      </div>

      {/* Future Section */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="px-3 py-1 bg-gray-500/20 text-gray-400 text-sm font-medium rounded-full">
            FUTURE — EXPLORING
          </span>
          <span className="text-gray-500 text-sm">Not Committed</span>
        </div>

        <h2 className="text-2xl font-bold mb-4">Under Consideration</h2>
        <p className="text-gray-400 mb-6">
          These features are being explored but are not committed to any timeline.
        </p>

        <ul className="text-gray-400 space-y-2">
          <li className="flex items-center gap-2">
            <span className="text-gray-600">?</span>
            Protocol pause mechanism
          </li>
          <li className="flex items-center gap-2">
            <span className="text-gray-600">?</span>
            Depositor withdrawal rights
          </li>
          <li className="flex items-center gap-2">
            <span className="text-gray-600">?</span>
            DAO governance
          </li>
          <li className="flex items-center gap-2">
            <span className="text-gray-600">?</span>
            Permissionless Fog Pools
          </li>
          <li className="flex items-center gap-2">
            <span className="text-gray-600">?</span>
            Relayer infrastructure for full anonymity
          </li>
          <li className="flex items-center gap-2">
            <span className="text-gray-600">?</span>
            Token-2022 confidential transfers
          </li>
        </ul>
      </div>

      {/* Summary */}
      <div className="bg-shade-800 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Summary</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-shade-700">
              <tr>
                <th className="px-4 py-3 rounded-tl-lg">Feature</th>
                <th className="px-4 py-3">v0</th>
                <th className="px-4 py-3 rounded-tr-lg">v1</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              <tr className="border-b border-shade-700">
                <td className="px-4 py-3">Authorization Spending</td>
                <td className="px-4 py-3 text-green-400">✓ Live</td>
                <td className="px-4 py-3 text-green-400">✓</td>
              </tr>
              <tr className="border-b border-shade-700">
                <td className="px-4 py-3">Fog Pools</td>
                <td className="px-4 py-3 text-green-400">✓ Live</td>
                <td className="px-4 py-3 text-green-400">✓</td>
              </tr>
              <tr className="border-b border-shade-700">
                <td className="px-4 py-3">Staking & Rewards</td>
                <td className="px-4 py-3 text-green-400">✓ Live</td>
                <td className="px-4 py-3 text-green-400">✓</td>
              </tr>
              <tr className="border-b border-shade-700">
                <td className="px-4 py-3">ZK Privacy</td>
                <td className="px-4 py-3 text-red-400">✗</td>
                <td className="px-4 py-3 text-blue-400">○ Planned</td>
              </tr>
              <tr className="border-b border-shade-700">
                <td className="px-4 py-3">Authorization Unlinking</td>
                <td className="px-4 py-3 text-red-400">✗</td>
                <td className="px-4 py-3 text-blue-400">○ Planned</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Fog Pool Withdrawals</td>
                <td className="px-4 py-3 text-red-400">✗</td>
                <td className="px-4 py-3 text-gray-500">? TBD</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

