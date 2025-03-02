import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'PT. Tahta Berkat Dunia - Premium Indonesian Chili Exports',
  description: 'Leading exporter of high-quality Indonesian chilies at competitive prices.',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <header className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
            <div className="container mx-auto px-6">
              <div className="flex items-center justify-between h-20">
                <a href="#" className="text-2xl font-bold text-red-600">TBD</a>
                <nav className="hidden md:flex space-x-8">
                  <a href="#" className="text-gray-800 hover:text-red-600 transition duration-300">Home</a>
                  <a href="#about" className="text-gray-800 hover:text-red-600 transition duration-300">About</a>
                  <a href="#products" className="text-gray-800 hover:text-red-600 transition duration-300">Products</a>
                  <a href="#contact" className="text-gray-800 hover:text-red-600 transition duration-300">Contact</a>
                </nav>
                <div className="md:hidden">
                  {/* Mobile menu button would go here */}
                  <button className="text-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </header>
          <main className="flex-grow">{children}</main>
        </div>
      </body>
    </html>
  );
}
