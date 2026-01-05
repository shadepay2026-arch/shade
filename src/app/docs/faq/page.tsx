export default function FAQPage() {
  const faqs = [
    {
      question: "What is SHADE Protocol?",
      answer: "SHADE is an authorization-based payment protocol. Instead of holding funds in a wallet, users receive cryptographic permission to spend from shared liquidity pools. This enables private, accountless transactions."
    },
    {
      question: "How is this different from a regular wallet?",
      answer: "Traditional wallets store your balance on-chain, creating a permanent record. SHADE stores no user balances - only authorization proofs. When you spend, funds come from Fog Pools, making attribution impossible."
    },
    {
      question: "What are Fog Pools?",
      answer: "Fog Pools are shared liquidity reservoirs where deposited funds become undifferentiated. When authorized users spend, there is no way to trace which deposit funded which transaction, providing cryptographic privacy."
    },
    {
      question: "Do I need $SHADE tokens to use the protocol?",
      answer: "Basic usage is free, but staking $SHADE unlocks higher access tiers with increased spending limits, longer durations, and additional features. Stakers also earn protocol fees."
    },
    {
      question: "What happens if I lose my wallet keys?",
      answer: "Unlike traditional wallets where losing keys means losing funds, in SHADE you only lose access to active authorizations. No funds are lost because you never held them - they remain in Fog Pools."
    },
    {
      question: "How do authorizations work?",
      answer: "You request an authorization with parameters like spending cap, duration, and purpose. Once approved, you receive a cryptographic credential that proves your permission to spend up to that amount within the constraints."
    },
    {
      question: "Can I revoke an authorization?",
      answer: "Yes, you can revoke any active authorization at any time from the dashboard. Once revoked, it cannot be used for spending."
    },
    {
      question: "What happens when an authorization expires?",
      answer: "Expired authorizations become inactive and cannot be used. Any unused spending capacity simply disappears - there is no refund because you never deposited anything."
    },
    {
      question: "Is SHADE compliant with regulations?",
      answer: "SHADE uses ZK proofs that can satisfy regulatory requirements without exposing user identity. Users can prove compliance (age, jurisdiction, etc.) without revealing personal data."
    },
    {
      question: "How do I become a liquidity provider?",
      answer: "You can deposit funds into Fog Pools and receive LP tokens representing your share. LPs earn $SHADE token rewards and a portion of protocol fees."
    },
    {
      question: "What blockchain is SHADE built on?",
      answer: "SHADE is built on Solana for fast, low-cost transactions. The $SHADE token is an SPL token on the Solana network."
    },
    {
      question: "Where can I buy $SHADE tokens?",
      answer: "$SHADE is available on Pump.fun. You can swap SOL or other Solana tokens for $SHADE directly on the platform."
    },
  ]

  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
      <p className="text-xl text-gray-400 mb-8">
        Common questions about SHADE Protocol, authorizations, and the $SHADE token.
      </p>

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
            href="https://github.com/shadepay2026-arch/shade" 
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

