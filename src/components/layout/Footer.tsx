import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import Logo from '../ui/Logo';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <Logo size="lg" className="mb-4" />
            <p className="text-gray-600 mb-4">
              Bringing farm-fresh milk directly to your doorstep since 1995.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-green-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-green-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-green-500 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-green-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-green-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-600 hover:text-green-500 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-gray-600 hover:text-green-500 transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-gray-600 hover:text-green-500 transition-colors">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h3 className="font-semibold text-gray-900 mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/delivery" className="text-gray-600 hover:text-green-500 transition-colors">
                  Milk Delivery
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-600 hover:text-green-500 transition-colors">
                  Dairy Products
                </Link>
              </li>
              <li>
                <Link to="/farm-tours" className="text-gray-600 hover:text-green-500 transition-colors">
                  Farm Tours
                </Link>
              </li>
              <li>
                <Link to="/corporate" className="text-gray-600 hover:text-green-500 transition-colors">
                  Corporate Orders
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-green-500 transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="font-semibold text-gray-900 mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin size={18} className="text-green-500 mr-2 mt-0.5" />
                <span className="text-gray-600">
                  123 Farm Lane, Green Meadows, CA 94568
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-green-500 mr-2" />
                <a href="tel:+1234567890" className="text-gray-600 hover:text-green-500">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-green-500 mr-2" />
                <a href="mailto:info@villagemilk.com" className="text-gray-600 hover:text-green-500">
                  info@villagemilk.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Village Milk. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-500 text-sm hover:text-green-500">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-500 text-sm hover:text-green-500">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;