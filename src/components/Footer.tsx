import React from 'react';
import { Building2, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

interface FooterProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ currentPage, setCurrentPage }) => {
  const handlePageChange = (pageId: string) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Our Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const services = [
    'Aluminium Doors & Windows',
    'Curtain Walling',
    'ACP Cladding',
    'Frameless Glass Doors',
    'Shower Cubicles',
    'Skylights',
    'Balustrades',
    'Staircases',
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-red-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div 
              className="flex items-center space-x-3 mb-6 cursor-pointer group"
              onClick={() => handlePageChange('home')}
            >
              <div className="relative">
                <img 
                  src="https://i.postimg.cc/Xqz9Lqzx/logo.png" 
                  alt="Rhino Glass Logo" 
                  className="w-14 h-14 rounded-lg shadow-lg logo-glow hover:scale-105 transition-all duration-300"
                />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 rounded-full flex items-center justify-center">
                  <Building2 className="w-2.5 h-2.5 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold group-hover:text-red-300 transition-colors">Rhino Glass</h3>
                <p className="text-sm text-red-300 font-medium">Strength in Glass, Elegance in Aluminium</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading aluminum and glass solutions provider with a proven track record in delivering 
              innovative, durable, and stylish designs across East Africa.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-red-600 rounded-lg hover:bg-red-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-red-600 rounded-lg hover:bg-red-700 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-red-600 rounded-lg hover:bg-red-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-red-600 rounded-lg hover:bg-red-700 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handlePageChange(link.id)}
                    className={`text-gray-300 hover:text-red-300 transition-colors ${
                      currentPage === link.id ? 'text-red-300 font-medium' : ''
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.slice(0, 6).map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => handlePageChange('services')}
                    className="text-gray-300 hover:text-red-300 transition-colors text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">+256 750 738217</p>
                  <p className="text-gray-300">+256 755 101424</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300">info@rhinoglass.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300">Kampala, Uganda</p>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-red-600/20 rounded-lg border border-red-500/30">
              <h5 className="font-semibold text-red-300 mb-2">Business Hours</h5>
              <p className="text-sm text-gray-300">Mon - Fri: 8:00 AM - 6:00 PM</p>
              <p className="text-sm text-gray-300">Sat: 9:00 AM - 4:00 PM</p>
              <p className="text-sm text-gray-300">Sun: Closed</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Rhino Glass. All rights reserved. Crafted with excellence.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-red-300 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-red-300 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-red-300 transition-colors">
                Warranty
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;