import React from 'react';
import { ShoppingBag, Heart, Star, Eye } from 'lucide-react';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Premium Matte Lipstick',
      brand: 'LuxeBeauty',
      price: 29.99,
      originalPrice: 39.99,
      rating: 4.8,
      reviews: 234,
      image: 'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=400',
      badge: 'Best Seller',
      colors: ['#DC2626', '#EC4899', '#7C3AED', '#059669']
    },
    {
      id: 2,
      name: 'Hydrating Face Serum',
      brand: 'GlowSkin',
      price: 45.99,
      originalPrice: 59.99,
      rating: 4.9,
      reviews: 189,
      image: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=400',
      badge: 'New',
      colors: []
    },
    {
      id: 3,
      name: 'Eyeshadow Palette Pro',
      brand: 'ColorMagic',
      price: 52.99,
      originalPrice: 69.99,
      rating: 4.7,
      reviews: 456,
      image: 'https://images.pexels.com/photos/2533189/pexels-photo-2533189.jpeg?auto=compress&cs=tinysrgb&w=400',
      badge: 'Sale',
      colors: ['#8B5CF6', '#EC4899', '#F59E0B', '#10B981']
    },
    {
      id: 4,
      name: 'Foundation Perfect Match',
      brand: 'FlawlessBase',
      price: 38.99,
      originalPrice: 48.99,
      rating: 4.6,
      reviews: 312,
      image: 'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=400',
      badge: 'Popular',
      colors: ['#F3E8FF', '#FDF2F8', '#FEF3C7', '#F0FDF4']
    },
    {
      id: 5,
      name: 'Luxury Perfume Set',
      brand: 'Essence',
      price: 89.99,
      originalPrice: 119.99,
      rating: 4.9,
      reviews: 167,
      image: 'https://images.pexels.com/photos/1190829/pexels-photo-1190829.jpeg?auto=compress&cs=tinysrgb&w=400',
      badge: 'Premium',
      colors: []
    },
    {
      id: 6,
      name: 'Nail Polish Collection',
      brand: 'NailArt',
      price: 24.99,
      originalPrice: 34.99,
      rating: 4.5,
      reviews: 203,
      image: 'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=400',
      badge: 'Limited',
      colors: ['#F87171', '#60A5FA', '#34D399', '#FBBF24']
    }
  ];

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'Best Seller': return 'bg-rose-500';
      case 'New': return 'bg-green-500';
      case 'Sale': return 'bg-red-500';
      case 'Popular': return 'bg-blue-500';
      case 'Premium': return 'bg-purple-500';
      case 'Limited': return 'bg-orange-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-rose-100 px-4 py-2 rounded-full mb-4">
            <Star className="w-4 h-4 text-rose-500 fill-current" />
            <span className="text-sm font-medium text-rose-700">Featured Products</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-purple-600">
              Best Sellers
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm">
            Discover the products our customers love most. Hand-picked for quality, performance, and stunning results.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Badge */}
                <div className={`absolute top-2 left-2 ${getBadgeColor(product.badge)} text-white px-2 py-1 rounded-full text-xs font-semibold`}>
                  {product.badge}
                </div>

                {/* Quick Actions */}
                <div className="absolute top-2 right-2 flex flex-col space-y-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200">
                    <Heart className="w-3 h-3 text-gray-700 hover:text-rose-500" />
                  </button>
                  <button className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200">
                    <Eye className="w-3 h-3 text-gray-700 hover:text-rose-500" />
                  </button>
                </div>

                {/* Add to Cart Button */}
                <div className="absolute bottom-2 left-2 right-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <button className="w-full bg-rose-500 text-white py-2 rounded-full font-semibold hover:bg-rose-600 transition-colors duration-200 flex items-center justify-center space-x-1 text-xs">
                    <ShoppingBag className="w-3 h-3" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>

              <div className="p-3">
                <div className="mb-2">
                  <p className="text-xs text-gray-500 mb-1">{product.brand}</p>
                  <h3 className="text-sm font-semibold text-gray-900 group-hover:text-rose-600 transition-colors duration-300 line-clamp-2">
                    {product.name}
                  </h3>
                </div>

                <div className="flex items-center space-x-1 mb-2">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-600">({product.reviews})</span>
                </div>

                {product.colors.length > 0 && (
                  <div className="flex items-center space-x-1 mb-2">
                    <span className="text-xs text-gray-600">Colors:</span>
                    <div className="flex space-x-1">
                      {product.colors.slice(0, 3).map((color, index) => (
                        <div
                          key={index}
                          className="w-3 h-3 rounded-full border border-gray-200 cursor-pointer hover:border-gray-400 transition-colors duration-200"
                          style={{ backgroundColor: color }}
                        ></div>
                      ))}
                      {product.colors.length > 3 && (
                        <span className="text-xs text-gray-500">+{product.colors.length - 3}</span>
                      )}
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <span className="text-sm font-bold text-gray-900">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-xs text-gray-500 line-through">${product.originalPrice}</span>
                    )}
                  </div>
                  {product.originalPrice && (
                    <div className="text-xs text-green-600 font-semibold">
                      Save ${(product.originalPrice - product.price).toFixed(2)}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default FeaturedProducts;