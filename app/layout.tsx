import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Navbar1 } from "@/components/ui/navbar-1";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script"; // ✅ Import Script

const font = Manrope({ weight: ['400', '500', '600', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Scale Site",
  description:
    "Helping B2B service providers turn their traffic into booked sales calls with websites that speak to their ideal client and drive action.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ✅ Microsoft Clarity Script */}
        <Script id="clarity-script" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "tcmw4meinq");
          `}
        </Script>
      </head>
      <body className={font.className}>
        <Navbar1 />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
