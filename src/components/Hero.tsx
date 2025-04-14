"use client";

import { useState, useEffect } from 'react';

const Hero = () => {
  const [symbol, setSymbol] = useState('❌');
  
  useEffect(() => {
    const symbols = ['❌', '❤️', '❌'];
    let currentIndex = 0;
    
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % symbols.length;
      setSymbol(symbols[currentIndex]);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-b from-emerald-50 to-white py-16 md:py-24">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
          TBD <span className="inline-block transform transition-all duration-500 w-12 text-center">{symbol}</span> me
        </h1>
        <p className="text-lg md:text-xl text-gray-700 text-center max-w-2xl mb-8">
          Exporting the finest Indonesian spices to the world. 
          Premium quality, ethically sourced, delivered with care.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="#products" 
            className="px-6 py-3 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors text-center"
          >
            Explore Our Products
          </a>
          <a 
            href="#contact" 
            className="px-6 py-3 bg-white text-emerald-600 border border-emerald-600 rounded-lg font-medium hover:bg-emerald-50 transition-colors text-center"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;