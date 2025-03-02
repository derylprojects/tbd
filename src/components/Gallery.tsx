export default function Gallery() {
    const images = [
      { src: "/images/gallery-1.jpg", alt: "Chili harvest" },
      { src: "/images/gallery-2.jpg", alt: "Sorting and quality control" },
      { src: "/images/gallery-3.jpg", alt: "Packaging process" },
      { src: "/images/gallery-4.jpg", alt: "Export preparation" },
      { src: "/images/gallery-5.jpg", alt: "Farming techniques" },
      { src: "/images/gallery-6.jpg", alt: "Chili varieties" }
    ];
  
    return (
      <section id="gallery" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Gallery
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Take a visual journey through our farms, processing facilities, and premium chili products.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition duration-300">
                <div className="group h-72 relative">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition duration-300 flex items-center justify-center">
                    <div className="text-white opacity-0 group-hover:opacity-100 transition duration-300">
                      <h3 className="font-bold text-xl">{image.alt}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  