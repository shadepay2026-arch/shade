import { WalletProvider } from '@/components/WalletProvider'

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <WalletProvider>
      {children}
    </WalletProvider>
  )
}

