import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../../app/globals.css";
import { SanityLive } from "@/sanity/lib/live";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import SidebarToggleButton from "@/components/sidebar/SideBarToggleButton";
import { AppSidebar } from "@/components/app-sidebar";
import Script from "next/dist/client/script";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { ModeToggle } from "@/components/ui/ModeToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shashira Weerarathne",
  description: "Portfolio website of Shashira Weerarathne",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <Script
            src="https://cdn.platform.openai.com/deployments/chatkit/chatkit.js"
            strategy="afterInteractive"
          ></Script>
            <SidebarProvider defaultOpen={false}>
                <SidebarInset>{children}</SidebarInset>
                <AppSidebar side="right" />
                <SidebarToggleButton />
                <div className="fixed md:bottom-6 md:right-24 top-4 right-18 md:top-auto md:left-auto z-20">
                  <div className="w-10 h-10 md:w-12 md:h-12">
                    <ModeToggle />
                  </div>
                </div>
            </SidebarProvider>
          <SanityLive />
          </ThemeProvider>
      </body>
    </html>
  );
}


