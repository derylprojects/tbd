const WhyChooseUs = () => {
    const benefits = [
      {
        id: 1,
        title: "Premium Quality",
        description: "We source only the highest quality spices from carefully selected local farmers across Indonesia."
      },
      {
        id: 2,
        title: "Direct Sourcing",
        description: "Our direct relationships with growers ensure fair prices, quality control, and reliable supply."
      },
      {
        id: 3,
        title: "Extensive Range",
        description: "From common spices to rare varieties, we offer a comprehensive selection to meet diverse needs."
      },
      {
        id: 4,
        title: "Custom Solutions",
        description: "We cater to specific requirements for processing, packaging, and quantity to suit your needs."
      },
      {
        id: 5,
        title: "Sustainability",
        description: "We are committed to ethical sourcing practices that support local communities and protect the environment."
      },
      {
        id: 6,
        title: "Reliable Logistics",
        description: "Our experienced logistics team ensures timely delivery and handles all export documentation efficiently."
      }
    ];
  
    return (
      <section id="why-choose-us" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Why Choose Us</h2>
          <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto mb-12">
            PT Tahta Berkat Dunia is your trusted partner for premium Indonesian spice exports.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map(benefit => (
              <div key={benefit.id} className="p-6 border border-gray-200 rounded-lg hover:border-emerald-300 hover:shadow-md transition-all">
                <h3 className="text-xl font-semibold mb-3 text-emerald-700">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-emerald-50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Our Commitment</h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              At PT Tahta Berkat Dunia, we&apos;re committed to building relationships that last. 
              Just as our name implies, we aim to multiply value (×) through heart-filled (❤️) connections, 
              bringing the best of Indonesia to the world while supporting local communities.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default WhyChooseUs;