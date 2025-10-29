export default function Portfolio() {
  return (
    <div>
      {/* Header Section */}
      <section className="section-container pt-32 pb-12">
        <h1 className="heading-xl mb-6">My Portfolio</h1>
        <p className="text-xl text-gray-600 max-w-3xl">
          From hot sauce to high fashion to cutting-edge AI technology—explore the businesses and innovations 
          that define my entrepreneurial journey.
        </p>
      </section>

      {/* Brand Logos Grid */}
      <section className="section-container py-12">
        <h2 className="text-2xl font-semibold text-center mb-12 text-gray-900">Brand Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto justify-items-center">
          {/* MY NY Brands */}
          <img 
            src="/my-ny-brands-logo.png" 
            alt="MY NY Brands" 
            className="w-[250px] h-[250px] object-contain hover:scale-105 transition-transform duration-300"
          />

          {/* Black Orchyd */}
          <img 
            src="/black-orchyd-logo.png" 
            alt="Black Orchyd Hot Sauce" 
            className="w-[250px] h-[250px] object-contain hover:scale-105 transition-transform duration-300"
          />

          {/* Back Home Seamoss */}
          <img 
            src="/back-home-logo.png" 
            alt="Back Home Seamoss" 
            className="w-[250px] h-[250px] object-contain hover:scale-105 transition-transform duration-300"
          />

          {/* Healthy Press */}
          <img 
            src="/healthy-press-logo.png" 
            alt="Healthy Press" 
            className="w-[250px] h-[250px] object-contain hover:scale-105 transition-transform duration-300"
          />

          {/* AI Wear */}
          <img 
            src="/AI%20Wear.png" 
            alt="AI Wear" 
            className="w-[250px] h-[250px] object-contain hover:scale-105 transition-transform duration-300"
          />

          {/* Agnes */}
          <img 
            src="/Agnes%20logo.png" 
            alt="Agnes" 
            className="w-[250px] h-[250px] object-contain hover:scale-105 transition-transform duration-300"
          />

          {/* Auro */}
          <img 
            src="/auro-logo.png" 
            alt="Auro" 
            className="w-[250px] h-[250px] object-contain hover:scale-105 transition-transform duration-300"
          />
        </div>
      </section>

      {/* Brand Details */}
      <section className="section-container py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-lg mb-12 text-center">The Evolution of Innovation</h2>
          
          <div className="space-y-12">
            {/* AI Consulting Detailed */}
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl font-bold">AI</span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">AI Consulting & Technology Solutions</h3>
                  <p className="text-gray-500 text-sm">Latest Innovation</p>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Building on years of entrepreneurial experience, I'm now venturing into the frontier of artificial 
                intelligence and technology consulting. This represents my commitment to staying at the cutting edge 
                of business innovation.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                I partner with businesses looking to scale and transform their operations through AI implementation. 
                Whether it's automating workflows, enhancing customer experiences, or unlocking data-driven insights, 
                I help companies leverage AI technology to achieve competitive advantage and sustainable growth.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mt-6">
                <h4 className="font-semibold text-gray-900 mb-3">Services Offered:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• AI Strategy Development & Implementation</li>
                  <li>• Business Process Automation</li>
                  <li>• Machine Learning Solutions</li>
                  <li>• AI-Powered Marketing & Analytics</li>
                  <li>• Custom AI Tools & Integration</li>
                  <li>• Training & Change Management</li>
                </ul>
              </div>
            </div>

            {/* Journey Summary */}
            <div className="text-center py-8">
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                From hot sauce to seamoss, fashion to wellness, and now pioneering AI solutions—my portfolio of 
                7 diverse brands reflects a constant pursuit of innovation, quality, and a passion for creating 
                products and services that improve lives and empower businesses to grow.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

