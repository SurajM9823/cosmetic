import React from 'react';
import { Award, Users, Sparkles, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: Users,
      number: '10,000+',
      label: 'Happy Customers',
      color: 'text-blue-500'
    },
    {
      icon: Award,
      number: '5+',
      label: 'Years Experience',
      color: 'text-purple-500'
    },
    {
      icon: Sparkles,
      number: '500+',
      label: 'Premium Products',
      color: 'text-pink-500'
    },
    {
      icon: Heart,
      number: '99%',
      label: 'Satisfaction Rate',
      color: 'text-red-500'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-purple-100 px-4 py-2 rounded-full mb-4">
              <Heart className="w-4 h-4 text-purple-600 fill-current" />
              <span className="text-sm font-medium text-purple-700">About Pathivara Cosmetic</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Your Beauty Journey{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">
                Starts Here
              </span>
            </h2>
            
            <p className="text-gray-600 leading-relaxed text-sm">
              Located in the heart of Biratnagar, Pathivara Cosmetic has been the trusted destination for premium beauty products since 2018. We believe that beauty comes from within, and our carefully curated collection of cosmetics helps you express your unique style.
            </p>
            
            <p className="text-gray-600 leading-relaxed text-sm">
              From everyday essentials to special occasion glamour, we offer authentic products from renowned international brands, ensuring quality, safety, and satisfaction with every purchase.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              <div className="flex items-center space-x-2 bg-white px-3 py-2 rounded-full shadow-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-xs font-medium text-gray-700">100% Authentic Products</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-3 py-2 rounded-full shadow-sm">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-xs font-medium text-gray-700">Expert Beauty Advice</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-3 py-2 rounded-full shadow-sm">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-xs font-medium text-gray-700">Premium Quality</span>
              </div>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 mb-3 ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-xs text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;