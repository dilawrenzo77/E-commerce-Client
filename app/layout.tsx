import type { Metadata } from "next";
import { Poppins, Orbitron } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import { ClerkProvider } from '@clerk/nextjs';
import Script from 'next/script';
import { Suspense } from 'react';

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "OCTO Fashion",
  description: "Elevate your style with OCTO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script 
          src="https://js.paystack.co/v1/inline.js"
          strategy="beforeInteractive"
        />
      </head>
      <body className={`${poppins.variable} ${orbitron.variable} antialiased`}>
        <ClerkProvider>
          {/* ✅ Wrap the entire content that might use useSearchParams */}
          <Suspense fallback={<div className="flex justify-center items-center min-h-screen">Loading...</div>}>
            <div className="mx-auto p-4 sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-7xl">
              <Navbar />
              {children}
              <Footer />
            </div>
            <ToastContainer position="bottom-right" />
          </Suspense>
        </ClerkProvider>
      </body>
    </html>
  );
}