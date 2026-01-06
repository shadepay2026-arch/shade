export default function FAQPage() {
  const faqs = [
    {
      question: "What is SHADE Protocol?",
      answer: "SHADE is an authorization-based payment protocol on Solana. Instead of holding funds in a wallet, users receive cryptographic permission to spend from shared liquidity pools called Fog Pools."
    },
    {
      question: "What version is currently live?",
      answer: "SHADE v0 is live on Solana. v0 includes authorization-based spending, Fog Pools, staking, and fee distribution. ZK privacy features are planned for v1 and are NOT implemented in v0."
    },
    {
      question: "Is SHADE private?",
      answer: "No, v0 has no privacy features. All transactions, authorizations, and protocol state are public on-chain. Privacy (authorization unlinking) is planned for v1 as an opt-in feature."
    },
    {
      question: "What will v1 privacy hide?",
      answer: "v1 will enable authorization unlinking — hiding which authorization a spend drew from. Spend amounts and transaction signers will still be public unless additional infrastructure (relayers) is used."
    },
    {
      question: "How is this different from a regular wallet?",
      answer: "Traditional wallets store your balance on-chain. SHADE stores no user balances — only authorization credentials. When you spend, funds come from Fog Pools managed by pool authorities."
    },
    {
      question: "What are Fog Pools?",
      answer: "Fog Pools are shared liquidity reservoirs managed by a pool authority. In v0, they are custodial — depositors trust the authority. There is no withdrawal mechanism in v0."
    },
    {
      question: "Is SHADE trustless?",
      answer: "No. SHADE v0 is NOT trustless DeFi. Fog Pools are custodial (trust the authority). Staking and rewards ARE self-custodial — you control your own stake and claims."
    },
    {
      question: "Do I need $SHADE tokens to use the protocol?",
      answer: "Staking $SHADE unlocks higher spending tiers (Bronze/Silver/Gold) with increased limits. Stakers also earn USDC from protocol fees proportional to their stake."
    },
    {
      question: "How do staking rewards work?",
      answer: "Protocol fees (in USDC) are collected from spends and distributed to $SHADE stakers proportionally. You can claim your pending rewards at any time."
    },
    {
      question: "What are the staking tiers?",
      answer: "Bronze: 10,000 $SHADE, Silver: 100,000 $SHADE, Gold: 500,000 $SHADE. Higher tiers unlock higher spending caps and better fee share."
    },
    {
      question: "What happens if I lose my wallet keys?",
      answer: "You lose access to active authorizations and staked $SHADE. No funds are lost from Fog Pools because you never held them — they remain in the pool."
    },
    {
      question: "Can I revoke an authorization?",
      answer: "Yes, the pool authority (issuer) can revoke any active authorization at any time. Once revoked, it cannot be used for spending."
    },
    {
      question: "What blockchain is SHADE built on?",
      answer: "SHADE is built on Solana for fast, low-cost transactions. The $SHADE token is an SPL token on the Solana network."
    },
    {
      question: "Where can I buy $SHADE tokens?",
      answer: "$SHADE is available on Pump.fun. You can swap SOL for $SHADE directly on the platform."
    },
    {
      question: "Is SHADE open source?",
      answer: "Yes. Smart contracts and frontend are fully open source on GitHub. You can audit the code at github.com/shadepay2026-arch."
    },
    {
      question: "Who controls protocol upgrades?",
      answer: "Protocol upgrade authority will be transferred to a 2-of-3 multisig before mainnet. This provides security while maintaining upgrade capability for critical fixes."
    },
  ]

  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
      <p className="text-xl text-gray-400 mb-8">
        Common questions about SHADE Protocol, authorizations, and the $SHADE token.
      </p>

      <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mb-8">
        <p className="text-yellow-400 text-sm">
          <strong>Important:</strong> SHADE v0 has no ZK or privacy features. All transactions are public.
          Privacy is planned for v1 (opt-in). Fog Pools are custodial in v0.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-shade-800 rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
            <p className="text-gray-400">{faq.answer}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 bg-shade-800 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Still have questions?</h3>
        <p className="text-gray-400 mb-4">
          Reach out to us on Twitter or check the GitHub repository for more technical details.
        </p>
        <div className="flex gap-3">
          <a 
            href="https://x.com/shadepay" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-shade-700 rounded-lg text-sm hover:bg-shade-600 transition-colors"
          >
            Twitter
          </a>
          <a 
            href="https://github.com/shadepay2026-arch/shade-protocol" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-shade-700 rounded-lg text-sm hover:bg-shade-600 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  )
}
