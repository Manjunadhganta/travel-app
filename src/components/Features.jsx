  import React from 'react'
  import { Shield, Globe, Phone} from 'lucide-react';

  const Features = () => {
    return (
      <div>
          {/* Features Section */}
        <section id='features' className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose <span className="text-3xl md:text-4xl font-bold text-gray-900">Safe<span className="text-[#31AD5A]">Journey?</span></span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We understand that every journey is precious. That's why we provide comprehensive coverage 
                with unmatched service and support.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-2xl hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Stress-Free Travel, Every Time</h3>
                <p className="text-gray-600">
                  Your subscription covers every journey — domestic, devotional, or international <br />based on your plan.
                </p>
              </div>

              <div className="text-center p-6 rounded-2xl hover:shadow-lg transition-shadow">
                <div className="bg-teal-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-teal-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Global Coverage</h3>
                <p className="text-gray-600">
                  Whether domestic or international, enjoy peace of mind wherever your adventures take you.
                </p>
              </div>

              <div className="text-center p-6 rounded-2xl hover:shadow-lg transition-shadow">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-orange-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">24/7 Support</h3>
                <p className="text-gray-600">
                  Our dedicated support team is available round the clock to assist you during emergencies.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }

  export default Features