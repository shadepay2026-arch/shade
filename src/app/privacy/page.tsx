import Link from 'next/link'
import Image from 'next/image'

export default function PrivacyPage() {
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
          <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-gray-500 mb-8">Last updated: January 2026</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p className="text-gray-300">
                SHADE Protocol (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. 
                This Privacy Policy explains how we handle information when you use our protocol and website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
              <p className="text-gray-300 mb-4">
                SHADE Protocol is designed with privacy at its core. We collect minimal information:
              </p>
              <div className="bg-shade-800 rounded-lg p-6">
                <h3 className="font-semibold mb-3">On-Chain Data</h3>
                <p className="text-gray-400 text-sm mb-4">
                  All transactions on the Solana blockchain are public. However, SHADE uses Fog Pools 
                  to make spending non-attributable - there is no on-chain link between deposits and spends.
                </p>
                <h3 className="font-semibold mb-3">Website Analytics</h3>
                <p className="text-gray-400 text-sm">
                  We may collect anonymous usage data such as page views and general geographic region 
                  to improve our services. This data cannot identify individual users.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. What We Don&apos;t Collect</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Personal identification information (name, email, phone)</li>
                <li>Wallet addresses linked to personal identity</li>
                <li>Transaction history or spending patterns</li>
                <li>IP addresses (we do not log these)</li>
                <li>Cookies for tracking purposes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Wallet Connection</h2>
              <p className="text-gray-300">
                When you connect your wallet, we do not store your wallet address on our servers. 
                The connection is handled client-side in your browser. Your wallet address is only 
                used for on-chain transaction signing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Third-Party Services</h2>
              <p className="text-gray-300">
                We may use third-party services for:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
                <li>RPC providers (Solana network access)</li>
                <li>Website hosting (Vercel)</li>
                <li>Content delivery networks</li>
              </ul>
              <p className="text-gray-300 mt-4">
                These services have their own privacy policies and data handling practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Data Security</h2>
              <p className="text-gray-300">
                Since we collect minimal data, there is minimal data to secure. All on-chain 
                interactions are secured by the Solana blockchain&apos;s cryptographic guarantees.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Your Rights</h2>
              <p className="text-gray-300">
                Because we do not collect personal data, there is no personal data to access, 
                modify, or delete. For any privacy-related questions, please contact us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Changes to This Policy</h2>
              <p className="text-gray-300">
                We may update this Privacy Policy from time to time. We will notify users of 
                any material changes by updating the &quot;Last updated&quot; date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Contact</h2>
              <p className="text-gray-300">
                For privacy-related inquiries, reach out via{' '}
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

