import React, { useEffect } from 'react';
import StatusCheck from '../components/status/StatusCheck';
import Logo from '../components/ui/Logo';
import { Link } from 'react-router-dom';

const StatusPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Check Delivery Status - Village Milk';
  }, []);

  return (
    <main className="py-16 px-4 min-h-screen flex flex-col">
      <div className="container mx-auto max-w-4xl">
        <div className="flex justify-between items-center mb-8">
          <Link to="/" className="flex items-center">
            <Logo size="lg" />
          </Link>
          
          <div className="flex space-x-4">
            <Link to="/register" className="text-gray-600 hover:text-green-500 transition-colors font-medium">
              Register
            </Link>
            <Link to="/" className="text-gray-600 hover:text-green-500 transition-colors font-medium">
              Back to Home
            </Link>
          </div>
        </div>
        
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Check Your Delivery Status
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Track your milk delivery order and get real-time updates
          </p>
        </div>
        
        <StatusCheck />
      </div>
    </main>
  );
};

export default StatusPage;