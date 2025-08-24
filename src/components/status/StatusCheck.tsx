import React, { useState } from 'react';
import { Search, ClipboardCheck, Truck, AlertCircle } from 'lucide-react';
import Button from '../ui/Button';
import { OrderStatus } from '../../types';

interface StatusData {
  orderId: string;
  customerName: string;
  status: OrderStatus;
  nextDelivery: string;
  items: {
    product: string;
    quantity: number;
  }[];
}

const dummyStatusData: StatusData = {
  orderId: 'VM123456',
  customerName: 'John Smith',
  status: 'processing',
  nextDelivery: '2025-06-03',
  items: [
    { product: 'Whole Milk (1L)', quantity: 2 },
    { product: 'Low-Fat Milk (500ml)', quantity: 1 },
  ],
};

const StatusCheck: React.FC = () => {
  const [orderId, setOrderId] = useState('');
  const [loading, setLoading] = useState(false);
  const [orderData, setOrderData] = useState<StatusData | null>(null);
  const [error, setError] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    // Simulate API call
    setTimeout(() => {
      if (orderId.trim() === '') {
        setError('Please enter a valid order ID');
        setOrderData(null);
      } else if (orderId.toLowerCase() === 'vm123456' || orderId.toLowerCase() === 'test') {
        setOrderData(dummyStatusData);
        setError('');
      } else {
        setError('Order not found. Please check the ID and try again.');
        setOrderData(null);
      }
      setLoading(false);
    }, 1000);
  };
  
  const getStatusIcon = (status: OrderStatus) => {
    switch (status) {
      case 'pending':
        return <AlertCircle className="text-amber-500\" size={24} />;
      case 'processing':
        return <Truck className="text-blue-500" size={24} />;
      case 'delivered':
        return <ClipboardCheck className="text-green-500" size={24} />;
      default:
        return <AlertCircle className="text-gray-500" size={24} />;
    }
  };
  
  const getStatusText = (status: OrderStatus) => {
    switch (status) {
      case 'pending':
        return 'Pending Confirmation';
      case 'processing':
        return 'Processing - Your order is being prepared';
      case 'delivered':
        return 'Delivered';
      default:
        return 'Unknown';
    }
  };
  
  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold text-center text-gray-900 mb-2">
        Check Delivery Status
      </h3>
      <p className="text-gray-600 text-center mb-6">
        Enter your order ID to check the status of your delivery
      </p>
      
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-grow">
            <input
              type="text"
              placeholder="Enter your order ID (e.g., VM123456)"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
            />
          </div>
          <Button 
            type="submit" 
            disabled={loading}
            className="flex items-center justify-center"
          >
            <Search size={18} className="mr-2" />
            {loading ? 'Checking...' : 'Check Status'}
          </Button>
        </div>
      </form>
      
      {error && (
        <div className="p-4 bg-red-50 text-red-700 rounded-md mb-6">
          <p className="flex items-center">
            <AlertCircle size={18} className="mr-2" />
            {error}
          </p>
        </div>
      )}
      
      {orderData && (
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-gray-50 p-4 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h4 className="font-semibold text-lg text-gray-900">
                Order #{orderData.orderId}
              </h4>
              <div className="flex items-center">
                {getStatusIcon(orderData.status)}
                <span className="ml-2 font-medium">
                  {getStatusText(orderData.status)}
                </span>
              </div>
            </div>
          </div>
          
          <div className="p-4">
            <div className="mb-4">
              <p className="text-gray-700">
                <span className="font-medium">Customer:</span> {orderData.customerName}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Next Delivery:</span> {new Date(orderData.nextDelivery).toLocaleDateString()}
              </p>
            </div>
            
            <h5 className="font-semibold text-gray-900 mb-2">Order Items:</h5>
            <ul className="space-y-2 mb-4">
              {orderData.items.map((item, index) => (
                <li key={index} className="flex justify-between">
                  <span className="text-gray-700">{item.product}</span>
                  <span className="font-medium">{item.quantity}x</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-gray-600 text-sm">
                For any questions about your order, please contact our customer service at{' '}
                <a href="tel:+1234567890" className="text-green-500 hover:underline">
                  (123) 456-7890
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StatusCheck;