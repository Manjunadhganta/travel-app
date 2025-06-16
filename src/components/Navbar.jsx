import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-auto bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <a href="#">
                <span className="text-xl font-bold text-gray-900">
                  Safe<span className="text-[#31AD5A]">Journey.</span>
                </span>
              </a>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-700 transition-colors">Home</a>
              <a href="#features" className="text-gray-700 hover:text-blue-700 transition-colors">Why Choose Us?</a>
              <a href="#plans" className="text-gray-700 hover:text-blue-700 transition-colors">Plans</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-700 transition-colors">Contact</a>
            </nav>

            {/* Hamburger Icon (Mobile) */}
            <div className="md:hidden">
              <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700">
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>

            {/* Contact Us Button (Desktop Only) */}
            <div className="hidden md:block">
              <button className="bg-[#31AD5A] text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors">
                <a href="#contact">Contact Us</a>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white shadow-md px-4 py-4 space-y-4 flex flex-col items-center">
            <a href="#home" className="block text-gray-700 hover:text-blue-700 transition-colors">Home</a>
            <a href="#features" className="block text-gray-700 hover:text-blue-700 transition-colors">Why Choose Us?</a>
            <a href="#plans" className="block text-gray-700 hover:text-blue-700 transition-colors">Plans</a>
            <a href="#contact" className="block text-gray-700 hover:text-blue-700 transition-colors">Contact</a>
            <a href="#contact" className="inline-block w-full text-center bg-[#31AD5A] text-white py-2 rounded-lg hover:bg-blue-800 transition-colors">
              Contact Us
            </a>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
