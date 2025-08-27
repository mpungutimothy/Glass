import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  category: string;
  images: string[];
}

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, category, images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  if (!isOpen) return null;

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="fixed inset-0 z-50 modal-overlay bg-black/80 flex items-center justify-center p-4">
      <div className="glassy max-w-4xl w-full max-h-[90vh] overflow-hidden rounded-2xl">
        <div className="flex justify-between items-center p-6 border-b border-white/20">
          <h3 className="text-2xl font-bold text-gray-900">{category} Projects</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-red-100 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        
        <div className="relative">
          <img
            src={images[currentImage]}
            alt={`${category} project ${currentImage + 1}`}
            className="w-full h-96 object-cover"
          />
          
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 glassy text-gray-800 rounded-full hover:bg-white/30 transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 glassy text-gray-800 rounded-full hover:bg-white/30 transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentImage === index ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
        
        <div className="p-6">
          <p className="text-gray-600">
            Explore our {category.toLowerCase()} projects showcasing modern aluminum and glass solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;