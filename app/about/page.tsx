"use client";

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-20 right-0 text-[20vw] font-black text-gray-100 select-none pointer-events-none">
          STORY
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-6">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest">
              <span className="w-12 h-px bg-black"></span>
              <span>About</span>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-none max-w-4xl">
            Building<br/>
            <span className="text-gray-400">The Future</span>
          </h1>
          
          <div className="flex items-start gap-6 max-w-3xl">
            <div className="w-1 h-32 bg-black flex-shrink-0"></div>
            <p className="text-2xl md:text-3xl font-light leading-tight">
              From Belize to New York City—entrepreneur, builder, and innovator creating 
              meaningful solutions across <span className="font-bold">7 brands</span> and <span className="font-bold">AI technology</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-y-4 border-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left: Chapter Numbers */}
            <div className="lg:col-span-2">
              <div className="sticky top-32">
                <p className="text-sm font-mono uppercase tracking-wider mb-2">Chapter</p>
                <div className="text-[8rem] font-black leading-none text-gray-900">01</div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="lg:col-span-10 space-y-16">
              {/* Belize */}
              <div>
                <h2 className="text-5xl font-black mb-6 uppercase">Roots in Belize</h2>
                <div className="border-l-4 border-black pl-8 space-y-6">
                  <p className="text-xl leading-relaxed">
                    Growing up in Belize, I learned the value of <strong>teamwork, perseverance, and service</strong> from 
                    my grandparents. My grandfather was a farmer, my grandmother a homemaker, and together we formed a small 
                    business selling fruits and vegetables in our community.
                  </p>
                  <p className="text-xl leading-relaxed">
                    I learned early that every role mattered and that <strong>listening to customers was key to building 
                    trust and success</strong>. Communication, adaptability, and curiosity became the foundation of my work ethic.
                  </p>
                </div>
              </div>

              {/* Tech Evolution */}
              <div className="pt-12 border-t-2 border-gray-200">
                <h2 className="text-5xl font-black mb-6 uppercase">Evolution Through Technology</h2>
                <div className="border-l-4 border-black pl-8 space-y-6">
                  <p className="text-xl leading-relaxed">
                    Before joining Pursuit, I worked as an <strong>HVAC Service Engineer</strong>, where precision, 
                    patience, and problem-solving were essential. Transitioning into tech, I rediscovered the same 
                    satisfaction in building things that improve people's lives.
                  </p>
                  <p className="text-xl leading-relaxed">
                    Through <strong>Pursuit's AI Native Program</strong>, I've grown from beginner to builder, mastering 
                    RAG systems, APIs, and end-to-end web app development.
                  </p>
                  <div className="bg-black text-white p-8 mt-8">
                    <p className="text-2xl font-light leading-relaxed">
                      Today, I design and build <strong className="font-bold">AI-powered applications</strong> that connect technology to real 
                      human needs—from voice assistants to sustainable systems management.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Brand Showcase */}
      <section className="py-20 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <h2 className="text-5xl md:text-6xl font-black text-white uppercase mb-4">The Portfolio</h2>
          <p className="text-2xl text-gray-400 font-light">7 diverse businesses across multiple industries</p>
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

      {/* Skills Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Left: Large Number */}
            <div className="lg:col-span-3">
              <div className="sticky top-32">
                <div className="text-[15vw] lg:text-[10rem] font-black leading-none text-gray-100">
                  02
                </div>
                <p className="text-sm font-mono uppercase tracking-wider mt-4">Expertise</p>
              </div>
            </div>

            {/* Right: Skills Grid */}
            <div className="lg:col-span-9">
              <div className="space-y-12">
                {/* Business */}
                <div className="border-l-4 border-black pl-8">
                  <h3 className="text-4xl font-black mb-6 uppercase">Business & Brand</h3>
                  <div className="grid sm:grid-cols-2 gap-4 text-lg">
                    <div>Brand Development</div>
                    <div>Product Innovation</div>
                    <div>Strategic Planning</div>
                    <div>Market Positioning</div>
                    <div>Business Operations</div>
                    <div>Customer Relations</div>
                  </div>
                </div>

                {/* Technology */}
                <div className="border-l-4 border-black pl-8">
                  <h3 className="text-4xl font-black mb-6 uppercase">Technology & AI</h3>
                  <div className="grid sm:grid-cols-2 gap-4 text-lg">
                    <div>RAG Systems</div>
                    <div>API Development</div>
                    <div>Web App Development</div>
                    <div>AI Integration</div>
                    <div>Machine Learning</div>
                    <div>Voice Assistants</div>
                  </div>
                </div>

                {/* Industries */}
                <div className="border-l-4 border-black pl-8">
                  <h3 className="text-4xl font-black mb-6 uppercase">Industries</h3>
                  <div className="grid sm:grid-cols-2 gap-4 text-lg">
                    <div>Food & Beverage</div>
                    <div>Fashion & Apparel</div>
                    <div>Technology & AI</div>
                    <div>Consumer Products</div>
                    <div>E-commerce</div>
                    <div>Service Engineering</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black uppercase mb-16">Core Values</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Innovation */}
            <div className="border-l-4 border-black pl-8 py-4">
              <h3 className="text-3xl font-black mb-4 uppercase">Innovation</h3>
              <p className="text-lg leading-relaxed">
                Creating products that stand out and challenge conventions, from black hot sauce to AI solutions.
              </p>
            </div>

            {/* Service */}
            <div className="border-l-4 border-black pl-8 py-4">
              <h3 className="text-3xl font-black mb-4 uppercase">Service</h3>
              <p className="text-lg leading-relaxed">
                Committed to serving others through meaningful solutions that improve lives and communities.
              </p>
            </div>

            {/* Authenticity */}
            <div className="border-l-4 border-black pl-8 py-4">
              <h3 className="text-3xl font-black mb-4 uppercase">Authenticity</h3>
              <p className="text-lg leading-relaxed">
                Staying true to Belizean roots while embracing new opportunities and cultural influences.
              </p>
            </div>

            {/* Excellence */}
            <div className="border-l-4 border-black pl-8 py-4">
              <h3 className="text-3xl font-black mb-4 uppercase">Excellence</h3>
              <p className="text-lg leading-relaxed">
                Precision and quality in every detail, from flavor profiles to code architecture.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

