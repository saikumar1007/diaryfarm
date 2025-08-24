import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="pt-20 pb-12 lg:min-h-screen lg:flex lg:items-center bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4">
              <span className="text-gray-900 block">Fresh Bottled Milk</span>
              <span className="text-green-500 block">Delivered Daily</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8 max-w-lg">
              Fresh bottled milk delivered to your doorstep every morning.
              Experience the pure taste of farm-fresh dairy from happy,
              healthy cows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/register">
                <Button size="lg">Start Your Delivery</Button>
              </Link>
              <Link to="/how-it-works">
                <Button variant="outline" size="lg">Learn More</Button>
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 relative h-96 lg:h-[600px]">
            <div className="bg-white p-4 md:p-8 rounded-lg shadow-xl overflow-hidden h-full">
              <img
                src="/buffcow.png"
                alt="Fresh milk and dairy cows"
                className="w-full h-full rounded-lg object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-green-100 rounded-full z-0"></div>
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-green-200 rounded-full z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
