import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from "./navbar/page";
import Footer from '@/components/footer';
import { ThemeProvider } from "@/components/theme-provider"
const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: `OSIS SMK Xaverius Palembang`,
  description: 'Selamat datang di website resmi OSIS/OSISKA SMK Xaverius Palembang. Website ini berisi informasi tentang OSISKA SMK Xaverius Palembang masa bakti 2024.',
  icons: {
    icon: [
      'favicon.ico?v=4'
    ],
    apple: [
      '/apple-touch-icon.png?v=4'
    ],
    shortcut: [
      '/apple-touch-icon.png'
    ],
  },
  manifest: './site.webmanifest'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning >
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

