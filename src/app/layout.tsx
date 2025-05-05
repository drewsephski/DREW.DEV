import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import SpotlightCursor from "@/components/SpotlightCursor";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const robotoMono = Roboto_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DesignSystem.io | Build, Manage, and Implement Design Systems",
  description: "Create consistent design systems at scale with our powerful platform for designers and developers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Add a script to clean up browser extension attributes that might cause hydration issues */}
        <Script id="clean-extensions" strategy="beforeInteractive">
          {`
            (function() {
              // Run before React hydration
              if (typeof window !== 'undefined') {
                // Remove browser extension attributes that cause hydration errors
                document.addEventListener('DOMContentLoaded', function() {
                  const elementsWithExtAttrs = document.querySelectorAll('[data-be-installed], [data-liner-extension-version]');
                  elementsWithExtAttrs.forEach(el => {
                    el.removeAttribute('data-be-installed');
                    el.removeAttribute('data-liner-extension-version');
                    // Remove inline styles added by extensions
                    if (el.hasAttribute('style') && el.getAttribute('style').includes('width:100%')) {
                      el.removeAttribute('style');
                    }
                  });
                });
              }
            })();
          `}
        </Script>
      </head>
      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased`}
      >
        <SpotlightCursor
          config={{
            radius: 300,
            brightness: 0.25,
            color: '#ffffff',
            smoothing: 0.1
          }}
        />
        {children}
      </body>
    </html>
  );
}
