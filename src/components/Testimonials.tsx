import React from 'react';
import { Star, Quote, User } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      location: 'Biratnagar',
      rating: 5,
      comment: 'Amazing quality products! The lipstick I bought lasted all day and the color was exactly as shown. Pathivara Cosmetic has become my go-to store for all beauty needs.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 2,
      name: 'Anjali Rai',
      location: 'Dharan',
      rating: 5,
      comment: 'Excellent customer service and authentic products. I love their foundation collection - perfect match for my skin tone. Highly recommended!',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 3,
      name: 'Sunita Thapa',
      location: 'Itahari',
      rating: 5,
      comment: 'Best cosmetic shop in the region! Great prices, quality products, and the staff is very knowledgeable. They helped me choose the perfect skincare routine.',
      image: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-indigo-100 px-4 py-2 rounded-full mb-4">
            <Star className="w-4 h-4 text-indigo-600 fill-current" />
            <span className="text-sm font-medium text-indigo-700">Customer Reviews</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
              Customers Say
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm">
            Don't just take our word for it. Here's what our valued customers have to say about their experience with Pathivara Cosmetic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-gray-600">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex items-center space-x-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                ))}
              </div>

              <div className="relative">
                <Quote className="absolute -top-1 -left-1 w-6 h-6 text-indigo-200" />
                <p className="text-gray-700 italic pl-4 leading-relaxed text-sm">
                  "{testimonial.comment}"
                </p>
              </div>

              <div className="mt-3 pt-3 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">Verified Purchase</span>
                  <div className="flex items-center space-x-1 text-green-600">
                    <User className="w-3 h-3" />
                    <span className="text-xs">Verified Customer</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-gray-900 font-semibold text-sm">4.9 out of 5</span>
            <span className="text-gray-600 text-sm">based on 1,247 reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;