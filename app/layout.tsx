import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Navbar1 } from "@/components/ui/navbar-1";
import { Analytics } from "@vercel/analytics/next"

const font = Manrope({weight: ['400', '500', '600', '700'], subsets: ['latin']}) 

export const metadata: Metadata = {
  title: "Scale Site",
  description: "Helping founders get consistent leads every month with conversion focused websites, without ads spend.",
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
