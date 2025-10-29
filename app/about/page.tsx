"use client";

export default function About() {
  return (
    <div>
      {/* Header Section */}
      <section className="section-container pt-32 pb-12">
        <h1 className="heading-xl mb-6">About Robert Petillo</h1>
        <p className="text-xl text-gray-600 max-w-3xl">
          From Belize to New York City—entrepreneur, builder, and innovator creating meaningful solutions that serve people and communities.
        </p>
      </section>

      {/* Bio Section - Redesigned */}
      <section className="relative py-20">
        {/* Background accent */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Opening Impact Statement */}
          <div className="mb-16 text-center">
            <div className="inline-block mb-4 px-6 py-2 bg-gray-900 text-white text-sm font-medium rounded-full">
              The Journey
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              From Belize to New York,<br />
              <span className="text-gray-600">Building Businesses That Matter</span>
            </h2>
          </div>

          {/* Story Content - Modern Layout */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Left Column */}
            <div className="space-y-8">
              <div className="border-l-4 border-gray-900 pl-6">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Roots in Belize</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Growing up in Belize, I learned the value of <strong>teamwork, perseverance, and service</strong> from 
                  my grandparents. My grandfather was a farmer, my grandmother a homemaker, and together we formed a small 
                  business selling fruits and vegetables in our community.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  I learned early that every role mattered and that <strong>listening to customers was key to building 
                  trust and success</strong>.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border-2 border-gray-200 shadow-sm">
                <p className="text-xl font-medium text-gray-900 italic">
                  "Communication, adaptability, and curiosity became the foundation of my work ethic."
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <div className="border-l-4 border-gray-900 pl-6">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Evolution Through Technology</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Before joining Pursuit, I worked as an <strong>HVAC Service Engineer</strong>, where precision, 
                  patience, and problem-solving were essential. Transitioning into tech, I rediscovered the same 
                  satisfaction in building things that improve people's lives.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  Through <strong>Pursuit's AI Native Program</strong>, I've grown from beginner to builder, mastering 
                  RAG systems, APIs, and end-to-end web app development.
                </p>
              </div>

              <div className="bg-gray-900 text-white p-6 rounded-xl shadow-lg">
                <p className="text-lg leading-relaxed">
                  Today, I design and build <strong>AI-powered applications</strong> that connect technology to real 
                  human needs—from voice assistants to sustainable systems management.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Full-Width Statement */}
          <div className="text-center py-12 border-t-2 border-gray-200">
            <p className="text-2xl md:text-3xl font-medium text-gray-900 max-w-4xl mx-auto leading-relaxed">
              Guided by <span className="text-gray-600">empathy</span>, <span className="text-gray-600">creativity</span>, 
              and <span className="text-gray-600">collaboration</span>, I continue to merge practical skills with a 
              passion for <strong>innovation and community uplift</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Animated Brand Showcase */}
      <section className="py-16 bg-gray-50 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 mb-8">
          <h2 className="heading-md text-center mb-4">My Brands & Ventures</h2>
          <p className="text-center text-gray-600 mb-12">7 diverse businesses across multiple industries</p>
        </div>
        
        {/* Animated horizontal scroll */}
        <div className="relative">
          <div className="animate-scroll flex gap-12 items-center">
            {/* MY NY Brands */}
            <div className="flex-shrink-0 w-[250px] h-[250px] flex items-center justify-center">
              <img src="/my-ny-brands-logo.png" alt="MY NY Brands" className="w-full h-full object-contain hover:scale-105 transition-transform duration-300" />
            </div>

            {/* Black Orchyd */}
            <div className="flex-shrink-0 w-[250px] h-[250px] flex items-center justify-center">
              <img src="/black-orchyd-logo.png" alt="Black Orchyd" className="w-full h-full object-contain hover:scale-105 transition-transform duration-300" />
            </div>

            {/* Back Home Seamoss */}
            <div className="flex-shrink-0 w-[250px] h-[250px] flex items-center justify-center">
              <img src="/back-home-logo.png" alt="Back Home Seamoss" className="w-full h-full object-contain hover:scale-105 transition-transform duration-300" />
            </div>

            {/* Healthy Press */}
            <div className="flex-shrink-0 w-[250px] h-[250px] flex items-center justify-center">
              <img src="/healthy-press-logo.png" alt="Healthy Press" className="w-full h-full object-contain hover:scale-105 transition-transform duration-300" />
            </div>

            {/* AI Wear */}
            <div className="flex-shrink-0 w-[250px] h-[250px] flex items-center justify-center">
              <img src="/AI%20Wear.png" alt="AI Wear" className="w-full h-full object-contain hover:scale-105 transition-transform duration-300" />
            </div>

            {/* Agnes */}
            <div className="flex-shrink-0 w-[250px] h-[250px] flex items-center justify-center">
              <img src="/Agnes%20logo.png" alt="Agnes" className="w-full h-full object-contain hover:scale-105 transition-transform duration-300" />
            </div>

            {/* Auro */}
            <div className="flex-shrink-0 w-[250px] h-[250px] flex items-center justify-center">
              <img src="/auro-logo.png" alt="Auro" className="w-full h-full object-contain hover:scale-105 transition-transform duration-300" />
            </div>

            {/* Duplicate for seamless loop */}
            <div className="flex-shrink-0 w-[250px] h-[250px] flex items-center justify-center">
              <img src="/my-ny-brands-logo.png" alt="MY NY Brands" className="w-full h-full object-contain hover:scale-105 transition-transform duration-300" />
            </div>

            <div className="flex-shrink-0 w-[250px] h-[250px] flex items-center justify-center">
              <img src="/black-orchyd-logo.png" alt="Black Orchyd" className="w-full h-full object-contain hover:scale-105 transition-transform duration-300" />
            </div>

            <div className="flex-shrink-0 w-[250px] h-[250px] flex items-center justify-center">
              <img src="/back-home-logo.png" alt="Back Home Seamoss" className="w-full h-full object-contain hover:scale-105 transition-transform duration-300" />
            </div>

            <div className="flex-shrink-0 w-[250px] h-[250px] flex items-center justify-center">
              <img src="/healthy-press-logo.png" alt="Healthy Press" className="w-full h-full object-contain hover:scale-105 transition-transform duration-300" />
            </div>

            <div className="flex-shrink-0 w-[250px] h-[250px] flex items-center justify-center">
              <img src="/AI%20Wear.png" alt="AI Wear" className="w-full h-full object-contain hover:scale-105 transition-transform duration-300" />
            </div>

            <div className="flex-shrink-0 w-[250px] h-[250px] flex items-center justify-center">
              <img src="/Agnes%20logo.png" alt="Agnes" className="w-full h-full object-contain hover:scale-105 transition-transform duration-300" />
            </div>

            <div className="flex-shrink-0 w-[250px] h-[250px] flex items-center justify-center">
              <img src="/auro-logo.png" alt="Auro" className="w-full h-full object-contain hover:scale-105 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Business Details Section */}
      <section className="section-container py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="heading-lg mb-12 text-center">The Ventures</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* MY NY Brands */}
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-blue-600 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-3">
                <span className="text-white text-lg font-bold">NY</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">MY NY Brands</h3>
              <p className="text-gray-600 text-sm">
                Fashion label capturing NYC style and energy. Bold, diverse fashion for the cosmopolitan individual.
              </p>
            </div>

            {/* Black Orchyd */}
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-gray-900 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-900 to-gray-700 rounded-lg flex items-center justify-center mb-3">
                <span className="text-white text-lg font-bold">BO</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Black Orchyd</h3>
              <p className="text-gray-600 text-sm">
                Unique black hot sauce inspired by Belizean flavors. A tribute to heritage with an innovative twist.
              </p>
            </div>

            {/* Back Home Seamoss */}
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-emerald-600 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-green-700 rounded-lg flex items-center justify-center mb-3">
                <span className="text-white text-lg font-bold">BH</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Back Home Seamoss</h3>
              <p className="text-gray-600 text-sm">
                Premium seamoss products bringing the natural wellness of the Caribbean to health-conscious consumers.
              </p>
            </div>

            {/* Healthy Press */}
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-orange-500 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-3">
                <span className="text-white text-lg font-bold">HP</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Healthy Press</h3>
              <p className="text-gray-600 text-sm">
                Wellness and nutrition brand focused on healthy living through quality products and education.
              </p>
            </div>

            {/* AI Wear */}
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-700 rounded-lg flex items-center justify-center mb-3">
                <span className="text-white text-lg font-bold">AW</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">AI Wear</h3>
              <p className="text-gray-600 text-sm">
                Tech-inspired fashion merging wearable technology with contemporary style for the digital age.
              </p>
            </div>

            {/* Agnes */}
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-pink-500 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-lg flex items-center justify-center mb-3">
                <span className="text-white text-lg font-bold">AG</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Agnes</h3>
              <p className="text-gray-600 text-sm">
                Innovative brand delivering unique products and experiences to discerning customers.
              </p>
            </div>

            {/* Auro */}
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-indigo-600 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-lg flex items-center justify-center mb-3">
                <span className="text-white text-lg font-bold">AU</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Auro</h3>
              <p className="text-gray-600 text-sm">
                Forward-thinking venture focused on innovation and creating solutions for tomorrow's challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills/Expertise Section */}
      <section className="section-container py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-lg mb-12 text-center">Skills & Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Business & Brand</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Brand Development</li>
                <li>• Product Innovation</li>
                <li>• Strategic Planning</li>
                <li>• Market Positioning</li>
                <li>• Business Operations</li>
                <li>• Customer Relations</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Technology & AI</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• RAG Systems</li>
                <li>• API Development</li>
                <li>• Web App Development</li>
                <li>• AI Integration</li>
                <li>• Machine Learning</li>
                <li>• Voice Assistants</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Industries</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Food & Beverage</li>
                <li>• Fashion & Apparel</li>
                <li>• Technology & AI</li>
                <li>• Consumer Products</li>
                <li>• E-commerce</li>
                <li>• Service Engineering</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-container py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-lg mb-12 text-center">Core Values</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">
                Creating products that stand out and challenge conventions, from black hot sauce to AI solutions.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Service</h3>
              <p className="text-gray-600">
                Committed to serving others through meaningful solutions that improve lives and communities.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Authenticity</h3>
              <p className="text-gray-600">
                Staying true to Belizean roots while embracing new opportunities and cultural influences.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">
                Precision and quality in every detail, from flavor profiles to code architecture.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

