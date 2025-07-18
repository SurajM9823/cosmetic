import React, { useEffect, useRef } from 'react';
import { TrendingUp, ShoppingBag, Star, ArrowRight } from 'lucide-react';
import tiktokVideo from '../assets/tiktok.mp4'; // Adjust path if BestSellers.tsx is in a subdirectory

const BestSellers = () => {
  const bestSellers = [
    {
      id: 1,
      name: 'Radiant Glow Foundation',
      price: 42.99,
      image: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=200',
      sold: 1234,
      rating: 4.9,
      discount: 30
    },
    {
      id: 2,
      name: 'Velvet Matte Lipstick',
      price: 28.99,
      image: 'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=200',
      sold: 987,
      rating: 4.8,
      discount: 25
    },
    {
      id: 3,
      name: 'Shimmer Eyeshadow',
      price: 35.99,
      image: 'https://images.pexels.com/photos/2533189/pexels-photo-2533189.jpeg?auto=compress&cs=tinysrgb&w=200',
      sold: 876,
      rating: 4.7,
      discount: 20
    },
    {
      id: 4,
      name: 'Vitamin C Serum',
      price: 52.99,
      image: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=200',
      sold: 765,
      rating: 4.9,
      discount: 35
    },
    {
      id: 5,
      name: 'Hydrating Moisturizer',
      price: 39.99,
      image: 'https://images.pexels.com/photos/935789/pexels-photo-935789.jpeg?auto=compress&cs=tinysrgb&w=200',
      sold: 654,
      rating: 4.6,
      discount: 15
    },
    {
      id: 6,
      name: 'Bold Eyeliner',
      price: 19.99,
      image: 'https://images.pexels.com/photos/2533189/pexels-photo-2533189.jpeg?auto=compress&cs=tinysrgb&w=200',
      sold: 543,
      rating: 4.5,
      discount: 10
    }
  ];

  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (videoRef.current) {
            if (entry.isIntersecting && videoRef.current.readyState >= 2) {
              videoRef.current.play().catch((error) => {
                console.error('Video playback failed:', error);
              });
            } else {
              videoRef.current.pause();
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <section className="py-16 bg-white/20 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Best Seller Cards (75% width, slightly larger) */}
          <div className="w-full lg:w-[75%]">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
              {bestSellers.map((product, index) => (
                <div
                  key={product.id}
                  className="group bg-white rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className="relative mb-3">
                    <div className="absolute -top-2 -left-2 w-5 h-5 bg-gradient-to-r from-rose-500 to-purple-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                      {index + 1}
                    </div>
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-rose-500 to-purple-600 text-white rounded-full flex items-center justify-center text-xs font-bold px-3 py-1 min-w-[60px] sm:min-w-[70px]">
                      <span>{product.discount}% Off</span>
                    </div>
                    <div className="w-full h-28 bg-gray-100 rounded-xl overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-sm font-semibold text-gray-900 group-hover:text-rose-500 transition-colors duration-300 line-clamp-2">
                      {product.name}
                    </h3>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${
                              i < Math.floor(product.rating) ? 'text-yellow-300 fill-current' : 'text-gray-300'
                            }`}
                          />
                        ))}
                        <span className="text-xs text-gray-600">({product.rating})</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-base font-bold text-gray-900">${product.price}</span>
                      <span className="text-xs text-gray-500">{product.sold} sold</span>
                    </div>

                    <button className="w-full bg-gradient-to-r from-rose-500 to-purple-600 text-white py-2 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-1 text-xs">
                      <ShoppingBag className="w-3 h-3" />
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* TikTok Screen (25% width, transparent frosted glass) */}
          <div className="w-full lg:w-[25%] flex justify-center lg:justify-end">
            <div className="w-full h-[500px] bg-white/95 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <video
                ref={videoRef}
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src={tiktokVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-4 w-full">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=200"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-white font-semibold text-sm">@AptivaraBeauty</span>
                </div>
                <p className="text-white text-xs mb-2">
                  Showcasing our stunning Aptivara Bratnaagr Collection! ✨ #BratnaagrCollection #BeautyVibes
                </p>
                <a
                  href="https://www.tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white/20 backdrop-blur-sm text-white px-4 py-1.5 rounded-full font-medium hover:bg-white/30 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-1 text-xs"
                >
                  <span>Watch on TikTok</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;