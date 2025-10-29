import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="section-container pt-32 pb-20">
        <div className="max-w-4xl">
          <h1 className="heading-xl mb-6">
            Welcome, I'm Robert Petillo
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            New York City-based entrepreneur and creator building innovative businesses and solutions.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/portfolio" className="btn-primary">
              View My Work
            </Link>
            <Link href="/contact" className="btn-secondary">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="section-container bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">What I Do</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Owner and contributor to 7 diverse brands spanning food & beverage, fashion, wellness, and cutting-edge AI technology.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-3">Brand Portfolio</h3>
            <p className="text-gray-600">
              From Black Orchyd Hot Sauce to MY NY fashion, Back Home Seamoss to AI Wear—building 7 unique brands 
              across multiple industries.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-3">AI & Technology</h3>
            <p className="text-gray-600">
              Partnering with businesses to scale operations using AI technology, automation, and machine learning solutions. 
              Building the future with cutting-edge tech.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-3">Innovation & Growth</h3>
            <p className="text-gray-600">
              Transforming ideas into thriving businesses through strategic planning, product innovation, and 
              customer-focused solutions.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container text-center">
        <h2 className="heading-lg mb-6">Ready to Work Together?</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Let's discuss how we can collaborate on your next project.
        </p>
        <Link href="/contact" className="btn-primary">
          Contact Me
        </Link>
      </section>
    </div>
  );
}

