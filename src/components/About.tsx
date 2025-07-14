'use client'

const About = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <h2 className="text-4xl font-bold text-white mb-8">
          Hi, I&apos;m <span className="text-indigo-500">Alec</span>
        </h2>

        {/* Main Content */}
        <div className="space-y-8">
          <p className="text-gray-400 text-lg leading-relaxed">
            I'm a passionate full-stack developer who loves bringing ideas to life through code. 
            I thrive on solving complex problems and creating seamless user experiences that make a difference.
          </p>
          
          <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
            My journey in tech started with curiosity and has evolved into a deep passion for crafting 
            digital solutions. I believe in writing clean, maintainable code and staying current with 
            emerging technologies. Whether it's building responsive frontends or architecting robust 
            backends, I approach each challenge with enthusiasm and attention to detail.
          </p>

          {/* Personal Interests */}
          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-white mb-6">
              When I&apos;m not coding...
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['Travel ✈️', 'Reading 📚', 'Music 🎵', 'Coffee ☕'].map((hobby) => (
                <span 
                  key={hobby} 
                  className="px-4 py-2 bg-gray-800 rounded-full text-gray-300
                           hover:bg-gray-700 transition-colors duration-300"
                >
                  {hobby}
                </span>
              ))}
            </div>
          </div>

          {/* Optional: Call to Action */}
          <div className="mt-12">
            <a 
              href="#contact" 
              className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700
                       text-white font-medium rounded-lg transition-colors duration-300"
            >
              Let&apos;s Work Together →
            </a>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/5 rounded-full blur-3xl -z-10 max-w-[90vw] max-h-[90vh]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl -z-10 max-w-[80vw] max-h-[80vh]" />
      </div>
    </section>
  )
}

export default About
