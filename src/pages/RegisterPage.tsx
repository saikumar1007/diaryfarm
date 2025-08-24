import React, { useEffect } from 'react';
import RegistrationForm from '../components/register/RegistrationForm';
import Logo from '../components/ui/Logo';
import { Link } from 'react-router-dom';

const RegisterPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Register for Milk Delivery - Village Milk';
  }, []);

  return (
    <main className="py-16 px-4 min-h-screen flex flex-col">
      <div className="container mx-auto max-w-4xl">
        <div className="flex justify-between items-center mb-8">
          <Link to="/" className="flex items-center">
            <Logo size="lg" />
          </Link>
          
          <div className="flex space-x-4">
            <Link to="/check-status" className="text-gray-600 hover:text-green-500 transition-colors font-medium">
              Check Status
            </Link>
            <Link to="/" className="text-gray-600 hover:text-green-500 transition-colors font-medium">
              Back to Home
            </Link>
          </div>
        </div>
        
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Register for Fresh Milk Delivery
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Join our family and enjoy fresh, quality milk delivered to your doorstep every morning
          </p>
        </div>
        
        <RegistrationForm />
      </div>
    </main>
  );
};

export default RegisterPage;