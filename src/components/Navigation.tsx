import React from 'react';
import { Building2, Menu, X } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navigationItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Our Services' },
    { id: 'projects', label: 'Projects' },
    
    { id: 'contact', label: 'Contact Us' },
  ];

  const handlePageChange = (pageId: string) => {
    setCurrentPage(pageId);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glassy shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => handlePageChange('home')}
          >
            <div className="relative">
              <img 
                src="/logo.png" 
                alt="Rhino Glass Logo" 
                className="w-12 h-12 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 logo-glow logo-float"
              />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 rounded-full flex items-center justify-center">
                <Building2 className="w-2.5 h-2.5 text-white" />
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Rhino Glass</h1>
              <p className="text-xs text-red-600">Strength in Glass, Elegance in Aluminium</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handlePageChange(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  currentPage === item.id
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-red-100 hover:text-red-700'
                }`}
              >
                {item.label}
              </button>
            ))}
            
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:bg-red-100"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-gradient-to-br from-red-600 via-red-700 to-red-800 border-t border-red-500 shadow-2xl">
            <div className="px-4 py-4 space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handlePageChange(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                    currentPage === item.id
                      ? 'bg-white text-red-700 shadow-lg'
                      : 'text-white hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;