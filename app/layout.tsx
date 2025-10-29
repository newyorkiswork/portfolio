import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "Robert Petillo - Portfolio",
  description: "New York City-based entrepreneur - Portfolio showcasing my businesses and creative work",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-poppins antialiased bg-white text-gray-900`}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-white border-t border-gray-200 py-8 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
            <p>&copy; {new Date().getFullYear()} Robert Petillo. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}

