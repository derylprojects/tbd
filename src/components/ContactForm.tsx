'use client'
import { useState, useEffect, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
  product: string;
}

interface FormStatus {
  submitted: boolean;
  error: boolean;
}

declare global {
  interface Window {
    onTurnstileSuccess: (token: string) => void;
  }
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    product: 'Red Cayenne Chili'
  });
  
  const [formStatus, setFormStatus] = useState<FormStatus>({
    submitted: false,
    error: false
  });

  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    window.onTurnstileSuccess = (token: string) => {
      setToken(token);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!token) return;
    
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        error: false
      });
    }, 1000);
  };

  return (
    <section className='bg-gray-900'>
    <div id='contact' className="max-w-2xl mx-auto p-6 bg-gray-900 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Your name" required />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="your@email.com" required />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">Company</label>
            <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Your company" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">Phone</label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="+1 (555) 123-4567" />
          </div>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-32 resize-y" placeholder="Your message here..." required />
        </div>
        <div>
          <label htmlFor="product" className="block text-sm font-medium text-gray-300 mb-1">Product of Interest</label>
          <input type="text" id="product" name="product" value={formData.product} onChange={handleChange} className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-700 text-gray-300" readOnly />
        </div>
        <div className="turnstile-wrapper">
          <div className="cf-turnstile" data-sitekey="0x4AAAAAAA_SR9NdDvEkJ4hg" data-callback="onTurnstileSuccess"></div>
        </div>
        <button type="submit" disabled={!token} className={`w-full py-2 px-4 rounded-md font-medium transition-colors duration-200 ${token ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-600 text-gray-400 cursor-not-allowed'}`}>Submit Inquiry</button>
        {formStatus.submitted && <div className="text-center p-4 bg-green-800 text-green-100 rounded-md">Thank you! Your inquiry has been successfully submitted.</div>}
        {formStatus.error && <div className="text-center p-4 bg-red-800 text-red-100 rounded-md">Oops! There was an error submitting your form. Please try again.</div>}
      </form>
    </div>
    <script async defer src="https://challenges.cloudflare.com/turnstile/v0/api.js"></script>
    </section>
  );
}
