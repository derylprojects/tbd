"use client";

import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    product: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log(formData);
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      company: '',
      message: '',
      product: ''
    });
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="py-16 bg-emerald-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Contact Us</h2>
        <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto mb-12">
          Interested in our products or have questions? Reach out to us today.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
            
            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-md">
                Thank you for your message! We&apos;ll get back to you soon.
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="company" className="block text-gray-700 font-medium mb-1">Company</label>
                <input 
                  type="text" 
                  id="company" 
                  name="company" 
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="product" className="block text-gray-700 font-medium mb-1">Product Interest</label>
                <select 
                  id="product" 
                  name="product" 
                  value={formData.product}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                >
                  <option value="">Select a product</option>
                  <option value="Cinnamon">Indonesian Cinnamon</option>
                  <option value="Black Pepper">Lampung Black Pepper</option>
                  <option value="Nutmeg">Javanese Nutmeg</option>
                  <option value="Cloves">Maluku Cloves</option>
                  <option value="Turmeric">Indonesian Turmeric</option>
                  <option value="Vanilla">Vanilla Beans</option>
                  <option value="Multiple">Multiple Products</option>
                  <option value="Other">Other (please specify)</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-1">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="w-full py-3 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors">
                Send Message
              </button>
            </form>
          </div>
          
          <div>
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-gray-700">Address:</p>
                  <p className="text-gray-600">Lalu Mesir Street, Mataram, NTB, Indonesia</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Email:</p>
                  <p className="text-gray-600">info@tahtaberkatdunia.me</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Phone:</p>
                  <p className="text-gray-600">+62 896-2964-6171 (Whatsapp &amp; WeChat</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Website:</p>
                  <p className="text-gray-600">www.tahtaberkatdunia.me</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-700">Monday - Friday:</span>
                  <span className="text-gray-600">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Saturday:</span>
                  <span className="text-gray-600">9:00 AM - 1:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Sunday:</span>
                  <span className="text-gray-600">Closed</span>
                </div>
              </div>
              <p className="mt-4 text-gray-600 italic">
                (Singapore Time - UTC +8)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;