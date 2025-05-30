// app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "@/scss/bootstrap.scss"; // your custom bootstrap scss
import "@/scss/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import BootstrapScripts from "@/components/BootstrapScripts";

import "./globals.css";
import { StateContext } from "@/context/StateContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dine Market",
  description: "Your one-stop shop for premium groceries.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <StateContext>
          <div className="layout">
            <header>
              <Navbar />
            </header>
            <main className="main-container">{children}</main>
            <footer>
              <Footer />
            </footer>
            <Toaster richColors position="top-center" />
            <BootstrapScripts />
          </div>
        </StateContext>
      </body>
    </html>
  );
}