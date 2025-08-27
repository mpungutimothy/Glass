import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create email content
      const emailSubject = `New Contact Form Submission from ${formData.name}`;
      const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}

---
This message was sent from the Rhino Glass website contact form.
      `.trim();

      // Create mailto link
      const mailtoLink = `mailto:info@rhinoglass.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      // Show success message
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', phone: '', message: '' });
      }, 5000);
      
    } catch (error) {
      console.error('Error sending email:', error);
      alert('There was an error sending your message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+256 750 738217", "+256 755 101424"],
      description: "Call us during business hours for immediate assistance"
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["info@rhinoglass.com"],
      description: "Send us an email and we'll respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Our Location",
      details: ["Kampala, Uganda"],
      description: "Visit our showroom to see our products firsthand"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 4:00 PM"],
      description: "We're here to help during these hours"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="py-20 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(239, 68, 68, 0.8), rgba(0, 0, 0, 0.6)), url('https://i.postimg.cc/rwdHMGqb/0V7A8581.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6 slide-up">Contact Us</h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto fade-in">
              Ready to transform your space? Get in touch with our team for a free consultation and quote
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="text-center p-6 glassy-red rounded-xl hover:shadow-lg transition-all duration-300 scale-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 rounded-full mb-4">
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{info.title}</h3>
                <div className="space-y-1 mb-3">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-red-600 font-semibold">{detail}</p>
                  ))}
                </div>
                <p className="text-gray-600 text-sm">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="slide-up">
              <div className="glassy-red rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Send Us a Message</h2>
                
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 rounded-full mb-4">
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                    <p className="text-gray-600">
                      Your message has been sent successfully. We'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                          placeholder="+256 xxx xxx xxx"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Project Details *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors resize-none"
                        placeholder="Tell us about your project requirements, timeline, and any specific questions you have..."
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full px-8 py-4 rounded-lg font-semibold transition-all duration-300 scale-hover flex items-center justify-center ${
                        isSubmitting 
                          ? 'bg-gray-400 cursor-not-allowed' 
                          : 'bg-red-600 hover:bg-red-700'
                      } text-white`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Map and Additional Info */}
            <div className="fade-in">
              <div className="glassy-red rounded-2xl overflow-hidden shadow-2xl">
                {/* Map placeholder */}
                <div className="h-64 bg-gradient-to-br from-red-200 to-red-300 flex items-center justify-center">
                  <div className="text-center text-red-800">
                    <MapPin className="w-12 h-12 mx-auto mb-2" />
                    <p className="font-semibold">Kampala, Uganda</p>
                    <p className="text-sm">Interactive map coming soon</p>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Visit Our Showroom</h3>
                  <p className="text-gray-600 mb-6">
                    See our aluminum and glass products up close. Our showroom features live displays 
                    of our latest solutions and completed project samples.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-red-600 mr-3" />
                      <span className="text-gray-700">Free consultations available</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-red-600 mr-3" />
                      <span className="text-gray-700">Same-day quotes for most projects</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-red-600 mr-3" />
                      <span className="text-gray-700">Call ahead to schedule a visit</span>
                    </div>
                  </div>
                  
                  <button className="w-full mt-6 px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors">
                  <a 
                    href="mailto:info@rhinoglass.com?subject=Showroom Visit Request&body=Hello, I would like to schedule a visit to your showroom. Please let me know your availability." 
                    className="block w-full mt-6 px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors text-center"
                  >
                    Schedule Showroom Visit
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Action CTAs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Started Today</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the best way to connect with us and start your aluminum and glass project
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 glassy-red rounded-xl hover:shadow-lg transition-all duration-300 scale-hover">
              <Phone className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Call Now</h3>
              <p className="text-gray-600 mb-4">Speak directly with our experts</p>
              <a 
                href="tel:+256750738217" 
                className="inline-block px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                +256 750 738217
              </a>
            </div>
            
            <div className="text-center p-6 glassy-red rounded-xl hover:shadow-lg transition-all duration-300 scale-hover">
              <Mail className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Quote</h3>
              <p className="text-gray-600 mb-4">Get a detailed written estimate</p>
              <a 
                href="mailto:info@rhinoglass.com?subject=Quote Request&body=Hello, I would like to request a quote for my project. Please contact me with more details." 
                className="inline-block px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Send Email
              </a>
            </div>
            
            <div className="text-center p-6 glassy-red rounded-xl hover:shadow-lg transition-all duration-300 scale-hover">
              <CheckCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Free Consultation</h3>
              <p className="text-gray-600 mb-4">Schedule an on-site visit</p>
              <a 
                href="mailto:info@rhinoglass.com?subject=Free Consultation Request&body=Hello, I would like to schedule a free consultation for my project. Please let me know your availability." 
                className="inline-block px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;