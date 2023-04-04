import { Inter } from 'next/font/google'
import './globals.css'

export const metadata = {
  title: 'Next Auth Routes',
  description: 'Only for study.',
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children, }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`w-full h-full ${inter.className}`}>
        {children}
      </body>
    </html>
  )
}
