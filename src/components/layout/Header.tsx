import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../ui/Logo';
import Button from '../ui/Button';
import { NavItem } from '../../types';

const navItems: NavItem[] = [
  { title: 'Home', href: '/' },
  { title: 'About Us', href: '/about' },
  { title: 'Products', href: '/products' },
  { title: 'How It Works', href: '/how-it-works' },
  { title: 'Contact', href: '/contact' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="z-10">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.title}
              to={item.href}
              className="text-gray-700 hover:text-green-500 font-medium transition-colors"
            >
              {item.title}
            </Link>
          ))}

          {/* ✅ Admin link (Desktop) */}
          <Link
            to="/admin"
            className="text-gray-700 hover:text-red-500 font-medium transition-colors"
          >
            Admin
          </Link>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <Link to="/check-status">
            <Button variant="outline" size="sm">
              Check Status
            </Button>
          </Link>
          <Link to="/register">
            <Button size="sm">Register Now</Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden z-10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-gray-900" />
          ) : (
            <Menu className="h-6 w-6 text-gray-900" />
          )}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-white z-0 flex flex-col pt-20 px-6">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.href}
                  className="text-gray-900 hover:text-green-500 font-medium text-lg py-2 border-b border-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}

              <Link
                to="/check-status"
                className="text-gray-900 hover:text-green-500 font-medium text-lg py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Check Status
              </Link>

              <Link
                to="/register"
                className="text-green-500 font-bold text-lg py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Register Now
              </Link>

              {/* ✅ Admin link (Mobile) */}
              <Link
                to="/admin"
                className="text-red-500 font-bold text-lg py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Admin
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
