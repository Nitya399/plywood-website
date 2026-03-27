import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="pt-16 min-h-screen">
      {/* ========== SEO META TAGS FOR ABOUT PAGE ========== */}
      <Helmet>
        <title>About ABP Interior | Interior Designer & Plywood Supplier in Ahmedabad</title>
        <meta name="description" content="Learn about ABP Interior - Ahmedabad's leading interior design and plywood supplier. 100+ completed projects, expert team, premium quality materials, and customer satisfaction guaranteed." />
        <meta name="keywords" content="about us, interior designer ahmedabad, plywood supplier, company profile, experience, team, quality, trusted, professional" />
        <link rel="canonical" href="https://abpinterior.com/about" />
        
        {/* Schema Markup for About Page */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "ABP Interior",
            "alternateName": "ABP Interior Design & Construction",
            "description": "Leading interior design and plywood supplier in Ahmedabad with 100+ completed projects",
            "url": "https://abpinterior.com/about",
            "foundingDate": "2000",
            "founder": "Arvind Patel",
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Customer Service",
              "telephone": "+91-9377640080",
              "email": "arvindpatel5862@gmail.com"
            }
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <div className="relative py-20">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80"
            className="w-full h-full object-cover"
            alt="Premium Woodworking and Craftsmanship"
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
            About ABP Interior
          </motion.h1>
          <p className="text-center text-gray-200 text-lg max-w-2xl mx-auto">
            Ahmedabad's Trusted Plywood Supplier & Interior Construction Expert
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div ref={ref} className="py-20 px-4 relative">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&q=80"
            className="w-full h-full object-cover"
            alt="Professional Woodworking Craftsmanship"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-white/80"></div>
        </div>
        <div className="container mx-auto relative">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12"
            >
              {/* H2 - Our Story */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                For over two decades, ABP Interior has been at the forefront of the woodworking and interior construction industry, 
                delivering exceptional quality and craftsmanship to our clients across Ahmedabad. Our journey began with a simple 
                passion for woodworking and has evolved into a comprehensive solution provider for all interior design and construction needs.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                We take pride in our ability to source the finest premium plywood and hardware materials, employ skilled craftsmen, and deliver 
                interior projects that exceed expectations. Our commitment to quality and customer satisfaction has earned 
                us the trust of countless homeowners, architects, interior designers, and contractors in Ahmedabad and surrounding areas.
              </p>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                Today, we continue to grow and evolve, embracing new technologies and interior design trends while maintaining 
                our core values of quality, integrity, and customer focus. We look forward to bringing your interior vision 
                to life with our expertise and dedication.
              </p>

              {/* H2 - Our Mission */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                To provide premium quality plywood, hardware materials, and expert interior construction services that transform spaces into beautiful, 
                functional environments. We believe in transparency, superior quality, and unwavering customer satisfaction above all else.
              </p>

              {/* H2 - Why Choose ABP Interior */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose ABP Interior?</h2>
              <ul className="list-none space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-4">✓</span>
                  <span className="text-gray-700 text-lg"><strong>100+ Completed Projects:</strong> Proven track record of successful interior transformations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-4">✓</span>
                  <span className="text-gray-700 text-lg"><strong>Quality Guaranteed:</strong> ISI certified premium plywood and quality hardware from trusted brands</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-4">✓</span>
                  <span className="text-gray-700 text-lg"><strong>Professional Team:</strong> Experienced carpenters, electricians, designers, and project managers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-4">✓</span>
                  <span className="text-gray-700 text-lg"><strong>Transparent Pricing:</strong> No hidden charges, clear cost breakdown, and fair quotes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-4">✓</span>
                  <span className="text-gray-700 text-lg"><strong>On-Time Delivery:</strong> Interior projects completed on schedule and within budget</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-4">✓</span>
                  <span className="text-gray-700 text-lg"><strong>24/7 Customer Support:</strong> Available throughout your project for any concerns or updates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-4">✓</span>
                  <span className="text-gray-700 text-lg"><strong>Innovative Solutions:</strong> Latest interior design trends combined with traditional craftsmanship</span>
                </li>
              </ul>

              {/* H2 - Our Team */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Expert Team</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Our team consists of experienced professionals with years of expertise in plywood supply, interior design, and construction. 
                We combine traditional craftsmanship with modern design trends to deliver exceptional interior results. Each team member is 
                dedicated to excellence and committed to ensuring your complete satisfaction.
              </p>

              {/* H3 - Core Values */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Core Values</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-primary/10 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2">Quality First</h4>
                  <p className="text-gray-700">Premium materials and expert craftsmanship in every project</p>
                </div>
                <div className="bg-primary/10 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2">Customer Focus</h4>
                  <p className="text-gray-700">Your satisfaction and needs are our top priority</p>
                </div>
                <div className="bg-primary/10 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2">Transparency</h4>
                  <p className="text-gray-700">Clear communication and honest dealings in all interactions</p>
                </div>
                <div className="bg-primary/10 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2">Innovation</h4>
                  <p className="text-gray-700">Modern design trends with timeless craftsmanship</p>
                </div>
              </div>

              {/* H2 - Statistics */}
              <h2 className="text-3xl font-bold text-gray-900 mb-8">By The Numbers</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center bg-primary/5 p-6 rounded-lg">
                  <div className="text-4xl font-bold text-primary mb-2">100+</div>
                  <p className="text-gray-700 font-semibold">Projects Completed</p>
                </div>
                <div className="text-center bg-primary/5 p-6 rounded-lg">
                  <div className="text-4xl font-bold text-primary mb-2">20+</div>
                  <p className="text-gray-700 font-semibold">Years Experience</p>
                </div>
                <div className="text-center bg-primary/5 p-6 rounded-lg">
                  <div className="text-4xl font-bold text-primary mb-2">4.8★</div>
                  <p className="text-gray-700 font-semibold">Customer Rating</p>
                </div>
                <div className="text-center bg-primary/5 p-6 rounded-lg">
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <p className="text-gray-700 font-semibold">Happy Customers</p>
                </div>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed italic">
                Thank you for considering ABP Interior for your next interior design and construction project in Ahmedabad. 
                We look forward to transforming your space into something extraordinary!
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
