import React, { useState } from 'react';
import ProjectModal from '../components/ProjectModal';

interface ProjectsPageProps {
  setCurrentPage: (page: string) => void;
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({ setCurrentPage }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePageChange = (pageId: string) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const projectCategories = [
    {
      name: "Residential",
      description: "Modern homes transformed with premium glass and aluminum solutions",
      image: "https://i.postimg.cc/fT8C3VHN/GRY-8621.jpg",
      images: [
        "https://i.postimg.cc/XJCTVf3x/Shower-cubicles2.jpg",
        "https://i.postimg.cc/LXV69Fmx/0V7A8722.jpg",
        "https://i.postimg.cc/nLMyW8Py/Glass-staircase2.jpg",
      ]
    },
    {
      name: "Commercial",
      description: "Office buildings and retail spaces with contemporary aluminum features",
      image: "https://i.postimg.cc/XvSV9YJ2/0V7A8568.jpg",
      images: [
        "https://i.postimg.cc/8cKpvdJW/0V7A8661.jpg",
        "https://i.postimg.cc/rwdHMGqb/0V7A8581.jpg",
        "https://i.postimg.cc/XvSV9YJ2/0V7A8568.jpg",
      ]
    },
    {
      name: "Corporate",
      description: "High-end corporate facilities with sophisticated glass systems",
      image: "https://i.postimg.cc/RhrxfPGj/Curtain-wall1.jpg",
      images: [
        "https://i.postimg.cc/fTz5TcfC/0V7A8626.jpg",
        "https://i.postimg.cc/4x4kzHbN/Glass-balustrades2.jpg",
      ]
    },
    {
      name: "Commercial",
      description: "Hotels and restaurants featuring elegant aluminum and glass designs",
      image: "https://i.postimg.cc/dVWMnQ4R/Glass-staircase1.jpg",
      images: [
        "https://images.unsplash.com/photo-1600607687644-aaa4c24345aa?w=800&h=600&fit=crop&auto=format",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&auto=format",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&auto=format",
      ]
    },
  ];

  const handleCategoryClick = (category: string, images: string[]) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCategory(null);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="py-20 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(239, 68, 68, 0.8), rgba(0, 0, 0, 0.6)), url('https://i.postimg.cc/XvSV9YJ2/0V7A8568.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6 slide-up">Our Portfolio</h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto fade-in">
              Discover our exceptional projects showcasing innovative aluminum and glass solutions across various sectors
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projectCategories.map((category, index) => (
              <div
                key={index}
                className="glassy-red rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 scale-hover cursor-pointer"
                onClick={() => handleCategoryClick(category.name, category.images)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
                    <p className="text-gray-200 text-sm">{category.description}</p>
                  </div>
                </div>
                <div className="p-6">
                  <button className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium">
                    View Gallery
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Highlighting some of our most impressive installations and transformations
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 slide-up">
              <div className="glassy-red rounded-xl p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Modern Office Complex</h3>
                <p className="text-gray-600 mb-4">
                  A state-of-the-art commercial building featuring floor-to-ceiling curtain walling, 
                  aluminum cladding, and energy-efficient glass systems.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-3" />
                    15,000 sq ft curtain walling
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-3" />
                    Custom aluminum cladding
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-3" />
                    Energy-efficient glass systems
                  </li>
                </ul>
              </div>

              <div className="glassy-red rounded-xl p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Luxury Residential Villa</h3>
                <p className="text-gray-600 mb-4">
                  Sophisticated home transformation featuring frameless glass doors, aluminum windows, 
                  and custom balustrades throughout.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-3" />
                    Frameless glass doors
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-3" />
                    Custom aluminum windows
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-3" />
                    Designer balustrades
                  </li>
                </ul>
              </div>
            </div>

            <div className="fade-in">
              <img
                src="https://i.postimg.cc/XvSV9YJ2/0V7A8568.jpg"
                alt="Featured project"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Start Your Project Today</h2>
          <p className="text-xl text-red-100 mb-8">
            Ready to see your vision come to life? Let's discuss your aluminum and glass project requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => handlePageChange('contact')}
              className="px-8 py-4 bg-white text-red-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 scale-hover"
            >
              Request a Free Quote
            </button>
            <button 
              onClick={() => handlePageChange('services')}
              className="px-8 py-4 glassy text-white border-2 border-white/30 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300"
            >
              View Our Services
            </button>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        category={selectedCategory || ''}
        images={projectCategories.find(cat => cat.name === selectedCategory)?.images || []}
      />
    </div>
  );
};

export default ProjectsPage;