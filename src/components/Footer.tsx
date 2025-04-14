const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-emerald-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">PT Tahta Berkat Dunia</h3>
            <p className="mb-4">
              Your trusted partner for premium Indonesian spice exports.
            </p>
            <p className="text-emerald-200">
              TBD (X ➡️ ❤️ ➡️ X) me
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-emerald-200 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#products" className="text-emerald-200 hover:text-white transition-colors">Products</a></li>
              <li><a href="#why-choose-us" className="text-emerald-200 hover:text-white transition-colors">Why Choose Us</a></li>
              <li><a href="#contact" className="text-emerald-200 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="bg-emerald-700 hover:bg-emerald-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                FB
              </a>
              <a href="#" className="bg-emerald-700 hover:bg-emerald-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                IG
              </a>
              <a href="#" className="bg-emerald-700 hover:bg-emerald-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                LI
              </a>
              <a href="#" className="bg-emerald-700 hover:bg-emerald-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                TW
              </a>
            </div>
            <p className="text-sm">
              Subscribe to our newsletter for updates on new products and industry insights.
            </p>
          </div>
        </div>
        
        <div className="border-t border-emerald-700 mt-8 pt-8 text-center text-sm text-emerald-200">
          <p>&copy; {currentYear} PT Tahta Berkat Dunia. All rights reserved.</p>
          <p className="mt-2">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a> | 
            <a href="#" className="ml-2 hover:text-white transition-colors">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;