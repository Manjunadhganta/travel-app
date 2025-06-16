import React from 'react'
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
const Pricing = () => {
  return (
    <div>
        {/* Pricing Plans */}
        <motion.section
          id="plans"
          className="py-16 bg-gray-50"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Perfect Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Flexible monthly plans crafted for travel-loving families. Choose from Basic, Pro, or Premium – each offering a mix of domestic, devotional, and international trips with full coverage and convenience.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all transform hover:scale-105">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Basic</h3>
                <p className="text-gray-600 mb-6">Perfect for occasional travelers</p>
                <div className="text-4xl font-bold text-[#31AD5A] mb-2">
                  ₹2350<span className="text-lg text-gray-500">/month</span>
                </div>
                <p className="text-sm text-gray-500">Per family</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">3 trips per year</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">2 Domestic Trip</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">1 Devotional Trip</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Trip cancellation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Baggage protection</span>
                </li>
              </ul>

              <button className="w-full bg-[#31AD5A] text-white mt-30 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
                Choose Basic
              </button>
            </div>

            {/* Pro Plan */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all transform hover:scale-105 border-2 border-[#31AD5A] relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-[#31AD5A] text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Pro</h3>
                <p className="text-gray-600 mb-6">Ideal for regular travelers</p>
                <div className="text-4xl font-bold text-[#31AD5A] mb-2">
                  ₹3350<span className="text-lg text-gray-500">/month</span>
                </div>
                <p className="text-sm text-gray-500">Per family</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">4 trips per year</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">3 Domestic Trip</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">1 Devotional Trip</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Trip cancellation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Enhanced baggage protection</span>
                </li>
              </ul>

              <button className="w-full bg-[#31AD5A] text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors mt-29">
                Choose Pro
              </button>
            </div>

            {/* Premium Plan */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all transform hover:scale-105">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium</h3>
                <p className="text-gray-600 mb-6">Ultimate protection for adventurers</p>
                <div className="text-4xl font-bold text-[#31AD5A] mb-2">
                  ₹5350<span className="text-lg text-gray-500">/month</span>
                </div>
                <p className="text-sm text-gray-500">Per family</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">5 trips per year</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">3 Domestic Trip</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">1 Devotional Trip</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">1 <span className='text-[#31AD5A]'>International Trip</span></span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Trip Cancellation </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Enhanced Baggage Protection</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Medical Support</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">VIP customer support</span>
                </li>
              </ul>

              <button className="w-full bg-[#31AD5A] text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
                Choose Premium
              </button>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default Pricing