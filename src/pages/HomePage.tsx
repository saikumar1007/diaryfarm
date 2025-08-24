import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import FarmStory from '../components/home/FarmStory';
import ProductShowcase from '../components/home/ProductShowcase';
import Testimonials from '../components/home/Testimonials';
import CallToAction from '../components/home/CallToAction';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Village Milk - Fresh Milk Delivered Daily';
  }, []);

  return (
    <main>
      <Hero />
      <Features />
      <FarmStory />
      <ProductShowcase />
      <Testimonials />
      <CallToAction />
    </main>
  );
};

export default HomePage;