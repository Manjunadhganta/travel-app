import React from 'react'
import world from '../assets/world.jpg';
import { motion } from 'framer-motion';
import { FaArrowDown } from "react-icons/fa";

const Hero = () => {
  return (
    <div>
        {/* Hero Section */}
       <motion.section
        id="home"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }} className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-teal-50 mt-15 mb-2"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  One Plan. 
                  <span className="text-[#31AD5A] block">Endless Journeys.</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Enjoy stress-free travel with our monthly subscription plans, designed for families who love to explore.
                  Each plan includes a fixed number of fully covered domestic or international trips per year.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <button className="bg-[#31AD5A] text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-all transform hover:scale-105 shadow-lg">
                  <a href="#plans">Explore Plans</a>
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-700 hover:text-blue-700 transition-colors">
                  <a href="#features">Learn More</a>
                </button>
              </div>

              
            </div>

            <img src={world} alt="" />

          </div>
        </div>
      </motion.section>
        <div className='flex items-center justify-center opacity-60'>
          <div className='h-[50px] w-[30px] rounded-full border-2 items-center justify-center md:flex hidden'>
            <motion.div
              className="flex items-center justify-center"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              <FaArrowDown />
            </motion.div>
        </div>
      </div>
  </div>
  )
}

export default Hero