import React, { useState } from 'react';
import { Mail, Gift, Sparkles, ArrowRight, ThumbsUp, MessageSquare, Share2 } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <section className="py-16 bg-gradient-to-br from-rose-500 to-purple-600 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white rounded-full animate-pulse"></div>
        <Sparkles className="absolute top-20 right-1/4 w-8 h-8 text-white animate-spin" />
        <Sparkles className="absolute bottom-32 left-1/3 w-6 h-6 text-white animate-bounce" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Newsletter Content (80% width) */}
          <div className="w-full lg:w-[80%] flex justify-center">
            <div className="max-w-4xl text-center">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Gift className="w-4 h-4 text-white" />
                <span className="text-sm font-medium text-white">Exclusive Offers</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Stay Updated with{' '}
                <span className="text-yellow-300">
                  Beauty Trends
                </span>
              </h2>

              <p className="text-white/90 mb-8 max-w-2xl mx-auto text-sm">
                Subscribe to our newsletter and be the first to know about new arrivals, exclusive offers, and beauty tips. Plus, get 15% off your first order!
              </p>

              <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-900 text-sm"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg text-sm"
                  >
                    Subscribe
                  </button>
                </div>
              </form>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Gift className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-1 text-sm">15% Off</h3>
                  <p className="text-white/80 text-xs">First order discount</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-1 text-sm">Early Access</h3>
                  <p className="text-white/80 text-xs">New product launches</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-1 text-sm">Beauty Tips</h3>
                  <p className="text-white/80 text-xs">Weekly expert advice</p>
                </div>
              </div>
            </div>
          </div>

          {/* Facebook Post UI (20% width, transparent with border) */}
          <div className="w-full lg:w-[20%] flex justify-center lg:justify-end">
            <div className="w-full h-[400px] bg-transparent border border-white/20 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="p-4 flex flex-col h-full">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=200"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-white font-semibold text-sm">@AptivaraBeauty</span>
                    <p className="text-white/60 text-xs">2h ago</p>
                  </div>
                </div>
                <p className="text-white text-xs mb-3">
                  Discover our Aptivara Bratnaagr Collection! ✨ #BeautyVibes #NewArrivals
                </p>
                <div className="flex-1 bg-gray-100 rounded-xl overflow-hidden mb-3 relative">
                  <img
                    src="https://images.pexels.com/photos/935789/pexels-photo-935789.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Aptivara Bratnaagr Collection"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-rose-100/20 to-transparent opacity-70"></div>
                </div>
                <div className="flex justify-between mb-3">
                  <button className="group flex items-center space-x-1 text-white/80 hover:text-white text-xs">
                    <ThumbsUp className="w-4 h-4 group-hover:fill-white transition-all duration-300" />
                    <span>Like</span>
                  </button>
                  <button className="group flex items-center space-x-1 text-white/80 hover:text-white text-xs">
                    <MessageSquare className="w-4 h-4 group-hover:fill-white transition-all duration-300" />
                    <span>Comment</span>
                  </button>
                  <button className="group flex items-center space-x-1 text-white/80 hover:text-white text-xs">
                    <Share2 className="w-4 h-4 group-hover:fill-white transition-all duration-300" />
                    <span>Share</span>
                  </button>
                </div>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white/20 backdrop-blur-sm text-white px-4 py-1.5 rounded-full font-medium hover:bg-white/30 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-1 text-xs"
                >
                  <span>View on Facebook</span>
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

export default Newsletter;