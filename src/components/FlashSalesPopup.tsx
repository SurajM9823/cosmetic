import React, { useState, useEffect } from 'react';
import { X, Zap, Clock, ShoppingBag, ArrowRight } from 'lucide-react';

const FlashSalesPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

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
    },
    {
      id: 4,
      name: 'Hydrating Moisturizer',
      originalPrice: 59.99,
      salePrice: 34.99,
      discount: 42,
      image: 'https://images.pexels.com/photos/935789/pexels-photo-935789.jpeg?auto=compress&cs=tinysrgb&w=300',
      timeLeft: '2h 50m'
    },
    {
      id: 5,
      name: 'Bold Eyeliner Duo',
      originalPrice: 29.99,
      salePrice: 19.99,
      discount: 33,
      image: 'https://images.pexels.com/photos/2533189/pexels-photo-2533189.jpeg?auto=compress&cs=tinysrgb&w=300',
      timeLeft: '1h 20m'
    },
    {
      id: 6,
      name: 'Matte Foundation',
      originalPrice: 79.99,
      salePrice: 44.99,
      discount: 44,
      image: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=300',
      timeLeft: '2h 10m'
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] flex flex-col animate-scale-in">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200 z-10"
            >
              <X className="w-4 h-4 text-gray-600" />
            </button>

            {/* Header */}
            <div className="bg-gradient-to-r from-red-600 to-pink-600 p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Zap className="w-5 h-5 animate-pulse" />
                  <span className="font-bold text-lg">⚡ Flash Sale</span>
                </div>
                <div className="flex items-center space-x-1 text-sm">
                  <Clock className="w-4 h-4" />
                  <span>Limited Time!</span>
                </div>
              </div>
              <a
                href="#explore"
                className="flex items-center space-x-1 text-white hover:text-yellow-300 text-sm font-medium mt-2 transition-colors duration-300"
              >
                <span>Explore</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>

            {/* Scrollable Product List */}
            <div className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-gray-100">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {flashSales.map((product) => (
                  <div
                    key={product.id}
                    className="group bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
                  >
                    <div className="relative mb-3">
                      <div className="w-full h-32 bg-gray-100 rounded-lg overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                        -{product.discount}%
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-sm font-semibold text-gray-900 group-hover:text-red-500 transition-colors duration-300 line-clamp-2">
                        {product.name}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold text-red-500">${product.salePrice}</span>
                        <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs text-gray-600">
                        <span>⏰ Ends in: {product.timeLeft}</span>
                        <span>🔥 Limited Stock</span>
                      </div>
                      <a
                        href="#add-to-cart"
                        className="flex items-center space-x-1 text-red-500 hover:text-red-600 text-sm font-medium transition-colors duration-300"
                      >
                        <ShoppingBag className="w-4 h-4" />
                        <span>Explore</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Explore More Button at Bottom */}
            <div className="bg-white p-4 border-t border-gray-100">
              <a
                href="#explore-more"
                className="flex items-center justify-center space-x-1 text-red-500 hover:text-red-600 text-sm font-medium transition-colors duration-300"
              >
                <span>Explore More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FlashSalesPopup;