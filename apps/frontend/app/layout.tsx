import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/footer";
import { NavBar } from "@/components/navbar";
import { SidebarProvider } from "@/components/ui/sidebar"
import { Toaster } from "@/components/ui/sonner";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const geometrica = localFont({
  src: "../Fonts/Morro/Webfont/Morro-Regular.woff2",
  variable: "--font-geometrica"
})

export const metadata: Metadata = {
  title: "Aniket Bhattacharyea",
  description: "Worry free developer marketing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${geometrica.variable}  antialiased overflow-x-hidden`}
      >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <SidebarProvider>
              <div>
                <NavBar />
                {children}
                <Toaster />
                <Footer />
              </div>
            </SidebarProvider>

         

          </ThemeProvider>
        
      </body>
      <Script src="https://umami.abhattacharyea.dev/script.js" data-website-id="66866d14-8fbd-4230-b1d4-361a05faaf7d" />
    </html>
  );
}
