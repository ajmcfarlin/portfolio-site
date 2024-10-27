const About = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <h2 className="text-4xl font-bold text-white mb-8">
          Hi, I'm <span className="text-indigo-500">Alec</span>
        </h2>

        {/* Main Content */}
        <div className="space-y-8">
          <p className="text-gray-400 text-lg leading-relaxed">
            A passionate full-stack developer with 5 years of experience building web applications.
            I specialize in creating user-friendly interfaces and scalable backend solutions.
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors duration-300">
              <div className="text-4xl font-bold text-indigo-500 mb-2">5+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
            <div className="p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors duration-300">
              <div className="text-4xl font-bold text-indigo-500 mb-2">50+</div>
              <div className="text-sm text-gray-400">Projects Completed</div>
            </div>
          </div>

          {/* Personal Interests */}
          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-white mb-6">
              When I'm not coding...
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
              Let's Work Together →
            </a>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/5 rounded-full blur-3xl -z-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl -z-10" />
      </div>
    </section>
  )
}

export default About