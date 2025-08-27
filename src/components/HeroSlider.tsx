import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroSliderProps {
  setCurrentPage: (page: string) => void;
}

const HeroSlider: React.FC<HeroSliderProps> = ({ setCurrentPage }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePageChange = (pageId: string) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const slides = [
    {
      id: 1,
      title: "Aluminium & Glass Solutions for All Buildings",
      subtitle: "Transform your spaces with premium quality materials and expert craftsmanship",
      cta1: { text: "Get a Quote", action: () => handlePageChange('contact') },
      cta2: { text: "Our Services", action: () => handlePageChange('services') },
      background: "https://i.postimg.cc/rwdHMGqb/0V7A8581.jpg",
    },
    {
      id: 2,
      title: "Strength in Glass, Elegance in Aluminium",
      subtitle: "Creating modern, functional, and stylish environments for residential and commercial projects",
      cta1: { text: "View Our Projects", action: () => handlePageChange('projects') },
      cta2: { text: "Contact Us", action: () => handlePageChange('contact') },
      background: "https://i.postimg.cc/8cKpvdJW/0V7A8661.jpg",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="w-full h-full flex-shrink-0 relative"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${slide.background})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white max-w-4xl px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 slide-up">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 fade-in" style={{ animationDelay: '0.3s' }}>
                  {slide.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in" style={{ animationDelay: '0.6s' }}>
                  <button 
                    onClick={slide.cta1.action}
                    className="px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 scale-hover"
                  >
                    {slide.cta1.text}
                  </button>
                  <button 
                    onClick={slide.cta2.action}
                    className="px-8 py-4 glassy text-white border-2 border-white/30 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300"
                  >
                    {slide.cta2.text}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-2 md:p-3 glassy text-white rounded-full hover:bg-white/20 transition-all duration-300"
      >
        <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-2 md:p-3 glassy text-white rounded-full hover:bg-white/20 transition-all duration-300"
      >
        <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-white' : 'bg-white/50'
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;