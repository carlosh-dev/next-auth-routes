import { Roboto_Mono } from 'next/font/google'
import './globals.css'

export const metadata = {
  title: 'Next Auth Routes',
  description: 'Only for study.',
}

const roboto_mono = Roboto_Mono({ subsets: ['latin'] })

export default function RootLayout({ children, }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`w-full h-full ${roboto_mono.className}`}>
        {children}
      </body>
    </html>
  )
}
