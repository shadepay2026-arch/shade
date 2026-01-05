import Link from 'next/link'
import Image from 'next/image'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-shade-950">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-shade-800 bg-shade-950/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image 
              src="/logo.png" 
              alt="SHADE" 
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="text-xl font-bold">SHADE</span>
          </Link>
          <Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="pt-24 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
          <p className="text-gray-500 mb-8">Last updated: January 2026</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-300">
                By accessing or using the SHADE Protocol (the &quot;Protocol&quot;), you agree to be bound by these 
                Terms of Service. If you do not agree to these terms, do not use the Protocol.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
              <p className="text-gray-300">
                SHADE Protocol provides authorization-based payment infrastructure on the Solana blockchain. 
                Users can create, manage, and spend using cryptographic authorizations from shared liquidity pools.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Eligibility</h2>
              <p className="text-gray-300">
                You must be at least 18 years old to use the Protocol. By using the Protocol, you represent 
                and warrant that you meet this requirement and have the legal capacity to enter into these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Risks</h2>
              <p className="text-gray-300 mb-4">
                Using blockchain-based protocols involves significant risks, including but not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Loss of funds due to smart contract vulnerabilities</li>
                <li>Price volatility of digital assets</li>
                <li>Regulatory uncertainty</li>
                <li>Technical failures or network congestion</li>
                <li>Loss of private keys or wallet access</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. No Financial Advice</h2>
              <p className="text-gray-300">
                Nothing in this Protocol constitutes financial, investment, legal, or tax advice. 
                You should consult with appropriate professionals before making any financial decisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. User Responsibilities</h2>
              <p className="text-gray-300">
                You are solely responsible for:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
                <li>Securing your wallet and private keys</li>
                <li>Understanding the transactions you execute</li>
                <li>Complying with applicable laws in your jurisdiction</li>
                <li>Any taxes arising from your use of the Protocol</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-300">
                THE PROTOCOL IS PROVIDED &quot;AS IS&quot; WITHOUT WARRANTIES OF ANY KIND. TO THE MAXIMUM EXTENT 
                PERMITTED BY LAW, WE DISCLAIM ALL LIABILITY FOR ANY DAMAGES ARISING FROM YOUR USE OF THE PROTOCOL.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Modifications</h2>
              <p className="text-gray-300">
                We reserve the right to modify these Terms at any time. Continued use of the Protocol 
                after changes constitutes acceptance of the modified Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Contact</h2>
              <p className="text-gray-300">
                For questions about these Terms, please reach out via{' '}
                <a 
                  href="https://x.com/shadepay" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-brand-blue hover:underline"
                >
                  Twitter/X
                </a>.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}

