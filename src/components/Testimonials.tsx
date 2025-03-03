export default function Testimonials() {
    const testimonials = [
      {
        quote: "PT. Tahta Berkat Dunia consistently delivers chilies of exceptional quality. Their product grading and competitive pricing have made them our preferred supplier for three years running.",
        author: "Colin Brown",
        position: "Purchasing Manager"
      },
      {
        quote: "We've worked with several chili exporters, but none match the reliability and quality control standards of PT. Tahta Berkat Dunia. Their logistics team ensures timely deliveries even during challenging seasons.",
        author: "Katherine Clarkson",
        position: "Supply Chain Director"
      },
      {
        quote: "The team at PT. Tahta Berkat Dunia understands our specific requirements and consistently meets our quality standards. Their attention to detail and customer service is outstanding.",
        author: "Kosma Janowiak",
        position: "CEO"
      }
    ];
  
    return (
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              We pride ourselves on building long-term relationships with customers worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-lg">
                <svg className="w-10 h-10 text-red-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-300 mb-6">{testimonial.quote}</p>
                <div>
                  <p className="font-bold text-white">{testimonial.author}</p>
                  <p className="text-gray-400">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }