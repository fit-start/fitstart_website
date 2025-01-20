import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FitStart - All Your Gym Requirements at One Place',
  description: 'Transform your fitness journey with FitStart. Access expert trainers, premium facilities, and a supportive community all in one place.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col bg-background">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  )
}
