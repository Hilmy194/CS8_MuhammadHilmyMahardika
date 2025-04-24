import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedEnterpriseAI from './components/FeaturedEnterpriseAI';
import FeaturedSolutions from './components/FeaturedSolutions';
import FeaturedProducts from './components/FeaturedProducts';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <FeaturedEnterpriseAI />
      <FeaturedSolutions />
      <FeaturedProducts />
      <Footer />
    </div>
  );
}