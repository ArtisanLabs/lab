import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Artisan Labs',
  description: 'Discover the potential of voice-based large language models at Artisan Labs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
    <head />
    <body>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <ModeToggle />
        {children}
      </ThemeProvider>
    </body>
  </html>
  )
}
