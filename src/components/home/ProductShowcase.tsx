// src/components/ProductShowcase.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import { Product } from '../../types';
import bottle500ml from '../../assets/bootle500ml.png';
import gheeImage from '../../assets/ghee.png';
import comingSoonImage from '../../assets/comingsoon.jpeg';

const products: Product[] = [
  {
    id: 'whole-milk',
    name: 'GHEE 250g',
    description: 'Rich and creamy with full flavor, perfect for growing children.',
    price: 250,
    image: gheeImage,
  },
  {
    id: 'low-fat-milk',
    name: 'Low-Fat Milk',
    description: 'Less fat with all the essential nutrients and great taste.',
    price: 30,
    image: bottle500ml,
  },
  {
    id: 'coming-soon',
    image: comingSoonImage, // No name/price/description
  },
];

const ProductShowcase: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Milk Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a variety of farm-fresh milk products to suit every preference and dietary need
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
            >
              <div className="h-96 bg-gray-200 flex items-center justify-center">
                <img
                  src={
                    product.image ||
                    'https://images.pexels.com/photos/4187777/pexels-photo-4187777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                  }
                  alt={product.name || 'Coming Soon'}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="p-6">
                {product.name && (
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {product.name}
                    </h3>
                    {product.price !== undefined && (
                      <span className="text-green-500 font-bold">
                        ₹{product.price}
                      </span>
                    )}
                  </div>
                )}
                {product.description && (
                  <p className="text-gray-600 mb-4">{product.description}</p>
                )}
                {product.name && (
                  <Link to={`/products/${product.id}`}>
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/products">
            <Button>View All Products</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
