import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ServicesSliderProps {
  setCurrentPage: (page: string) => void;
}

const ServicesSlider: React.FC<ServicesSliderProps> = ({ setCurrentPage }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePageChange = (pageId: string) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    {
      id: 1,
      title: "Aluminum Doors & Windows",
      description: "Sleek, durable, and customizable aluminum solutions for modern buildings",
      image: "https://i.postimg.cc/LXV69Fmx/0V7A8722.jpg",
    },
    {
      id: 2,
      title: "Curtain Walling",
      description: "Enhance building aesthetics and energy efficiency with modern curtain wall systems",
      image: "https://i.postimg.cc/vTWFvWND/Curtain-wall2.jpg",
    },
    {
      id: 3,
      title: "ACP Cladding",
      description: "Modern and weather-resistant exterior finishes for lasting protection",
      image: "https://i.postimg.cc/K84NtmVg/GRY-8638.jpg",
    },
    {
      id: 4,
      title: "Frameless Glass Doors",
      description: "Elegant entrances with seamless design and crystal-clear visibility",
      image: "https://i.postimg.cc/9FhjQnD9/Frameless-doors1.jpg",
    },
    {
      id: 5,
      title: "Shower Cubicles",
      description: "Modern bathroom solutions with easy maintenance and sleek designs",
      image: "https://i.postimg.cc/MH0NBznQ/Shower-cubicles3.jpg",
    },
    {
      id: 6,
      title: "Skylights",
      description: "Natural lighting solutions for brighter, more energy-efficient interiors",
      image: "https://i.postimg.cc/NfYWc2n7/skylights1.jpg",
    },
    {
      id: 7,
      title: "Balustrades",
      description: "Stylish safety solutions for balconies, staircases, and elevated areas",
      image: "https://i.postimg.cc/4x4kzHbN/Glass-balustrades2.jpg",
    },
    {
      id: 8,
      title: "Staircases",
      description: "Strong aluminum & glass solutions for modern architectural designs",
      image: "https://i.postimg.cc/dVWMnQ4R/Glass-staircase1.jpg",
    },
  ];

  const itemsPerPage = 3;
  const totalSlides = Math.ceil(services.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const currentServices = services.slice(
    currentSlide * itemsPerPage,
    (currentSlide + 1) * itemsPerPage
  );

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of aluminum and glass solutions designed to transform your space
          </p>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {currentServices.map((service) => (
              <div
                key={service.id}
                className="glassy-red rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 scale-hover group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <button 
                    onClick={() => handlePageChange('services')}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-6">
            <button
              onClick={prevSlide}
              className="p-3 glassy-red rounded-full text-red-600 hover:bg-red-100 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <div className="flex space-x-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'bg-red-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="p-3 glassy-red rounded-full text-red-600 hover:bg-red-100 transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSlider;