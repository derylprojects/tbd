export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-white mb-4">PT. Tahta Berkat Dunia</h3>
            <p className="mb-4">Premium Indonesian Chili Exports at Competitive Prices</p>
            <p className="mb-2">Jl. Lalu Mesir GG. Damai 2 No. 1</p>
            <p className="mb-2">Email: info@tahtaberkatdunia.com</p>
            <p>Phone: +62 812 3456 7890</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-red-500 transition duration-300">Home</a></li>
              <li><a href="#about" className="hover:text-red-500 transition duration-300">About Us</a></li>
              <li><a href="#products" className="hover:text-red-500 transition duration-300">Products</a></li>
              <li><a href="#gallery" className="hover:text-red-500 transition duration-300">Gallery</a></li>
              <li><a href="#contact" className="hover:text-red-500 transition duration-300">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Our Products</h3>
            <ul className="space-y-2">
              <li><a href="#products" className="hover:text-red-500 transition duration-300">Red Cayenne Chili</a></li>
              <li><a href="#products" className="hover:text-red-500 transition duration-300">Bird&apos;s Eye Chili</a></li>
              <li><a href="#products" className="hover:text-red-500 transition duration-300">Jalapeño Chili</a></li>
              <li><a href="#products" className="hover:text-red-500 transition duration-300">Dried Chili Flakes</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} PT. Tahta Berkat Dunia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
