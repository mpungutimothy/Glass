import React from 'react';
import { Target, Eye, Heart, Award, Users, Building } from 'lucide-react';

interface AboutPageProps {
  setCurrentPage: (page: string) => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ setCurrentPage }) => {
  const handlePageChange = (pageId: string) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const values = [
    {
      icon: Award,
      title: "Innovation",
      description: "Constantly pushing boundaries with cutting-edge glass and aluminum solutions",
    },
    {
      icon: Building,
      title: "Quality Craftsmanship",
      description: "Meticulous attention to detail in every project we undertake",
    },
    {
      icon: Users,
      title: "Customer Satisfaction",
      description: "Your satisfaction is our top priority, guaranteed",
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "Honest, transparent, and reliable business practices",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="py-20 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(239, 68, 68, 0.8), rgba(0, 0, 0, 0.6)), url('https://i.postimg.cc/qMFBMLdH/GRY-8676.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6 slide-up">About Rhino Glass</h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto fade-in">
              Building the future with innovative aluminum and glass solutions across East Africa
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="slide-up">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Who We Are</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Rhino Glass is a leading aluminum and glass solutions provider with a proven track record 
                in delivering innovative, durable, and stylish designs for both residential and commercial projects.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our team of experienced professionals combines technical expertise with creative vision to 
                transform architectural concepts into reality. We pride ourselves on our attention to detail, 
                quality materials, and commitment to exceeding client expectations.
              </p>
            </div>
            <div className="fade-in">
              <img
                src="https://i.postimg.cc/qMFBMLdH/GRY-8676.jpg"
                alt="Modern glass building"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="glassy-red rounded-2xl p-8 slide-up">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-red-600 rounded-full mr-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To enhance the beauty and functionality of buildings through modern, sustainable, 
                and reliable aluminium and glass works.
              </p>
            </div>
            
            <div className="glassy-red rounded-2xl p-8 slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center mb-6">
                <div className="p-3 bg-red-600 rounded-full mr-4">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To be the most trusted aluminium and glass solutions provider in East Africa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and every project we undertake
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 glassy-red rounded-2xl hover:shadow-lg transition-all duration-300 scale-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 rounded-full mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Experience the Rhino Glass Difference</h2>
          <p className="text-xl text-red-100 mb-8">
            Join hundreds of satisfied clients who have transformed their spaces with our premium solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => handlePageChange('projects')}
              className="px-8 py-4 bg-white text-red-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 scale-hover"
            >
              View Our Projects
            </button>
            <button 
              onClick={() => handlePageChange('contact')}
              className="px-8 py-4 glassy text-white border-2 border-white/30 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300"
            >
              Contact Us Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;