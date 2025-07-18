import React, { useState, useEffect } from 'react';
import { X, Zap, Clock, ShoppingBag, ArrowRight } from 'lucide-react';

const FlashSalesPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const flashSales = [
    {
      id: 1,
      name: 'Premium Lipstick Set',
      originalPrice: 89.99,
      salePrice: 49.99,
      discount: 44,
      image: 'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=300',
      timeLeft: '2h 15m'
    },
    {
      id: 2,
      name: 'Glow Serum Bundle',
      originalPrice: 129.99,
      salePrice: 79.99,
      discount: 38,
      image: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=300',
      timeLeft: '1h 45m'
    },
    {
      id: 3,
      name: 'Eye Shadow Palette',
      originalPrice: 69.99,
      salePrice: 39.99,
      discount: 43,
      image: 'https://images.pexels.com/photos/2533189/pexels-photo-2533189.jpeg?auto=compress&cs=tinysrgb&w=300',
      timeLeft: '3h 30m'
    }
  ];

  useEffect(() => {
    // Show popup after 3 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isOpen) {
      const slideTimer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % flashSales.length);
      }, 3000);

      return () => clearInterval(slideTimer);
    }
  }, [isOpen, flashSales.length]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-scale-in">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200 z-10"
        >
          <X className="w-4 h-4 text-gray-600" />
        </button>

        {/* Header */}
        <div className="bg-gradient-to-r from-red-500 to-pink-500 p-4 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5 animate-pulse" />
              <span className="font-bold">⚡ Flash Sale</span>
            </div>
            <div className="flex items-center space-x-1 text-sm">
              <Clock className="w-4 h-4" />
              <span>Limited Time!</span>
            </div>
          </div>
        </div>

        {/* Product Slider */}
        <div className="relative h-80 overflow-hidden">
          {flashSales.map((product, index) => (
            <div
              key={product.id}
              className={`absolute inset-0 p-6 transition-all duration-500 ${
                index === currentSlide ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
              }`}
            >
              <div className="h-full flex flex-col">
                {/* Product Image */}
                <div className="relative flex-1 mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-xl"
                  />
                  <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    -{product.discount}%
                  </div>
                </div>

                {/* Product Info */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900 text-lg">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl font-bold text-red-500">
                      ${product.salePrice}
                    </span>
                    <span className="text-lg text-gray-500 line-through">
                      ${product.originalPrice}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>⏰ Ends in: {product.timeLeft}</span>
                    <span>🔥 Limited Stock</span>
                  </div>

                  <button className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                    <ShoppingBag className="w-5 h-5" />
                    <span>Grab This Deal</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {flashSales.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-red-500 w-6' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlashSalesPopup;