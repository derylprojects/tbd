export default function Products() {
    const products = [
      {
        name: "Red Cayenne Chili",
        description: "Medium heat level, perfect for various culinary applications.",
        image: "/images/cayenne.jpg"
      },
      {
        name: "Bird's Eye Chili",
        description: "Small but intensely hot, ideal for spicy Asian dishes.",
        image: "/images/birds-eye.jpg"
      },
      {
        name: "Jalapeño Chili",
        description: "Mild to medium heat, versatile for salsas and stuffing.",
        image: "/images/jalapeno.jpg"
      },
      {
        name: "Dried Chili Flakes",
        description: "Convenient seasoning for adding heat to any dish.",
        image: "/images/chili-flakes.jpg"
      }
    ];
  
    return (
      <section id="products" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Premium Products
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We offer a diverse range of high-quality chili varieties to meet all your culinary and manufacturing needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-gray-600">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a 
              href="#contact" 
              className="inline-block px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md transition duration-300"
            >
              Request Product Details
            </a>
          </div>
        </div>
      </section>
    );
  }