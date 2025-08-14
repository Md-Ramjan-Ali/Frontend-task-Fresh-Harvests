import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/NavBar/ResponsiveNav";
import Footer from "@/components/Footer/Footer";
import { Providers } from "@/store/Providers";
import LayoutWrapper from "@/components/Helper/LayoutWrapper";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fresh Harvests",
  description: "Fresh Harvests brings you the finest, farm- fresh produce straight from trusted growers to your table.Enjoy seasonal fruits and vegetables picked at peak ripeness for unbeatable flavor and nutrition.",
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

        <Providers>
          <ResponsiveNav />
          <LayoutWrapper>
            {children}
          </LayoutWrapper>
        </Providers>
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
