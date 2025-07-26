import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Navbar1 } from "@/components/ui/navbar-1";
import { Analytics } from "@vercel/analytics/next"

const font = Manrope({weight: ['400', '500', '600', '700'], subsets: ['latin']}) 

export const metadata: Metadata = {
  title: "Scale Site",
  description: "Helping B2B service providers turn their traffic into booked sales calls with websites that speak to their ideal client and drive action.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={font.className}
      >
        <Navbar1/>
        {children}
        <Analytics/>
      </body>
    </html>
  );
}
