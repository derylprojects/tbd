import Hero from '@/components/Hero';
import About from '@/components/About';
import Products from '@/components/Products';
import Gallery from '@/components/Gallery';
import ContactForm from '@/components/ContactForm';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Products />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  );
}