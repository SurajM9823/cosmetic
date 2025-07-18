import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ShoppingBag, Star, Sparkles } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Premium Beauty Collection",
      subtitle: "Discover Your Perfect Look",
      description: "Explore our exclusive range of premium cosmetics designed to enhance your natural beauty",
      image: "https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-rose-500/80 to-purple-600/80"
    },
    {
      id: 2,
      title: "Luxury Skincare Essentials",
      subtitle: "Glow From Within",
      description: "Transform your skin with our carefully curated skincare collection",
      image: "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-rose-500/80 to-purple-600/80"
    },
    {
      id: 3,
      title: "Bold & Beautiful Makeup",
      subtitle: "Express Your Style",
      description: "Create stunning looks with our professional-grade makeup collection",
      image: "https://images.pexels.com/photos/2533189/pexels-photo-2533189.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-rose-500/80 to-purple-600/80"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen overflow-hidden font-sans">
      {/* Import Fonts */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Lora:wght@400;500&display=swap');
          .font-heading {
            font-family: 'Playfair Display', serif;
          }
          .font-body {
            font-family: 'Lora', serif;
          }
        `}
      </style>

      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        >
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient}`}></div>
          </div>

          {/* Content */}
          <div className="relative z-20 h-full flex items-center justify-center">
            <div className="container mx-auto px-6 sm:px-8 md:px-4 flex justify-center">
              <div className="max-w-xl w-full sm:max-w-2xl text-center px-8 sm:px-0">
                <div className={`space-y-6 transform transition-all duration-1000 delay-300 ${
                  index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}>
                  <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    <Star className="w-3 h-3 text-white fill-current" />
                    <span className="text-xs font-medium text-white font-body">{slide.subtitle}</span>
                  </div>
                  
                  <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-tight font-heading">
                    {slide.title}
                  </h1>
                  
                  <p className="text-xs sm:text-sm md:text-base text-white/90 max-w-md mx-auto leading-relaxed font-body">
                    {slide.description}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 pt-4 justify-center items-center">
                    <button className="group bg-white text-gray-900 px-4 sm:px-5 py-2 rounded-full font-medium hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg text-xs font-body w-auto">
                      <ShoppingBag className="w-4 h-4 group-hover:animate-bounce" />
                      <span>Shop Now</span>
                    </button>
                    <button className="bg-transparent text-white px-4 sm:px-5 py-2 rounded-full font-medium border border-white/30 hover:border-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm text-xs font-body w-auto">
                      View Collection
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 z-30"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 z-30"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Sparkles className="absolute top-20 left-10 w-8 h-8 text-white/30 animate-pulse" />
        <Sparkles className="absolute top-40 right-20 w-6 h-6 text-white/20 animate-bounce" />
        <Sparkles className="absolute bottom-32 left-1/4 w-4 h-4 text-white/40 animate-spin" />
      </div>
    </section>
  );
};

export default Hero;