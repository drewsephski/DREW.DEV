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
                // Function to clean attributes - will run immediately and after DOM is loaded
                function cleanAttributes() {
                  // Target all elements in the document
                  document.querySelectorAll('*').forEach(el => {
                    // Remove specific extension attributes
                    if (el.hasAttribute('data-be-installed')) el.removeAttribute('data-be-installed');
                    if (el.hasAttribute('data-liner-extension-version')) el.removeAttribute('data-liner-extension-version');

                    // Clean up any inline styles that might cause hydration issues
                    if (el.hasAttribute('style')) {
                      const style = el.getAttribute('style');
                      if (style.includes('width:100%') || style.includes('width: 100%')) {
                        el.removeAttribute('style');
                      }
                    }
                  });
                }

                // Run immediately
                cleanAttributes();

                // Also run when DOM is fully loaded
                document.addEventListener('DOMContentLoaded', cleanAttributes);

                // Run again after a short delay to catch any late modifications
                setTimeout(cleanAttributes, 100);
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
