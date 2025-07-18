import React, { useState, useEffect } from 'react';
import Loader from './components/Loader';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FeaturedProducts from './components/FeaturedProducts';
import BestSellers from './components/BestSellers';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import FlashSalesPopup from './components/FlashSalesPopup';
import ChatBox from './components/ChatBox';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <BestSellers />
      <About />
      <Testimonials />
      <Newsletter />
      <Footer />
      <FlashSalesPopup />
      <ChatBox />
    </div>
  );
}

export default App;