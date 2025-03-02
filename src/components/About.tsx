export default function About() {
    return (
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                About PT. Tahta Berkat Dunia
              </h2>
              <p className="text-gray-600 mb-4">
                Founded with a passion for quality and excellence, PT. Tahta Berkat Dunia has established itself as a leading exporter of premium Indonesian chilies to global markets.
              </p>
              <p className="text-gray-600 mb-4">
                Based in Lombok, Indonesia, we leverage the perfect growing conditions and traditional farming expertise to produce the finest quality chilies while ensuring competitive pricing for our international clients.
              </p>
              <p className="text-gray-600 mb-6">
                Our commitment to sustainable farming practices, rigorous quality control, and efficient export logistics has made us a trusted partner for food manufacturers, distributors, and retailers worldwide.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-red-600 text-xl mb-2">Guaranteed</h3>
                  <p className="text-gray-600">A Grade Chilis</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-red-600 text-xl mb-2">25+</h3>
                  <p className="text-gray-600">Countries Served</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="/images/about-farm.jpg" 
                alt="PT. Tahta Berkat Dunia chili farm" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }