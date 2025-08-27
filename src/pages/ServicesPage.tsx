import React from 'react';
import { Building2, Shield, Layers, Square, Sun, DoorOpen, Droplets, Stars as Stairs } from 'lucide-react';

interface ServicesPageProps {
  setCurrentPage: (page: string) => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ setCurrentPage }) => {
  const handlePageChange = (pageId: string) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    {
      icon: DoorOpen,
      title: "Aluminium Doors & Windows",
      description: "Sleek, durable, and customizable aluminum solutions for modern buildings. Our doors and windows combine functionality with aesthetic appeal.",
      image: "https://i.postimg.cc/LXV69Fmx/0V7A8722.jpg",
      features: ["Energy Efficient", "Weather Resistant", "Custom Designs", "Low Maintenance"]
    },
    {
      icon: Building2,
      title: "Curtain Walling",
      description: "Enhance building aesthetics and energy efficiency with modern curtain wall systems that provide structural integrity and visual appeal.",
      image: "https://i.postimg.cc/vTWFvWND/Curtain-wall2.jpg",
      features: ["Thermal Performance", "Sound Insulation", "Modern Aesthetics", "Structural Support"]
    },
    {
      icon: Layers,
      title: "ACP Cladding",
      description: "Modern and weather-resistant exterior finishes for lasting protection. Our ACP cladding solutions offer durability and style.",
      image: "https://i.postimg.cc/QCxNVYth/GRY-8643.jpg",
      features: ["Fire Resistant", "Weather Proof", "Color Options", "Easy Installation"]
    },
    {
      icon: Shield,
      title: "Balustrades",
      description: "Stylish safety solutions for balconies, staircases, and elevated areas. Our balustrades combine safety with modern design.",
      image: "https://i.postimg.cc/KjhC418b/glassbalustrades1.jpg",
      features: ["Safety Compliant", "Elegant Design", "Durable Materials", "Custom Heights"]
    },
    {
      icon: Sun,
      title: "Skylights",
      description: "Natural lighting solutions for brighter, more energy-efficient interiors. Bring the outdoors in with our premium skylights.",
      image: "https://i.postimg.cc/qB29Sx1v/skylights2.jpg",
      features: ["Natural Light", "Energy Savings", "UV Protection", "Automated Options"]
    },
    {
      icon: Square,
      title: "Frameless Glass Doors",
      description: "Elegant entrances with seamless design and crystal-clear visibility. Create stunning transitions between spaces.",
      image: "https://i.postimg.cc/QN53s3ds/Frameless-doors2.jpg",
      features: ["Seamless Design", "Maximum Light", "Space Saving", "Premium Hardware"]
    },
    {
      icon: Droplets,
      title: "Shower Cubicles",
      description: "Modern bathroom solutions with easy maintenance and sleek designs. Transform your bathroom into a luxury spa.",
      image: "https://i.postimg.cc/XJCTVf3x/Shower-cubicles2.jpg",
      features: ["Water Tight", "Easy Clean", "Modern Styling", "Custom Sizes"]
    },
    {
      icon: Stairs,
      title: "Staircases",
      description: "Strong aluminum & glass solutions for modern architectural designs. Our staircases are both functional and artistic.",
      image: "https://i.postimg.cc/nLMyW8Py/Glass-staircase2.jpg",
      features: ["Structural Strength", "Modern Design", "Safety Features", "Custom Fabrication"]
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="py-20 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(239, 68, 68, 0.8), rgba(0, 0, 0, 0.6)), url('https://i.postimg.cc/vTWFvWND/Curtain-wall2.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6 slide-up">Our Services</h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto fade-in">
              Comprehensive aluminum and glass solutions for residential, commercial, and corporate projects
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="glassy-red rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 scale-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="grid md:grid-cols-2 h-full">
                  <div className="relative h-64 md:h-auto">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-red-600 rounded-lg mr-3">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-3" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <button 
                      onClick={() => handlePageChange('contact')}
                      className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors w-fit"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From consultation to installation, we ensure a smooth and professional experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Free consultation to understand your needs" },
              { step: "02", title: "Design", desc: "Custom design tailored to your specifications" },
              { step: "03", title: "Fabrication", desc: "Precision manufacturing in our facility" },
              { step: "04", title: "Installation", desc: "Professional installation and quality assurance" },
            ].map((item, index) => (
              <div key={index} className="text-center slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl text-red-100 mb-8">
            Get started with a free consultation and discover how our services can enhance your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => handlePageChange('contact')}
              className="px-8 py-4 bg-white text-red-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 scale-hover"
            >
              Request a Free Quote
            </button>
            <button 
              onClick={() => handlePageChange('contact')}
              className="px-8 py-4 glassy text-white border-2 border-white/30 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300"
            >
              Book a Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;