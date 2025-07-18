import React, { useState, useEffect } from 'react';
import { ArrowRight, Star } from 'lucide-react';

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: 'Face Makeup',
      description: 'Foundation, Concealer, Powder',
      image: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=400',
      count: '45+ products',
      color: 'from-rose-400 to-pink-500'
    },
    {
      id: 2,
      name: 'Eye Makeup',
      description: 'Eyeshadow, Mascara, Eyeliner',
      image: 'https://images.pexels.com/photos/2533189/pexels-photo-2533189.jpeg?auto=compress&cs=tinysrgb&w=400',
      count: '38+ products',
      color: 'from-purple-400 to-indigo-500'
    },
    {
      id: 3,
      name: 'Lip Products',
      description: 'Lipstick, Gloss, Liner',
      image: 'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=400',
      count: '52+ products',
      color: 'from-red-400 to-rose-500'
    },
    {
      id: 4,
      name: 'Skincare',
      description: 'Cleanser, Moisturizer, Serum',
      image: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=400',
      count: '29+ products',
      color: 'from-green-400 to-emerald-500'
    },
    {
      id: 5,
      name: 'Nail Care',
      description: 'Polish, Base, Top Coat',
      image: 'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=400',
      count: '33+ products',
      color: 'from-pink-400 to-purple-500'
    },
    {
      id: 6,
      name: 'Fragrance',
      description: 'Perfume, Body Spray, Mist',
      image: 'https://images.pexels.com/photos/1190829/pexels-photo-1190829.jpeg?auto=compress&cs=tinysrgb&w=400',
      count: '21+ products',
      color: 'from-yellow-400 to-orange-500'
    }
  ];

  const adImages = [
    {
      src: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=400',
      alt: 'Foundation Ad'
    },
    {
      src: 'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=400',
      alt: 'Lipstick Ad'
    },
    {
      src: 'https://images.pexels.com/photos/1190829/pexels-photo-1190829.jpeg?auto=compress&cs=tinysrgb&w=400',
      alt: 'Perfume Ad'
    }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % adImages.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-rose-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-rose-100 px-4 py-2 rounded-full mb-4">
            <Star className="w-4 h-4 text-rose-500 fill-current" />
            <span className="text-sm font-medium text-rose-700">Shop by Category</span>
          </div>
          
          <p className="text-gray-600 max-w-2xl mx-auto text-sm">
            Discover premium beauty products across all categories, carefully curated to meet your every beauty need.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-4">
          {/* Category Cards (65% width) */}
          <div className="w-full lg:w-[65%]">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-32 sm:h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-60 group-hover:opacity-70 transition-opacity duration-300`}></div>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300"></div>
                    
                    {/* Category Info Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end p-3">
                      <h3 className="text-white font-bold text-sm mb-1 group-hover:text-yellow-200 transition-colors duration-300">
                        {category.name}
                      </h3>
                      <p className="text-white/90 text-xs mb-2 leading-tight">
                        {category.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-white/80 text-xs bg-black/20 px-2 py-1 rounded-full">
                          {category.count}
                        </span>
                        <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Slider (35% width) */}
          <div className="w-full lg:w-[35%] flex justify-center lg:justify-end">
            <div 
              className="w-full h-96 bg-white/95 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-white/10"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="relative w-full h-full">
                {adImages.map((image, index) => (
                  <img
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-500 ${
                      index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-rose-100/30 to-transparent opacity-70 hover:opacity-80 transition-opacity duration-300"></div>
                {/* Navigation Dots */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {adImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleDotClick(index)}
                      className={`w-2 h-2 rounded-full ${
                        index === currentImageIndex ? 'bg-rose-500' : 'bg-white/50'
                      } hover:bg-rose-400 transition-colors duration-300`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="group bg-white/20 backdrop-blur-sm text-gray-900 px-6 py-2 rounded-full font-medium hover:bg-white/30 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 text-sm">
            <span>View All Categories</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Categories;