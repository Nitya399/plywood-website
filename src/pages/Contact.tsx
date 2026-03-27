import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="pt-16 min-h-screen">
      {/* ========== SEO META TAGS FOR CONTACT PAGE ========== */}
      <Helmet>
        <title>Contact ABP Interior | Interior Designer in Ahmedabad</title>
        <meta name="description" content="Get in touch with ABP Interior - leading interior design and construction services in Ahmedabad. Phone: +91-9377640080 | Email: arvindpatel5862@gmail.com | Free consultation available." />
        <meta name="keywords" content="contact us ahmedabad, interior designer contact, interior construction contact, plywood supplier contact, free consultation" />
        <link rel="canonical" href="https://abpinterior.com/contact" />
        
        {/* Schema Markup for Contact Page */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "ABP Interior",
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Customer Service",
              "telephone": "+91-9377640080",
              "email": "arvindpatel5862@gmail.com"
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Silverstar char rasta",
              "addressLocality": "Chandlodiya",
              "addressRegion": "Ahmedabad",
              "postalCode": "382481",
              "addressCountry": "IN"
            },
            "url": "https://abpinterior.com/contact"
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <div className="relative py-20">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&q=80"
            className="w-full h-full object-cover"
            alt="Professional Workshop Environment"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white text-center mb-6"
          >
            Contact ABP Interior - Get Free Consultation
          </motion.h1>
          <p className="text-center text-gray-200 text-lg max-w-2xl mx-auto">
            Reach out to us for quotes, consultations, or any questions about our interior design and construction services
          </p>
        </div>
      </div>
      
      <div className="py-20 px-4 relative">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&q=80"
            className="w-full h-full object-cover"
            alt="Modern Workshop and Design Studio"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-white/95"></div>
        </div>
        <div className="max-w-4xl mx-auto relative">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-8"
            >
              {/* H2 - Contact Form Section */}
              <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700">Service Interested In</label>
                  <select
                    id="service"
                    name="service"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="plywood">Plywood & Hardware Supply</option>
                    <option value="interior">Interior Construction</option>
                    <option value="design">Interior Design Consultation</option>
                    <option value="modular">Modular Furniture</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition duration-300 font-semibold"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-8"
            >
              {/* H2 - Contact Information Section */}
              <h2 className="text-2xl font-semibold mb-8">Contact Information</h2>
              
              <div className="space-y-8">
                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <a href="tel:+919377640080" className="text-primary hover:text-primary-dark font-medium">
                      +91-9377640080
                    </a>
                    <p className="text-gray-600 text-sm mt-1">Mon-Sat 10AM-7PM | Sun 11AM-5PM</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a href="mailto:arvindpatel5862@gmail.com" className="text-primary hover:text-primary-dark font-medium">
                      arvindpatel5862@gmail.com
                    </a>
                    <p className="text-gray-600 text-sm mt-1">Response within 4 hours</p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">WhatsApp</h3>
                    <a href="https://wa.me/919377640080" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark font-medium">
                      Chat on WhatsApp
                    </a>
                    <p className="text-gray-600 text-sm mt-1">Quick response - preferred communication</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600">
                      Silverstar char rasta<br />
                      Chandlodiya<br />
                      Ahmedabad, Gujarat 382481
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Google Map Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-12 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-8"
          >
            <h2 className="text-2xl font-semibold mb-6">Find Us on Google Maps</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.5499999999998!2d72.5714!3d23.0225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848a1234567d%3A0x1234567890abcdef!2sSilverstar%20Chandlodiya%20Ahmedabad!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ABP Interior Location on Google Maps"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
