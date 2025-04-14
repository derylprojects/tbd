"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 md:py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex items-center">
            <span className="text-xl md:text-2xl font-bold text-emerald-800">TBD</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="#about" className="text-gray-700 hover:text-emerald-600 font-medium">About Us</Link>
          <Link href="#products" className="text-gray-700 hover:text-emerald-600 font-medium">Products</Link>
          <Link href="#why-choose-us" className="text-gray-700 hover:text-emerald-600 font-medium">Why Choose Us</Link>
          <Link href="#contact" className="text-gray-700 hover:text-emerald-600 font-medium">Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-6 shadow-inner">
          <nav className="flex flex-col space-y-4">
            <Link href="#about" className="text-gray-700 hover:text-emerald-600 font-medium" onClick={toggleMenu}>About Us</Link>
            <Link href="#products" className="text-gray-700 hover:text-emerald-600 font-medium" onClick={toggleMenu}>Products</Link>
            <Link href="#why-choose-us" className="text-gray-700 hover:text-emerald-600 font-medium" onClick={toggleMenu}>Why Choose Us</Link>
            <Link href="#contact" className="text-gray-700 hover:text-emerald-600 font-medium" onClick={toggleMenu}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;