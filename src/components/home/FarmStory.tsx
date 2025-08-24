import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const FarmStory: React.FC = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="w-full h-[100vh] relative"> {/* Increased height to full screen */}
        <img
          src="/buffolos.jpeg"  // ✅ make sure it's in public/
          alt="Farm background"
          className="w-full h-full object-cover object-center"
        />

        {/* Text Overlay */}
        <div className="absolute top-1/2 left-8 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-6 md:p-10 rounded-2xl max-w-xl shadow-lg">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            From Our Farm to Your Family
          </h2>
          <p className="mb-4 text-lg md:text-xl">
            Every bottle tells a story of care, dedication, and the timeless tradition of pure dairy farming.
          </p>
          <Link to="/about">
            <Button className="bg-white text-black hover:bg-gray-100">Join Our Family</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FarmStory;
