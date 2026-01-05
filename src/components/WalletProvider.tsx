'use client'

import { createContext, useContext, useState, ReactNode, useEffect } from 'react'

interface WalletContextType {
  connected: boolean
  publicKey: string | null
  connecting: boolean
  connect: () => Promise<void>
  disconnect: () => void
  connectDemo: () => void
  isDemo: boolean
}

const WalletContext = createContext<WalletContextType>({
  connected: false,
  publicKey: null,
  connecting: false,
  connect: async () => {},
  disconnect: () => {},
  connectDemo: () => {},
  isDemo: false,
})

export const useWallet = () => useContext(WalletContext)

export function WalletProvider({ children }: { children: ReactNode }) {
  const [connected, setConnected] = useState(false)
  const [publicKey, setPublicKey] = useState<string | null>(null)
  const [connecting, setConnecting] = useState(false)
  const [isDemo, setIsDemo] = useState(false)

  // Check if Phantom is available
  const getPhantom = () => {
    if (typeof window !== 'undefined') {
      return (window as any)?.solana
    }
    return null
  }

  // Connect to real Phantom wallet
  const connect = async () => {
    setConnecting(true)
    
    const phantom = getPhantom()
    
    if (phantom?.isPhantom) {
      try {
        const response = await phantom.connect()
        setPublicKey(response.publicKey.toString())
        setConnected(true)
        setIsDemo(false)
      } catch (err: any) {
        console.error('Failed to connect:', err)
        // User rejected or error occurred
        if (err.code === 4001) {
          alert('Connection rejected. Please approve the connection in Phantom.')
        }
      }
    } else {
      // Phantom not installed - offer demo mode or download
      const useDemo = confirm(
        'Phantom wallet not detected!\n\n' +
        'Click OK to try Demo Mode (fake wallet)\n' +
        'Click Cancel to download Phantom'
      )
      
      if (useDemo) {
        connectDemo()
      } else {
        window.open('https://phantom.app/', '_blank')
      }
    }
    
    setConnecting(false)
  }

  // Demo mode - fake wallet for testing
  const connectDemo = () => {
    const demoAddress = 'Demo' + Math.random().toString(36).substring(2, 8).toUpperCase() + '...Demo'
    setPublicKey('DemoWa11etXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
    setConnected(true)
    setIsDemo(true)
  }

  // Disconnect
  const disconnect = () => {
    const phantom = getPhantom()
    if (phantom && !isDemo) {
      try {
        phantom.disconnect()
      } catch (e) {
        // Ignore disconnect errors
      }
    }
    setConnected(false)
    setPublicKey(null)
    setIsDemo(false)
  }

  // Listen for Phantom account changes
  useEffect(() => {
    const phantom = getPhantom()
    
    if (phantom?.isPhantom) {
      phantom.on('accountChanged', (newPublicKey: any) => {
        if (newPublicKey) {
          setPublicKey(newPublicKey.toString())
        } else {
          // Disconnected from Phantom
          disconnect()
        }
      })
    }

    return () => {
      const phantom = getPhantom()
      if (phantom?.isPhantom) {
        phantom.removeAllListeners?.('accountChanged')
      }
    }
  }, [])

  return (
    <WalletContext.Provider value={{ 
      connected, 
      publicKey, 
      connecting,
      connect, 
      disconnect,
      connectDemo,
      isDemo
    }}>
      {children}
    </WalletContext.Provider>
  )
}
