import { Header } from './components/Header'
import { CartProvider } from './context/cart'
import { ProviderFilter } from './context/filter'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Store',
  description: 'Generated app to sell'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <ProviderFilter>
        <CartProvider>
          <body className={inter.className}>
            <Header />
            {children}
          </body>
        </CartProvider>
      </ProviderFilter>
    </html>
  )
}
