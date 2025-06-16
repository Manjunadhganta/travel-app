import React from 'react'
import { Shield, Plane, Globe, Phone, Mail, MapPin, Check, Star, Users, Calendar, DollarSign } from 'lucide-react';
const Footer = () => {
  return (
    <div>
        {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="text-xl font-bold text-white">Safe<span className="text-[#31AD5A]">Journey.</span></span>
              </div>
              <p className="text-gray-400">
                Explore the world on your terms <br />with travel plans that fit your lifestyle.
              </p>
              <div className="flex space-x-4">
                <div className="bg-gray-800 p-2 rounded-lg">
                  <Star className="h-5 w-5 text-yellow-400" />
                </div>
                <div className="bg-gray-800 p-2 rounded-lg">
                  <Globe className="h-5 w-5 text-blue-400" />
                </div>
                <div className="bg-gray-800 p-2 rounded-lg">
                  <Shield className="h-5 w-5 text-green-400" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#plans" className="hover:text-white transition-colors">Plans</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Claims</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Emergency Assistance</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">License Info</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Compliance</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} SafeJourney Travels. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer