import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#' },
    { name: 'Contact', href: '#' },
    { name: 'Shipping Info', href: '#' },
    { name: 'Returns', href: '#' },
    { name: 'Size Guide', href: '#' },
    { name: 'FAQ', href: '#' }
  ];

  const categories = [
    { name: 'Face Makeup', href: '#' },
    { name: 'Eye Makeup', href: '#' },
    { name: 'Lip Products', href: '#' },
    { name: 'Skincare', href: '#' },
    { name: 'Nail Care', href: '#' },
    { name: 'Fragrance', href: '#' }
  ];

  const brands = [
    { name: 'Maybelline', href: '#' },
    { name: 'L\'Oréal', href: '#' },
    { name: 'Revlon', href: '#' },
    { name: 'MAC', href: '#' },
    { name: 'NYX', href: '#' },
    { name: 'Urban Decay', href: '#' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-rose-400 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Pathivara Cosmetic</h3>
                <p className="text-sm text-gray-400">Biratnagar</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted beauty destination in Biratnagar. We offer authentic, premium cosmetics from renowned international brands.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors duration-300">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors duration-300">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors duration-300">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.name}>
                  <a href={category.href} className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-rose-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-400">Main Road, Biratnagar</p>
                  <p className="text-sm text-gray-400">Morang, Nepal</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-rose-400" />
                <p className="text-sm text-gray-400">+977-21-12345</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-rose-400" />
                <p className="text-sm text-gray-400">info@pathivaracosmetic.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-rose-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-400">Mon - Sat: 9:00 AM - 8:00 PM</p>
                  <p className="text-sm text-gray-400">Sun: 10:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Brands */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <h4 className="text-lg font-semibold mb-4">Popular Brands</h4>
          <div className="flex flex-wrap gap-4">
            {brands.map((brand) => (
              <a
                key={brand.name}
                href={brand.href}
                className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-full text-sm transition-colors duration-300"
              >
                {brand.name}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Pathivara Cosmetic Biratnagar. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;