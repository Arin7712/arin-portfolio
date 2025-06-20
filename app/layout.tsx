import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Navbar1 } from "@/components/ui/navbar-1";

const font = Manrope({weight: ['400', '500', '600', '700'], subsets: ['latin']}) 

export const metadata: Metadata = {
  title: "Scale Site",
  description: "Helping startups and businesses 10x their leads and sales in 7 days with conversion-focused websites.",
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
      </body>
    </html>
  );
}
