const AboutUs = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About PT Tahta Berkat Dunia</h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-4">
              PT Tahta Berkat Dunia (TBD) is a premier Indonesian spice export company dedicated to bringing the authentic flavors of Indonesia to the global market.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Our name &quot;tahtaberkatdunia.me&quot; has a special meaning to us - just as in mathematics where a dot (.) represents multiplication (×), we multiply value through our connections, creating heart-filled relationships with partners worldwide.
            </p>
            <p className="text-lg text-gray-700">
              Based in Indonesia, we specialize in sourcing and exporting the highest quality spices, connecting local farmers with international importers and bringing the rich flavors of Indonesia to kitchens across the globe.
            </p>
          </div>
          
          <div className="bg-emerald-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-700 mb-6">To be the most trusted source of premium Indonesian spices in the global market.</p>
            
            <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Source the highest quality spices from Indonesian farmers</li>
              <li>• Ensure fair trade practices and sustainable sourcing</li>
              <li>• Deliver exceptional products with outstanding service</li>
              <li>• Build lasting relationships with our partners worldwide</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;