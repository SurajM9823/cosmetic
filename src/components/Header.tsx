import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, Menu, X, User, Heart, ChevronDown } from 'lucide-react';
import Logo from './Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 0.95;
      setIsScrolled(window.scrollY > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '#' },
    { name: 'Shop', href: '#', submenu: ['Face', 'Eyes', 'Lips', 'Nails', 'Skincare', 'Fragrance'] },
    { name: 'Collections', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  const toggleSubmenu = (name) => {
    setOpenSubmenu(openSubmenu === name ? null : name);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-rose-100' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Left aligned */}
          <div className="flex items-center">
            <Logo 
              textColor={isScrolled ? 'text-gray-800' : 'text-white'}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div key={item.name} className="relative group">
                <a
                  href={item.href}
                  className={`font-medium transition-all duration-300 py-2 text-sm ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-rose-600' 
                      : 'text-white hover:text-rose-200'
                  }`}
                >
                  {item.name}
                </a>
                {item.submenu && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="py-2">
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem}
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-rose-50 hover:text-rose-600 transition-colors duration-200"
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            <button className={`p-2 transition-all duration-300 rounded-full ${
              isScrolled 
                ? 'text-gray-700 hover:text-rose-600 hover:bg-rose-50' 
                : 'text-white hover:text-rose-200 hover:bg-white/10'
            }`}>
              <User className="w-5 h-5" />
            </button>
            <button className={`p-2 transition-all duration-300 rounded-full ${
              isScrolled 
                ? 'text-gray-700 hover:text-rose-600 hover:bg-rose-50' 
                : 'text-white hover:text-rose-200 hover:bg-white/10'
            }`}>
              <Heart className="w-5 h-5" />
            </button>
            <button className={`p-2 transition-all duration-300 rounded-full relative ${
              isScrolled 
                ? 'text-gray-700 hover:text-rose-600 hover:bg-rose-50' 
                : 'text-white hover:text-rose-200 hover:bg-white/10'
            }`}>
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 text-white text-xs rounded-full flex items-center justify-center">
                3
              </span>
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 transition-all duration-300 ${
                isScrolled 
                  ? 'text-gray-700 hover:text-rose-600' 
                  : 'text-white hover:text-rose-200'
              }`}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mt-4 relative animate-fade-in">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full px-4 py-3 pl-12 border border-rose-200 rounded-full focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent bg-white/95 backdrop-blur-sm"
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-6 px-6 border-t border-rose-200/50 animate-fade-in bg-gradient-to-b from-rose-100 to-purple-100 backdrop-blur-md rounded-2xl shadow-lg">
            <nav className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <div key={item.name}>
                  <div className="flex items-center justify-between">
                    <a
                      href={item.href}
                      className="px-4 py-2 rounded-lg transition-colors duration-200 text-sm font-medium text-gray-900 hover:text-rose-500 hover:bg-rose-200/50 w-full"
                    >
                      {item.name}
                    </a>
                    {item.submenu && (
                      <button
                        onClick={() => toggleSubmenu(item.name)}
                        className="p-2 text-gray-900 hover:text-rose-500"
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${
                            openSubmenu === item.name ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                    )}
                  </div>
                  {item.submenu && openSubmenu === item.name && (
                    <div className="ml-4 mt-2 flex flex-col space-y-1 animate-fade-in">
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem}
                          href="#"
                          className="px-4 py-2 rounded-lg text-sm text-gray-800 hover:text-rose-500 hover:bg-rose-200/50 transition-colors duration-200"
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;