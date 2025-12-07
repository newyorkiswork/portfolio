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
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-black">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <div className="text-sm font-mono uppercase tracking-widest mb-4">Brand 01</div>
            <div className="flex items-start gap-8 flex-wrap">
              <img 
                src="/my-ny-brands-logo.png" 
                alt="MY NY Brands" 
                className="w-48 h-48 object-contain"
              />
              <div className="flex-1 min-w-[300px]">
                <h2 className="text-5xl md:text-6xl font-black mb-6 uppercase">MY NY Brands</h2>
                <div className="w-16 h-1 bg-black mb-6"></div>
              </div>
            </div>
          </div>

          {/* Story Section */}
          <div className="mb-16">
            <div className="grid lg:grid-cols-12 gap-8">
              <div className="lg:col-span-4">
                <div className="sticky top-32">
                  <div className="text-[8rem] font-black leading-none text-gray-100">01</div>
                  <p className="text-sm font-mono uppercase tracking-wider mt-4">Our Story</p>
                </div>
              </div>
              <div className="lg:col-span-8">
                <div className="border-l-4 border-black pl-8 space-y-6">
                  <p className="text-2xl md:text-3xl font-light leading-relaxed text-black">
                    Sharing <span className="font-bold">New York to the world</span>, with people that have little knowledge to no idea what NY means and have to offer.
                  </p>
                  <p className="text-xl leading-relaxed text-black">
                    We provide insight on what is NY people—the people that inhabit this universe—and what to look forward to when coming to NY.
                  </p>
                  <p className="text-xl leading-relaxed text-black">
                    MY NY is a personal statement that speaks from the heart. We put MYNY in front of anything because it represents our connection to this city, its people, and its endless possibilities.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-16 bg-black text-white py-16 px-8">
            <div className="grid lg:grid-cols-12 gap-8">
              <div className="lg:col-span-4">
                <div className="text-[8rem] font-black leading-none text-gray-800">02</div>
                <p className="text-sm font-mono uppercase tracking-wider mt-4 text-gray-400">Our Values</p>
              </div>
              <div className="lg:col-span-8">
                <div className="space-y-8">
                  {/* Supporting Local */}
                  <div className="border-l-4 border-white pl-6">
                    <h3 className="text-3xl font-black mb-3 uppercase">Supporting Local</h3>
                    <p className="text-lg leading-relaxed text-gray-300">
                      To always support all local and all of New York—start-ups, small businesses, artists, farmers markets, and other local businesses that make New York great.
                    </p>
                  </div>

                  {/* Entrepreneurship */}
                  <div className="border-l-4 border-white pl-6">
                    <h3 className="text-3xl font-black mb-3 uppercase">Entrepreneurship</h3>
                    <p className="text-lg leading-relaxed text-gray-300">
                      We believe it's not only a gift to create jobs but also to provide for others' needs with services.
                    </p>
                  </div>

                  {/* Vision */}
                  <div className="border-l-4 border-white pl-6">
                    <h3 className="text-3xl font-black mb-3 uppercase">Vision</h3>
                    <p className="text-lg leading-relaxed text-gray-300">
                      Production of sustainable and creative MYNY goods. Making MY New York creative, through collaboration with education, sports, tourism, local New York teams and foundations. New York is a melting pot of culture; we all have a story to tell and memories to share. MY New York branding opportunities will take MYNY to new levels.
                    </p>
                  </div>

                  {/* Innovation */}
                  <div className="border-l-4 border-white pl-6">
                    <h3 className="text-3xl font-black mb-3 uppercase">Innovation</h3>
                    <p className="text-lg leading-relaxed text-gray-300">
                      The world has become a fast-paced system and everyone is waiting and seeking what is next. MYNY wants to partner with creative minds in different industries to bring access to every community to develop opportunities for communities in and surrounding the New York area (i.e., the world).
                    </p>
                  </div>

                  {/* Philanthropy */}
                  <div className="border-l-4 border-white pl-6">
                    <h3 className="text-3xl font-black mb-3 uppercase">Philanthropy</h3>
                    <p className="text-lg leading-relaxed text-gray-300">
                      We at MYNY believe in giving back (MYNY received tremendous help from many people), and we plan to assist through foundations and causes that help underprivileged communities advance.
                    </p>
                  </div>

                  {/* Diversity */}
                  <div className="border-l-4 border-white pl-6">
                    <h3 className="text-3xl font-black mb-3 uppercase">Diversity</h3>
                    <p className="text-lg leading-relaxed text-gray-300">
                      MYNY thrives as the many faces of New York. New York is very diverse. Supporting each community that makes up NEW YORK makes it imperative that no story gets left out.
                    </p>
                  </div>

                  {/* Sustainable */}
                  <div className="border-l-4 border-white pl-6">
                    <h3 className="text-3xl font-black mb-3 uppercase">Sustainable</h3>
                    <p className="text-lg leading-relaxed text-gray-300">
                      We believe in being environmentally friendly through means of production and recycling material. And invest time in seeking desirable ways the city of New York can serve as an example to other cities by collaborative efforts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Symbolism Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-sm font-mono uppercase tracking-widest mb-4">Symbolism</div>
              <div className="space-y-6">
                <div className="border-l-4 border-black pl-6">
                  <h3 className="text-3xl font-black mb-4 uppercase">The Red Stroke</h3>
                  <p className="text-xl leading-relaxed text-black">
                    The red stroke symbolizes the <span className="font-bold">Big Red Apple</span>, also known as the <span className="font-bold">heart of NEW YORK</span>.
                  </p>
                </div>
                <div className="border-l-4 border-black pl-6">
                  <h3 className="text-3xl font-black mb-4 uppercase">The Home Plate</h3>
                  <p className="text-xl leading-relaxed text-black">
                    When the MYNY home plate is used, it symbolizes <span className="font-bold">New York as home</span>—everything is home base.
                  </p>
                </div>
              </div>
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

