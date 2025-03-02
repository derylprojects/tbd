import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: "url('/images/hero-chili.jpg')", 
        }}
      ></div>
      
      <div className="container mx-auto px-6 relative z-20 text-white text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
          PT. Tahta Berkat Dunia
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Premium Indonesian Chili Exports at Competitive Prices
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            href="#contact" 
            className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md transition duration-300"
          >
            Request a Quote
          </Link>
          <Link 
            href="#products" 
            className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-red-600 text-white font-medium rounded-md transition duration-300"
          >
            Explore Products
          </Link>
        </div>
      </div>
    </section>
  );
}