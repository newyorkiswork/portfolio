export default function Portfolio() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-b-4 border-black">
        <div className="absolute top-20 left-0 text-[20vw] font-black text-gray-100 select-none pointer-events-none whitespace-nowrap">
          BRANDS
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-6">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest">
              <span className="w-12 h-px bg-black"></span>
              <span>Portfolio</span>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-none max-w-5xl">
            7 Brands.<br/>
            <span className="text-gray-400">One Vision.</span>
          </h1>
          
          <div className="flex items-start gap-6 max-w-3xl">
            <div className="w-1 h-24 bg-black flex-shrink-0"></div>
            <p className="text-2xl md:text-3xl font-light leading-tight">
              From hot sauce to high fashion to cutting-edge AI technology—a diverse portfolio 
              built on <span className="font-bold">innovation</span>, <span className="font-bold">quality</span>, and <span className="font-bold">purpose</span>.
            </p>
          </div>
        </div>
      </section>

      {/* MY NY Brands */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-b-2 border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Logo & Info */}
            <div>
              <div className="text-sm font-mono uppercase tracking-widest mb-4">Brand 01</div>
              <img 
                src="/my-ny-brands-logo.png" 
                alt="MY NY Brands" 
                className="w-64 h-64 object-contain mb-8"
              />
              <h2 className="text-5xl font-black mb-6 uppercase">MY NY Brands</h2>
              <p className="text-xl leading-relaxed mb-4">
                Fashion label capturing NYC style and energy. Bold, diverse fashion for the cosmopolitan individual.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                MY NY Brands represents the intersection of urban culture, contemporary style, and multicultural influence. 
                Each piece tells a story of New York's vibrant energy and global appeal.
              </p>
            </div>

            {/* Right: Business Photo */}
            <div className="bg-gray-100 aspect-square flex items-center justify-center">
              <p className="text-gray-400 text-center px-4">
                Business Photo<br/>
                <span className="text-sm">Add: my-ny-business.jpg to /public folder</span>
              </p>
              {/* <img src="/my-ny-business.jpg" alt="MY NY Brands Business" className="w-full h-full object-cover" /> */}
            </div>
          </div>
        </div>
      </section>

      {/* Healthy Press */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 border-b-2 border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Business Photo */}
            <div className="bg-gray-200 aspect-square flex items-center justify-center order-2 lg:order-1">
              <p className="text-gray-500 text-center px-4">
                Business Photo<br/>
                <span className="text-sm">Add: healthy-press-business.jpg to /public folder</span>
              </p>
              {/* <img src="/healthy-press-business.jpg" alt="Healthy Press Business" className="w-full h-full object-cover" /> */}
            </div>

            {/* Right: Logo & Info */}
            <div className="order-1 lg:order-2">
              <div className="text-sm font-mono uppercase tracking-widest mb-4">Brand 02</div>
              <img 
                src="/healthy-press-logo.png" 
                alt="Healthy Press" 
                className="w-64 h-64 object-contain mb-8"
              />
              <h2 className="text-5xl font-black mb-6 uppercase">Healthy Press</h2>
              <p className="text-xl leading-relaxed mb-4">
                Wellness and nutrition brand focused on healthy living through quality products and education.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Healthy Press is dedicated to making wellness accessible and enjoyable. We believe that healthy living 
                should be simple, sustainable, and delicious.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Back Home Brands */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-b-2 border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Logo & Info */}
            <div>
              <div className="text-sm font-mono uppercase tracking-widest mb-4">Brand 03</div>
              <img 
                src="/back-home-logo.png" 
                alt="Back Home Seamoss" 
                className="w-64 h-64 object-contain mb-8"
              />
              <h2 className="text-5xl font-black mb-6 uppercase">Back Home Seamoss</h2>
              <p className="text-xl leading-relaxed mb-4">
                Premium seamoss products bringing the natural wellness of the Caribbean to health-conscious consumers.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Back Home brings authentic Caribbean wellness to your doorstep. Our premium seamoss is sourced with care, 
                honoring traditional methods while meeting modern health standards.
              </p>
            </div>

            {/* Right: Business Photo */}
            <div className="bg-gray-100 aspect-square flex items-center justify-center">
              <p className="text-gray-400 text-center px-4">
                Business Photo<br/>
                <span className="text-sm">Add: back-home-business.jpg to /public folder</span>
              </p>
              {/* <img src="/back-home-business.jpg" alt="Back Home Business" className="w-full h-full object-cover" /> */}
            </div>
          </div>
        </div>
      </section>

      {/* Black Orchyd */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Website Screenshot */}
            <div className="bg-gray-800 aspect-video flex items-center justify-center order-2 lg:order-1">
              <p className="text-gray-400 text-center px-4">
                Website Screenshot<br/>
                <span className="text-sm">Add: black-orchyd-website.jpg to /public folder</span>
              </p>
              {/* <img src="/black-orchyd-website.jpg" alt="Black Orchyd Website" className="w-full h-full object-cover" /> */}
            </div>

            {/* Right: Logo & Info */}
            <div className="order-1 lg:order-2">
              <div className="text-sm font-mono uppercase tracking-widest mb-4 text-gray-400">Brand 04</div>
              <img 
                src="/black-orchyd-logo.png" 
                alt="Black Orchyd" 
                className="w-64 h-64 object-contain mb-8 brightness-200"
              />
              <h2 className="text-5xl font-black mb-6 uppercase">Black Orchyd</h2>
              <p className="text-xl leading-relaxed mb-4">
                Unique black hot sauce inspired by Belizean flavors. A tribute to heritage with an innovative twist.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Black Orchyd isn't just hot sauce—it's a story. Born from Belizean traditions and New York innovation, 
                this bold black sauce challenges everything you know about heat and flavor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Wear */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 border-b-2 border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Logo & Info */}
            <div>
              <div className="text-sm font-mono uppercase tracking-widest mb-4">Brand 05</div>
              <img 
                src="/AI%20Wear.png" 
                alt="AI Wear" 
                className="w-64 h-64 object-contain mb-8"
              />
              <h2 className="text-5xl font-black mb-6 uppercase">AI Wear</h2>
              <p className="text-xl leading-relaxed mb-4">
                Tech-inspired fashion merging wearable technology with contemporary style for the digital age.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                AI Wear represents the future of fashion—where technology meets style. Designed for the innovators, 
                creators, and digital pioneers shaping tomorrow.
              </p>
            </div>

            {/* Right: Website Screenshot */}
            <div className="bg-gray-200 aspect-video flex items-center justify-center">
              <p className="text-gray-500 text-center px-4">
                Website Screenshot<br/>
                <span className="text-sm">Add: ai-wear-website.jpg to /public folder</span>
              </p>
              {/* <img src="/ai-wear-website.jpg" alt="AI Wear Website" className="w-full h-full object-cover" /> */}
            </div>
          </div>
        </div>
      </section>

      {/* Agnes */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-b-2 border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Website Screenshot */}
            <div className="bg-gray-100 aspect-video flex items-center justify-center order-2 lg:order-1">
              <p className="text-gray-400 text-center px-4">
                Website Screenshot<br/>
                <span className="text-sm">Add: agnes-website.jpg to /public folder</span>
              </p>
              {/* <img src="/agnes-website.jpg" alt="Agnes Website" className="w-full h-full object-cover" /> */}
            </div>

            {/* Right: Logo & Info */}
            <div className="order-1 lg:order-2">
              <div className="text-sm font-mono uppercase tracking-widest mb-4">Brand 06</div>
              <img 
                src="/Agnes%20logo.png" 
                alt="Agnes" 
                className="w-64 h-64 object-contain mb-8"
              />
              <h2 className="text-5xl font-black mb-6 uppercase">Agnes</h2>
              <p className="text-xl leading-relaxed mb-4">
                Innovative brand delivering unique products and experiences to discerning customers.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Agnes is about refinement and distinction. Every product is carefully curated to deliver 
                exceptional value and memorable experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Auro */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Logo & Info */}
            <div>
              <div className="text-sm font-mono uppercase tracking-widest mb-4">Brand 07</div>
              <img 
                src="/auro-logo.png" 
                alt="Auro" 
                className="w-64 h-64 object-contain mb-8"
              />
              <h2 className="text-5xl font-black mb-6 uppercase">Auro</h2>
              <p className="text-xl leading-relaxed mb-4">
                Forward-thinking venture focused on innovation and creating solutions for tomorrow's challenges.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Auro embodies the spirit of progress. We're building the future one innovation at a time, 
                tackling challenges with bold ideas and breakthrough solutions.
              </p>
            </div>

            {/* Right: Website Screenshot */}
            <div className="bg-gray-200 aspect-video flex items-center justify-center">
              <p className="text-gray-500 text-center px-4">
                Website Screenshot<br/>
                <span className="text-sm">Add: auro-website.jpg to /public folder</span>
              </p>
              {/* <img src="/auro-website.jpg" alt="Auro Website" className="w-full h-full object-cover" /> */}
            </div>
          </div>
        </div>
      </section>

      {/* AI Consulting Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-sm font-mono uppercase tracking-widest mb-6 text-gray-400">Latest Innovation</div>
          <h2 className="text-5xl md:text-6xl font-black mb-8 uppercase">AI Consulting</h2>
          
          <div className="space-y-6 text-xl leading-relaxed mb-12">
            <p>
              Building on years of entrepreneurial experience, I'm now venturing into the frontier of artificial 
              intelligence and technology consulting.
            </p>
            <p>
              I partner with businesses looking to scale and transform their operations through AI implementation. 
              Whether it's automating workflows, enhancing customer experiences, or unlocking data-driven insights, 
              I help companies leverage AI technology to achieve competitive advantage and sustainable growth.
            </p>
          </div>

          <div className="border-l-4 border-white pl-8">
            <h3 className="text-3xl font-black mb-6 uppercase">Services</h3>
            <div className="grid md:grid-cols-2 gap-4 text-lg">
              <div>AI Strategy Development</div>
              <div>Business Process Automation</div>
              <div>Machine Learning Solutions</div>
              <div>AI-Powered Analytics</div>
              <div>Custom AI Tools</div>
              <div>Training & Implementation</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

