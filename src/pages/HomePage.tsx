import React from 'react';
import HeroSlider from '../components/HeroSlider';
import ServicesSlider from '../components/Services.Slider';
import { Shield } from 'lucide-react';

interface HomePageProps {
  setCurrentPage: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
  const handlePageChange = (pageId: string) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {/* Hero Section */}
      <HeroSlider setCurrentPage={setCurrentPage} />
      
      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 slide-up">
            Transform Your Space with Premium Glass & Aluminum
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed fade-in">
            At Rhino Glass, we specialize in premium aluminum and glass works that transform spaces into modern, 
            functional, and stylish environments. From residential to commercial projects, we deliver excellence 
            with every installation.
          </p>
        </div>
      </section>

      {/* Featured Services */}
      <ServicesSlider setCurrentPage={setCurrentPage} />

      {/* Guarantee Badge */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glassy-red rounded-2xl p-8 border border-white/20">
            <div className="flex items-center justify-center mb-4">
              <div className="p-3 bg-white rounded-full">
                <Shield className="w-8 h-8 text-red-600" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">100% Satisfaction Guaranteed</h3>
            <p className="text-red-100 text-lg">
              We stand behind our work with a comprehensive satisfaction guarantee. 
              Your vision, our expertise, guaranteed results.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Get a free consultation and quote for your aluminum and glass project today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => handlePageChange('contact')}
              className="px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 scale-hover"
            >
              Request a Free Quote
            </button>
            <button 
              onClick={() => handlePageChange('contact')}
              className="px-8 py-4 glassy-red text-red-700 border border-red-300 rounded-lg font-semibold hover:bg-red-100 transition-all duration-300"
            >
              Book a Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;