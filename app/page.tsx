import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section - UNIQUE Layout */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Large Typography Background Element */}
        <div className="absolute top-20 left-0 text-[20vw] font-black text-gray-100 select-none pointer-events-none whitespace-nowrap">
          AI BUILDER
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-none">
              Robert<br/>
              <span className="text-gray-400">Petillo</span>
            </h1>
            
            <div className="flex items-start gap-4 mb-8">
              <div className="w-1 h-24 bg-black"></div>
              <div>
                <p className="text-2xl font-light leading-tight mb-3">
                  Building <span className="font-bold underline decoration-4 decoration-black">7 brands</span> across food, fashion, wellness & AI
                </p>
                <p className="text-gray-600">
                  Entrepreneur • AI Developer
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Link 
                href="/portfolio" 
                className="group relative px-8 py-4 bg-black text-white font-bold overflow-hidden"
              >
                <span className="relative z-10">See My Brands</span>
                <div className="absolute inset-0 bg-gray-800 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </Link>
              <Link 
                href="/contact" 
                className="px-8 py-4 border-2 border-black font-bold hover:bg-black hover:text-white transition-colors"
              >
                Work With Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Strip */}
      <section className="border-y-4 border-black py-8 bg-black text-white overflow-hidden">
        <div className="whitespace-nowrap animate-scroll-brand">
          <span className="inline-block text-2xl font-black mx-8">BLACK ORCHYD</span>
          <span className="inline-block text-2xl font-black mx-8">★</span>
          <span className="inline-block text-2xl font-black mx-8">MY NY BRANDS</span>
          <span className="inline-block text-2xl font-black mx-8">★</span>
          <span className="inline-block text-2xl font-black mx-8">BACK HOME</span>
          <span className="inline-block text-2xl font-black mx-8">★</span>
          <span className="inline-block text-2xl font-black mx-8">HEALTHY PRESS</span>
          <span className="inline-block text-2xl font-black mx-8">★</span>
          <span className="inline-block text-2xl font-black mx-8">AI WEAR</span>
          <span className="inline-block text-2xl font-black mx-8">★</span>
          <span className="inline-block text-2xl font-black mx-8">AGNES</span>
          <span className="inline-block text-2xl font-black mx-8">★</span>
          <span className="inline-block text-2xl font-black mx-8">AURO</span>
          <span className="inline-block text-2xl font-black mx-8">★</span>
          <span className="inline-block text-2xl font-black mx-8">BLACK ORCHYD</span>
          <span className="inline-block text-2xl font-black mx-8">★</span>
          <span className="inline-block text-2xl font-black mx-8">MY NY BRANDS</span>
        </div>
      </section>

      {/* What I Do - Asymmetric Layout */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Left: Large Number */}
            <div className="lg:col-span-3">
              <div className="sticky top-32">
                <div className="text-[15vw] lg:text-[12rem] font-black leading-none text-gray-100">
                  03
                </div>
                <p className="text-sm font-mono uppercase tracking-wider mt-4">Focus Areas</p>
              </div>
            </div>

            {/* Right: Content */}
            <div className="lg:col-span-9 space-y-16">
              <div className="border-l-4 border-black pl-8">
                <h3 className="text-4xl font-black mb-4">BRAND EMPIRE</h3>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Seven unique brands across food & beverage, fashion, wellness, and tech. 
                  From Black Orchyd's innovative black hot sauce to MY NY's urban fashion—
                  each brand tells a story and serves a purpose.
                </p>
              </div>

              <div className="border-l-4 border-black pl-8">
                <h3 className="text-4xl font-black mb-4">AI BUILDER</h3>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Mastering RAG systems, APIs, and full-stack AI development. 
                  Helping businesses scale through intelligent automation and machine learning solutions. 
                  From HVAC engineer to tech builder—bridging practical skills with cutting-edge innovation.
                </p>
              </div>

              <div className="border-l-4 border-black pl-8">
                <h3 className="text-4xl font-black mb-4">GROWTH PARTNER</h3>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Transforming ideas into thriving businesses. Strategic planning, product innovation, 
                  and customer-focused solutions that drive real results. 
                  Your venture is your vision—I'm here to help make it reality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Bold & Simple */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="text-[20vw] font-black whitespace-nowrap transform -rotate-12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            LET'S TALK
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            Ready to Build<br/>Something Great?
          </h2>
          <p className="text-2xl mb-12 text-gray-300 font-light">
            AI consulting • Brand collaboration • Business growth
          </p>
          <Link 
            href="/contact" 
            className="inline-block px-12 py-5 bg-white text-black text-xl font-black hover:bg-gray-200 transition-colors"
          >
            GET IN TOUCH →
          </Link>
        </div>
      </section>
    </div>
  );
}

