import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 bg-green-500">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Enjoy Farm-Fresh Milk?
          </h2>
          <p className="text-white text-lg mb-8 opacity-90">
            Join hundreds of families enjoying fresh milk delivered to their doorstep.
            Start your subscription today and taste the difference tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/register">
              <Button className="bg-white text-green-600 hover:bg-gray-100 border-white" size="lg">
                Start Your Delivery
              </Button>
            </Link>
            <Link to="/contact">
              <Button className="bg-transparent text-white border-white hover:bg-green-600" variant="outline" size="lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;