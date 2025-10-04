import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Playfair_Display, Nokora } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const nokora = Nokora({
  weight: ["400", "700"],
  subsets: ["khmer"],
  variable: "--font-nokora",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Wedding Invitation - CHANRATANAK & MEILIN",
  description: "You are cordially invited to celebrate the wedding of CHANRATANAK and MEILIN",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="m-0 p-0 w-full max-w-full overflow-x-hidden">
      <body className={`font-sans m-0 p-0 w-full max-w-full overflow-x-hidden ${GeistSans.variable} ${GeistMono.variable} ${playfair.variable} ${nokora.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
